"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./src/pages/order/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./src/pages/order/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OrderListPage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");











var STATUS_MAP = {
  PENDING: {
    label: '待支付',
    color: '#ff9500'
  },
  PAID: {
    label: '已支付',
    color: '#1890ff'
  },
  PREPARING: {
    label: '备餐中',
    color: '#722ed1'
  },
  READY: {
    label: '待取餐',
    color: '#52c41a'
  },
  COMPLETED: {
    label: '已完成',
    color: '#999'
  },
  CANCELLED: {
    label: '已取消',
    color: '#d9d9d9'
  }
};
var STATUS_TABS = [{
  key: '',
  label: '全部'
}, {
  key: 'PENDING',
  label: '待支付'
}, {
  key: 'PAID',
  label: '已支付'
}, {
  key: 'PREPARING',
  label: '备餐中'
}, {
  key: 'COMPLETED',
  label: '已完成'
}];
function OrderListPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    orders = _useState2[0],
    setOrders = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn;

  /** 加载订单列表 */
  var loadOrders = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
    var res, _t;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (isLoggedIn) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          setLoading(true);
          _context.p = 2;
          _context.n = 3;
          return _api__WEBPACK_IMPORTED_MODULE_2__.orderApi.list({
            status: activeTab || undefined
          });
        case 3:
          res = _context.v;
          setOrders(res);
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error('[订单] 加载失败:', _t);
        case 5:
          _context.p = 5;
          setLoading(false);
          return _context.f(5);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[2, 4, 5, 6]]);
  })), [activeTab, isLoggedIn]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isLoggedIn) {
      // 未登录：提示并跳转到个人中心登录
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: '提示',
        content: '请先登录后再查看订单',
        confirmText: '去登录',
        success: function success(res) {
          if (res.confirm) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
              url: '/pages/profile/index'
            });
          } else {
            // 取消：切换到首页
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
              url: '/pages/index/index'
            });
          }
        }
      });
      return;
    }
    loadOrders();
  }, [isLoggedIn, loadOrders]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "order-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      scrollX: true,
      className: "status-tabs",
      children: STATUS_TABS.map(function (tab) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "tab ".concat(activeTab === tab.key ? 'active' : ''),
          onClick: function onClick() {
            return setActiveTab(tab.key);
          },
          children: tab.label
        }, tab.key, false);
      })
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      scrollY: true,
      className: "order-list",
      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "loading",
        children: "\u52A0\u8F7D\u4E2D..."
      }, void 0, false) : orders.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "empty",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "empty-icon",
          children: "\uD83D\uDCCB"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          children: "\u6682\u65E0\u8BA2\u5355"
        }, void 0, false)]
      }, void 0, true) : orders.map(function (order) {
        var statusInfo = STATUS_MAP[order.status];
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "order-card",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/order/detail?id=".concat(order.id)
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "order-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "order-no",
              children: ["\u8BA2\u5355 #", order.orderNo]
            }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "order-status",
              style: {
                color: statusInfo.color
              },
              children: statusInfo.label
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "order-items",
            children: [order.items.slice(0, 3).map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "item-name",
                children: [item.dish.name, " x", item.quantity]
              }, item.id, true);
            }), order.items.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "item-more",
              children: ["...\u7B49", order.items.length, "\u6837"]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "order-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "order-time",
              children: new Date(order.createdAt).toLocaleString()
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "order-total",
              children: ["\xA5", Number(order.totalAmount).toFixed(2)]
            }, void 0, true)]
          }, void 0, true)]
        }, order.id, true);
      })
    }, void 0, false)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/order/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/order/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/index!./src/pages/order/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/order/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/order/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map