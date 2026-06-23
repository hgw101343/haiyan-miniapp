import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import {
  DEFAULT_THEME,
  type ThemeConfig,
  applyNavBarTheme,
  applyTabBarTheme,
} from './hooks/useTheme'
import './app.scss'

async function fetchAndApplyTheme() {
  let theme: ThemeConfig = DEFAULT_THEME

  // 1. 从后端拉取主题
  try {
    const res = await Taro.request({
      url: 'http://localhost:3000/api/theme',
      method: 'GET',
    })
    if (res.statusCode === 200) {
      const data = (res.data as { success: boolean; data: ThemeConfig }).data
      if (data && data.primaryColor) {
        theme = data
      }
    }
  } catch {
    // 网络不可达则使用本地缓存
    try {
      const cached = Taro.getStorageSync('app_theme')
      if (cached) theme = cached as ThemeConfig
    } catch {}
  }

  // 2. 缓存到本地（各页面 useTheme hook 读取）
  Taro.setStorageSync('app_theme', theme)

  // 3. 应用导航栏和 TabBar 颜色
  applyNavBarTheme(theme)
  // TabBar 可能尚未就绪，延迟再执行一次
  applyTabBarTheme(theme)
  setTimeout(() => applyTabBarTheme(theme), 800)
}

function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    fetchAndApplyTheme()
  }, [])

  // App 从后台切回前台时重新应用主题（用户可能在管理后台改了主题）
  Taro.useDidShow(() => {
    const theme = Taro.getStorageSync('app_theme')
    if (theme) {
      applyNavBarTheme(theme)
      applyTabBarTheme(theme)
    }
  })

  return <>{children}</>
}

export default App
