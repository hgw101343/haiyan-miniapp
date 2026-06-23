import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { useUserStore } from '../../store/user'
import './index.scss'

export default function ProfilePage() {
  const { user, isLoggedIn, login, logout, fetchMe } = useUserStore()

  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchMe()
    }
  }, [isLoggedIn])

  const handleLogin = async () => {
    try {
      await login()
      Taro.showToast({ title: '登录成功', icon: 'success' })
    } catch (e) {
      Taro.showToast({ title: '登录失败，请重试', icon: 'none' })
    }
  }

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
    { icon: '📋', label: '我的订单', path: '/pages/order/index' },
    { icon: '⭐', label: '我的收藏', path: '' },
    { icon: '📞', label: '联系客服', path: '' },
    { icon: 'ℹ️', label: '关于我们', path: '' }
  ]

  return (
    <View className='profile-page'>
      {/* 头部用户信息 */}
      <View className='user-header'>
        {isLoggedIn && user ? (
          <>
            <Image
              src={user.avatar || 'https://via.placeholder.com/80?text=头像'}
              mode='aspectFill'
              className='avatar'
            />
            <View className='user-info'>
              <Text className='nickname'>{user.nickname}</Text>
              {user.phone && <Text className='phone'>{user.phone}</Text>}
              {user.role === 'ADMIN' && <Text className='role-badge'>管理员</Text>}
            </View>
          </>
        ) : (
          <View className='login-area'>
            <Text className='login-avatar'>👤</Text>
            <View className='login-info'>
              <Text className='login-hint'>点击登录享受更多服务</Text>
              <Button
                className='login-btn'
                openType='getUserInfo'
                onClick={handleLogin}
              >
                微信一键登录
              </Button>
            </View>
          </View>
        )}
      </View>

      {/* 快捷菜单 */}
      <View className='menu-list'>
        {menuItems.map((item, idx) => (
          <View
            key={idx}
            className='menu-item'
            onClick={() => item.path && Taro.navigateTo({ url: item.path })}
          >
            <Text className='menu-icon'>{item.icon}</Text>
            <Text className='menu-label'>{item.label}</Text>
            <Text className='menu-arrow'>›</Text>
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
