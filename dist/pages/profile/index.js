"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");










/**
 * 个人中心页面
 *
 * 登录方式：用户名 + 密码登录
 *   - 未登录时显示登录/注册表单
 *   - 已注册用户直接输入用户名密码登录
 *   - 新用户可切换到注册模式创建账号
 *   - 登录成功后保存 token，后续请求自动携带
 */

function ProfilePage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_2__.useUserStore)(),
    user = _useUserStore.user,
    isLoggedIn = _useUserStore.isLoggedIn,
    passwordLogin = _useUserStore.passwordLogin,
    passwordRegister = _useUserStore.passwordRegister,
    logout = _useUserStore.logout,
    fetchMe = _useUserStore.fetchMe;

  /** 表单模式：login 登录 | register 注册 */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('login'),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  /** 用户名输入值 */
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    username = _useState4[0],
    setUsername = _useState4[1];
  /** 密码输入值 */
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  /** 表单提交中，防止重复提交 */
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
    submitting = _useState8[0],
    setSubmitting = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLoggedIn && !user) {
      fetchMe();
    }
  }, [isLoggedIn]);

  /**
   * 切换登录/注册模式
   * 切换时清空表单输入
   */
  var toggleMode = function toggleMode() {
    setMode(mode === 'login' ? 'register' : 'login');
    setUsername('');
    setPassword('');
  };

  /**
   * 提交表单（登录或注册）
   */
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().m(function _callee() {
      var name, pwd, msg, _t;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            // 去掉首尾空格
            name = username.trim();
            pwd = password.trim();
            if (name) {
              _context.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入用户名',
              icon: 'none'
            });
            return _context.a(2);
          case 1:
            if (pwd) {
              _context.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入密码',
              icon: 'none'
            });
            return _context.a(2);
          case 2:
            if (!(name.length < 2)) {
              _context.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '用户名至少2个字符',
              icon: 'none'
            });
            return _context.a(2);
          case 3:
            if (!(pwd.length < 6)) {
              _context.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '密码至少6位',
              icon: 'none'
            });
            return _context.a(2);
          case 4:
            setSubmitting(true);
            _context.p = 5;
            if (!(mode === 'login')) {
              _context.n = 7;
              break;
            }
            _context.n = 6;
            return passwordLogin(name, pwd);
          case 6:
            _context.n = 8;
            break;
          case 7:
            _context.n = 8;
            return passwordRegister(name, pwd);
          case 8:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: mode === 'login' ? '登录成功' : '注册成功',
              icon: 'success'
            });
            setUsername('');
            setPassword('');
            _context.n = 10;
            break;
          case 9:
            _context.p = 9;
            _t = _context.v;
            // 提取有意义的错误信息，优先级：err.message > err > 默认兜底文案
            msg = (_t === null || _t === void 0 ? void 0 : _t.message) || String(_t || '操作失败'); // 避免与 API 层对话框重叠（延迟 300ms 确保 API 层 toast 先弹出）
            setTimeout(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: msg.length > 20 ? msg.slice(0, 18) + '...' : msg,
                icon: 'none',
                duration: 2500
              });
            }, 300);
            console.error('[表单提交] 失败:', msg);
          case 10:
            _context.p = 10;
            setSubmitting(false);
            return _context.f(10);
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[5, 9, 10, 11]]);
    }));
    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * 退出登录
   */
  var handleLogout = function handleLogout() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success: function success(res) {
        if (res.confirm) {
          logout();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '已退出',
            icon: 'none'
          });
        }
      }
    });
  };
  var menuItems = [{
    icon: "\uD83D\uDCCB",
    label: '我的订单',
    path: '/pages/order/index'
  }, {
    icon: "\u2764\uFE0F",
    label: '我的收藏',
    path: '/pages/favorites/index'
  }, {
    icon: "\uD83D\uDCAC",
    label: '意见反馈',
    path: '/pages/feedback/index'
  }, {
    icon: "\uD83D\uDCDE",
    label: '联系客服',
    path: ''
  }, {
    icon: "\u2139\uFE0F",
    label: '关于我们',
    path: ''
  }];

  /**
   * 菜单点击处理
   * - TabBar 页面（首页/菜单/购物车/订单/我的）→ switchTab
   * - 普通页面（反馈/收藏/订单详情）→ navigateTo
   * - 占位项（联系客服/关于我们）→ toast 提示开发中
   */
  var handleMenuClick = function handleMenuClick(item) {
    if (!item.path) {
      // 占位项：提示开发中
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '该功能正在开发，敬请期待',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    // TabBar 页面列表（与 app.config.ts 中 tabBar.list 对齐）
    var tabBarPages = ['/pages/index/index', '/pages/category/index', '/pages/cart/index', '/pages/order/index', '/pages/profile/index'];
    if (tabBarPages.includes(item.path)) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
        url: item.path
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: item.path
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "profile-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "user-header",
      children: isLoggedIn && user ?
      /*#__PURE__*/
      // 已登录：展示用户信息
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
          src: user.avatar || '',
          mode: "aspectFill",
          className: "avatar"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "user-info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "nickname",
            children: user.realName || user.nickname
          }, void 0, false), user.phone && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "phone",
            children: user.phone
          }, void 0, false), user.role === 'ADMIN' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "role-badge",
            children: "\u7BA1\u7406\u5458"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true) :
      /*#__PURE__*/
      // 未登录：显示品牌 Logo + 登录/注册表单
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "login-area",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
          src: __webpack_require__(/*! ../../assets/logo.jpg */ "./src/assets/logo.jpg"),
          mode: "aspectFill",
          className: "login-logo"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "login-form-wrap",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "login-title",
            children: mode === 'login' ? '账号登录' : '注册账号'
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "form-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
              className: "form-input",
              type: "text",
              placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
              placeholderClass: "input-placeholder",
              value: username,
              onInput: function onInput(e) {
                return setUsername(e.detail.value);
              },
              maxlength: 20,
              confirmType: "next"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "form-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
              className: "form-input",
              type: "password",
              placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF08\u81F3\u5C116\u4F4D\uFF09",
              placeholderClass: "input-placeholder",
              value: password,
              onInput: function onInput(e) {
                return setPassword(e.detail.value);
              },
              maxlength: 30,
              confirmType: "done",
              onConfirm: handleSubmit
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "submit-btn ".concat(submitting ? 'disabled' : ''),
            onClick: submitting ? undefined : handleSubmit,
            children: submitting ? mode === 'login' ? '登录中...' : '注册中...' : mode === 'login' ? '登 录' : '注 册'
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "toggle-mode",
            onClick: toggleMode,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "toggle-text",
              children: mode === 'login' ? '没有账号？去注册' : '已有账号？去登录'
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "menu-list",
      children: menuItems.map(function (item, idx) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "menu-item",
          onClick: function onClick() {
            return handleMenuClick(item);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "menu-icon",
            children: item.icon
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "menu-label",
            children: item.label
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "menu-arrow",
            children: "\\u203A"
          }, void 0, false)]
        }, idx, true);
      })
    }, void 0, false), isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "logout-btn",
      onClick: handleLogout,
      children: "\u9000\u51FA\u767B\u5F55"
    }, void 0, false)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/profile/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/profile/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/profile/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map