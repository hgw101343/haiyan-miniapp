import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

/**
 * 开屏广告页面（Splash Screen）
 *
 * 功能说明：
 * 1. 小程序启动时第一个展示的页面，作为品牌展示和加载过渡
 * 2. 展示品牌 Logo、品牌名称、Slogan 和食欲感十足的视觉设计
 * 3. 带有入场动画效果（Logo 弹跳、文字渐显、食物装饰飘动）
 * 4. 2.5 秒后自动跳转到首页（用户可点击"立即体验"按钮提前跳过）
 *
 * 设计理念：
 * - 暖色调背景（渐变橙色 → 红色），激发食欲
 * - 食物 emoji 装饰元素随机飘落，增加活泼感和食欲吸引力
 * - 太阳厨师 Logo 居中大图展示，配合弹跳动画
 * - 底部品牌信息简洁有力
 */
export default function SplashPage() {
  /** 动画是否已就绪（用于触发 CSS transition） */
  const [ready, setReady] = useState(false)
  /** 飘落的食物 emoji 列表 */
  const [foodItems] = useState(() => {
    // 预设食物 emoji 池，每次随机取 12 个
    const pool = ['🍜', '🍲', '🍛', '🍱', '🥘', '🍝', '🦐', '🥩', '🥗', '🌶️', '🧄', '🫚', '🍗', '🦀', '🐟', '🥟', '🍤', '🫕', '🥮']
    const items = []
    for (let i = 0; i < 12; i++) {
      items.push({
        emoji: pool[Math.floor(Math.random() * pool.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 3,
        size: 16 + Math.random() * 20,
      })
    }
    return items
  })

  useEffect(() => {
    // 延迟一帧触发动画，确保 DOM 已渲染
    requestAnimationFrame(() => setReady(true))

    // 2.5 秒后自动跳转到 Tab 首页
    const timer = setTimeout(() => {
      Taro.switchTab({ url: '/pages/index/index' })
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  /**
   * 用户点击"立即体验"，提前关闭开屏页并进入首页
   */
  const handleEnter = () => {
    Taro.switchTab({ url: '/pages/index/index' })
  }

  return (
    <View className="splash-page">
      {/* ========== 飘落食物装饰层 ========== */}
      {/* 随机位置、大小、延迟的 food emoji，从上往下飘落 */}
      {foodItems.map((item, idx) => (
        <Text
          key={idx}
          className={`food-float ${ready ? 'active' : ''}`}
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}rpx`,
            opacity: 0.15 + Math.random() * 0.25,
          }}
        >
          {item.emoji}
        </Text>
      ))}

      {/* ========== 主内容区 ========== */}
      <View className={`splash-content ${ready ? 'ready' : ''}`}>
        {/* Logo 容器：带弹跳缩放动画 + 光晕效果 */}
        <View className="logo-container">
          {/* 外圈光晕装饰 */}
          <View className="logo-glow" />
          {/* 品牌 Logo 图片 */}
          <Image
            className="logo-img"
            src={require('../../assets/logo.jpg')}
            mode="aspectFit"
          />
        </View>

        {/* 品牌名称 */}
        <Text className="brand-name">海艳私厨</Text>

        {/* Slogan —— 用食欲感文案吸引人 */}
        <View className="slogan-row">
          <Text className="slogan-text">每日新鲜</Text>
          <Text className="slogan-dot">·</Text>
          <Text className="slogan-text">现做现卖</Text>
          <Text className="slogan-dot">·</Text>
          <Text className="slogan-text">家的味道</Text>
        </View>

        {/* 副标题 —— 强调品质 */}
        <Text className="sub-slogan">甄选食材 · 匠心烹饪 · 温暖每一餐</Text>

        {/* 装饰分隔线 */}
        <View className="divider">
          <View className="divider-line" />
          <Text className="divider-icon">🍽️</Text>
          <View className="divider-line" />
        </View>

        {/* 特色标签 */}
        <View className="feature-tags">
          <View className="tag">
            <Text className="tag-emoji">🌿</Text>
            <Text className="tag-text">新鲜直达</Text>
          </View>
          <View className="tag">
            <Text className="tag-emoji">🔥</Text>
            <Text className="tag-text">现点现做</Text>
          </View>
          <View className="tag">
            <Text className="tag-emoji">💯</Text>
            <Text className="tag-text">品质保证</Text>
          </View>
        </View>
      </View>

      {/* ========== 底部操作区 ========== */}
      <View className={`splash-footer ${ready ? 'ready' : ''}`}>
        {/* "立即体验" 按钮 */}
        <View className="enter-btn" onClick={handleEnter}>
          <Text className="enter-text">立即体验</Text>
        </View>
        {/* 品牌版权信息 */}
        <Text className="copyright">© 海艳私厨 Food Order System</Text>
      </View>
    </View>
  )
}
