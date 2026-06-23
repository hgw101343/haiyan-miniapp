import React, { useState, useEffect, useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import { categoryApi, dishApi, type Category, type Dish } from "../../api";
import { useCartStore } from "../../store/cart";
import { useTheme } from "../../hooks/useTheme";
import "./index.scss";

export default function CategoryPage() {
  const { themeStyle } = useTheme();
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCat, setActiveCat] = useState<number>(0);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addItem, removeItem, items, totalCount, totalAmount } =
    useCartStore();

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCat) loadDishes(activeCat);
  }, [activeCat]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(false);
      const cats = await categoryApi.list();
      setCategories(cats);
      if (cats.length > 0) {
        // 优先读取从首页传来的选中分类 ID
        const preselected = Taro.getStorageSync('active_cat')
        if (preselected && cats.find((c: Category) => c.id === preselected)) {
          setActiveCat(preselected)
          Taro.removeStorageSync('active_cat')
        } else {
          setActiveCat(cats[0].id);
        }
      }
    } catch (err) {
      console.error("加载分类失败:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadDishes = async (catId: number) => {
    try {
      setLoading(true);
      const res = await dishApi.list({ categoryId: catId, limit: 50 });
      setDishes(res);
    } catch (err) {
      console.error("加载菜品失败:", err);
    } finally {
      setLoading(false);
    }
  };

  const getItemCount = (dishId: number) => {
    return items.find((i) => i.dish.id === dishId)?.quantity || 0;
  };

  const handleRefresh = useCallback(() => {
    loadCategories();
  }, []);

  return (
    <View className="category-page" style={themeStyle}>
      {/* 加载中 */}
      {loading && (
        <View className="loading-wrap">
          <Text className="loading-text">加载中...</Text>
        </View>
      )}

      {/* 空状态 / 错误提示 */}
      {!loading && categories.length === 0 && (
        <View className="empty-wrap">
          <Text className="empty-icon">🍽️</Text>
          <Text className="empty-text">
            {error ? "加载失败，请下拉刷新" : "暂无分类"}
          </Text>
          {error && (
            <View className="retry-btn" onClick={handleRefresh}>
              <Text className="retry-text">点击重试</Text>
            </View>
          )}
        </View>
      )}

      {/* 左侧分类栏 */}
      {categories.length > 0 && (
        <ScrollView scrollY className="left-nav">
          {categories.map((cat) => (
            <View
              key={cat.id}
              className={`nav-item ${activeCat === cat.id ? "active" : ""}`}
              onClick={() => setActiveCat(cat.id)}
            >
              <Text className="nav-icon">{cat.icon}</Text>
              <Text className="nav-name">{cat.name}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      {/* 右侧菜品列表 */}
      {categories.length > 0 && (
        <ScrollView scrollY className="right-dishes">
          {dishes.length === 0 && !loading ? (
            <View className="empty-dishes">
              <Text className="empty-text">暂无菜品</Text>
            </View>
          ) : (
            dishes.map((dish) => (
              <View key={dish.id} className="dish-row">
                <Image
                  src={dish.image || "https://via.placeholder.com/100?text=菜"}
                  mode="aspectFill"
                  className="dish-img"
                />
                <View className="dish-meta">
                  <Text className="dish-name">{dish.name}</Text>
                  {dish.isFeatured && <Text className="tag-hot">热门</Text>}
                  <Text className="dish-desc">{dish.description}</Text>
                  <View className="dish-footer">
                    <Text className="dish-price">
                      ¥{Number(dish.price).toFixed(2)}
                    </Text>
                    <View className="stepper">
                      {getItemCount(dish.id) > 0 && (
                        <>
                          <View
                            className="btn minus"
                            onClick={() => removeItem(dish.id)}
                          >
                            -
                          </View>
                          <Text className="num">{getItemCount(dish.id)}</Text>
                        </>
                      )}
                      <View className="btn plus" onClick={() => addItem(dish)}>
                        +
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      )}

      {/* 底部购物车栏 */}
      {totalCount() > 0 && (
        <View
          className="cart-bar"
          onClick={() => Taro.switchTab({ url: "/pages/cart/index" })}
        >
          <View className="cart-info">
            <Text className="cart-icon">🛒</Text>
            <View className="badge">{totalCount()}</View>
          </View>
          <Text className="cart-go">去结算</Text>
          <Text className="cart-price">¥{totalAmount().toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}
