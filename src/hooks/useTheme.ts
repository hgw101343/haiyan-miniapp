import { useState, useCallback } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'

/**
 * 主题配置接口 —— 与后端返回的主题数据结构一致
 *
 * 配置项分为以下几类：
 * - 主色系：primaryColor（主色）、primaryLight（浅色变体）、primaryDark（深色变体）
 * - 背景/卡片：backgroundColor（页面背景色）、cardColor（卡片/容器背景色）
 * - 文字色：textColor（主文字色）、textSecondary（次要文字色）
 * - 导航栏：navBarBgColor（导航栏背景色）、navBarTextStyle（导航栏文字色 white/black）
 * - TabBar：tabBarSelectedColor（选中 Tab 色）、tabBarColor（未选中 Tab 色）、tabBarBgColor（TabBar 背景色）
 * - 边框：borderColor（分割线/边框色）
 * - 语义色：successColor（成功/已完成）、warningColor（警告）、errorColor（错误/已取消）
 */
export interface ThemeConfig {
  /** 主题主色，应用到按钮、选中态、价格等关键交互元素 */
  primaryColor: string
  /** 主色浅色变体，用于 hover 态或浅色背景 */
  primaryLight: string
  /** 主色深色变体，用于按下/激活态 */
  primaryDark: string
  /** 页面背景色 */
  backgroundColor: string
  /** 卡片和容器背景色 */
  cardColor: string
  /** 主文字颜色 */
  textColor: string
  /** 次要文字颜色（说明、提示文字） */
  textSecondary: string
  /** 导航栏背景色 */
  navBarBgColor: string
  /** 导航栏文字样式：'white' 白底深字 | 'black' 黑底白字 */
  navBarTextStyle: 'white' | 'black'
  /** TabBar 选中项文字/图标颜色 */
  tabBarSelectedColor: string
  /** TabBar 未选中项文字/图标颜色 */
  tabBarColor: string
  /** TabBar 背景色 */
  tabBarBgColor: string
  /** 边框和分割线颜色 */
  borderColor: string
  /** 成功状态色（订单完成等） */
  successColor: string
  /** 警告状态色（支付待处理等） */
  warningColor: string
  /** 错误状态色（订单取消、删除等） */
  errorColor: string
}

/** 默认主题配置 — 橘色暖色系，后端无返回或网络异常时使用 */
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

/**
 * 从本地缓存读取主题配置
 *
 * 读取模式：
 * 1. 尝试从 Storage 读取 'app_theme' key
 * 2. 如果存在且包含有效的 primaryColor 字段（简单数据校验），返回缓存的主题
 * 3. 读取失败或数据无效时，返回 DEFAULT_THEME 作为兜底
 *
 * 此函数被 App 层的 fetchAndApplyTheme 写入缓存后，
 * 各页面的 useTheme Hook 调用以获取当前生效的主题。
 */
export function getThemeFromStorage(): ThemeConfig {
  try {
    const cached = Taro.getStorageSync('app_theme')
    // 简单校验：存在且包含 primaryColor 字段
    if (cached && (cached as ThemeConfig).primaryColor) {
      return cached as ThemeConfig
    }
  } catch {}
  return DEFAULT_THEME
}

/**
 * 将主题应用到小程序原生导航栏
 *
 * 调用 Taro.setNavigationBarColor API：
 * - frontColor: 导航栏文字颜色（#ffffff 白 / #000000 黑）
 * - backgroundColor: 导航栏背景色
 *
 * 使用 .catch(() => {}) 静默处理失败（某些页面可能未启用自定义导航栏，
 * 此时 API 会失败但不影响功能）
 */
export function applyNavBarTheme(t: ThemeConfig) {
  Taro.setNavigationBarColor({
    frontColor: t.navBarTextStyle === 'white' ? '#ffffff' : '#000000',
    backgroundColor: t.navBarBgColor,
  }).catch(() => {})
}

/**
 * 将主题应用到小程序 TabBar
 *
 * 智能调用策略：
 * 1. 先获取当前页面栈，判断当前是否在 TabBar 页面上
 * 2. 非 TabBar 页（如 splash、order/detail）直接跳过，不调用 setTabBarStyle
 * 3. TabBar 页：调用 setTabBarStyle 设置颜色
 * 4. 失败时延迟 500ms 重试一次（TabBar 组件可能尚未渲染完毕）
 *
 * borderStyle 逻辑：
 * - 深色背景（如 #1a1a2e 或 #000000）使用 'black' 边框，与深色背景融为一体
 * - 亮色背景使用 'white' 边框
 */
export function applyTabBarTheme(t: ThemeConfig) {
  // 获取当前页面栈，判断是否在 TabBar 页面
  const pages = Taro.getCurrentPages()
  const currentPage = pages.length > 0 ? pages[pages.length - 1] : null

  // 如果没有页面栈（极端情况），延迟重试一次
  if (!currentPage) {
    setTimeout(() => applyTabBarTheme(t), 500)
    return
  }

  // 检查当前页面路由是否在 app.config.ts 的 tabBar.list 中
  // 非 TabBar 页面（如 splash、order/detail）没有 TabBar，直接跳过
  const route = currentPage.route || ''
  const tabBarPages = ['pages/index/index', 'pages/category/index', 'pages/cart/index', 'pages/order/index', 'pages/profile/index']
  if (!tabBarPages.includes(route)) {
    // 非 TabBar 页，静默跳过
    return
  }

  const doApply = () => {
    Taro.setTabBarStyle({
      color: t.tabBarColor,
      selectedColor: t.tabBarSelectedColor,
      backgroundColor: t.tabBarBgColor,
      // 深色背景配 black 边框，否则用 white，避免出现不协调的边框线
      borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white',
    }).catch((err) => {
      // 只对 TabBar 页面重试，非 TabBar 的错误已在上方过滤
      const errMsg = String(err?.errMsg || err?.message || '')
      // "not TabBar page" 错误说明路由判断与实际 TabBar 注册不同步，不再重试
      if (errMsg.includes('not TabBar page')) return

      // 其余错误（如 TabBar 未就绪）延迟 500ms 重试一次
      setTimeout(() => {
        Taro.setTabBarStyle({
          color: t.tabBarColor,
          selectedColor: t.tabBarSelectedColor,
          backgroundColor: t.tabBarBgColor,
          borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white',
        }).catch(() => {})
      }, 500)
    })
  }
  doApply()
}

/**
 * 将 ThemeConfig 对象转为 CSS 变量字符串
 *
 * 映射模式：
 * ThemeConfig 的每个字段映射为 --xxx CSS 自定义属性，如：
 * primaryColor → --primary-color
 * navBarBgColor → --nav-bg
 *
 * 返回值为 CSS 内联样式字符串 "key:value;key:value;..."，
 * 可直接注入 View 组件的 style 属性，子组件通过 var(--primary-color) 引用。
 */
export function themeToStyleString(t: ThemeConfig): string {
  const vars: Record<string, string> = {
    /** 主色系 */
    '--primary-color': t.primaryColor,
    '--primary-light': t.primaryLight,
    '--primary-dark': t.primaryDark,
    /** 背景和卡片 */
    '--bg-color': t.backgroundColor,
    '--card-color': t.cardColor,
    /** 文字色 */
    '--text-color': t.textColor,
    '--text-secondary': t.textSecondary,
    /** 边框 */
    '--border-color': t.borderColor,
    /** 导航栏 */
    '--nav-bg': t.navBarBgColor,
    '--nav-text': t.navBarTextStyle === 'white' ? '#ffffff' : '#333333',
    /** TabBar */
    '--tab-selected': t.tabBarSelectedColor,
    '--tab-color': t.tabBarColor,
    '--tab-bg': t.tabBarBgColor,
    /** 语义色 */
    '--success-color': t.successColor,
    '--warning-color': t.warningColor,
    '--error-color': t.errorColor,
  }
  // 将 { key: value } 拼接为 "key:value;key:value;..." 的字符串
  return Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')
}

/**
 * 主题 Hook — 每个页面调用，返回可注入根 View 的 style 字符串。
 *
 * 使用场景：
 * - 页面根 View：<View style={themeStyle}> — 从此元素开始的所有子节点可通过 var(--primary-color) 使用主题色
 * - refresh() 方法：用于管理后台修改主题后手动触发刷新
 *
 * 在 useDidShow 中自动刷新主题的原因：
 * 用户可能从管理后台或其他 Tab 切回当前页面，此时主题可能已变更。
 * useDidShow 在页面显示时触发，重新读取缓存并应用导航栏/TabBar 主题，
 * 确保页面始终展示最新的主题配色。
 */
export function useTheme() {
  // 初始化：从缓存读取主题并转为 CSS 字符串
  const [styleString, setStyleString] = useState(() => {
    return themeToStyleString(getThemeFromStorage())
  })

  /** 手动刷新主题（管理后台修改主题后调用） */
  const refresh = useCallback(() => {
    setStyleString(themeToStyleString(getThemeFromStorage()))
  }, [])

  // 每次页面显示时刷新主题（从管理后台切回来会生效）
  useDidShow(() => {
    const t = getThemeFromStorage()
    setStyleString(themeToStyleString(t))
    // 同时重新应用原生导航栏和 TabBar 颜色
    applyNavBarTheme(t)
    applyTabBarTheme(t)
  })

  return { themeStyle: styleString, refresh }
}
