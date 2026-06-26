import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import {
  DEFAULT_THEME,
  type ThemeConfig,
  applyNavBarTheme,
} from "./hooks/useTheme";
import "./app.scss";

/**
 * 应用启动时的主题加载与应用的完整流程
 *
 * 分为 4 步：
 * 1. 尝试从后端 API 拉取最新主题配置（远程优先）
 * 2. 网络不可达时降级读取本地缓存的主题配置（localStorage 兜底）
 * 3. 将拿到的主题写入本地缓存（各页面 useTheme hook 从此读取）
 * 4. 应用导航栏颜色（所有页面通用）
 *
 * TabBar 颜色由各 TabBar 页面自身的 useTheme hook 在 useDidShow 中调用 applyTabBarTheme 设置，
 * 确保只在 TabBar 页面上执行，避免在 splash/order-detail 等非 TabBar 页报错。
 */
async function fetchAndApplyTheme() {
  // 使用默认主题作为初始值
  let theme: ThemeConfig = DEFAULT_THEME;

  // 1. 从后端拉取主题
  try {
    const res = await Taro.request({
      url: "http://localhost:3000/api/theme",
      method: "GET",
    });
    if (res.statusCode === 200) {
      const data = (res.data as { success: boolean; data: ThemeConfig }).data;
      // 确认返回数据包含有效的 primaryColor（简单校验）
      if (data && data.primaryColor) {
        theme = data;
      }
    }
  } catch {
    // 2. 网络不可达则使用本地缓存
    try {
      const cached = Taro.getStorageSync("app_theme");
      if (cached) theme = cached as ThemeConfig;
    } catch {}
  }

  // 3. 缓存到本地（各页面 useTheme hook 读取此缓存）
  Taro.setStorageSync("app_theme", theme);

  // 4. 应用导航栏颜色（所有页面通用，包括 splash 等非 TabBar 页）
  applyNavBarTheme(theme);
}

function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 组件挂载时立即加载并应用主题
    fetchAndApplyTheme();

    /**
     * 注册 App 从后台切回前台的事件监听
     *
     * 使用 Taro.onAppShow() 而非 useDidShow() 的原因：
     * Taro 4.x 版本中，在 App 层级使用 useDidShow Hook 可能导致渲染层
     * 事件监听异常（页面未挂载时 Hook 生命周期不匹配）。
     * 因此采用原生 Taro.onAppShow() API，添加手动事件绑定。
     *
     * 回调中重新从缓存读取主题并应用到导航栏和 TabBar，
     * 确保从其他页面（如管理后台）返回时主题保持最新。
     */
    const off = Taro.onAppShow(() => {
      const theme = Taro.getStorageSync("app_theme");
      if (theme) {
        applyNavBarTheme(theme);
      }
    });

    /**
     * 组件卸载时移除事件监听，防止内存泄漏
     * Taro.onAppShow 返回一个取消监听的函数，在 cleanup 中调用
     */
    return () => {
      if (typeof off === "function") off();
    };
  }, []);

  return <>{children}</>;
}

export default App;
