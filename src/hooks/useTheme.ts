import { useState, useCallback } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'

// 与后端保持一致的主题配置
export interface ThemeConfig {
  primaryColor: string
  primaryLight: string
  primaryDark: string
  backgroundColor: string
  cardColor: string
  textColor: string
  textSecondary: string
  navBarBgColor: string
  navBarTextStyle: 'white' | 'black'
  tabBarSelectedColor: string
  tabBarColor: string
  tabBarBgColor: string
  borderColor: string
  successColor: string
  warningColor: string
  errorColor: string
}

export const DEFAULT_THEME: ThemeConfig = {
  primaryColor: '#ff6b35',
  primaryLight: '#ff9a5c',
  primaryDark: '#e55a2b',
  backgroundColor: '#f5f5f5',
  cardColor: '#ffffff',
  textColor: '#333333',
  textSecondary: '#999999',
  navBarBgColor: '#ff6b35',
  navBarTextStyle: 'white',
  tabBarSelectedColor: '#ff6b35',
  tabBarColor: '#999999',
  tabBarBgColor: '#ffffff',
  borderColor: '#e8e8e8',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#ff4d4f',
}

/** 从本地缓存读取主题 */
export function getThemeFromStorage(): ThemeConfig {
  try {
    const cached = Taro.getStorageSync('app_theme')
    if (cached && (cached as ThemeConfig).primaryColor) {
      return cached as ThemeConfig
    }
  } catch {}
  return DEFAULT_THEME
}

/** 将主题应用到导航栏（setNavigationBarColor） */
export function applyNavBarTheme(t: ThemeConfig) {
  Taro.setNavigationBarColor({
    frontColor: t.navBarTextStyle === 'white' ? '#ffffff' : '#000000',
    backgroundColor: t.navBarBgColor,
  }).catch(() => {})
}

/** 将主题应用到 TabBar（setTabBarStyle），带重试 */
export function applyTabBarTheme(t: ThemeConfig) {
  const doApply = () => {
    Taro.setTabBarStyle({
      color: t.tabBarColor,
      selectedColor: t.tabBarSelectedColor,
      backgroundColor: t.tabBarBgColor,
      borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white',
    }).catch((err) => {
      console.warn('[theme] setTabBarStyle failed, retrying...', err)
      // 延迟 500ms 重试一次（TabBar 可能还未就绪）
      setTimeout(() => {
        Taro.setTabBarStyle({
          color: t.tabBarColor,
          selectedColor: t.tabBarSelectedColor,
          backgroundColor: t.tabBarBgColor,
          borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white',
        }).catch((err2) => console.error('[theme] setTabBarStyle retry failed:', err2))
      }, 500)
    })
  }
  doApply()
}

/** 将 ThemeConfig 转为 CSS 变量字符串 */
export function themeToStyleString(t: ThemeConfig): string {
  const vars: Record<string, string> = {
    '--primary-color': t.primaryColor,
    '--primary-light': t.primaryLight,
    '--primary-dark': t.primaryDark,
    '--bg-color': t.backgroundColor,
    '--card-color': t.cardColor,
    '--text-color': t.textColor,
    '--text-secondary': t.textSecondary,
    '--border-color': t.borderColor,
    '--nav-bg': t.navBarBgColor,
    '--nav-text': t.navBarTextStyle === 'white' ? '#ffffff' : '#333333',
    '--tab-selected': t.tabBarSelectedColor,
    '--tab-color': t.tabBarColor,
    '--tab-bg': t.tabBarBgColor,
    '--success-color': t.successColor,
    '--warning-color': t.warningColor,
    '--error-color': t.errorColor,
  }
  return Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')
}

/**
 * 主题 Hook — 每个页面调用，返回可注入根 View 的 style 字符串。
 * 在 useDidShow 中自动刷新，确保从其他 Tab 切换回来时主题是最新的。
 */
export function useTheme() {
  const [styleString, setStyleString] = useState(() => {
    return themeToStyleString(getThemeFromStorage())
  })

  const refresh = useCallback(() => {
    setStyleString(themeToStyleString(getThemeFromStorage()))
  }, [])

  // 每次页面显示时刷新主题（从管理后台切回来会生效）
  useDidShow(() => {
    const t = getThemeFromStorage()
    setStyleString(themeToStyleString(t))
    applyNavBarTheme(t)
    applyTabBarTheme(t)
  })

  return { themeStyle: styleString, refresh }
}
