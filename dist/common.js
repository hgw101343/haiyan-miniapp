"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authApi: function() { return /* binding */ authApi; },
/* harmony export */   categoryApi: function() { return /* binding */ categoryApi; },
/* harmony export */   dishApi: function() { return /* binding */ dishApi; },
/* harmony export */   orderApi: function() { return /* binding */ orderApi; },
/* harmony export */   paymentApi: function() { return /* binding */ paymentApi; }
/* harmony export */ });
/* unused harmony export request */
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var URLSearchParams = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/index.js")["URLSearchParams"];



// API 基础地址，开发时改为本地地址
var BASE_URL = 'http://localhost:3000/api';

// 获取 token
function getToken() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token') || '';
}

// 封装请求


function request(_x) {
  return _request.apply(this, arguments);
}

// ======== API 方法 ========
function _request() {
  _request = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee(options) {
    var url, _options$method, method, data, _options$needAuth, needAuth, header, token;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = options.url, _options$method = options.method, method = _options$method === void 0 ? 'GET' : _options$method, data = options.data, _options$needAuth = options.needAuth, needAuth = _options$needAuth === void 0 ? true : _options$needAuth;
          header = {
            'Content-Type': 'application/json'
          };
          if (needAuth) {
            token = getToken();
            if (token) {
              header['Authorization'] = "Bearer ".concat(token);
            }
          }
          return _context.a(2, new Promise(function (resolve, reject) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(BASE_URL).concat(url),
              method: method,
              data: data,
              header: header,
              success: function success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                  var result = res.data;
                  if (result.success) {
                    resolve(result.data);
                  } else {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                      title: result.message || '请求失败',
                      icon: 'none'
                    });
                    reject(new Error(result.message));
                  }
                } else if (res.statusCode === 401) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                    url: '/pages/profile/index'
                  });
                  reject(new Error('未登录'));
                } else {
                  reject(new Error("\u8BF7\u6C42\u5931\u8D25: ".concat(res.statusCode)));
                }
              },
              fail: function fail(err) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                  title: '网络错误',
                  icon: 'none'
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
  login: function login(code) {
    return request({
      url: '/auth/login',
      method: 'POST',
      data: {
        code: code
      },
      needAuth: false
    });
  },
  getMe: function getMe() {
    return request({
      url: '/auth/me'
    });
  },
  updateProfile: function updateProfile(data) {
    return request({
      url: '/auth/profile',
      method: 'PUT',
      data: data
    });
  }
};
var categoryApi = {
  list: function list() {
    return request({
      url: '/categories',
      needAuth: false
    });
  }
};
var dishApi = {
  list: function list(params) {
    var qs = params ? new URLSearchParams(Object.entries(params).filter(function (_ref) {
      var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 2),
        v = _ref2[1];
      return v !== undefined;
    }).map(function (_ref3) {
      var _ref4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];
      return [k, String(v)];
    })).toString() : '';
    return request({
      url: '/dishes' + (qs ? '?' + qs : ''),
      needAuth: false
    });
  },
  detail: function detail(id) {
    return request({
      url: "/dishes/".concat(id),
      needAuth: false
    });
  }
};
var orderApi = {
  create: function create(data) {
    return request({
      url: '/orders',
      method: 'POST',
      data: data
    });
  },
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
    })).toString() : '';
    return request({
      url: '/orders' + (qs ? '?' + qs : '')
    });
  },
  detail: function detail(id) {
    return request({
      url: "/orders/".concat(id)
    });
  },
  cancel: function cancel(id) {
    return request({
      url: "/orders/".concat(id, "/cancel"),
      method: 'PUT'
    });
  }
};
var paymentApi = {
  prepay: function prepay(orderId) {
    return request({
      url: '/payment/prepay',
      method: 'POST',
      data: {
        orderId: orderId
      }
    });
  },
  queryStatus: function queryStatus(orderNo) {
    return request({
      url: "/payment/status/".concat(orderNo)
    });
  }
};

// ======== 类型定义 ========

/***/ }),

/***/ "./src/hooks/useTheme.ts":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_THEME: function() { return /* binding */ DEFAULT_THEME; },
/* harmony export */   applyNavBarTheme: function() { return /* binding */ applyNavBarTheme; },
/* harmony export */   applyTabBarTheme: function() { return /* binding */ applyTabBarTheme; },
/* harmony export */   useTheme: function() { return /* binding */ useTheme; }
/* harmony export */ });
/* unused harmony exports getThemeFromStorage, themeToStyleString */
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);




// 与后端保持一致的主题配置

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

/** 从本地缓存读取主题 */
function getThemeFromStorage() {
  try {
    var cached = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('app_theme');
    if (cached && cached.primaryColor) {
      return cached;
    }
  } catch (_unused) {}
  return DEFAULT_THEME;
}

/** 将主题应用到导航栏（setNavigationBarColor） */
function applyNavBarTheme(t) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setNavigationBarColor({
    frontColor: t.navBarTextStyle === 'white' ? '#ffffff' : '#000000',
    backgroundColor: t.navBarBgColor
  }).catch(function () {});
}

/** 将主题应用到 TabBar（setTabBarStyle），带重试 */
function applyTabBarTheme(t) {
  var doApply = function doApply() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setTabBarStyle({
      color: t.tabBarColor,
      selectedColor: t.tabBarSelectedColor,
      backgroundColor: t.tabBarBgColor,
      borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white'
    }).catch(function (err) {
      console.warn('[theme] setTabBarStyle failed, retrying...', err);
      // 延迟 500ms 重试一次（TabBar 可能还未就绪）
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setTabBarStyle({
          color: t.tabBarColor,
          selectedColor: t.tabBarSelectedColor,
          backgroundColor: t.tabBarBgColor,
          borderStyle: t.tabBarBgColor === '#1a1a2e' || t.tabBarBgColor === '#000000' ? 'black' : 'white'
        }).catch(function (err2) {
          return console.error('[theme] setTabBarStyle retry failed:', err2);
        });
      }, 500);
    });
  };
  doApply();
}

/** 将 ThemeConfig 转为 CSS 变量字符串 */
function themeToStyleString(t) {
  var vars = {
    '--primary-color': t.primaryColor,
    '--primary-light': t.primaryLight,
    '--primary-dark': t.primaryDark,
    '--bg-color': t.backgroundColor,
    '--card-color': t.cardColor,
    '--text-color': t.textColor,
    '--text-secondary': t.textSecondary,
    '--border-color': t.borderColor,
    '--nav-bg': t.navBarBgColor,
    '--nav-text': t.navBarTextStyle === 'white' ? '#ffffff' : '#333333',
    '--tab-selected': t.tabBarSelectedColor,
    '--tab-color': t.tabBarColor,
    '--tab-bg': t.tabBarBgColor,
    '--success-color': t.successColor,
    '--warning-color': t.warningColor,
    '--error-color': t.errorColor
  };
  return Object.entries(vars).map(function (_ref) {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return "".concat(k, ":").concat(v);
  }).join(';');
}

/**
 * 主题 Hook — 每个页面调用，返回可注入根 View 的 style 字符串。
 * 在 useDidShow 中自动刷新，确保从其他 Tab 切换回来时主题是最新的。
 */
function useTheme() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return themeToStyleString(getThemeFromStorage());
    }),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    styleString = _useState2[0],
    setStyleString = _useState2[1];
  var refresh = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setStyleString(themeToStyleString(getThemeFromStorage()));
  }, []);

  // 每次页面显示时刷新主题（从管理后台切回来会生效）
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    var t = getThemeFromStorage();
    setStyleString(themeToStyleString(t));
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



var useCartStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(function (set, get) {
  return {
    items: [],
    addItem: function addItem(dish) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      set(function (state) {
        var existing = state.items.find(function (i) {
          return i.dish.id === dish.id;
        });
        if (existing) {
          return {
            items: state.items.map(function (i) {
              return i.dish.id === dish.id ? (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: i.quantity + quantity
              }) : i;
            })
          };
        }
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
          return {
            items: state.items.map(function (i) {
              return i.dish.id === dishId ? (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, i), {}, {
                quantity: i.quantity - 1
              }) : i;
            })
          };
        }
        return {
          items: state.items.filter(function (i) {
            return i.dish.id !== dishId;
          })
        };
      });
    },
    updateQuantity: function updateQuantity(dishId, quantity) {
      if (quantity <= 0) {
        set(function (state) {
          return {
            items: state.items.filter(function (i) {
              return i.dish.id !== dishId;
            })
          };
        });
      } else {
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
    totalCount: function totalCount() {
      return get().items.reduce(function (sum, i) {
        return sum + i.quantity;
      }, 0);
    },
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





var useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)(function (set, get) {
  return {
    user: null,
    token: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token') || '',
    isLoggedIn: !!_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'),
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
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', res.token);
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
    logout: function logout() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
      set({
        token: '',
        user: null,
        isLoggedIn: false
      });
    },
    fetchMe: function () {
      var _fetchMe = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee2() {
        var user, _t2;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _api__WEBPACK_IMPORTED_MODULE_1__.authApi.getMe();
            case 1:
              user = _context2.v;
              set({
                user: user
              });
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              set({
                token: '',
                user: null,
                isLoggedIn: false
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      function fetchMe() {
        return _fetchMe.apply(this, arguments);
      }
      return fetchMe;
    }()
  };
});

/***/ })

}]);
//# sourceMappingURL=common.js.map