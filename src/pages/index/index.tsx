import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, ScrollView, Input } from "@tarojs/components";
import { dishApi, categoryApi, type Dish, type Category } from "../../api";
import { useCartStore } from "../../store/cart";
import { useTheme } from "../../hooks/useTheme";
import "./index.scss";

export default function IndexPage() {
  const { themeStyle } = useTheme();
  const [categories, setCategories] = useState<Category[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const { addItem, removeItem, items, totalCount, totalAmount } =
    useCartStore();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [cats, dishRes] = await Promise.all([
        categoryApi.list(),
        dishApi.list({ recommended: false }),
      ]);
      setCategories(cats);
      setDishes(dishRes);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!keyword.trim()) return loadData();
    const res = await dishApi.list({ keyword });
    setDishes(res);
  };

  const getItemCount = (dishId: number) => {
    const item = items.find((i) => i.dish.id === dishId);
    return item ? item.quantity : 0;
  };

  const goToMenu = (catId?: number) => {
    // 跳转到菜单页（分类 Tab），传递要选中的分类 id
    Taro.switchTab({ url: "/pages/category/index" });
    if (catId) {
      Taro.setStorageSync("active_cat", catId);
    }
  };

  const goToCart = () => {
    Taro.switchTab({ url: "/pages/cart/index" });
  };

  const filterByCategory = async (catId: number) => {
    goToMenu(catId);
  };

  const recommendedCats = categories.filter((c) => c.isRecommended);

  return (
    <View className="index-page" style={themeStyle}>
      {/* 搜索栏 */}
      <View className="search-bar">
        <View className="search-input">
          <Text className="search-icon">🔍</Text>
          <Input
            placeholder="搜索菜品..."
            value={keyword}
            onInput={(e) => setKeyword(e.detail.value)}
            onConfirm={handleSearch}
          />
        </View>
      </View>

      {/* Banner */}
      <View className="banner">
        <View className="banner-inner">
          <Text className="banner-title">今日推荐</Text>
          <Text className="banner-sub">新鲜食材 · 现做现卖</Text>
        </View>
      </View>

      {/* 推荐分类 */}
      {/* {recommendedCats.length > 0 && (
        <View className='recommend-section'>
          <Text className='section-title'>🔥 推荐分类</Text>
          <ScrollView scrollX className='recommend-scroll'>
            {recommendedCats.map(cat => (
              <View
                key={cat.id}
                className='recommend-card'
                onClick={() => filterByCategory(cat.id)}
              >
                <Text className='rec-icon'>{cat.icon || '🍽️'}</Text>
                <Text className='rec-name'>{cat.name}</Text>
                <Text className='rec-count'>{cat._count?.dishes || 0}道菜品</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )} */}

      {/* 全部分类快捷入口 */}
      {/* {categories.length > 0 && (
        <View className='category-section'>
          <Text className='section-title'>📋 全部分类</Text>
          <ScrollView scrollX className='category-scroll'>
            {categories.map(cat => (
              <View
                key={cat.id}
                className={`category-tag ${cat.isRecommended ? 'recommended' : ''}`}
                onClick={() => filterByCategory(cat.id)}
              >
                <Text>{cat.icon}</Text>
                <Text className='cat-name'>{cat.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )} */}

      {/* 菜品列表 */}
      <View className="category-section">
        <Text className="section-title">📋强力推荐</Text>
        <ScrollView scrollY className="dish-list">
          {loading ? (
            <View className="loading">加载中...</View>
          ) : (
            dishes.map((dish) => (
              <View key={dish.id} className="dish-card">
                <Image
                  src={
                    dish.image ||
                    "https://via.placeholder.com/120x120?text=菜品"
                  }
                  mode="aspectFill"
                  className="dish-img"
                />
                <View className="dish-info">
                  <Text className="dish-name">{dish.name}</Text>
                  {dish.description && (
                    <Text className="dish-desc">{dish.description}</Text>
                  )}
                  <View className="dish-footer">
                    <Text className="dish-price">
                      ¥{Number(dish.price).toFixed(2)}
                    </Text>
                    <View className="quantity-ctrl">
                      {getItemCount(dish.id) > 0 && (
                        <>
                          <View
                            className="btn-minus"
                            onClick={() => removeItem(dish.id)}
                          >
                            <Text>-</Text>
                          </View>
                          <Text className="qty-num">
                            {getItemCount(dish.id)}
                          </Text>
                        </>
                      )}
                      <View className="btn-add" onClick={() => addItem(dish)}>
                        <Text>+</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
      {/* 购物车悬浮按钮 */}
      {totalCount() > 0 && (
        <View className="cart-bar" onClick={goToCart}>
          <View className="cart-icon">
            <Text>🛒</Text>
            <View className="cart-badge">{totalCount()}</View>
          </View>
          <Text className="cart-label">去结算</Text>
          <Text className="cart-total">¥{totalAmount().toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}
