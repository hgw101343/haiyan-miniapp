"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/detail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/detail!./src/pages/order/detail.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/detail!./src/pages/order/detail.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OrderDetailPage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");










var STATUS_STEPS = ['PENDING', 'PAID', 'PREPARING', 'READY', 'COMPLETED'];
var STATUS_LABELS = {
  PENDING: '待支付',
  PAID: '已支付',
  PREPARING: '备餐中',
  READY: '待取餐',
  COMPLETED: '已完成',
  CANCELLED: '已取消'
};
function OrderDetailPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useRouter = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
    params = _useRouter.params;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    order = _useState2[0],
    setOrder = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    paying = _useState4[0],
    setPaying = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (params.id) loadOrder(parseInt(params.id));
  }, []);
  var loadOrder = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().m(function _callee(id) {
      var data;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__.orderApi.detail(id);
          case 1:
            data = _context.v;
            setOrder(data);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function loadOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handlePay = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().m(function _callee2() {
      var payParams, _t;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (order) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setPaying(true);
            _context2.p = 2;
            _context2.n = 3;
            return _api__WEBPACK_IMPORTED_MODULE_2__.paymentApi.prepay(order.id);
          case 3:
            payParams = _context2.v;
            _context2.n = 4;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().requestPayment({
              timeStamp: payParams.timeStamp,
              nonceStr: payParams.nonceStr,
              package: payParams.package,
              signType: payParams.signType,
              paySign: payParams.paySign
            });
          case 4:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '支付成功',
              icon: 'success'
            });
            loadOrder(order.id);
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '支付取消',
              icon: 'none'
            });
          case 6:
            _context2.p = 6;
            setPaying(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 5, 6, 7]]);
    }));
    return function handlePay() {
      return _ref2.apply(this, arguments);
    };
  }();
  if (!order) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "loading",
    style: themeStyle,
    children: "\u52A0\u8F7D\u4E2D..."
  }, void 0, false);
  var currentStep = STATUS_STEPS.indexOf(order.status);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.ScrollView, {
    scrollY: true,
    className: "detail-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "status-bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: "status-title",
        children: STATUS_LABELS[order.status]
      }, void 0, false), order.status !== 'CANCELLED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "progress-steps",
        children: STATUS_STEPS.map(function (step, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "step-dot ".concat(i <= currentStep ? 'done' : ''),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "dot-label",
                children: STATUS_LABELS[step]
              }, void 0, false)
            }, void 0, false), i < STATUS_STEPS.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "step-line ".concat(i < currentStep ? 'done' : '')
            }, void 0, false)]
          }, step, true);
        })
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "info-card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "info-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-label",
          children: "\u8BA2\u5355\u53F7"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-value",
          children: order.orderNo
        }, void 0, false)]
      }, void 0, true), order.tableNo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "info-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-label",
          children: "\u684C\u53F7"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-value",
          children: order.tableNo
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "info-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-label",
          children: "\u4E0B\u5355\u65F6\u95F4"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-value",
          children: new Date(order.createdAt).toLocaleString()
        }, void 0, false)]
      }, void 0, true), order.remark && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "info-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-label",
          children: "\u5907\u6CE8"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "info-value",
          children: order.remark
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "items-card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: "card-title",
        children: "\u70B9\u5355\u660E\u7EC6"
      }, void 0, false), order.items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "order-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
            src: item.dish.image || '',
            mode: "aspectFill",
            className: "item-img",
            onClick: function onClick() {
              if (item.dish.image) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
                  urls: [item.dish.image],
                  current: item.dish.image
                });
              }
            }
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "item-info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "item-name",
              children: item.dish.name
            }, void 0, false), item.remark && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "item-remark",
              children: item.remark
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "item-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "item-qty",
              children: ["x", item.quantity]
            }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "item-price",
              children: ["\xA5", (Number(item.price) * item.quantity).toFixed(2)]
            }, void 0, true)]
          }, void 0, true)]
        }, item.id, true);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "total-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "total-label",
          children: "\u5408\u8BA1"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "total-price",
          children: ["\xA5", Number(order.totalAmount).toFixed(2)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "action-area",
      children: [order.status === 'PENDING' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "pay-btn ".concat(paying ? 'disabled' : ''),
        onClick: paying ? undefined : handlePay,
        children: paying ? '支付中...' : '立即支付'
      }, void 0, false), order.status === 'PENDING' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "cancel-btn",
        onClick: /*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().m(function _callee3() {
          var _yield$Taro$showModal, confirm;
          return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _context3.n = 1;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
                  title: '确认取消',
                  content: '确定取消这个订单吗？'
                });
              case 1:
                _yield$Taro$showModal = _context3.v;
                confirm = _yield$Taro$showModal.confirm;
                if (!confirm) {
                  _context3.n = 3;
                  break;
                }
                _context3.n = 2;
                return _api__WEBPACK_IMPORTED_MODULE_2__.orderApi.cancel(order.id);
              case 2:
                loadOrder(order.id);
              case 3:
                return _context3.a(2);
            }
          }, _callee3);
        })),
        children: "\u53D6\u6D88\u8BA2\u5355"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/order/detail.tsx":
/*!************************************!*\
  !*** ./src/pages/order/detail.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_detail_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/detail!./detail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order/detail!./src/pages/order/detail.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/order/detail', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/order/detail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=detail.js.map