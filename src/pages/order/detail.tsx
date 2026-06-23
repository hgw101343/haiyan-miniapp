import React, { useState, useEffect } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { orderApi, paymentApi, type Order } from '../../api'
import { useTheme } from '../../hooks/useTheme'
import './detail.scss'

const STATUS_STEPS = ['PENDING', 'PAID', 'PREPARING', 'READY', 'COMPLETED']
const STATUS_LABELS: Record<string, string> = {
  PENDING: '待支付', PAID: '已支付', PREPARING: '备餐中', READY: '待取餐', COMPLETED: '已完成', CANCELLED: '已取消'
}

export default function OrderDetailPage() {
  const { themeStyle } = useTheme()
  const { params } = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [paying, setPaying] = useState(false)

  useEffect(() => {
    if (params.id) loadOrder(parseInt(params.id))
  }, [])

  const loadOrder = async (id: number) => {
    const data = await orderApi.detail(id)
    setOrder(data)
  }

  const handlePay = async () => {
    if (!order) return
    setPaying(true)
    try {
      const payParams = await paymentApi.prepay(order.id)
      await Taro.requestPayment({
        timeStamp: payParams.timeStamp,
        nonceStr: payParams.nonceStr,
        package: payParams.package,
        signType: payParams.signType as 'MD5',
        paySign: payParams.paySign
      })
      Taro.showToast({ title: '支付成功', icon: 'success' })
      loadOrder(order.id)
    } catch (e) {
      Taro.showToast({ title: '支付取消', icon: 'none' })
    } finally {
      setPaying(false)
    }
  }

  if (!order) return <View className='loading' style={themeStyle}>加载中...</View>

  const currentStep = STATUS_STEPS.indexOf(order.status)

  return (
    <ScrollView scrollY className='detail-page' style={themeStyle}>
      {/* 状态进度条 */}
      <View className='status-bar'>
        <Text className='status-title'>{STATUS_LABELS[order.status]}</Text>
        {order.status !== 'CANCELLED' && (
          <View className='progress-steps'>
            {STATUS_STEPS.map((step, i) => (
              <React.Fragment key={step}>
                <View className={`step-dot ${i <= currentStep ? 'done' : ''}`}>
                  <Text className='dot-label'>{STATUS_LABELS[step]}</Text>
                </View>
                {i < STATUS_STEPS.length - 1 && (
                  <View className={`step-line ${i < currentStep ? 'done' : ''}`} />
                )}
              </React.Fragment>
            ))}
          </View>
        )}
      </View>

      {/* 订单信息 */}
      <View className='info-card'>
        <View className='info-row'>
          <Text className='info-label'>订单号</Text>
          <Text className='info-value'>{order.orderNo}</Text>
        </View>
        {order.tableNo && (
          <View className='info-row'>
            <Text className='info-label'>桌号</Text>
            <Text className='info-value'>{order.tableNo}</Text>
          </View>
        )}
        <View className='info-row'>
          <Text className='info-label'>下单时间</Text>
          <Text className='info-value'>{new Date(order.createdAt).toLocaleString()}</Text>
        </View>
        {order.remark && (
          <View className='info-row'>
            <Text className='info-label'>备注</Text>
            <Text className='info-value'>{order.remark}</Text>
          </View>
        )}
      </View>

      {/* 菜品明细 */}
      <View className='items-card'>
        <Text className='card-title'>点单明细</Text>
        {order.items.map(item => (
          <View key={item.id} className='order-item'>
            <Image
              src={item.dish.image || 'https://via.placeholder.com/60?text=菜'}
              mode='aspectFill'
              className='item-img'
            />
            <View className='item-info'>
              <Text className='item-name'>{item.dish.name}</Text>
              {item.remark && <Text className='item-remark'>{item.remark}</Text>}
            </View>
            <View className='item-right'>
              <Text className='item-qty'>x{item.quantity}</Text>
              <Text className='item-price'>¥{(Number(item.price) * item.quantity).toFixed(2)}</Text>
            </View>
          </View>
        ))}
        <View className='total-row'>
          <Text className='total-label'>合计</Text>
          <Text className='total-price'>¥{Number(order.totalAmount).toFixed(2)}</Text>
        </View>
      </View>

      {/* 操作按钮 */}
      <View className='action-area'>
        {order.status === 'PENDING' && (
          <View className={`pay-btn ${paying ? 'disabled' : ''}`} onClick={paying ? undefined : handlePay}>
            {paying ? '支付中...' : '立即支付'}
          </View>
        )}
        {order.status === 'PENDING' && (
          <View className='cancel-btn' onClick={async () => {
            const { confirm } = await Taro.showModal({ title: '确认取消', content: '确定取消这个订单吗？' })
            if (confirm) {
              await orderApi.cancel(order.id)
              loadOrder(order.id)
            }
          }}>
            取消订单
          </View>
        )}
      </View>
    </ScrollView>
  )
}
