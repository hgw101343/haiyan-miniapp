import { create } from 'zustand'
import Taro from '@tarojs/taro'
import type { User } from '../api'
import { authApi } from '../api'

interface UserState {
  user: User | null
  token: string
  isLoggedIn: boolean
  login: () => Promise<void>
  logout: () => void
  fetchMe: () => Promise<void>
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  token: Taro.getStorageSync('token') || '',
  isLoggedIn: !!Taro.getStorageSync('token'),

  login: async () => {
    try {
      const { code } = await Taro.login()
      const res = await authApi.login(code)
      Taro.setStorageSync('token', res.token)
      set({ token: res.token, user: res.user, isLoggedIn: true })
    } catch (err) {
      console.error('登录失败:', err)
      throw err
    }
  },

  logout: () => {
    Taro.removeStorageSync('token')
    set({ token: '', user: null, isLoggedIn: false })
  },

  fetchMe: async () => {
    try {
      const user = await authApi.getMe()
      set({ user })
    } catch {
      set({ token: '', user: null, isLoggedIn: false })
      Taro.removeStorageSync('token')
    }
  }
}))
