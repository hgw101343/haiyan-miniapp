// API 基础地址，开发时改为本地地址
const BASE_URL = 'http://localhost:3000/api'

// 获取 token
function getToken(): string {
  return Taro.getStorageSync('token') || ''
}

// 封装请求
interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: Record<string, unknown>
  needAuth?: boolean
}

import Taro from '@tarojs/taro'

export async function request<T = unknown>(options: RequestOptions): Promise<T> {
  const { url, method = 'GET', data, needAuth = true } = options

  const header: Record<string, string> = {
    'Content-Type': 'application/json'
  }

  if (needAuth) {
    const token = getToken()
    if (token) {
      header['Authorization'] = `Bearer ${token}`
    }
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const result = res.data as { success: boolean; data: T; message?: string }
          if (result.success) {
            resolve(result.data)
          } else {
            Taro.showToast({ title: result.message || '请求失败', icon: 'none' })
            reject(new Error(result.message))
          }
        } else if (res.statusCode === 401) {
          Taro.removeStorageSync('token')
          Taro.navigateTo({ url: '/pages/profile/index' })
          reject(new Error('未登录'))
        } else {
          reject(new Error(`请求失败: ${res.statusCode}`))
        }
      },
      fail: (err) => {
        Taro.showToast({ title: '网络错误', icon: 'none' })
        reject(err)
      }
    })
  })
}

// ======== API 方法 ========

export const authApi = {
  login: (code: string) => request<{ token: string; user: User }>({
    url: '/auth/login', method: 'POST', data: { code }, needAuth: false
  }),
  getMe: () => request<User>({ url: '/auth/me' }),
  updateProfile: (data: Partial<User>) => request<User>({ url: '/auth/profile', method: 'PUT', data })
}

export const categoryApi = {
  list: () => request<Category[]>({ url: '/categories', needAuth: false })
}

export const dishApi = {
  list: (params?: DishQueryParams) => {
    const qs = params ? new URLSearchParams(
      Object.entries(params).filter(([,v]) => v !== undefined).map(([k,v]) => [k, String(v)])
    ).toString() : ''
    return request<{ data: Dish[]; pagination: Pagination }>({
      url: '/dishes' + (qs ? '?' + qs : ''),
      needAuth: false
    })
  },
  detail: (id: number) => request<Dish>({ url: `/dishes/${id}`, needAuth: false })
}

export const orderApi = {
  create: (data: CreateOrderData) => request<Order>({ url: '/orders', method: 'POST', data }),
  list: (params?: { status?: string; page?: number }) => {
    const qs = params ? new URLSearchParams(
      Object.entries(params).filter(([,v]) => v !== undefined).map(([k,v]) => [k, String(v)])
    ).toString() : ''
    return request<{ data: Order[]; pagination: Pagination }>({
      url: '/orders' + (qs ? '?' + qs : '')
    })
  },
  detail: (id: number) => request<Order>({ url: `/orders/${id}` }),
  cancel: (id: number) => request({ url: `/orders/${id}/cancel`, method: 'PUT' })
}

export const paymentApi = {
  prepay: (orderId: number) => request<WxPayParams>({ url: '/payment/prepay', method: 'POST', data: { orderId } }),
  queryStatus: (orderNo: string) => request<{ status: string; paidAt: string }>({
    url: `/payment/status/${orderNo}`
  })
}

// ======== 类型定义 ========
export interface User {
  id: number
  openid?: string
  nickname: string
  avatar?: string
  phone?: string
  role: 'USER' | 'ADMIN'
}

export interface Category {
  id: number
  name: string
  icon?: string
  sort: number
  isRecommended: boolean
  _count?: { dishes: number }
}

export interface Dish {
  id: number
  name: string
  description?: string
  price: number
  image?: string
  categoryId: number
  category?: Category
  stock: number
  sales: number
  isFeatured: boolean
  isRecommended: boolean
}

export interface OrderItem {
  id: number
  dishId: number
  dish: { name: string; image?: string; price?: number }
  quantity: number
  price: number
  remark?: string
}

export interface Order {
  id: number
  orderNo: string
  totalAmount: number
  status: 'PENDING' | 'PAID' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED'
  remark?: string
  tableNo?: string
  createdAt: string
  paidAt?: string
  items: OrderItem[]
}

export interface CreateOrderData {
  items: { dishId: number; quantity: number; remark?: string }[]
  remark?: string
  tableNo?: string
}

export interface WxPayParams {
  appId: string
  timeStamp: string
  nonceStr: string
  package: string
  signType: string
  paySign: string
}

export interface DishQueryParams {
  categoryId?: number
  keyword?: string
  page?: number
  limit?: number
  featured?: boolean
  recommended?: boolean
}

export interface Pagination {
  total: number
  page: number
  limit: number
}
