import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { orderApi, type Order } from '../../api'
import { useUserStore } from '../../store/user'
import { useTheme } from '../../hooks/useTheme'
import './index.scss'

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  PENDING:   { label: '待支付', color: '#ff9500' },
  PAID:      { label: '已支付', color: '#1890ff' },
  PREPARING: { label: '备餐中', color: '#722ed1' },
  READY:     { label: '待取餐', color: '#52c41a' },
  COMPLETED: { label: '已完成', color: '#999' },
  CANCELLED: { label: '已取消', color: '#d9d9d9' }
}

const STATUS_TABS = [
  { key: '', label: '全部' },
  { key: 'PENDING', label: '待支付' },
  { key: 'PAID', label: '已支付' },
  { key: 'PREPARING', label: '备餐中' },
  { key: 'COMPLETED', label: '已完成' }
]

export default function OrderListPage() {
  const { themeStyle } = useTheme()
  const [orders, setOrders] = useState<Order[]>([])
  const [activeTab, setActiveTab] = useState('')
  const [loading, setLoading] = useState(false)
  const { isLoggedIn, login } = useUserStore()

  useEffect(() => {
    if (!isLoggedIn) {
      Taro.showModal({
        title: '提示',
        content: '请先登录查看订单',
        success: async (res) => { if (res.confirm) await login() }
      })
      return
    }
    loadOrders()
  }, [activeTab, isLoggedIn])

  const loadOrders = async () => {
    setLoading(true)
    try {
      const res = await orderApi.list({ status: activeTab || undefined })
      setOrders(res)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='order-page' style={themeStyle}>
      {/* 状态 Tab */}
      <ScrollView scrollX className='status-tabs'>
        {STATUS_TABS.map(tab => (
          <View
            key={tab.key}
            className={`tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </View>
        ))}
      </ScrollView>

      <ScrollView scrollY className='order-list'>
        {loading ? (
          <View className='loading'>加载中...</View>
        ) : orders.length === 0 ? (
          <View className='empty'>
            <Text className='empty-icon'>📋</Text>
            <Text>暂无订单</Text>
          </View>
        ) : (
          orders.map(order => {
            const statusInfo = STATUS_MAP[order.status]
            return (
              <View
                key={order.id}
                className='order-card'
                onClick={() => Taro.navigateTo({ url: `/pages/order/detail?id=${order.id}` })}
              >
                <View className='order-header'>
                  <Text className='order-no'>订单 #{order.orderNo}</Text>
                  <Text className='order-status' style={{ color: statusInfo.color }}>
                    {statusInfo.label}
                  </Text>
                </View>
                <View className='order-items'>
                  {order.items.slice(0, 3).map(item => (
                    <Text key={item.id} className='item-name'>
                      {item.dish.name} x{item.quantity}
                    </Text>
                  ))}
                  {order.items.length > 3 && (
                    <Text className='item-more'>...等{order.items.length}样</Text>
                  )}
                </View>
                <View className='order-footer'>
                  <Text className='order-time'>{new Date(order.createdAt).toLocaleString()}</Text>
                  <Text className='order-total'>¥{Number(order.totalAmount).toFixed(2)}</Text>
                </View>
              </View>
            )
          })
        )}
      </ScrollView>
    </View>
  )
}
