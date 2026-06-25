/**
 * 我的收藏页面
 *
 * 显示当前用户收藏的所有菜品，支持取消收藏和加入购物车。
 * 空状态时显示引导文字。
 */

import React, { useState, useEffect, useCallback } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import { favoriteApi, type FavoriteItem } from "../../api";
import { useCartStore } from "../../store/cart";
import { useUserStore } from "../../store/user";
import { useTheme } from "../../hooks/useTheme";
import DishImage from "../../components/DishImage";
import "./index.scss";

export default function FavoritesPage() {
  const { themeStyle } = useTheme();
  const { isLoggedIn } = useUserStore();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [unauthorized, setUnauthorized] = useState(false);
  const { addItem, removeItem, items } = useCartStore();

  /** 加载收藏列表（仅登录后调用） */
  const loadFavorites = useCallback(async () => {
    if (!isLoggedIn) {
      setLoading(false);
      setUnauthorized(true);
      return;
    }
    try {
      setLoading(true);
      setUnauthorized(false);
      const data = await favoriteApi.list();
      setFavorites(data);
    } catch (err: any) {
      console.error("[favorites] load error:", err);
      // 显示具体错误原因，帮助排查问题
      const msg = err?.message || String(err || "获取收藏失败");
      Taro.showToast({
        title: msg.length > 20 ? msg.slice(0, 18) + "..." : msg,
        icon: "none",
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  /** 每次页面显示时重新加载（处理从其他页面返回的场景） */
  useDidShow(() => {
    loadFavorites();
  });

  /** 取消收藏 */
  const handleUnfavorite = async (dishId: number) => {
    try {
      await favoriteApi.remove(dishId);
      Taro.showToast({ title: "已取消收藏", icon: "none" });
      setFavorites(favorites.filter((f) => f.dishId !== dishId));
    } catch {
      Taro.showToast({ title: "操作失败", icon: "none" });
    }
  };

  /** 获取菜品在购物车中的数量 */
  const getItemCount = (dishId: number) =>
    items.find((i) => i.dish.id === dishId)?.quantity || 0;

  return (
    <View className="favorites-page" style={themeStyle}>
      {loading ? (
        <View className="loading-wrap">
          <Text>加载中...</Text>
        </View>
      ) : unauthorized ? (
        /* 未登录提示 */
        <View className="empty-wrap">
          <Text className="empty-icon">🔒</Text>
          <Text className="empty-text">请先登录</Text>
          <Text className="empty-hint">登录后即可查看您的收藏菜品</Text>
          <View
            className="go-menu-btn"
            onClick={() => Taro.switchTab({ url: "/pages/profile/index" })}
          >
            去登录
          </View>
        </View>
      ) : favorites.length === 0 ? (
        /* 空状态：无收藏 */
        <View className="empty-wrap">
          <Text className="empty-icon">❤️</Text>
          <Text className="empty-text">暂无收藏</Text>
          <Text className="empty-hint">去菜单页逛逛，收藏喜欢的菜品吧</Text>
          <View
            className="go-menu-btn"
            onClick={() => Taro.switchTab({ url: "/pages/category/index" })}
          >
            去菜单
          </View>
        </View>
      ) : (
        <ScrollView scrollY className="favorites-list">
          {favorites.map((fav) => (
            <View key={fav.id} className="fav-card">
              {/* 菜品图片：点击预览大图 */}
              <DishImage
                src={fav.dish.image || ""}
                mode="aspectFill"
                className="fav-img"
              />

              <View className="fav-info">
                <Text className="fav-name">{fav.dish.name}</Text>
                {fav.dish.description && (
                  <Text className="fav-desc">{fav.dish.description}</Text>
                )}
                <View className="fav-footer">
                  <Text className="fav-price">
                    ¥{Number(fav.dish.price).toFixed(2)}
                  </Text>
                  <View className="fav-actions">
                    {/* 取消收藏按钮 */}
                    <View
                      className="unfavorite-btn"
                      onClick={() => handleUnfavorite(fav.dishId)}
                    >
                      <Text>❤️</Text>
                    </View>
                    {/* 购物车加减按钮 */}
                    <View className="quantity-ctrl">
                      {getItemCount(fav.dishId) > 0 && (
                        <>
                          <View
                            className="btn-minus"
                            onClick={() => removeItem(fav.dishId)}
                          >
                            <Text>-</Text>
                          </View>
                          <Text className="qty-num">
                            {getItemCount(fav.dishId)}
                          </Text>
                        </>
                      )}
                      <View
                        className="btn-add"
                        onClick={() => addItem(fav.dish)}
                      >
                        <Text>+</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
