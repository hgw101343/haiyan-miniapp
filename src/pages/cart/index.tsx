import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, ScrollView, Textarea } from '@tarojs/components'
import { useCartStore } from '../../store/cart'
import { useUserStore } from '../../store/user'
import { orderApi, paymentApi } from '../../api'
import { useTheme } from '../../hooks/useTheme'
import './index.scss'

export default function CartPage() {
  const { themeStyle } = useTheme()
  const { items, addItem, removeItem, clearCart, totalCount, totalAmount } = useCartStore()
  const { isLoggedIn, login } = useUserStore()
  const [remark, setRemark] = useState('')
  const [tableNo, setTableNo] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmitOrder = async () => {
    if (!isLoggedIn) {
      Taro.showModal({
        title: '提示',
        content: '请先登录',
        success: async (res) => {
          if (res.confirm) await login()
        }
      })
      return
    }

    if (items.length === 0) {
      Taro.showToast({ title: '购物车为空', icon: 'none' })
      return
    }

    try {
      setSubmitting(true)
      Taro.showLoading({ title: '提交订单中...' })

      // 创建订单
      const order = await orderApi.create({
        items: items.map(i => ({ dishId: i.dish.id, quantity: i.quantity, remark: i.remark })),
        remark,
        tableNo
      })

      Taro.hideLoading()
      Taro.showLoading({ title: '发起支付...' })

      // 获取支付参数
      const payParams = await paymentApi.prepay(order.id)

      // 调起微信支付
      await Taro.requestPayment({
        timeStamp: payParams.timeStamp,
        nonceStr: payParams.nonceStr,
        package: payParams.package,
        signType: payParams.signType as 'MD5',
        paySign: payParams.paySign
      })

      // 支付成功
      clearCart()
      Taro.hideLoading()
      Taro.showToast({ title: '支付成功！', icon: 'success' })

      setTimeout(() => {
        Taro.navigateTo({ url: `/pages/order/detail?id=${order.id}` })
      }, 1500)

    } catch (err: unknown) {
      Taro.hideLoading()
      const errMsg = (err as { errMsg?: string })?.errMsg || ''
      if (errMsg.includes('cancel')) {
        Taro.showToast({ title: '已取消支付', icon: 'none' })
      } else {
        Taro.showToast({ title: '支付失败，请重试', icon: 'none' })
      }
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <View className='empty-cart' style={themeStyle}>
        <Text className='empty-icon'>🛒</Text>
        <Text className='empty-text'>购物车空空如也</Text>
        <View className='go-shop' onClick={() => Taro.switchTab({ url: '/pages/category/index' })}>
          去点菜
        </View>
      </View>
    )
  }

  return (
    <View className='cart-page' style={themeStyle}>
      <ScrollView scrollY className='cart-list'>
        {items.map(item => (
          <View key={item.dish.id} className='cart-item'>
            <Image
              src={item.dish.image || ''}
              mode='aspectFill'
              className='item-img'
              onClick={() => {
                if (item.dish.image) {
                  Taro.previewImage({ urls: [item.dish.image], current: item.dish.image })
                }
              }}
            />
            <View className='item-info'>
              <Text className='item-name'>{item.dish.name}</Text>
              <Text className='item-price'>¥{Number(item.dish.price).toFixed(2)}</Text>
            </View>
            <View className='stepper'>
              <View className='btn minus' onClick={() => removeItem(item.dish.id)}>-</View>
              <Text className='num'>{item.quantity}</Text>
              <View className='btn plus' onClick={() => addItem(item.dish)}>+</View>
            </View>
          </View>
        ))}

        <View className='remark-section'>
          <Text className='section-title'>备注</Text>
          <Textarea
            className='remark-input'
            placeholder='如有特殊要求请备注...'
            value={remark}
            onInput={e => setRemark(e.detail.value)}
            maxlength={200}
          />
        </View>

        <View className='table-section'>
          <Text className='section-title'>桌号</Text>
          <View className='table-input-row'>
            {['1号桌', '2号桌', '3号桌', '4号桌', '打包带走'].map(t => (
              <View
                key={t}
                className={`table-chip ${tableNo === t ? 'active' : ''}`}
                onClick={() => setTableNo(t)}
              >
                {t}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 底部结算栏 */}
      <View className='checkout-bar'>
        <View className='total-area'>
          <Text className='total-label'>合计</Text>
          <Text className='total-price'>¥{totalAmount().toFixed(2)}</Text>
        </View>
        <View
          className={`checkout-btn ${submitting ? 'disabled' : ''}`}
          onClick={submitting ? undefined : handleSubmitOrder}
        >
          {submitting ? '处理中...' : `结算 (${totalCount()}件)`}
        </View>
      </View>
    </View>
  )
}
