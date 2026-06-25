"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/cart/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./src/pages/cart/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./src/pages/cart/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartPage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/cart */ "./src/store/cart.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");












function CartPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useCartStore = (0,_store_cart__WEBPACK_IMPORTED_MODULE_2__.useCartStore)(),
    items = _useCartStore.items,
    addItem = _useCartStore.addItem,
    removeItem = _useCartStore.removeItem,
    clearCart = _useCartStore.clearCart,
    totalCount = _useCartStore.totalCount,
    totalAmount = _useCartStore.totalAmount;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn,
    login = _useUserStore.login;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    remark = _useState2[0],
    setRemark = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    tableNo = _useState4[0],
    setTableNo = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    submitting = _useState6[0],
    setSubmitting = _useState6[1];
  var handleSubmitOrder = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
      var order, payParams, errMsg, _t;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (isLoggedIn) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '提示',
              content: '请先登录',
              success: function () {
                var _success = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee(res) {
                  return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        if (!res.confirm) {
                          _context.n = 1;
                          break;
                        }
                        _context.n = 1;
                        return login();
                      case 1:
                        return _context.a(2);
                    }
                  }, _callee);
                }));
                function success(_x) {
                  return _success.apply(this, arguments);
                }
                return success;
              }()
            });
            return _context2.a(2);
          case 1:
            if (!(items.length === 0)) {
              _context2.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '购物车为空',
              icon: 'none'
            });
            return _context2.a(2);
          case 2:
            _context2.p = 2;
            setSubmitting(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: '提交订单中...'
            });

            // 创建订单
            _context2.n = 3;
            return _api__WEBPACK_IMPORTED_MODULE_4__.orderApi.create({
              items: items.map(function (i) {
                return {
                  dishId: i.dish.id,
                  quantity: i.quantity,
                  remark: i.remark
                };
              }),
              remark: remark,
              tableNo: tableNo
            });
          case 3:
            order = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: '发起支付...'
            });

            // 获取支付参数
            _context2.n = 4;
            return _api__WEBPACK_IMPORTED_MODULE_4__.paymentApi.prepay(order.id);
          case 4:
            payParams = _context2.v;
            _context2.n = 5;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().requestPayment({
              timeStamp: payParams.timeStamp,
              nonceStr: payParams.nonceStr,
              package: payParams.package,
              signType: payParams.signType,
              paySign: payParams.paySign
            });
          case 5:
            // 支付成功
            clearCart();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '支付成功！',
              icon: 'success'
            });
            setTimeout(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                url: "/pages/order/detail?id=".concat(order.id)
              });
            }, 1500);
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            errMsg = (_t === null || _t === void 0 ? void 0 : _t.errMsg) || '';
            if (errMsg.includes('cancel')) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: '已取消支付',
                icon: 'none'
              });
            } else {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: '支付失败，请重试',
                icon: 'none'
              });
            }
            console.error(_t);
          case 7:
            _context2.p = 7;
            setSubmitting(false);
            return _context2.f(7);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 6, 7, 8]]);
    }));
    return function handleSubmitOrder() {
      return _ref.apply(this, arguments);
    };
  }();
  if (items.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "empty-cart",
      style: themeStyle,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "empty-icon",
        children: "\uD83D\uDED2"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "empty-text",
        children: "\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "go-shop",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
            url: '/pages/category/index'
          });
        },
        children: "\u53BB\u70B9\u83DC"
      }, void 0, false)]
    }, void 0, true);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: "cart-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.ScrollView, {
      scrollY: true,
      className: "cart-list",
      children: [items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "cart-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
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
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "item-info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "item-name",
              children: item.dish.name
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "item-price",
              children: ["\xA5", Number(item.dish.price).toFixed(2)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "stepper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "btn minus",
              onClick: function onClick() {
                return removeItem(item.dish.id);
              },
              children: "-"
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "num",
              children: item.quantity
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "btn plus",
              onClick: function onClick() {
                return addItem(item.dish);
              },
              children: "+"
            }, void 0, false)]
          }, void 0, true)]
        }, item.dish.id, true);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "remark-section",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "section-title",
          children: "\u5907\u6CE8"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Textarea, {
          className: "remark-input",
          placeholder: "\u5982\u6709\u7279\u6B8A\u8981\u6C42\u8BF7\u5907\u6CE8...",
          value: remark,
          onInput: function onInput(e) {
            return setRemark(e.detail.value);
          },
          maxlength: 200
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "table-section",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "section-title",
          children: "\u684C\u53F7"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "table-input-row",
          children: ['1号桌', '2号桌', '3号桌', '4号桌', '打包带走'].map(function (t) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "table-chip ".concat(tableNo === t ? 'active' : ''),
              onClick: function onClick() {
                return setTableNo(t);
              },
              children: t
            }, t, false);
          })
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "checkout-bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "total-area",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "total-label",
          children: "\u5408\u8BA1"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "total-price",
          children: ["\xA5", totalAmount().toFixed(2)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "checkout-btn ".concat(submitting ? 'disabled' : ''),
        onClick: submitting ? undefined : handleSubmitOrder,
        children: submitting ? '处理中...' : "\u7ED3\u7B97 (".concat(totalCount(), "\u4EF6)")
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/cart/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/cart/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./src/pages/cart/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/cart/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/cart/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map