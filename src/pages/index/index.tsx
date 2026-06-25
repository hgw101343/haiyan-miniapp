import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, ScrollView, Input } from "@tarojs/components";
import { dishApi, categoryApi, favoriteApi, type Dish, type Category } from "../../api";
import { useCartStore } from "../../store/cart";
import { useUserStore } from "../../store/user";
import { useTheme } from "../../hooks/useTheme";
import DishImage from "../../components/DishImage";
import "./index.scss";

/**
 * 首页
 *
 * 页面结构自上而下：
 * 1. 搜索栏 — 输入关键词搜索菜品
 * 2. Banner — 今日推荐横幅
 * 3. 菜品列表 — 展示推荐菜品，支持加减购物车操作
 * 4. 购物车悬浮栏 — 有商品时固定在底部，显示总数量和总金额，点击跳转购物车
 *
 * 注意：推荐分类和全部分类快捷入口已注释（见下方解释），
 * 因为当前版本中分类导航由底部 Tab 的"分类"页承担。
 */
export default function IndexPage() {
  /** 主题样式字符串，注入根 View */
  const { themeStyle } = useTheme();
  /** 分类列表 */
  const [categories, setCategories] = useState<Category[]>([]);
  /** 当前显示的菜品列表 */
  const [dishes, setDishes] = useState<Dish[]>([]);
  /** 搜索关键词 */
  const [keyword, setKeyword] = useState("");
  /** 页面加载状态 */
  const [loading, setLoading] = useState(true);
  /** 已收藏的菜品 ID 集合，用于快速判断是否已收藏 */
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set());
  /** 购物车操作 */
  const { addItem, removeItem, items, totalCount, totalAmount } =
    useCartStore();
  /** 登录状态，用于判断是否允许收藏操作 */
  const { isLoggedIn } = useUserStore();

  useEffect(() => {
    loadData();
  }, []);

  /**
   * 页面数据加载
   *
   * 使用 Promise.all 并行请求两个接口，提高加载速度：
   * - categoryApi.list(): 获取所有分类（首页不会直接展示，但为未来扩展预留）
   * - dishApi.list({ recommended: true }): 获取推荐菜品列表（首页主内容区）
   *
   * 并行请求失败时仅 console.error 记录，不阻塞页面渲染。
   */
  const loadData = async () => {
    try {
      setLoading(true);
      // 并行请求：分类数据 + 推荐菜品数据 + 收藏列表
      const [cats, dishRes] = await Promise.all([
        categoryApi.list(),
        dishApi.list({ recommended: true }),
      ]);
      setCategories(cats);
      setDishes(dishRes);

      // 加载收藏列表（静默：未登录或失败不阻塞页面）
      if (isLoggedIn) {
        try {
          const favs = await favoriteApi.list();
          setFavoriteIds(new Set(favs.map((f) => f.dishId)));
        } catch {}
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  /** 切换收藏状态（需登录） */
  const toggleFavorite = async (dishId: number) => {
    if (!isLoggedIn) {
      Taro.showToast({ title: '请先登录', icon: 'none', duration: 1500 })
      return
    }
    const isFav = favoriteIds.has(dishId);
    // 乐观更新：先改 UI，再调接口
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      isFav ? next.delete(dishId) : next.add(dishId);
      return next;
    });
    try {
      if (isFav) {
        await favoriteApi.remove(dishId);
      } else {
        await favoriteApi.add(dishId);
      }
    } catch {
      // 接口失败，回滚状态
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        isFav ? next.add(dishId) : next.delete(dishId);
        return next;
      });
    }
  };

  /**
   * 搜索处理
   *
   * 行为：
   * - 有关键词时：调用 dishApi.list({ keyword }) 按名称模糊搜索
   * - 无关键词时（空搜索或清空）：重新加载默认推荐菜品列表
   *
   * 触发方式：用户输入内容后按键盘"完成"/"搜索"键（Input onConfirm 事件）
   */
  const handleSearch = async () => {
    if (!keyword.trim()) return loadData(); // 空关键词：恢复默认列表
    const res = await dishApi.list({ keyword });
    setDishes(res);
  };

  /**
   * 查询某菜品在购物车中的数量
   *
   * 用于控制菜品卡片上的加减按钮显示状态
   * 返回 0 时不显示减号按钮和数量，仅显示 + 按钮
   *
   * @param dishId - 菜品 ID
   * @returns 购物车中该菜品的数量，不在购物车中返回 0
   */
  const getItemCount = (dishId: number) => {
    const item = items.find((i) => i.dish.id === dishId);
    return item ? item.quantity : 0;
  };

  /**
   * 跳转到菜单分类页，并预选指定分类
   *
   * 实现方式：
   * 1. 使用 switchTab 切换到分类 Tab 页（Tab 切换而非 navigateTo 页面跳转）
   * 2. 通过 setStorageSync 写入 'active_cat' key，目标页面读取此 key 并激活对应分类 Tab
   * 这是一种跨 Tab 传递参数的模式（Tab 页面不支持 URL query 参数）
   *
   * @param catId - 要预选中的分类 ID
   */
  const goToMenu = (catId?: number) => {
    // 跳转到菜单页（分类 Tab），传递要选中的分类 id
    Taro.switchTab({ url: "/pages/category/index" });
    if (catId) {
      // 通过本地缓存传递分类 ID，分类页在 useDidShow 中读取并激活对应 Tab
      Taro.setStorageSync("active_cat", catId);
    }
  };

  /** 跳转到购物车页面（Tab 切换） */
  const goToCart = () => {
    Taro.switchTab({ url: "/pages/cart/index" });
  };

  /**
   * 按分类筛选 —— 实际上是跳转到分类页并预选指定分类
   *
   * 首页不直接做分类筛选，而是委托给分类 Tab 处理。
   * 这样保持了单一职责：分类页管理分类视图，首页管理推荐内容。
   */
  const filterByCategory = async (catId: number) => {
    goToMenu(catId);
  };

  /** 被标记为推荐的分类列表（用于首页推荐分类区域） */
  const recommendedCats = categories.filter((c) => c.isRecommended);

  return (
    <View className="index-page" style={themeStyle}>
      {/* ============ 搜索栏 ============ */}
      <View className="search-bar">
        <View className="search-input">
          <Text className="search-icon">🔍</Text>
          <Input
            placeholder="搜索菜品..."
            value={keyword}
            onInput={(e) => setKeyword(e.detail.value)}
            onConfirm={handleSearch} // 键盘确认键触发搜索
          />
        </View>
      </View>

      {/* ============ Banner 横幅 ============ */}
      <View className="banner">
        <View className="banner-inner">
          <Text className="banner-title">今日推荐</Text>
          <Text className="banner-sub">新鲜食材 · 现做现卖</Text>
        </View>
      </View>

      {/* ============ 推荐分类（已注释）============ */}
      {/* 原因：目前分类导航由底部 Tab 的"分类"页承担，首页不再展示分类卡片。
          保留此代码以便后续可能恢复首页分类快捷入口功能。

          功能说明：遍历 recommendedCats（isRecommended=true 的分类），
          通过横向滚动的 ScrollView 展示分类卡片，点击跳转到分类页并预选该分类。

          组件结构：
          - 外层 section-title："🔥 推荐分类"标题
          - ScrollView scrollX：横向滚动容器
            - recommend-card：单个分类卡片
              - rec-icon：分类图标
              - rec-name：分类名称
              - rec-count：该分类下菜品数量
      {recommendedCats.length > 0 && (
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

      {/* ============ 全部分类快捷入口（已注释）============ */}
      {/* 原因：同上，分类导航由底部 Tab 的"分类"页处理。
          保留此代码以便后续恢复。

          功能说明：横向滚动展示所有分类标签，
          点击跳转到分类页并预选该分类。

          组件结构：
          - section-title："📋 全部分类"标题
          - ScrollView scrollX：横向滚动标签容器
            - category-tag：分类标签按钮，recommended 分类额外样式
              - 图标 + 名称
      {categories.length > 0 && (
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

      {/* ============ 菜品列表（强力推荐）============ */}
      <View className="category-section">
        <Text className="section-title">📋强力推荐</Text>
        {/* 使用 ScrollView 实现可滚动菜品列表 */}
        <ScrollView scrollY className="dish-list">
          {loading ? (
            <View className="loading">加载中...</View>
          ) : (
            dishes.map((dish) => (
              <View key={dish.id} className="dish-card">
                {/* 菜品图片组件，自带懒加载和占位图 */}
                <DishImage
                  src={dish.image || ""}
                  mode="aspectFill"
                  className="dish-img"
                />
                {/* 收藏按钮（右上角红心） */}
                <View
                  className={`fav-btn ${favoriteIds.has(dish.id) ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(dish.id); }}
                >
                  <Text>{favoriteIds.has(dish.id) ? "❤️" : "🤍"}</Text>
                </View>
                <View className="dish-info">
                  <Text className="dish-name">{dish.name}</Text>
                  {/* 有描述时展示，无描述时不渲染该行 */}
                  {dish.description && (
                    <Text className="dish-desc">{dish.description}</Text>
                  )}
                  <View className="dish-footer">
                    {/* 菜品价格，保留两位小数 */}
                    <Text className="dish-price">
                      ¥{Number(dish.price).toFixed(2)}
                    </Text>
                    {/* 购物车加减按钮 */}
                    <View className="quantity-ctrl">
                      {/* 购物车中有该菜品时显示减号按钮和数量 */}
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
                      {/* 加号按钮始终显示 */}
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

      {/* ============ 购物车悬浮栏 ============ */}
      {/* 条件渲染：购物车中有商品时才显示此浮动栏
          固定在屏幕底部，显示购物车图标 + 商品数量角标 + 总金额 + "去结算"文字
          点击跳转到购物车 Tab 页 */}
      {totalCount() > 0 && (
        <View className="cart-bar" onClick={goToCart}>
          <View className="cart-icon">
            <Text>🛒</Text>
            {/* 商品总数量角标 */}
            <View className="cart-badge">{totalCount()}</View>
          </View>
          <Text className="cart-label">去结算</Text>
          {/* 购物车总金额，保留两位小数 */}
          <Text className="cart-total">¥{totalAmount().toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}
