/**
 * 开盲盒页面
 *
 * 功能说明：
 * 1. 从所有菜品中随机抽取一道，模拟盲盒开奖效果
 * 2. 点击"开始" → 菜品名称快速轮播（加速效果）
 * 3. 点击"停止" → 轮播逐渐减速，最终停留在一道随机菜品
 * 4. 揭晓结果：展示菜品详情，支持加入收藏和购物车
 *
 * 动画策略：
 * - 使用 setInterval 控制轮播速度，开始阶段快速（50ms/次），
 *   停止阶段逐步降速（50→100→200→400→800ms），模拟物理减速
 * - 结果揭晓时带放大+渐显过渡效果
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { dishApi, categoryApi, favoriteApi, type Dish, type Category } from '../../api'
import { useCartStore } from '../../store/cart'
import { useUserStore } from '../../store/user'
import { useTheme } from '../../hooks/useTheme'
import DishImage from '../../components/DishImage'
import './index.scss'

/** 轮播状态 */
type SpinState = 'idle' | 'spinning' | 'stopping' | 'revealed'

export default function BlindboxPage() {
  const { themeStyle } = useTheme()
  const { isLoggedIn } = useUserStore()
  const { addItem, items } = useCartStore()

  /** 所有可用菜品列表（全部） */
  const [allDishes, setAllDishes] = useState<Dish[]>([])
  /** 分类列表 */
  const [categories, setCategories] = useState<Category[]>([])
  /** 选中的分类 ID（'all' 表示全部） */
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | 'all'>('all')
  /** 加载中 */
  const [loading, setLoading] = useState(true)
  /** 当前轮播展示的菜品 */
  const [currentDish, setCurrentDish] = useState<Dish | null>(null)
  /** 最终揭晓的菜品 */
  const [resultDish, setResultDish] = useState<Dish | null>(null)
  /** 轮播状态 */
  const [spinState, setSpinState] = useState<SpinState>('idle')
  /** 是否已收藏 */
  const [isFavorited, setIsFavorited] = useState(false)
  /** 是否正在操作收藏 */
  const [favoriting, setFavoriting] = useState(false)

  // 使用 ref 存储定时器和状态，避免闭包陷阱
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const spinStateRef = useRef<SpinState>('idle')

  /** 加载所有菜品和分类 */
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [dishRes, catRes] = await Promise.all([
          dishApi.list({ limit: 200, sort: 'newest' }),
          categoryApi.list(),
        ])
        const dishes = (Array.isArray(dishRes) ? dishRes : (dishRes as any)?.data) || []
        const active = dishes.filter((d) => d && Number(d.stock) > 0)
        setAllDishes(active)
        const cats = Array.isArray(catRes) ? catRes : (catRes as any)?.data || []
        setCategories(cats)
        if (active.length === 0) {
          Taro.showToast({ title: '暂无可用菜品', icon: 'none' })
        }
      } catch (err) {
        console.error('[盲盒] 加载数据失败:', err)
        Taro.showToast({ title: '加载失败', icon: 'none' })
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  /** 当前分类下的可用菜品（按 selectedCategoryId 过滤） */
  const filteredDishes = useMemo(() => {
    if (selectedCategoryId === 'all') return allDishes
    return allDishes.filter((d) => d.categoryId === selectedCategoryId)
  }, [allDishes, selectedCategoryId])

  /** 随机获取一个菜品（不重复上一个） */
  const randomDish = useCallback(
    (prev: Dish | null): Dish => {
      if (filteredDishes.length <= 1) return filteredDishes[0]
      let d: Dish
      do {
        d = filteredDishes[Math.floor(Math.random() * filteredDishes.length)]
      } while (d.id === prev?.id && filteredDishes.length > 1)
      return d
    },
    [filteredDishes],
  )

  /** 同步 ref 状态 */
  useEffect(() => {
    spinStateRef.current = spinState
  }, [spinState])

  /**
   * 轮播动画核心
   * 递归设置定时器，每次更新当前展示的菜品
   * @param speed - 当前轮播速度（ms），speed 越大越慢
   */
  const spinAnimation = useCallback(
    (speed: number) => {
      if (spinStateRef.current !== 'spinning' && spinStateRef.current !== 'stopping') {
        return
      }
      setCurrentDish((prev) => randomDish(prev))
      timerRef.current = setTimeout(() => spinAnimation(speed), speed)
    },
    [randomDish],
  )

  /**
   * 减速停止序列
   * 速度阶梯：100ms → 200ms → 400ms → 800ms
   * 每档轮播 2 次后进入下一档，最后一档结束后揭晓结果
   */
  const startDeceleration = useCallback(
    (finalDish: Dish) => {
      const speeds = [100, 100, 200, 200, 400, 400, 800, 800] // 每档2次
      let index = 0

      const tick = () => {
        if (index >= speeds.length) {
          // ✅ 减速完毕，定格展示 finalDish（这就是最终结果）
          setCurrentDish(finalDish)
          // 停留 800ms 让用户看清，再揭晓
          timerRef.current = setTimeout(() => {
            setResultDish(finalDish)
            setSpinState('revealed')
          }, 800)
          return
        }

        // 减速过程中展示诱饵菜品（排除 finalDish，且不重复上一个）
        setCurrentDish((prev) => {
          const candidates = filteredDishes.filter(
            (d) => d.id !== finalDish.id && d.id !== prev?.id,
          )
          if (candidates.length === 0) return prev || filteredDishes[0]
          return candidates[Math.floor(Math.random() * candidates.length)]
        })
        index++
        timerRef.current = setTimeout(tick, speeds[index - 1])
      }

      tick()
    },
    [filteredDishes],
  )

  /** 点击"开始" */
  const handleStart = () => {
    if (!isLoggedIn) {
      Taro.showToast({ title: '请先登录', icon: 'none' })
      return
    }
    if (filteredDishes.length === 0) {
      Taro.showToast({ title: '该分类暂无菜品', icon: 'none' })
      return
    }

    // 重置状态
    setResultDish(null)
    setIsFavorited(false)
    setSpinState('spinning')

    // 立即显示第一个随机菜品
    setCurrentDish(randomDish(null))

    // 启动快速轮播（50ms 间隔）
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => spinAnimation(50), 50)
  }

  /** 点击"停止" */
  const handleStop = () => {
    if (spinState !== 'spinning') return

    // 清除当前轮播定时器
    if (timerRef.current) clearTimeout(timerRef.current)

    setSpinState('stopping')

    // 随机选定最终菜品
    const final = filteredDishes[Math.floor(Math.random() * filteredDishes.length)]

    // 延迟一帧后开始减速动画
    setTimeout(() => startDeceleration(final), 60)
  }

  /**
   * 重新开盒
   * 清空结果，回到初始状态
   */
  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setCurrentDish(null)
    setResultDish(null)
    setIsFavorited(false)
    setSpinState('idle')
  }

  /** 添加/取消收藏 */
  const handleToggleFavorite = async () => {
    if (!resultDish || !isLoggedIn) return
    setFavoriting(true)
    try {
      if (isFavorited) {
        await favoriteApi.remove(resultDish.id)
        setIsFavorited(false)
        Taro.showToast({ title: '已取消收藏', icon: 'none' })
      } else {
        await favoriteApi.add(resultDish.id)
        setIsFavorited(true)
        Taro.showToast({ title: '已加入收藏 ❤️', icon: 'none' })
      }
    } catch {
      Taro.showToast({ title: '操作失败', icon: 'none' })
    } finally {
      setFavoriting(false)
    }
  }

  /** 加入购物车 */
  const handleAddToCart = () => {
    if (!resultDish) return
    addItem(resultDish)
    Taro.showToast({ title: '已加入购物车 🛒', icon: 'none' })
  }

  /** 获取结果菜品在购物车中的数量 */
  const cartCount = resultDish
    ? items.find((i) => i.dish.id === resultDish.id)?.quantity || 0
    : 0

  /** 清理定时器 */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  if (loading) {
    return (
      <View className="blindbox-page" style={themeStyle}>
        <View className="loading-wrap">
          <Text className="loading-icon">🎁</Text>
          <Text>准备盲盒中...</Text>
        </View>
      </View>
    )
  }

  // 登录引导
  if (!isLoggedIn) {
    return (
      <View className="blindbox-page" style={themeStyle}>
        <View className="login-guide">
          <Text className="guide-icon">🔒</Text>
          <Text className="guide-text">请先登录</Text>
          <Text className="guide-hint">登录后即可开启美食盲盒</Text>
          <View
            className="guide-btn"
            onClick={() => Taro.switchTab({ url: '/pages/profile/index' })}
          >
            去登录
          </View>
        </View>
      </View>
    )
  }

  return (
    <View className="blindbox-page" style={themeStyle}>
      {/* 背景装饰 */}
      <View className="bg-decor">
        {['🍜', '🍕', '🍔', '🍱', '🍰', '🍗', '🥗', '🌮'].map((emoji, i) => (
          <Text
            key={i}
            className={`decor-item d${i}`}
            style={{
              left: `${10 + (i % 4) * 24}%`,
              top: i < 4 ? '8%' : '78%',
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {emoji}
          </Text>
        ))}
      </View>

      {/* 主内容区域 */}
      <View className="blindbox-main">
        {/* 未开盒或轮播中：显示盲盒动画区 */}
        {spinState !== 'revealed' && (
          <View className="box-area">
            {/* 盲盒 / 轮播 dish 展示卡 */}
            <View
              className={`dish-card ${spinState === 'spinning' || spinState === 'stopping' ? 'spinning' : ''}`}
            >
              {spinState === 'idle' ? (
                <>
                  <Text className="box-emoji">🎁</Text>
                  <Text className="box-label">神秘盲盒</Text>
                  <Text className="box-hint">
                    {filteredDishes.length > 0
                      ? `共 ${filteredDishes.length} 道美食等你来抽`
                      : '暂无可用菜品'}
                  </Text>
                </>
              ) : (
                <>
                  {/* 轮播中的菜品展示 */}
                  <View className="spin-dish">
                    <DishImage
                      src={currentDish?.image || ''}
                      className="spin-img"
                      preview={false}
                      placeholder="?"
                    />
                    <Text className="spin-name">{currentDish?.name || '???'}</Text>
                  </View>
                  {spinState === 'stopping' && (
                    <Text className="stopping-tip">即将揭晓...</Text>
                  )}
                </>
              )}
            </View>

            {/* 分类选择器（仅 idle 状态显示） */}
            {spinState === 'idle' && categories.length > 0 && (
              <View className="category-selector">
                <ScrollView scrollX className="cat-scroll" showScrollbar={false}>
                  <View className="cat-list">
                    {/* "全部" 选项 */}
                    <View
                      className={`cat-tag ${selectedCategoryId === 'all' ? 'active' : ''}`}
                      onClick={() => setSelectedCategoryId('all')}
                    >
                      <Text className="cat-icon">🍽️</Text>
                      <Text className="cat-name">全部</Text>
                      <Text className="cat-count">{allDishes.length}</Text>
                    </View>
                    {/* 各分类选项 */}
                    {categories.map((cat) => {
                      const count = allDishes.filter((d) => d.categoryId === cat.id).length
                      if (count === 0) return null // 只显示有菜品的分类
                      return (
                        <View
                          key={cat.id}
                          className={`cat-tag ${selectedCategoryId === cat.id ? 'active' : ''}`}
                          onClick={() => setSelectedCategoryId(cat.id)}
                        >
                          <Text className="cat-icon">{cat.icon || '🍴'}</Text>
                          <Text className="cat-name">{cat.name}</Text>
                          <Text className="cat-count">{count}</Text>
                        </View>
                      )
                    })}
                  </View>
                </ScrollView>
              </View>
            )}

            {/* 操作按钮 */}
            <View className="box-actions">
              {spinState === 'idle' ? (
                <View className="start-btn" onClick={handleStart}>
                  <Text className="btn-text">🎲 开始抽盲盒</Text>
                </View>
              ) : spinState === 'spinning' ? (
                <View className="stop-btn" onClick={handleStop}>
                  <Text className="btn-text">✋ 停！就这个</Text>
                </View>
              ) : spinState === 'stopping' ? (
                <View className="stopping-msg">
                  <Text>正在揭晓...</Text>
                </View>
              ) : null}
            </View>
          </View>
        )}

        {/* 揭晓结果 */}
        {spinState === 'revealed' && resultDish && (
          <View className="result-area">
            {/* 揭晓动画容器 */}
            <View className="reveal-card">
              <Text className="reveal-badge">🎉 恭喜获得</Text>

              <DishImage
                src={resultDish.image || ''}
                className="result-img"
                placeholder="?"
              />

              <Text className="result-name">{resultDish.name}</Text>
              {resultDish.description && (
                <Text className="result-desc">{resultDish.description}</Text>
              )}

              <View className="result-meta">
                <Text className="result-price">
                  ¥{Number(resultDish.price).toFixed(2)}
                </Text>
                {resultDish.sales > 0 && (
                  <Text className="result-sales">已售 {resultDish.sales}</Text>
                )}
              </View>

              {/* 操作按钮组 */}
              <View className="result-actions">
                <View
                  className={`fav-btn ${isFavorited ? 'favorited' : ''} ${favoriting ? 'disabled' : ''}`}
                  onClick={favoriting ? undefined : handleToggleFavorite}
                >
                  <Text>{isFavorited ? '❤️ 已收藏' : '🤍 收藏'}</Text>
                </View>
                <View className="cart-btn" onClick={handleAddToCart}>
                  <Text>
                    {cartCount > 0
                      ? `🛒 加入购物车 (${cartCount})`
                      : '🛒 加入购物车'}
                  </Text>
                </View>
              </View>

              {/* 重新开盒 */}
              <View className="again-btn" onClick={handleReset}>
                <Text>🔄 再来一次</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
