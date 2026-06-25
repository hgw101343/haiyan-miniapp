import { create } from 'zustand'
import Taro from '@tarojs/taro'
import type { User } from '../api'
import { authApi } from '../api'

/** 用户状态管理接口 */
interface UserState {
  /** 当前登录用户信息，未登录时为 null */
  user: User | null
  /** JWT token 字符串 */
  token: string
  /** 是否已登录（token 有效即视为已登录） */
  isLoggedIn: boolean
  /**
   * 传统微信 code 登录（降级方案）
   * 流程：Taro.login() 获取临时 code → authApi.login(code) 发送到后端 →
   * 后端通过 code 换取 openid/session_key → 返回 token 和用户信息 →
   * 保存 token 到本地缓存，更新 store 状态
   */
  login: () => Promise<void>
  /**
   * 手机号一键登录（主流程）
   * 流程：wx.login() 获取 loginCode → button open-type=getPhoneNumber 获取 phoneCode →
   * 一并传给后端 → 后端同时获取 openid 和手机号 → 创建/更新用户 → 返回 token
   * @param phoneCode - getPhoneNumber 回调中的动态令牌
   * @param nickname - 可选，用户昵称
   * @param avatar - 可选，用户头像 URL
   */
  phoneLogin: (phoneCode: string, nickname?: string, avatar?: string) => Promise<void>
  /**
   * 用户名密码登录
   * @param nickname - 用户名
   * @param password - 密码
   */
  passwordLogin: (nickname: string, password: string) => Promise<void>
  /**
   * 用户名密码注册（注册成功自动登录）
   * @param nickname - 用户名
   * @param password - 密码
   */
  passwordRegister: (nickname: string, password: string) => Promise<void>
  /** 退出登录：清除本地 token 缓存，重置 store 中的用户状态 */
  logout: () => void
  /** 从后端获取当前用户最新信息，失败时清除登录态 */
  fetchMe: () => Promise<void>
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  // 初始化时从本地缓存读取 token
  token: Taro.getStorageSync('token') || '',
  // token 存在即视为登录态有效（服务端会通过 401 来验证 token 是否过期）
  isLoggedIn: !!Taro.getStorageSync('token'),

  /**
   * 传统 code 登录（降级用）
   *
   * 流程：
   * 1. 调用 Taro.login() 获取微信临时登录凭证 code（有效期 5 分钟）
   * 2. 将 code 发送到后端 /auth/login 接口
   * 3. 后端通过 code 向微信服务器换取用户的 openid 和 session_key
   * 4. 后端返回 JWT token 和用户信息
   * 5. 将 token 写入本地 Storage，更新 store 状态
   *
   * 注意：此方式仅获取 openid，无法获取手机号、昵称等用户信息。
   * 通常在手机号授权失败时作为降级方案使用。
   */
  login: async () => {
    try {
      // 调用微信登录接口获取临时 code
      const { code } = await Taro.login()
      // 将 code 发送到后端换取 token
      const res = await authApi.login(code)
      // 持久化 token 到本地缓存
      Taro.setStorageSync('token', res.token)
      // 更新 store 状态
      set({ token: res.token, user: res.user, isLoggedIn: true })
    } catch (err) {
      console.error('登录失败:', err)
      throw err
    }
  },

  /**
   * 手机号一键登录（主登录流程）
   *
   * 流程：
   * 1. 调用 Taro.login() 获取 loginCode（微信登录凭证）
   * 2. 将 loginCode + phoneCode（手机授权动态令牌）+ 可选昵称头像 发送到后端
   * 3. 后端通过 loginCode 获取 openid/session_key
   * 4. 后端通过 phoneCode 获取用户手机号
   * 5. 创建或更新用户记录，返回 JWT token
   * 6. 保存 token 并更新 store
   *
   * @param phoneCode - button open-type="getPhoneNumber" 回调 e.detail.code
   * @param nickname - wx.getUserProfile 获取的昵称，可选
   * @param avatar - wx.getUserProfile 获取的头像 URL，可选
   */
  phoneLogin: async (phoneCode, nickname, avatar) => {
    // 先获取微信登录 code
    Taro.showLoading({ title: '登录中...' })
    try {
      // 步骤1：获取微信登录 code（真机上可能失败，需要错误处理）
      let loginCode: string
      try {
        const { code } = await Taro.login()
        loginCode = code
        console.log('[手机登录] 获取 loginCode 成功')
      } catch (loginErr: any) {
        console.error('[手机登录] Taro.login() 失败:', loginErr)
        throw new Error('微信登录初始化失败，请重试')
      }

      // 步骤2：将 loginCode + phoneCode + 用户信息一起发送到后端
      const res = await authApi.phoneLogin({
        loginCode,
        phoneCode,
        nickname,
        avatar,
      })
      // 步骤3：保存 token 并更新 store
      Taro.setStorageSync('token', res.token)
      set({ token: res.token, user: res.user, isLoggedIn: true })
      Taro.hideLoading()
    } catch (err: any) {
      Taro.hideLoading()
      const message = err?.message || err?.data?.message || '手机号登录失败，请重试'
      console.error('[手机登录] 失败:', message)
      throw new Error(message)
    }
  },

  /**
   * 用户名密码登录
   *
   * 流程：
   * 1. 前端传入用户名和密码
   * 2. 发送到后端 /auth/password-login 验证
   * 3. 验证通过 → 保存 token 并更新 store
   *
   * @param nickname - 用户名
   * @param password - 明文密码
   */
  passwordLogin: async (nickname, password) => {
    Taro.showLoading({ title: '登录中...', mask: true })
    try {
      const res = await authApi.passwordLogin({ nickname, password })
      Taro.setStorageSync('token', res.token)
      set({ token: res.token, user: res.user, isLoggedIn: true })
      Taro.hideLoading()
    } catch (err: any) {
      Taro.hideLoading()
      // 包装网络错误，让上层 catch 能拿到有意义的消息
      const message = err?.message || '登录失败，请检查网络连接'
      throw new Error(message)
    }
  },

  /**
   * 用户名密码注册（注册成功自动登录）
   *
   * 流程：
   * 1. 发送用户名和密码到后端 /auth/password-register
   * 2. 后端创建用户并返回 JWT token
   * 3. 保存 token 并更新 store
   *
   * @param nickname - 用户名
   * @param password - 明文密码
   */
  passwordRegister: async (nickname, password) => {
    Taro.showLoading({ title: '注册中...', mask: true })
    try {
      const res = await authApi.passwordRegister({ nickname, password })
      Taro.setStorageSync('token', res.token)
      set({ token: res.token, user: res.user, isLoggedIn: true })
      Taro.hideLoading()
    } catch (err: any) {
      Taro.hideLoading()
      const message = err?.message || '注册失败，请检查网络连接'
      throw new Error(message)
    }
  },

  /**
   * 退出登录
   *
   * 清理动作：
   * 1. 从本地 Storage 移除 token（removeStorageSync）
   * 2. 重置 store 中的 user/token/isLoggedIn 状态
   * 注意：没有调用后端登出接口，仅做前端清理。
   * 后续如果有服务端 session 管理，可在此处增加 API 调用。
   */
  logout: () => {
    // 清除本地 token
    Taro.removeStorageSync('token')
    // 重置 store 状态
    set({ token: '', user: null, isLoggedIn: false })
  },

  /**
   * 刷新当前用户信息
   *
   * 场景：
   * - 页面显示时确认登录态有效（isLoggedIn=true 但 user 为 null）
   * - 个人资料修改后重新获取最新数据
   *
   * 失败处理：如果 getMe 接口请求失败（通常是 token 过期），
   * 清除本地 token 并将登录状态设为 false，用户在下次操作时会引导重新登录。
   */
  fetchMe: async () => {
    try {
      const user = await authApi.getMe()
      set({ user })
    } catch {
      // token 失效或网络错误：清除登录态
      set({ token: '', user: null, isLoggedIn: false })
      Taro.removeStorageSync('token')
    }
  }
}))
