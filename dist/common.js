"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UPLOAD_BASE: function() { return /* binding */ UPLOAD_BASE; },
/* harmony export */   authApi: function() { return /* binding */ authApi; },
/* harmony export */   categoryApi: function() { return /* binding */ categoryApi; },
/* harmony export */   createDish: function() { return /* binding */ createDish; },
/* harmony export */   deleteDish: function() { return /* binding */ deleteDish; },
/* harmony export */   dishApi: function() { return /* binding */ dishApi; },
/* harmony export */   favoriteApi: function() { return /* binding */ favoriteApi; },
/* harmony export */   feedbackApi: function() { return /* binding */ feedbackApi; },
/* harmony export */   orderApi: function() { return /* binding */ orderApi; },
/* harmony export */   paymentApi: function() { return /* binding */ paymentApi; },
/* harmony export */   toggleDishAvailable: function() { return /* binding */ toggleDishAvailable; },
/* harmony export */   updateDish: function() { return /* binding */ updateDish; }
/* harmony export */ });
/* unused harmony export request */
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var URLSearchParams = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/index.js")["URLSearchParams"];



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
var BASE_URL = "http://192.168.31.100:3000/api";

/** 上传接口的基础 URL（不带 /api 后缀），供图片上传等场景使用 */
var UPLOAD_BASE = "http://192.168.31.100:3000";

/** 从本地缓存读取 JWT token，没有则返回空字符串 */
function getToken() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("token") || "";
}

/**
 * 网络请求配置项
 * @param url - 接口路径（相对 BASE_URL）
 * @param method - HTTP 方法
 * @param data - 请求体数据（GET 请求时转为 query string）
 * @param needAuth - 是否需要携带 JWT token，默认 true。仅登录等公开接口设为 false
 */



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
function request(_x) {
  return _request.apply(this, arguments);
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
function _request() {
  _request = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee(options) {
    var url, _options$method, method, data, _options$needAuth, needAuth, header, token;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          // 解构配置，needAuth 默认 true（大部分接口需要登录态）
          url = options.url, _options$method = options.method, method = _options$method === void 0 ? "GET" : _options$method, data = options.data, _options$needAuth = options.needAuth, needAuth = _options$needAuth === void 0 ? true : _options$needAuth; // 构建请求头
          header = {
            "Content-Type": "application/json"
          }; // 需要鉴权时，从缓存读取 token 并设置 Authorization 头
          if (needAuth) {
            token = getToken();
            if (token) {
              header["Authorization"] = "Bearer ".concat(token);
            }
          }
          return _context.a(2, new Promise(function (resolve, reject) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(BASE_URL).concat(url),
              method: method,
              data: data,
              header: header,
              success: function success(res) {
                // HTTP 状态码 2xx：请求成功，进一步检查业务状态
                if (res.statusCode >= 200 && res.statusCode < 300) {
                  var result = res.data;
                  // 业务成功：返回解包后的 data
                  if (result.success) {
                    resolve(result.data);
                  } else {
                    // 业务失败：弹 toast 提示错误信息
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                      title: result.message || "请求失败",
                      icon: "none"
                    });
                    reject(new Error(result.message));
                  }
                } else if (res.statusCode === 401) {
                  // 401 未授权：清除过期 token，跳转到个人中心页面引导重新登录
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("token");
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                    url: "/pages/profile/index"
                  });
                  reject(new Error("未登录"));
                } else {
                  // 其他 HTTP 错误状态码
                  reject(new Error("\u8BF7\u6C42\u5931\u8D25: ".concat(res.statusCode)));
                }
              },
              fail: function fail(err) {
                // 网络层面错误（DNS 解析失败、连接超时等）
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                  title: "网络错误",
                  icon: "none"
                });
                reject(err);
              }
            });
          }));
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}
var authApi = {
  /** 传统微信登录：传入 wx.login() 获取的 code，返回 token 和用户信息。needAuth=false 因为此时还没有 token */
  login: function login(code) {
    return request({
      url: "/auth/login",
      method: "POST",
      data: {
        code: code
      },
      needAuth: false
    });
  },
  /**
   * 手机号一键登录
   * @param data.loginCode - wx.login() 获取的临时 code，用于换取 session_key/openid
   * @param data.phoneCode - button open-type=getPhoneNumber 回调中的动态令牌，用于获取手机号
   * @param data.nickname - 可选，wx.getUserProfile 获取的用户昵称
   * @param data.avatar - 可选，wx.getUserProfile 获取的用户头像 URL
   * 流程：loginCode → 后端获取 openid/session_key → phoneCode → 后端获取手机号 → 创建/更新用户 → 返回 token
   */
  phoneLogin: function phoneLogin(data) {
    return request({
      url: "/auth/phone-login",
      method: "POST",
      data: data,
      needAuth: false
    });
  },
  /**
   * 用户名密码登录（主登录方式）
   * 无需微信授权，直接输入用户名和密码即可登录
   * @param data.nickname - 用户名
   * @param data.password - 明文密码
   */
  passwordLogin: function passwordLogin(data) {
    return request({
      url: "/auth/password-login",
      method: "POST",
      data: data,
      needAuth: false
    });
  },
  /**
   * 用户名密码注册
   * 公开接口，注册成功后自动登录返回 token
   * @param data.nickname - 用户名（至少2个字符）
   * @param data.password - 密码（至少6位）
   */
  passwordRegister: function passwordRegister(data) {
    return request({
      url: "/auth/password-register",
      method: "POST",
      data: data,
      needAuth: false
    });
  },
  /** 获取当前用户信息，需要 token */
  getMe: function getMe() {
    return request({
      url: "/auth/me"
    });
  },
  /** 更新用户个人资料（昵称、头像等），需要 token */
  updateProfile: function updateProfile(data) {
    return request({
      url: "/auth/profile",
      method: "PUT",
      data: data
    });
  }
};

/**
 * 分类相关 API
 * - list: 获取全部分类列表（公开接口，无需登录）
 */
var categoryApi = {
  /** 获取分类列表，返回包含菜品数量的分类信息 */
  list: function list() {
    return request({
      url: "/categories",
      needAuth: false
    });
  }
};

/**
 * 菜品相关 API
 * - list: 获取菜品列表，支持分类、关键词、分页等多维筛选
 * - detail: 获取单个菜品详情
 */
var dishApi = {
  /**
   * 菜品列表查询
   * 支持参数：categoryId 按分类筛选、keyword 关键词搜索、featured 特色菜品、recommended 推荐菜品、分页
   * 将有效参数转为 URLSearchParams 拼接 query string
   */
  list: function list(params) {
    var qs = params ? new URLSearchParams(Object.entries(params).filter(function (_ref) {
      var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 2),
        v = _ref2[1];
      return v !== undefined;
    }) // 过滤 undefined 参数
    .map(function (_ref3) {
      var _ref4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];
      return [k, String(v)];
    })).toString() : "";
    return request({
      url: "/dishes" + (qs ? "?" + qs : ""),
      needAuth: false
    });
  },
  /** 获取菜品详情，公开接口 */
  detail: function detail(id) {
    return request({
      url: "/dishes/".concat(id),
      needAuth: false
    });
  }
};

/**
 * 订单相关 API
 * - create: 创建新订单
 * - list: 获取订单列表，支持按状态和分页过滤
 * - detail: 获取订单详情
 * - cancel: 取消订单
 * 所有订单接口需要登录态
 */
var orderApi = {
  /** 创建订单，传入菜品列表、备注、桌号等信息 */
  create: function create(data) {
    return request({
      url: "/orders",
      method: "POST",
      data: data
    });
  },
  /** 订单列表查询，支持 status 过滤和 page 分页 */
  list: function list(params) {
    var qs = params ? new URLSearchParams(Object.entries(params).filter(function (_ref5) {
      var _ref6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref5, 2),
        v = _ref6[1];
      return v !== undefined;
    }).map(function (_ref7) {
      var _ref8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref7, 2),
        k = _ref8[0],
        v = _ref8[1];
      return [k, String(v)];
    })).toString() : "";
    return request({
      url: "/orders" + (qs ? "?" + qs : "")
    });
  },
  /** 获取订单详情，包含订单明细和菜品信息 */
  detail: function detail(id) {
    return request({
      url: "/orders/".concat(id)
    });
  },
  /** 取消订单 */
  cancel: function cancel(id) {
    return request({
      url: "/orders/".concat(id, "/cancel"),
      method: "PUT"
    });
  }
};

/**
 * 支付相关 API
 * - prepay: 请求微信支付预下单，返回调起微信支付所需参数
 * - queryStatus: 查询支付状态
 */
var paymentApi = {
  /**
   * 微信支付预下单
   * 调用后端接口获取调起 wx.requestPayment 所需的参数
   * 返回包含 appId、timeStamp、nonceStr、package、signType、paySign 的支付参数对象
   */
  prepay: function prepay(orderId) {
    return request({
      url: "/payment/prepay",
      method: "POST",
      data: {
        orderId: orderId
      }
    });
  },
  /** 查询订单支付状态 */
  queryStatus: function queryStatus(orderNo) {
    return request({
      url: "/payment/status/".concat(orderNo)
    });
  }
};

// ======== 类型定义 ========

/** 用户信息 */

/** 菜品分类 */

/** 菜品信息 */

/** 订单中的单行菜品项 */

/** 订单信息 */

/** 创建订单时的请求参数 */

/** 微信支付调起参数，由后端预下单接口返回 */

/** 菜品列表查询参数 */

/** 分页信息 */

// ======== 收藏 & 反馈 API ========

/** 提交反馈 */
var feedbackApi = {
  /** 提交意见反馈，支持文字内容和可选图片 */
  submit: function submit(data) {
    return request({
      url: "/feedback",
      method: "POST",
      data: data
    });
  }
};

/** 收藏操作 */
var favoriteApi = {
  /** 添加收藏 */
  add: function add(dishId) {
    return request({
      url: "/favorites",
      method: "POST",
      data: {
        dishId: dishId
      }
    });
  },
  /** 取消收藏 */
  remove: function remove(dishId) {
    return request({
      url: "/favorites/".concat(dishId),
      method: "DELETE"
    });
  },
  /** 获取当前用户的收藏列表（含完整菜品信息） */
  list: function list() {
    return request({
      url: "/favorites"
    });
  }
};

/** 收藏项（后端返回的结构，含嵌套菜品信息） */

// ======== 菜品管理 API（管理员） ========

/**
 * 更新菜品（管理员）
 * PUT /api/dishes/:id
 */
var updateDish = function updateDish(id, data) {
  return request({
    url: "/dishes/".concat(id),
    method: "PUT",
    data: data
  });
};

/**
 * 删除菜品（管理员，软删除）
 * DELETE /api/dishes/:id
 */
var deleteDish = function deleteDish(id) {
  return request({
    url: "/dishes/".concat(id),
    method: "DELETE"
  });
};

/**
 * 切换菜品上下架状态（管理员）
 * PATCH /api/dishes/:id/available
 */
var toggleDishAvailable = function toggleDishAvailable(id, isActive) {
  return request({
    url: "/dishes/".concat(id, "/available"),
    method: "PATCH",
    data: {
      isActive: isActive
    }
  });
};

/**
 * 新增菜品（管理员）
 * POST /api/dishes
 */
var createDish = function createDish(data) {
  return request({
    url: "/dishes",
    method: "POST",
    data: data
  });
};

/***/ }),

/***/ "./src/components/DishImage.tsx":
/*!**************************************!*\
  !*** ./src/components/DishImage.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DishImage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");


/**
 * DishImage —— 自动处理 HTTP 图片在微信小程序真机无法显示的问题
 *
 * 原因：微信小程序真机的 WebView 对非 HTTPS 图片有严格限制，即使能访问也可能被拦截。
 * 解法：用 Taro.downloadFile 把图片下载到临时路径，再用本地路径渲染。
 *
 * 微信小程序真机调试关键：
 * 1. 不能使用外部域名（如 via.placeholder.com）——未在微信后台配置白名单的域名会被拦截
 * 2. 正确做法：无图片时不加载外部 URL，渲染本地占位元素
 */




/** 简单的内存缓存：url → 临时路径，避免同一图片重复下载 */
var imgCache = {};
function DishImage(_ref) {
  var src = _ref.src,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? "aspectFill" : _ref$mode,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "暂无图片" : _ref$placeholder,
    _ref$preview = _ref.preview,
    preview = _ref$preview === void 0 ? true : _ref$preview;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    localSrc = _useState2[0],
    setLocalSrc = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    failed = _useState4[0],
    setFailed = _useState4[1];

  /** 点击预览大图：使用微信原生图片预览 API，支持双指缩放 */
  var handlePreview = function handlePreview() {
    if (!preview || !src) return;
    var url = localSrc || src;
    // 已经是本地路径或 https，可以直接用于预览
    if (url && !failed) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
        urls: [url],
        current: url
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!src) {
      setFailed(true);
      return;
    }

    /* 如果是 https / data: / wxfile:// 开头，微信小程序允许直接使用 */
    if (src.startsWith("https://") || src.startsWith("data:") || src.startsWith("wxfile://")) {
      setLocalSrc(src);
      return;
    }

    /* 如果已经缓存了临时路径，直接用 */
    if (imgCache[src]) {
      setLocalSrc(imgCache[src]);
      return;
    }

    /* http:// 图片 → 用 downloadFile 下载到临时路径再渲染 */
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().downloadFile({
      url: src,
      success: function success(res) {
        if (res.statusCode === 200) {
          imgCache[src] = res.tempFilePath;
          setLocalSrc(res.tempFilePath);
        } else {
          console.error("[DishImage] downloadFile failed, status:", res.statusCode, src);
          setFailed(true);
        }
      },
      fail: function fail(err) {
        console.error("[DishImage] downloadFile error:", src, err);
        setFailed(true);
      }
    });
  }, [src]);

  /* 图片加载失败或无图片 → 渲染本地占位元素（避免加载外部域名被微信拦截） */
  if (failed || !localSrc) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: className,
      style: (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-hint)",
        fontSize: "24rpx",
        overflow: "hidden"
      }, style),
      onClick: handlePreview,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        children: placeholder
      }, void 0, false)
    }, void 0, false);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
    src: localSrc,
    mode: mode,
    className: className,
    style: (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
      opacity: 1,
      animation: "fadeIn 0.3s ease"
    }, style),
    lazyLoad: true,
    onError: function onError() {
      return setFailed(true);
    },
    onClick: handlePreview
  }, void 0, false);
}

/***/ }),

/***/ "./src/hooks/useTheme.ts":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_THEME: function() { return /* binding */ DEFAULT_THEME; },
/* harmony export */   applyNavBarTheme: function() { return /* binding */ applyNavBarTheme; },
/* harmony export */   useTheme: function() { return /* binding */ useTheme; }
/* harmony export */ });
/* unused harmony exports getThemeFromStorage, applyTabBarTheme, themeToStyleString */
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);




/**
 * 主题配置接口 —— 与后端返回的主题数据结构一致
 *
 * 配置项分为以下几类：
 * - 主色系：primaryColor（主色）、primaryLight（浅色变体）、primaryDark（深色变体）
 * - 背景/卡片：backgroundColor（页面背景色）、cardColor（卡片/容器背景色）
 * - 文字色：textColor（主文字色）、textSecondary（次要文字色）
 * - 导航栏：navBarBgColor（导航栏背景色）、navBarTextStyle（导航栏文字色 white/black）
 * - TabBar：tabBarSelectedColor（选中 Tab 色）、tabBarColor（未选中 Tab 色）、tabBarBgColor（TabBar 背景色）
 * - 边框：borderColor（分割线/边框色）
 * - 语义色：successColor（成功/已完成）、warningColor（警告）、errorColor（错误/已取消）
 */

/** 默认主题配置 — 橘色暖色系，后端无返回或网络异常时使用 */
var DEFAULT_THEME = {
  primaryColor: '#ff6b35',
  primaryLight: '#ff9a5c',
  primaryDark: '#e55a2b',
  backgroundColor: '#f5f5f5',
  cardColor: '#ffffff',
  textColor: '#333333',
  textSecondary: '#999999',
  navBarBgColor: '#ff6b35',
  navBarTextStyle: 'white',
  tabBarSelectedColor: '#ff6b35',
  tabBarColor: '#999999',
  tabBarBgColor: '#ffffff',
  borderColor: '#e8e8e8',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#ff4d4f'
};

/**
 * 从本地缓存读取主题配置
 *
 * 读取模式：
 * 1. 尝试从 Storage 读取 'app_theme' key
 * 2. 如果存在且包含有效的 primaryColor 字段（简单数据校验），返回缓存的主题
 * 3. 读取失败或数据无效时，返回 DEFAULT_THEME 作为兜底
 *
 * 此函数被 App 层的 fetchAndApplyTheme 写入缓存后，
 * 各页面的 useTheme Hook 调用以获取当前生效的主题。
 */
function getThemeFromStorage() {
  try {
    var cached = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('app_theme');
    // 简单校验：存在且包含 primaryColor 字段
    if (cached && cached.primaryColor) {
      return cached;
    }
  } catch (_unused) {}
  return DEFAULT_THEME;
}

/**
 * 将主题应用到小程序原生导航栏
 *
 * 调用 Taro.setNavigationBarColor API：
 * - frontColor: 导航栏文字颜色（#ffffff 白 / #000000 黑）
 * - backgroundColor: 导航栏背景色
 *
 * 使用 .catch(() => {}) 静默处理失败（某些页面可能未启用自定义导航栏，
 * 此时 API 会失败但不影响功能）
 */
function applyNavBarTheme(t) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setNavigationBarColor({
    frontColor: t.navBarTextStyle === 'white' ? '#ffffff' : '#000000',
    backgroundColor: t.navBarBgColor
  }).catch(function () {});
}

/**
 * 将主题应用到小程序 TabBar
 *
 * 智能调用策略：
 * 1. 先获取当前页面栈，判断当前是否在 TabBar 页面上
 * 2. 非 TabBar 页（如 splash、order/detail）直接跳过，不调用 setTabBarStyle
 * 3. TabBar 页：调用 setTabBarStyle 设置颜色
 * 4. 失败时延迟 500ms 重试一次（TabBar 组件可能尚未渲染完毕）
 *
 * borderStyle 逻辑：
 * - 深色背景（如 #1a1a2e 或 #000000）使用 'black' 边框，与深色背景融为一体
 * - 亮色背景使用 'white' 边框
 */
function applyTabBarTheme(t) {
  // 获取当前页面栈，判断是否在 TabBar 页面
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentPages();
  var currentPage = pages.length > 0 ? pages[pages.length - 1] : null;

  // 如果没有页面栈（极端情况），延迟重试一次
  if (!currentPage) {
    setTimeout(function () {
      return applyTabBarTheme(t);
    }, 500);
    return;
  }

  // 检查当前页面路由是否在 app.config.ts 的 tabBar.list 中
  // 非 TabBar 页面（如 splash、order/detail）没有 TabBar，直接跳过
  var route = currentPage.route || '';
  var tabBarPages = ['pages/index/index', 'pages/category/index', 'pages/cart/index', 'pages/order/index', 'pages/profile/index'];
  if (!tabBarPages.includes(route)) {
    // 非 TabBar 页，静默跳过
    return;
  }
  var doApply = function doApply() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setTabBarStyle({
      color: t.tabBarColor,
      selectedColor: t.tabBarSelectedColor,
      backgroundColor: t.tabBarBgColor,
      // 深色背景配 black 边框，否则用 white，避免出现不协调的边框线
      borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white'
    }).catch(function (err) {
      // 只对 TabBar 页面重试，非 TabBar 的错误已在上方过滤
      var errMsg = String((err === null || err === void 0 ? void 0 : err.errMsg) || (err === null || err === void 0 ? void 0 : err.message) || '');
      // "not TabBar page" 错误说明路由判断与实际 TabBar 注册不同步，不再重试
      if (errMsg.includes('not TabBar page')) return;

      // 其余错误（如 TabBar 未就绪）延迟 500ms 重试一次
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setTabBarStyle({
          color: t.tabBarColor,
          selectedColor: t.tabBarSelectedColor,
          backgroundColor: t.tabBarBgColor,
          borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white'
        }).catch(function () {});
      }, 500);
    });
  };
  doApply();
}

/**
 * 将 ThemeConfig 对象转为 CSS 变量字符串
 *
 * 映射模式：
 * ThemeConfig 的每个字段映射为 --xxx CSS 自定义属性，如：
 * primaryColor → --primary-color
 * navBarBgColor → --nav-bg
 *
 * 返回值为 CSS 内联样式字符串 "key:value;key:value;..."，
 * 可直接注入 View 组件的 style 属性，子组件通过 var(--primary-color) 引用。
 */
function themeToStyleString(t) {
  var vars = {
    /** 主色系 */
    '--primary-color': t.primaryColor,
    '--primary-light': t.primaryLight,
    '--primary-dark': t.primaryDark,
    /** 背景和卡片 */
    '--bg-color': t.backgroundColor,
    '--card-color': t.cardColor,
    /** 文字色 */
    '--text-color': t.textColor,
    '--text-secondary': t.textSecondary,
    /** 边框 */
    '--border-color': t.borderColor,
    /** 导航栏 */
    '--nav-bg': t.navBarBgColor,
    '--nav-text': t.navBarTextStyle === 'white' ? '#ffffff' : '#333333',
    /** TabBar */
    '--tab-selected': t.tabBarSelectedColor,
    '--tab-color': t.tabBarColor,
    '--tab-bg': t.tabBarBgColor,
    /** 语义色 */
    '--success-color': t.successColor,
    '--warning-color': t.warningColor,
    '--error-color': t.errorColor
  };
  // 将 { key: value } 拼接为 "key:value;key:value;..." 的字符串
  return Object.entries(vars).map(function (_ref) {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return "".concat(k, ":").concat(v);
  }).join(';');
}

/**
 * 主题 Hook — 每个页面调用，返回可注入根 View 的 style 字符串。
 *
 * 使用场景：
 * - 页面根 View：<View style={themeStyle}> — 从此元素开始的所有子节点可通过 var(--primary-color) 使用主题色
 * - refresh() 方法：用于管理后台修改主题后手动触发刷新
 *
 * 在 useDidShow 中自动刷新主题的原因：
 * 用户可能从管理后台或其他 Tab 切回当前页面，此时主题可能已变更。
 * useDidShow 在页面显示时触发，重新读取缓存并应用导航栏/TabBar 主题，
 * 确保页面始终展示最新的主题配色。
 */
function useTheme() {
  // 初始化：从缓存读取主题并转为 CSS 字符串
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return themeToStyleString(getThemeFromStorage());
    }),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    styleString = _useState2[0],
    setStyleString = _useState2[1];

  /** 手动刷新主题（管理后台修改主题后调用） */
  var refresh = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setStyleString(themeToStyleString(getThemeFromStorage()));
  }, []);

  // 每次页面显示时刷新主题（从管理后台切回来会生效）
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    var t = getThemeFromStorage();
    setStyleString(themeToStyleString(t));
    // 同时重新应用原生导航栏和 TabBar 颜色
    applyNavBarTheme(t);
    applyTabBarTheme(t);
  });
  return {
    themeStyle: styleString,
    refresh: refresh
  };
}

/***/ }),

/***/ "./src/store/cart.ts":
/*!***************************!*\
  !*** ./src/store/cart.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCartStore: function() { return /* binding */ useCartStore; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");




/** 购物车中的单个物品项 */

/** 购物车状态管理接口 */

var useCartStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(function (set, get) {
  return {
    items: [],
    addItem: function addItem(dish) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      set(function (state) {
        // 查找购物车中是否已存在同 ID 的菜品
        var existing = state.items.find(function (i) {
          return i.dish.id === dish.id;
        });
        if (existing) {
          // 已存在：合并数量（数量累加而非覆盖）
          return {
            items: state.items.map(function (i) {
              return i.dish.id === dish.id ? (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: i.quantity + quantity
              }) : i;
            })
          };
        }
        // 不存在：新增条目
        return {
          items: [].concat((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items), [{
            dish: dish,
            quantity: quantity
          }])
        };
      });
    },
    removeItem: function removeItem(dishId) {
      set(function (state) {
        var existing = state.items.find(function (i) {
          return i.dish.id === dishId;
        });
        if (existing && existing.quantity > 1) {
          // 数量 > 1：仅减少 1 个
          return {
            items: state.items.map(function (i) {
              return i.dish.id === dishId ? (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: i.quantity - 1
              }) : i;
            })
          };
        }
        // 数量 <= 1：完全移除该商品
        return {
          items: state.items.filter(function (i) {
            return i.dish.id !== dishId;
          })
        };
      });
    },
    updateQuantity: function updateQuantity(dishId, quantity) {
      if (quantity <= 0) {
        // 数量 <= 0：视为移除操作，从购物车中删除
        set(function (state) {
          return {
            items: state.items.filter(function (i) {
              return i.dish.id !== dishId;
            })
          };
        });
      } else {
        // 正常更新数量
        set(function (state) {
          return {
            items: state.items.map(function (i) {
              return i.dish.id === dishId ? (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: quantity
              }) : i;
            })
          };
        });
      }
    },
    clearCart: function clearCart() {
      return set({
        items: []
      });
    },
    /**
     * 计算购物车商品总件数
     * 使用 reduce 将所有 CartItem 的 quantity 累加求和
     * 例如：{[可乐, 2], [薯条, 3]} → 总件数 5
     */
    totalCount: function totalCount() {
      return get().items.reduce(function (sum, i) {
        return sum + i.quantity;
      }, 0);
    },
    /**
     * 计算购物车总金额
     * 使用 reduce 累加各商品的 price × quantity
     * Number() 包裹确保 price 类型转换正确（后端可能返回字符串格式的价格）
     * 例如：{[可乐 ¥5, 2], [薯条 ¥10, 3]} → 总额 40.00
     */
    totalAmount: function totalAmount() {
      return get().items.reduce(function (sum, i) {
        return sum + Number(i.dish.price) * i.quantity;
      }, 0);
    }
  };
});

/***/ }),

/***/ "./src/store/user.ts":
/*!***************************!*\
  !*** ./src/store/user.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUserStore: function() { return /* binding */ useUserStore; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");






/** 用户状态管理接口 */

var useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)(function (set, get) {
  return {
    user: null,
    // 初始化时从本地缓存读取 token
    token: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token') || '',
    // token 存在即视为登录态有效（服务端会通过 401 来验证 token 是否过期）
    isLoggedIn: !!_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'),
    /**
     * 传统 code 登录（降级用）
     *
     * 流程：
     * 1. 调用 Taro.login() 获取微信临时登录凭证 code（有效期 5 分钟）
     * 2. 将 code 发送到后端 /auth/login 接口
     * 3. 后端通过 code 向微信服务器换取用户的 openid 和 session_key
     * 4. 后端返回 JWT token 和用户信息
     * 5. 将 token 写入本地 Storage，更新 store 状态
     *
     * 注意：此方式仅获取 openid，无法获取手机号、昵称等用户信息。
     * 通常在手机号授权失败时作为降级方案使用。
     */
    login: function () {
      var _login = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee() {
        var _yield$Taro$login, code, res, _t;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login();
            case 1:
              _yield$Taro$login = _context.v;
              code = _yield$Taro$login.code;
              _context.n = 2;
              return _api__WEBPACK_IMPORTED_MODULE_1__.authApi.login(code);
            case 2:
              res = _context.v;
              // 持久化 token 到本地缓存
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', res.token);
              // 更新 store 状态
              set({
                token: res.token,
                user: res.user,
                isLoggedIn: true
              });
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('登录失败:', _t);
              throw _t;
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }));
      function login() {
        return _login.apply(this, arguments);
      }
      return login;
    }(),
    /**
     * 手机号一键登录（主登录流程）
     *
     * 流程：
     * 1. 调用 Taro.login() 获取 loginCode（微信登录凭证）
     * 2. 将 loginCode + phoneCode（手机授权动态令牌）+ 可选昵称头像 发送到后端
     * 3. 后端通过 loginCode 获取 openid/session_key
     * 4. 后端通过 phoneCode 获取用户手机号
     * 5. 创建或更新用户记录，返回 JWT token
     * 6. 保存 token 并更新 store
     *
     * @param phoneCode - button open-type="getPhoneNumber" 回调 e.detail.code
     * @param nickname - wx.getUserProfile 获取的昵称，可选
     * @param avatar - wx.getUserProfile 获取的头像 URL，可选
     */
    phoneLogin: function () {
      var _phoneLogin = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee2(phoneCode, nickname, avatar) {
        var loginCode, _yield$Taro$login2, code, res, _err$data, message, _t2, _t3;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              // 先获取微信登录 code
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
                title: '登录中...'
              });
              _context2.p = 1;
              _context2.p = 2;
              _context2.n = 3;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login();
            case 3:
              _yield$Taro$login2 = _context2.v;
              code = _yield$Taro$login2.code;
              loginCode = code;
              console.log('[手机登录] 获取 loginCode 成功');
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error('[手机登录] Taro.login() 失败:', _t2);
              throw new Error('微信登录初始化失败，请重试');
            case 5:
              _context2.n = 6;
              return _api__WEBPACK_IMPORTED_MODULE_1__.authApi.phoneLogin({
                loginCode: loginCode,
                phoneCode: phoneCode,
                nickname: nickname,
                avatar: avatar
              });
            case 6:
              res = _context2.v;
              // 步骤3：保存 token 并更新 store
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', res.token);
              set({
                token: res.token,
                user: res.user,
                isLoggedIn: true
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t3 = _context2.v;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
              message = (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || (_t3 === null || _t3 === void 0 || (_err$data = _t3.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || '手机号登录失败，请重试';
              console.error('[手机登录] 失败:', message);
              throw new Error(message);
            case 8:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4], [1, 7]]);
      }));
      function phoneLogin(_x, _x2, _x3) {
        return _phoneLogin.apply(this, arguments);
      }
      return phoneLogin;
    }(),
    /**
     * 用户名密码登录
     *
     * 流程：
     * 1. 前端传入用户名和密码
     * 2. 发送到后端 /auth/password-login 验证
     * 3. 验证通过 → 保存 token 并更新 store
     *
     * @param nickname - 用户名
     * @param password - 明文密码
     */
    passwordLogin: function () {
      var _passwordLogin = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee3(nickname, password) {
        var res, message, _t4;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
                title: '登录中...',
                mask: true
              });
              _context3.p = 1;
              _context3.n = 2;
              return _api__WEBPACK_IMPORTED_MODULE_1__.authApi.passwordLogin({
                nickname: nickname,
                password: password
              });
            case 2:
              res = _context3.v;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', res.token);
              set({
                token: res.token,
                user: res.user,
                isLoggedIn: true
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t4 = _context3.v;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
              // 包装网络错误，让上层 catch 能拿到有意义的消息
              message = (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || '登录失败，请检查网络连接';
              throw new Error(message);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      function passwordLogin(_x4, _x5) {
        return _passwordLogin.apply(this, arguments);
      }
      return passwordLogin;
    }(),
    /**
     * 用户名密码注册（注册成功自动登录）
     *
     * 流程：
     * 1. 发送用户名和密码到后端 /auth/password-register
     * 2. 后端创建用户并返回 JWT token
     * 3. 保存 token 并更新 store
     *
     * @param nickname - 用户名
     * @param password - 明文密码
     */
    passwordRegister: function () {
      var _passwordRegister = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee4(nickname, password) {
        var res, message, _t5;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
                title: '注册中...',
                mask: true
              });
              _context4.p = 1;
              _context4.n = 2;
              return _api__WEBPACK_IMPORTED_MODULE_1__.authApi.passwordRegister({
                nickname: nickname,
                password: password
              });
            case 2:
              res = _context4.v;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', res.token);
              set({
                token: res.token,
                user: res.user,
                isLoggedIn: true
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t5 = _context4.v;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
              message = (_t5 === null || _t5 === void 0 ? void 0 : _t5.message) || '注册失败，请检查网络连接';
              throw new Error(message);
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }));
      function passwordRegister(_x6, _x7) {
        return _passwordRegister.apply(this, arguments);
      }
      return passwordRegister;
    }(),
    /**
     * 退出登录
     *
     * 清理动作：
     * 1. 从本地 Storage 移除 token（removeStorageSync）
     * 2. 重置 store 中的 user/token/isLoggedIn 状态
     * 注意：没有调用后端登出接口，仅做前端清理。
     * 后续如果有服务端 session 管理，可在此处增加 API 调用。
     */
    logout: function logout() {
      // 清除本地 token
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
      // 重置 store 状态
      set({
        token: '',
        user: null,
        isLoggedIn: false
      });
    },
    /**
     * 刷新当前用户信息
     *
     * 场景：
     * - 页面显示时确认登录态有效（isLoggedIn=true 但 user 为 null）
     * - 个人资料修改后重新获取最新数据
     *
     * 失败处理：如果 getMe 接口请求失败（通常是 token 过期），
     * 清除本地 token 并将登录状态设为 false，用户在下次操作时会引导重新登录。
     */
    fetchMe: function () {
      var _fetchMe = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee5() {
        var user, _t6;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return _api__WEBPACK_IMPORTED_MODULE_1__.authApi.getMe();
            case 1:
              user = _context5.v;
              set({
                user: user
              });
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t6 = _context5.v;
              // token 失效或网络错误：清除登录态
              set({
                token: '',
                user: null,
                isLoggedIn: false
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }));
      function fetchMe() {
        return _fetchMe.apply(this, arguments);
      }
      return fetchMe;
    }()
  };
});

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/logo.jpg";

/***/ })

}]);
//# sourceMappingURL=common.js.map