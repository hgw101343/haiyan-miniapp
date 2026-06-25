/**
 * 后端 API 基础地址
 *
 * 开发环境说明（真机调试必读）：
 *   - PC 模拟器调试：使用 http://localhost:3000/api 即可
 *   - 真机调试：必须改为 PC 的局域网 IP，手机和 PC 需在同一 WiFi
 *     * 查看 PC 的 IP：打开 cmd 运行 ipconfig，找 IPv4 地址
 *     * 目前写了 192.168.31.100，如果你的 IP 不同请替换
 *   - 生产环境部署时需替换为实际域名（需在微信后台配置 request 合法域名）
 *
 * 本机当前可用 IP：
 *   192.168.5.18
 *   192.168.31.100
 */
const BASE_URL = "http://192.168.31.100:3000/api";

/** 上传接口的基础 URL（不带 /api 后缀），供图片上传等场景使用 */
export const UPLOAD_BASE = "http://192.168.31.100:3000";

/** 从本地缓存读取 JWT token，没有则返回空字符串 */
function getToken(): string {
  return Taro.getStorageSync("token") || "";
}

/**
 * 网络请求配置项
 * @param url - 接口路径（相对 BASE_URL）
 * @param method - HTTP 方法
 * @param data - 请求体数据（GET 请求时转为 query string）
 * @param needAuth - 是否需要携带 JWT token，默认 true。仅登录等公开接口设为 false
 */
interface RequestOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: Record<string, unknown>;
  /** 是否需要鉴权，默认 true。登录类接口设为 false，不携带 token */
  needAuth?: boolean;
}

import Taro from "@tarojs/taro";

/**
 * 通用网络请求封装函数
 *
 * 功能说明：
 * 1. 鉴权：根据 needAuth 参数决定是否在请求头中注入 Bearer token（从本地缓存读取）
 * 2. 响应解包：后端返回 { success, data, message } 格式，此函数自动解包 data 字段
 * 3. 401 处理：收到 401 状态码时清除本地 token 并跳转到登录页
 * 4. 网络错误：捕获网络异常并弹出 toast 提示"网络错误"
 * 5. 业务错误：success=false 时弹出 message 提示并 reject
 *
 * @param options - 请求配置
 * @returns Promise<T> 直接返回解包后的业务数据
 */
export async function request<T = unknown>(
  options: RequestOptions,
): Promise<T> {
  // 解构配置，needAuth 默认 true（大部分接口需要登录态）
  const { url, method = "GET", data, needAuth = true } = options;

  // 构建请求头
  const header: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // 需要鉴权时，从缓存读取 token 并设置 Authorization 头
  if (needAuth) {
    const token = getToken();
    if (token) {
      header["Authorization"] = `Bearer ${token}`;
    }
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header,
      success: (res) => {
        // HTTP 状态码 2xx：请求成功，进一步检查业务状态
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const result = res.data as {
            success: boolean;
            data: T;
            message?: string;
          };
          // 业务成功：返回解包后的 data
          if (result.success) {
            resolve(result.data);
          } else {
            // 业务失败：弹 toast 提示错误信息
            Taro.showToast({
              title: result.message || "请求失败",
              icon: "none",
            });
            reject(new Error(result.message));
          }
        } else if (res.statusCode === 401) {
          // 401 未授权：清除过期 token，跳转到个人中心页面引导重新登录
          Taro.removeStorageSync("token");
          Taro.navigateTo({ url: "/pages/profile/index" });
          reject(new Error("未登录"));
        } else {
          // 其他 HTTP 错误状态码
          reject(new Error(`请求失败: ${res.statusCode}`));
        }
      },
      fail: (err) => {
        // 网络层面错误（DNS 解析失败、连接超时等）
        Taro.showToast({ title: "网络错误", icon: "none" });
        reject(err);
      },
    });
  });
}

// ======== API 分组方法 ========

/**
 * 认证相关 API
 * - login: 传统微信 code 登录（获取 openid 后返回 token）
 * - phoneLogin: 手机号一键登录（携带 loginCode + 手机授权码 phoneCode，可选传昵称头像）
 * - passwordLogin: 用户名密码登录
 * - passwordRegister: 用户名密码注册
 * - getMe: 获取当前登录用户信息
 * - updateProfile: 更新用户个人资料
 */
export const authApi = {
  /** 传统微信登录：传入 wx.login() 获取的 code，返回 token 和用户信息。needAuth=false 因为此时还没有 token */
  login: (code: string) =>
    request<{ token: string; user: User }>({
      url: "/auth/login",
      method: "POST",
      data: { code },
      needAuth: false,
    }),
  /**
   * 手机号一键登录
   * @param data.loginCode - wx.login() 获取的临时 code，用于换取 session_key/openid
   * @param data.phoneCode - button open-type=getPhoneNumber 回调中的动态令牌，用于获取手机号
   * @param data.nickname - 可选，wx.getUserProfile 获取的用户昵称
   * @param data.avatar - 可选，wx.getUserProfile 获取的用户头像 URL
   * 流程：loginCode → 后端获取 openid/session_key → phoneCode → 后端获取手机号 → 创建/更新用户 → 返回 token
   */
  phoneLogin: (data: {
    loginCode: string;
    phoneCode?: string;
    nickname?: string;
    avatar?: string;
  }) =>
    request<{ token: string; user: User }>({
      url: "/auth/phone-login",
      method: "POST",
      data,
      needAuth: false,
    }),
  /**
   * 用户名密码登录（主登录方式）
   * 无需微信授权，直接输入用户名和密码即可登录
   * @param data.nickname - 用户名
   * @param data.password - 明文密码
   */
  passwordLogin: (data: { nickname: string; password: string }) =>
    request<{ token: string; user: User }>({
      url: "/auth/password-login",
      method: "POST",
      data,
      needAuth: false,
    }),
  /**
   * 用户名密码注册
   * 公开接口，注册成功后自动登录返回 token
   * @param data.nickname - 用户名（至少2个字符）
   * @param data.password - 密码（至少6位）
   */
  passwordRegister: (data: { nickname: string; password: string }) =>
    request<{ token: string; user: User }>({
      url: "/auth/password-register",
      method: "POST",
      data,
      needAuth: false,
    }),
  /** 获取当前用户信息，需要 token */
  getMe: () => request<User>({ url: "/auth/me" }),
  /** 更新用户个人资料（昵称、头像等），需要 token */
  updateProfile: (data: Partial<User>) =>
    request<User>({ url: "/auth/profile", method: "PUT", data }),
};

/**
 * 分类相关 API
 * - list: 获取全部分类列表（公开接口，无需登录）
 */
export const categoryApi = {
  /** 获取分类列表，返回包含菜品数量的分类信息 */
  list: () => request<Category[]>({ url: "/categories", needAuth: false }),
};

/**
 * 菜品相关 API
 * - list: 获取菜品列表，支持分类、关键词、分页等多维筛选
 * - detail: 获取单个菜品详情
 */
export const dishApi = {
  /**
   * 菜品列表查询
   * 支持参数：categoryId 按分类筛选、keyword 关键词搜索、featured 特色菜品、recommended 推荐菜品、分页
   * 将有效参数转为 URLSearchParams 拼接 query string
   */
  list: (params?: DishQueryParams) => {
    const qs = params
      ? new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined) // 过滤 undefined 参数
            .map(([k, v]) => [k, String(v)]),
        ).toString()
      : "";
    return request<{ data: Dish[]; pagination: Pagination }>({
      url: "/dishes" + (qs ? "?" + qs : ""),
      needAuth: false,
    });
  },
  /** 获取菜品详情，公开接口 */
  detail: (id: number) =>
    request<Dish>({ url: `/dishes/${id}`, needAuth: false }),
};

/**
 * 订单相关 API
 * - create: 创建新订单
 * - list: 获取订单列表，支持按状态和分页过滤
 * - detail: 获取订单详情
 * - cancel: 取消订单
 * 所有订单接口需要登录态
 */
export const orderApi = {
  /** 创建订单，传入菜品列表、备注、桌号等信息 */
  create: (data: CreateOrderData) =>
    request<Order>({ url: "/orders", method: "POST", data }),
  /** 订单列表查询，支持 status 过滤和 page 分页 */
  list: (params?: { status?: string; page?: number }) => {
    const qs = params
      ? new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)]),
        ).toString()
      : "";
    return request<{ data: Order[]; pagination: Pagination }>({
      url: "/orders" + (qs ? "?" + qs : ""),
    });
  },
  /** 获取订单详情，包含订单明细和菜品信息 */
  detail: (id: number) => request<Order>({ url: `/orders/${id}` }),
  /** 取消订单 */
  cancel: (id: number) =>
    request({ url: `/orders/${id}/cancel`, method: "PUT" }),
};

/**
 * 支付相关 API
 * - prepay: 请求微信支付预下单，返回调起微信支付所需参数
 * - queryStatus: 查询支付状态
 */
export const paymentApi = {
  /**
   * 微信支付预下单
   * 调用后端接口获取调起 wx.requestPayment 所需的参数
   * 返回包含 appId、timeStamp、nonceStr、package、signType、paySign 的支付参数对象
   */
  prepay: (orderId: number) =>
    request<WxPayParams>({
      url: "/payment/prepay",
      method: "POST",
      data: { orderId },
    }),
  /** 查询订单支付状态 */
  queryStatus: (orderNo: string) =>
    request<{ status: string; paidAt: string }>({
      url: `/payment/status/${orderNo}`,
    }),
};

// ======== 类型定义 ========

/** 用户信息 */
export interface User {
  /** 用户唯一 ID */
  id: number;
  /** 微信 openid，唯一标识微信用户 */
  openid?: string;
  /** 用户昵称 */
  nickname: string;
  /** 真实姓名（可选） */
  realName?: string;
  /** 头像 URL */
  avatar?: string;
  /** 手机号码（通过手机号授权获取） */
  phone?: string;
  /** 用户角色：USER 普通用户，ADMIN 管理员 */
  role: "USER" | "ADMIN";
}

/** 菜品分类 */
export interface Category {
  /** 分类 ID */
  id: number;
  /** 分类名称，如"热菜"、"凉菜" */
  name: string;
  /** 分类图标（emoji 或图标 URL） */
  icon?: string;
  /** 排序权重，数值越小越靠前 */
  sort: number;
  /** 是否为推荐分类，首页"推荐分类"区域展示 */
  isRecommended: boolean;
  /** 聚合字段：该分类下的菜品数量 */
  _count?: { dishes: number };
}

/** 菜品信息 */
export interface Dish {
  /** 菜品 ID */
  id: number;
  /** 菜品名称 */
  name: string;
  /** 菜品描述/简介 */
  description?: string;
  /** 菜品单价（元） */
  price: number;
  /** 菜品图片 URL */
  image?: string;
  /** 所属分类 ID */
  categoryId: number;
  /** 关联的分类对象（嵌套查询时返回） */
  category?: Category;
  /** 库存数量 */
  stock: number;
  /** 累计销量 */
  sales: number;
  /** 是否为特色菜品 */
  isFeatured: boolean;
  /** 是否为推荐菜品，首页"强力推荐"区域展示 */
  isRecommended: boolean;
}

/** 订单中的单行菜品项 */
export interface OrderItem {
  /** 订单项 ID */
  id: number;
  /** 菜品 ID */
  dishId: number;
  /** 关联菜品摘要信息（订单创建时的快照，非实时数据） */
  dish: { name: string; image?: string; price?: number };
  /** 该菜品的下单数量 */
  quantity: number;
  /** 该行订单项小计金额 */
  price: number;
  /** 备注（如"少辣"、"不要香菜"） */
  remark?: string;
}

/** 订单信息 */
export interface Order {
  /** 订单 ID */
  id: number;
  /** 订单编号（展示给用户的唯一标识） */
  orderNo: string;
  /** 订单总金额 */
  totalAmount: number;
  /** 订单状态：PENDING 待支付 | PAID 已支付 | PREPARING 制作中 | READY 待取餐 | COMPLETED 已完成 | CANCELLED 已取消 */
  status:
    | "PENDING"
    | "PAID"
    | "PREPARING"
    | "READY"
    | "COMPLETED"
    | "CANCELLED";
  /** 订单备注 */
  remark?: string;
  /** 桌号（堂食场景） */
  tableNo?: string;
  /** 订单创建时间 */
  createdAt: string;
  /** 支付完成时间 */
  paidAt?: string;
  /** 订单菜品明细列表 */
  items: OrderItem[];
}

/** 创建订单时的请求参数 */
export interface CreateOrderData {
  /** 菜品列表：每项包含 dishId、quantity 和可选 remark */
  items: { dishId: number; quantity: number; remark?: string }[];
  /** 订单备注 */
  remark?: string;
  /** 桌号（堂食时填写） */
  tableNo?: string;
}

/** 微信支付调起参数，由后端预下单接口返回 */
export interface WxPayParams {
  /** 公众号/小程序 AppID */
  appId: string;
  /** 时间戳（字符串格式） */
  timeStamp: string;
  /** 随机字符串 */
  nonceStr: string;
  /** 预支付交易会话标识，格式 "prepay_id=xxx" */
  package: string;
  /** 签名类型，固定为 "RSA" 或 "MD5" */
  signType: string;
  /** 支付签名 */
  paySign: string;
}

/** 菜品列表查询参数 */
export interface DishQueryParams {
  /** 按分类 ID 筛选 */
  categoryId?: number;
  /** 按关键词模糊搜索菜品名称 */
  keyword?: string;
  /** 分页页码（从 1 开始） */
  page?: number;
  /** 每页条数 */
  limit?: number;
  /** 是否仅查询特色菜品 */
  featured?: boolean;
  /** 是否仅查询推荐菜品 */
  recommended?: boolean;
}

/** 分页信息 */
export interface Pagination {
  /** 总记录数 */
  total: number;
  /** 当前页码 */
  page: number;
  /** 每页条数 */
  limit: number;
}

// ======== 收藏 & 反馈 API ========

/** 提交反馈 */
export const feedbackApi = {
  /** 提交意见反馈，支持文字内容和可选图片 */
  submit: (data: { content: string; images?: string[] }) =>
    request<{ success: boolean }>({ url: "/feedback", method: "POST", data }),
};

/** 收藏操作 */
export const favoriteApi = {
  /** 添加收藏 */
  add: (dishId: number) =>
    request<{ success: boolean }>({ url: "/favorites", method: "POST", data: { dishId } }),
  /** 取消收藏 */
  remove: (dishId: number) =>
    request<{ success: boolean }>({ url: `/favorites/${dishId}`, method: "DELETE" }),
  /** 获取当前用户的收藏列表（含完整菜品信息） */
  list: () => request<FavoriteItem[]>({ url: "/favorites" }),
};

/** 收藏项（后端返回的结构，含嵌套菜品信息） */
export interface FavoriteItem {
  id: number;
  userId: number;
  dishId: number;
  dish: Dish;
  createdAt: string;
}
