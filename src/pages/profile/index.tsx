import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { useUserStore } from '../../store/user'
import { useTheme } from '../../hooks/useTheme'
import './index.scss'

/**
 * 个人中心页面
 *
 * 登录方式：用户名 + 密码登录
 *   - 未登录时显示登录/注册表单
 *   - 已注册用户直接输入用户名密码登录
 *   - 新用户可切换到注册模式创建账号
 *   - 登录成功后保存 token，后续请求自动携带
 */
export default function ProfilePage() {
  const { themeStyle } = useTheme()
  const { user, isLoggedIn, passwordLogin, passwordRegister, logout, fetchMe } = useUserStore()

  /** 表单模式：login 登录 | register 注册 */
  const [mode, setMode] = useState<'login' | 'register'>('login')
  /** 用户名输入值 */
  const [username, setUsername] = useState('')
  /** 密码输入值 */
  const [password, setPassword] = useState('')
  /** 表单提交中，防止重复提交 */
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchMe()
    }
  }, [isLoggedIn])

  /**
   * 切换登录/注册模式
   * 切换时清空表单输入
   */
  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
    setUsername('')
    setPassword('')
  }

  /**
   * 提交表单（登录或注册）
   */
  const handleSubmit = async () => {
    // 去掉首尾空格
    const name = username.trim()
    const pwd = password.trim()

    if (!name) {
      Taro.showToast({ title: '请输入用户名', icon: 'none' })
      return
    }
    if (!pwd) {
      Taro.showToast({ title: '请输入密码', icon: 'none' })
      return
    }
    if (name.length < 2) {
      Taro.showToast({ title: '用户名至少2个字符', icon: 'none' })
      return
    }
    if (pwd.length < 6) {
      Taro.showToast({ title: '密码至少6位', icon: 'none' })
      return
    }

    setSubmitting(true)
    try {
      if (mode === 'login') {
        await passwordLogin(name, pwd)
      } else {
        await passwordRegister(name, pwd)
      }
      Taro.showToast({ title: mode === 'login' ? '登录成功' : '注册成功', icon: 'success' })
      setUsername('')
      setPassword('')
    } catch (err: any) {
      // 提取有意义的错误信息，优先级：err.message > err > 默认兜底文案
      const msg = err?.message || String(err || '操作失败')
      // 避免与 API 层对话框重叠（延迟 300ms 确保 API 层 toast 先弹出）
      setTimeout(() => {
        Taro.showToast({
          title: msg.length > 20 ? msg.slice(0, 18) + '...' : msg,
          icon: 'none',
          duration: 2500,
        })
      }, 300)
      console.error('[表单提交] 失败:', msg)
    } finally {
      setSubmitting(false)
    }
  }

  /**
   * 退出登录
   */
  const handleLogout = () => {
    Taro.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          logout()
          Taro.showToast({ title: '已退出', icon: 'none' })
        }
      }
    })
  }

  const menuItems = [
    { icon: '\uD83D\uDCCB', label: '我的订单', path: '/pages/order/index' },
    { icon: '\u2764\uFE0F', label: '我的收藏', path: '/pages/favorites/index' },
    { icon: '\uD83D\uDCAC', label: '意见反馈', path: '/pages/feedback/index' },
    { icon: '\uD83D\uDCDE', label: '联系客服', path: '' },
    { icon: '\u2139\uFE0F', label: '关于我们', path: '' }
  ]

  /**
   * 菜单点击处理
   * - TabBar 页面（首页/菜单/购物车/订单/我的）→ switchTab
   * - 普通页面（反馈/收藏/订单详情）→ navigateTo
   * - 占位项（联系客服/关于我们）→ toast 提示开发中
   */
  const handleMenuClick = (item: typeof menuItems[number]) => {
    if (!item.path) {
      // 占位项：提示开发中
      Taro.showToast({ title: '该功能正在开发，敬请期待', icon: 'none', duration: 2000 })
      return
    }
    // TabBar 页面列表（与 app.config.ts 中 tabBar.list 对齐）
    const tabBarPages = [
      '/pages/index/index',
      '/pages/category/index',
      '/pages/cart/index',
      '/pages/order/index',
      '/pages/profile/index',
    ]
    if (tabBarPages.includes(item.path)) {
      Taro.switchTab({ url: item.path })
    } else {
      Taro.navigateTo({ url: item.path })
    }
  }

  return (
    <View className='profile-page' style={themeStyle}>
      {/* 头部用户信息区域 */}
      <View className='user-header'>
        {isLoggedIn && user ? (
          // 已登录：展示用户信息
          <>
            <Image
              src={user.avatar || ''}
              mode='aspectFill'
              className='avatar'
            />
            <View className='user-info'>
              <Text className='nickname'>{user.realName || user.nickname}</Text>
              {user.phone && <Text className='phone'>{user.phone}</Text>}
              {user.role === 'ADMIN' && <Text className='role-badge'>管理员</Text>}
            </View>
          </>
        ) : (
          // 未登录：显示品牌 Logo + 登录/注册表单
          <View className='login-area'>
            <Image
              src={require('../../assets/logo.jpg')}
              mode='aspectFill'
              className='login-logo'
            />

            <View className='login-form-wrap'>
              {/* 模式标签 */}
              <Text className='login-title'>
                {mode === 'login' ? '账号登录' : '注册账号'}
              </Text>

              {/* 用户名输入 */}
              <View className='form-item'>
                <Input
                  className='form-input'
                  type='text'
                  placeholder='请输入用户名'
                  placeholderClass='input-placeholder'
                  value={username}
                  onInput={(e) => setUsername(e.detail.value)}
                  maxlength={20}
                  confirmType='next'
                />
              </View>

              {/* 密码输入 */}
              <View className='form-item'>
                <Input
                  className='form-input'
                  type='password'
                  placeholder='请输入密码（至少6位）'
                  placeholderClass='input-placeholder'
                  value={password}
                  onInput={(e) => setPassword(e.detail.value)}
                  maxlength={30}
                  confirmType='done'
                  onConfirm={handleSubmit}
                />
              </View>

              {/* 提交按钮 */}
              <View
                className={`submit-btn ${submitting ? 'disabled' : ''}`}
                onClick={submitting ? undefined : handleSubmit}
              >
                {submitting
                  ? (mode === 'login' ? '登录中...' : '注册中...')
                  : (mode === 'login' ? '登 录' : '注 册')
                }
              </View>

              {/* 切换登录/注册 */}
              <View className='toggle-mode' onClick={toggleMode}>
                <Text className='toggle-text'>
                  {mode === 'login' ? '没有账号？去注册' : '已有账号？去登录'}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      {/* 功能菜单列表 */}
      <View className='menu-list'>
        {menuItems.map((item, idx) => (
          <View
            key={idx}
            className='menu-item'
            onClick={() => handleMenuClick(item)}
          >
            <Text className='menu-icon'>{item.icon}</Text>
            <Text className='menu-label'>{item.label}</Text>
            <Text className='menu-arrow'>\u203A</Text>
          </View>
        ))}
      </View>

      {/* 退出登录 */}
      {isLoggedIn && (
        <View className='logout-btn' onClick={handleLogout}>
          退出登录
        </View>
      )}
    </View>
  )
}
