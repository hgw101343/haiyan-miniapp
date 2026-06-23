import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import { categoryApi, dishApi, type Category, type Dish } from '../../api'
import { useCartStore } from '../../store/cart'
import './index.scss'

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [activeCat, setActiveCat] = useState<number>(0)
  const [dishes, setDishes] = useState<Dish[]>([])
  const { addItem, removeItem, items, totalCount, totalAmount } = useCartStore()

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCat) loadDishes(activeCat)
  }, [activeCat])

  const loadCategories = async () => {
    const cats = await categoryApi.list()
    setCategories(cats)
    if (cats.length > 0) setActiveCat(cats[0].id)
  }

  const loadDishes = async (catId: number) => {
    const res = await dishApi.list({ categoryId: catId, limit: 50 })
    setDishes(res)
  }

  const getItemCount = (dishId: number) => {
    return items.find(i => i.dish.id === dishId)?.quantity || 0
  }

  return (
    <View className='category-page'>
      {/* 左侧分类栏 */}
      <ScrollView scrollY className='left-nav'>
        {categories.map(cat => (
          <View
            key={cat.id}
            className={`nav-item ${activeCat === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCat(cat.id)}
          >
            <Text className='nav-icon'>{cat.icon}</Text>
            <Text className='nav-name'>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 右侧菜品列表 */}
      <ScrollView scrollY className='right-dishes'>
        {dishes.map(dish => (
          <View key={dish.id} className='dish-row'>
            <Image
              src={dish.image || 'https://via.placeholder.com/100?text=菜'}
              mode='aspectFill'
              className='dish-img'
            />
            <View className='dish-meta'>
              <Text className='dish-name'>{dish.name}</Text>
              {dish.isFeatured && <Text className='tag-hot'>热门</Text>}
              <Text className='dish-desc'>{dish.description}</Text>
              <View className='dish-footer'>
                <Text className='dish-price'>¥{Number(dish.price).toFixed(2)}</Text>
                <View className='stepper'>
                  {getItemCount(dish.id) > 0 && (
                    <>
                      <View className='btn minus' onClick={() => removeItem(dish.id)}>-</View>
                      <Text className='num'>{getItemCount(dish.id)}</Text>
                    </>
                  )}
                  <View className='btn plus' onClick={() => addItem(dish)}>+</View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* 底部购物车栏 */}
      {totalCount() > 0 && (
        <View className='cart-bar' onClick={() => Taro.switchTab({ url: '/pages/cart/index' })}>
          <View className='cart-info'>
            <Text className='cart-icon'>🛒</Text>
            <View className='badge'>{totalCount()}</View>
          </View>
          <Text className='cart-go'>去结算</Text>
          <Text className='cart-price'>¥{totalAmount().toFixed(2)}</Text>
        </View>
      )}
    </View>
  )
}
