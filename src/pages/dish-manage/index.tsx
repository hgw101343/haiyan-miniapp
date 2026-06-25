/**
 * 菜品管理列表页（管理员）
 *
 * 功能：
 * 1. 菜品列表展示（卡片形式）
 * 2. 搜索（名称关键词）
 * 3. 分类筛选
 * 4. 新增菜品（跳转到编辑页）
 * 5. 编辑菜品（跳转到编辑页）
 * 6. 删除菜品（软删除）
 * 7. 上下架切换
 */
import React, { useState, useEffect, useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { dishApi, categoryApi, deleteDish, toggleDishAvailable, type Dish, type Category } from '../../api'
import { useUserStore } from '../../store/user'
import { useTheme } from '../../hooks/useTheme'
import DishImage from '../../components/DishImage'
import './index.scss'

export default function DishManagePage() {
  const { themeStyle } = useTheme()
  const { user, isLoggedIn } = useUserStore()

  const [dishes, setDishes] = useState<Dish[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [catFilter, setCatFilter] = useState<number | undefined>(undefined)

  const isAdmin = user?.role === 'ADMIN'

  /** 加载分类 */
  const loadCategories = useCallback(async () => {
    try {
      const res = await categoryApi.list()
      const list = Array.isArray(res) ? res : (res as any)?.data || []
      setCategories(list)
    } catch (err) {
      console.error('[菜品管理] 加载分类失败:', err)
    }
  }, [])

  /** 加载菜品列表（含全部，不过滤 isActive） */
  const loadDishes = useCallback(async () => {
    setLoading(true)
    try {
      // 管理员查看所有菜品，传 all=true 获取包括下架的菜品
      const params: any = { limit: 200, all: true, sort: 'newest' }
      if (catFilter) params.categoryId = catFilter
      if (keyword) params.keyword = keyword

      const res = await dishApi.list(params)
      const list = Array.isArray(res) ? res : (res as any)?.data || []
      setDishes(list)
    } catch (err) {
      console.error('[菜品管理] 加载菜品失败:', err)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }, [catFilter, keyword])

  useEffect(() => {
    if (isLoggedIn) {
      loadCategories()
    }
  }, [isLoggedIn, loadCategories])

  useEffect(() => {
    if (isLoggedIn) {
      loadDishes()
    }
  }, [isLoggedIn, loadDishes])

  /** 删除菜品 */
  const handleDelete = (dish: Dish) => {
    Taro.showModal({
      title: '确认删除',
      content: `确定要删除「${dish.name}」吗？\n（将执行下架操作，数据不会物理删除）`,
      success: async (res) => {
        if (res.confirm) {
          try {
            await deleteDish(dish.id)
            Taro.showToast({ title: '删除成功', icon: 'success' })
            loadDishes()
          } catch (err: any) {
            Taro.showToast({ title: err?.message || '删除失败', icon: 'none' })
          }
        }
      }
    })
  }

  /** 切换上下架 */
  const handleToggle = async (dish: Dish) => {
    try {
      await toggleDishAvailable(dish.id, !dish.isActive)
      Taro.showToast({
        title: dish.isActive ? '已下架' : '已上架',
        icon: 'success',
      })
      loadDishes()
    } catch (err: any) {
      Taro.showToast({ title: err?.message || '操作失败', icon: 'none' })
    }
  }

  /** 去新增 */
  const goCreate = () => {
    Taro.navigateTo({ url: '/pages/dish-edit/index' })
  }

  /** 去编辑 */
  const goEdit = (dish: Dish) => {
    Taro.navigateTo({ url: `/pages/dish-edit/index?id=${dish.id}` })
  }

  /** 查看详情 */
  const goDetail = (dish: Dish) => {
    Taro.navigateTo({ url: `/pages/dish-edit/index?id=${dish.id}&readonly=1` })
  }

  if (!isLoggedIn) {
    return (
      <View className='dish-manage-page' style={themeStyle}>
        <View className='empty-wrap'>
          <Text className='empty-icon'>🔒</Text>
          <Text className='empty-text'>请先登录</Text>
        </View>
      </View>
    )
  }

  if (!isAdmin) {
    return (
      <View className='dish-manage-page' style={themeStyle}>
        <View className='empty-wrap'>
          <Text className='empty-icon'>🚫</Text>
          <Text className='empty-text'>仅管理员可访问</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='dish-manage-page' style={themeStyle}>
      {/* 顶部操作栏 */}
      <View className='manage-header'>
        <View className='search-wrap'>
          <Input
            className='search-input'
            placeholder='搜索菜品名称...'
            placeholderClass='input-placeholder'
            value={keyword}
            onInput={(e) => setKeyword(e.detail.value)}
            confirmType='search'
            onConfirm={() => loadDishes()}
          />
          <View className='search-btn' onClick={() => loadDishes()}>
            <Text>搜索</Text>
          </View>
        </View>
        <View className='header-actions'>
          <View className='refresh-btn' onClick={() => { setKeyword(''); setCatFilter(undefined); setTimeout(() => loadDishes(), 0) }}>
            <Text>重置</Text>
          </View>
          <View className='add-btn' onClick={goCreate}>
            <Text>+ 新增</Text>
          </View>
        </View>
      </View>

      {/* 分类筛选 */}
      <View className='cat-filter-scroll'>
        <View
          className={`cat-filter-item ${catFilter === undefined ? 'active' : ''}`}
          onClick={() => setCatFilter(undefined)}
        >
          <Text>全部分类</Text>
        </View>
        {categories.map(cat => (
          <View
            key={cat.id}
            className={`cat-filter-item ${catFilter === cat.id ? 'active' : ''}`}
            onClick={() => setCatFilter(cat.id)}
          >
            <Text>{cat.icon || '🍽️'} {cat.name}</Text>
          </View>
        ))}
      </View>

      {/* 菜品列表 */}
      {loading ? (
        <View className='loading-wrap'>
          <Text>加载中...</Text>
        </View>
      ) : dishes.length === 0 ? (
        <View className='empty-wrap'>
          <Text className='empty-icon'>📦</Text>
          <Text className='empty-text'>暂无菜品</Text>
          <Text className='empty-hint'>点击右上角"新增"添加菜品</Text>
        </View>
      ) : (
        <View className='dish-list'>
          {dishes.map(dish => (
            <View key={dish.id} className='dish-card' onClick={() => goDetail(dish)}>
              {/* 菜品图片 */}
              <View className='dish-img-wrap'>
                <DishImage
                  src={dish.image}
                  name={dish.name}
                  width={200}
                  height={150}
                  radius={12}
                />
                {/* 状态标签 */}
                <View className={`status-badge ${dish.isActive ? 'active' : 'inactive'}`}>
                  <Text>{dish.isActive ? '在售' : '下架'}</Text>
                </View>
                {dish.isRecommended && (
                  <View className='recommend-badge'>
                    <Text>推荐</Text>
                  </View>
                )}
              </View>

              {/* 菜品信息 */}
              <View className='dish-info'>
                <Text className='dish-name'>{dish.name}</Text>
                {dish.description && (
                  <Text className='dish-desc'>{dish.description}</Text>
                )}
                <View className='dish-meta'>
                  <Text className='dish-price'>¥{Number(dish.price).toFixed(2)}</Text>
                  <Text className='dish-stock'>库存:{dish.stock || 0}</Text>
                </View>
                {dish.category && (
                  <Text className='dish-cat'>{dish.category.icon || '🍽️'} {dish.category.name}</Text>
                )}
              </View>

              {/* 操作按钮 */}
              <View className='dish-actions' onClick={(e) => e.stopPropagation()}>
                <View
                  className={`action-btn ${dish.isActive ? 'down-btn' : 'up-btn'}`}
                  onClick={() => handleToggle(dish)}
                >
                  <Text>{dish.isActive ? '下架' : '上架'}</Text>
                </View>
                <View className='action-btn edit-btn' onClick={() => goEdit(dish)}>
                  <Text>编辑</Text>
                </View>
                <View className='action-btn del-btn' onClick={() => handleDelete(dish)}>
                  <Text>删除</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
