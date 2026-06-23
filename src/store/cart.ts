import { create } from 'zustand'
import type { Dish } from '../api'

export interface CartItem {
  dish: Dish
  quantity: number
  remark?: string
}

interface CartState {
  items: CartItem[]
  addItem: (dish: Dish, quantity?: number) => void
  removeItem: (dishId: number) => void
  updateQuantity: (dishId: number, quantity: number) => void
  clearCart: () => void
  totalCount: () => number
  totalAmount: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (dish, quantity = 1) => {
    set((state) => {
      const existing = state.items.find(i => i.dish.id === dish.id)
      if (existing) {
        return {
          items: state.items.map(i =>
            i.dish.id === dish.id ? { ...i, quantity: i.quantity + quantity } : i
          )
        }
      }
      return { items: [...state.items, { dish, quantity }] }
    })
  },

  removeItem: (dishId) => {
    set((state) => {
      const existing = state.items.find(i => i.dish.id === dishId)
      if (existing && existing.quantity > 1) {
        return {
          items: state.items.map(i =>
            i.dish.id === dishId ? { ...i, quantity: i.quantity - 1 } : i
          )
        }
      }
      return { items: state.items.filter(i => i.dish.id !== dishId) }
    })
  },

  updateQuantity: (dishId, quantity) => {
    if (quantity <= 0) {
      set((state) => ({ items: state.items.filter(i => i.dish.id !== dishId) }))
    } else {
      set((state) => ({
        items: state.items.map(i => i.dish.id === dishId ? { ...i, quantity } : i)
      }))
    }
  },

  clearCart: () => set({ items: [] }),

  totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  totalAmount: () => get().items.reduce((sum, i) => sum + Number(i.dish.price) * i.quantity, 0)
}))
