import { create } from 'zustand'
import type { Dish } from '../api'

/** 购物车中的单个物品项 */
export interface CartItem {
  /** 菜品完整信息（包含当前价格） */
  dish: Dish
  /** 该菜品的数量 */
  quantity: number
  /** 备注（如"少辣"、"不要香菜"） */
  remark?: string
}

/** 购物车状态管理接口 */
interface CartState {
  /** 当前购物车中的所有商品项 */
  items: CartItem[]
  /**
   * 向购物车添加商品
   *
   * 合并逻辑：
   * - 如果购物车中已存在相同 dishId 的商品，则增加数量（merge-if-exists）
   * - 如果是新商品，则追加到列表末尾
   * 这样避免同一菜品在购物车中出现多条记录。
   *
   * @param dish - 要添加的菜品对象
   * @param quantity - 添加数量，默认 1
   */
  addItem: (dish: Dish, quantity?: number) => void
  /**
   * 从购物车移除商品
   *
   * 移除逻辑（渐进递减）：
   * - 如果当前数量 > 1：仅减少 1 个数量（递减）
   * - 如果当前数量 <= 1：从列表中完全删除该商品项
   * 这种设计让用户可以连续点击减号逐步减少数量。
   *
   * @param dishId - 要移除的菜品 ID
   */
  removeItem: (dishId: number) => void
  /**
   * 直接设置商品数量
   *
   * 自动移除逻辑：
   * - 当 quantity <= 0 时，自动将该商品从购物车中移除
   * - 否则更新为指定数量
   * 通常用于数量输入框直接修改数值的场景。
   *
   * @param dishId - 菜品 ID
   * @param quantity - 目标数量
   */
  updateQuantity: (dishId: number, quantity: number) => void
  /** 清空购物车，通常在提交订单后调用 */
  clearCart: () => void
  /** 计算购物车中所有商品的总数量（各商品数量求和） */
  totalCount: () => number
  /** 计算购物车总金额（各商品 price × quantity 求和） */
  totalAmount: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (dish, quantity = 1) => {
    set((state) => {
      // 查找购物车中是否已存在同 ID 的菜品
      const existing = state.items.find(i => i.dish.id === dish.id)
      if (existing) {
        // 已存在：合并数量（数量累加而非覆盖）
        return {
          items: state.items.map(i =>
            i.dish.id === dish.id ? { ...i, quantity: i.quantity + quantity } : i
          )
        }
      }
      // 不存在：新增条目
      return { items: [...state.items, { dish, quantity }] }
    })
  },

  removeItem: (dishId) => {
    set((state) => {
      const existing = state.items.find(i => i.dish.id === dishId)
      if (existing && existing.quantity > 1) {
        // 数量 > 1：仅减少 1 个
        return {
          items: state.items.map(i =>
            i.dish.id === dishId ? { ...i, quantity: i.quantity - 1 } : i
          )
        }
      }
      // 数量 <= 1：完全移除该商品
      return { items: state.items.filter(i => i.dish.id !== dishId) }
    })
  },

  updateQuantity: (dishId, quantity) => {
    if (quantity <= 0) {
      // 数量 <= 0：视为移除操作，从购物车中删除
      set((state) => ({ items: state.items.filter(i => i.dish.id !== dishId) }))
    } else {
      // 正常更新数量
      set((state) => ({
        items: state.items.map(i => i.dish.id === dishId ? { ...i, quantity } : i)
      }))
    }
  },

  clearCart: () => set({ items: [] }),

  /**
   * 计算购物车商品总件数
   * 使用 reduce 将所有 CartItem 的 quantity 累加求和
   * 例如：{[可乐, 2], [薯条, 3]} → 总件数 5
   */
  totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  /**
   * 计算购物车总金额
   * 使用 reduce 累加各商品的 price × quantity
   * Number() 包裹确保 price 类型转换正确（后端可能返回字符串格式的价格）
   * 例如：{[可乐 ¥5, 2], [薯条 ¥10, 3]} → 总额 40.00
   */
  totalAmount: () => get().items.reduce((sum, i) => sum + Number(i.dish.price) * i.quantity, 0)
}))
