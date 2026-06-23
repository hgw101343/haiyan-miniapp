"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
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
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cart */ "./src/store/cart.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");











function IndexPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    dishes = _useState4[0],
    setDishes = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    keyword = _useState6[0],
    setKeyword = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useCartStore = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(),
    addItem = _useCartStore.addItem,
    removeItem = _useCartStore.removeItem,
    items = _useCartStore.items,
    totalCount = _useCartStore.totalCount,
    totalAmount = _useCartStore.totalAmount;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, []);
  var loadData = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, cats, dishRes, _t;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            _context.n = 1;
            return Promise.all([_api__WEBPACK_IMPORTED_MODULE_2__.categoryApi.list(), _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list({
              recommended: false
            })]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$Promise$all, 2);
            cats = _yield$Promise$all2[0];
            dishRes = _yield$Promise$all2[1];
            setCategories(cats);
            setDishes(dishRes);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error(_t);
          case 3:
            _context.p = 3;
            setLoading(false);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }));
    return function loadData() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSearch = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee2() {
      var res;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (keyword.trim()) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, loadData());
          case 1:
            _context2.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list({
              keyword: keyword
            });
          case 2:
            res = _context2.v;
            setDishes(res);
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function handleSearch() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getItemCount = function getItemCount(dishId) {
    var item = items.find(function (i) {
      return i.dish.id === dishId;
    });
    return item ? item.quantity : 0;
  };
  var goToMenu = function goToMenu(catId) {
    // 跳转到菜单页（分类 Tab），传递要选中的分类 id
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: "/pages/category/index"
    });
    if (catId) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("active_cat", catId);
    }
  };
  var goToCart = function goToCart() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: "/pages/cart/index"
    });
  };
  var filterByCategory = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee3(catId) {
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            goToMenu(catId);
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function filterByCategory(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var recommendedCats = categories.filter(function (c) {
    return c.isRecommended;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "index-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "search-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "search-input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "search-icon",
          children: "\uD83D\uDD0D"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
          placeholder: "\u641C\u7D22\u83DC\u54C1...",
          value: keyword,
          onInput: function onInput(e) {
            return setKeyword(e.detail.value);
          },
          onConfirm: handleSearch
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "banner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "banner-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "banner-title",
          children: "\u4ECA\u65E5\u63A8\u8350"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "banner-sub",
          children: "\u65B0\u9C9C\u98DF\u6750 \xB7 \u73B0\u505A\u73B0\u5356"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "category-section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: "section-title",
        children: "\uD83D\uDCCB\u5F3A\u529B\u63A8\u8350"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
        scrollY: true,
        className: "dish-list",
        children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "loading",
          children: "\u52A0\u8F7D\u4E2D..."
        }, void 0, false) : dishes.map(function (dish) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "dish-card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
              src: dish.image || "https://via.placeholder.com/120x120?text=菜品",
              mode: "aspectFill",
              className: "dish-img"
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "dish-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "dish-name",
                children: dish.name
              }, void 0, false), dish.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "dish-desc",
                children: dish.description
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: "dish-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                  className: "dish-price",
                  children: ["\xA5", Number(dish.price).toFixed(2)]
                }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                  className: "quantity-ctrl",
                  children: [getItemCount(dish.id) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                      className: "btn-minus",
                      onClick: function onClick() {
                        return removeItem(dish.id);
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                        children: "-"
                      }, void 0, false)
                    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      className: "qty-num",
                      children: getItemCount(dish.id)
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                    className: "btn-add",
                    onClick: function onClick() {
                      return addItem(dish);
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                      children: "+"
                    }, void 0, false)
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true)]
          }, dish.id, true);
        })
      }, void 0, false)]
    }, void 0, true), totalCount() > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "cart-bar",
      onClick: goToCart,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "cart-icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          children: "\uD83D\uDED2"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "cart-badge",
          children: totalCount()
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: "cart-label",
        children: "\u53BB\u7ED3\u7B97"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: "cart-total",
        children: ["\xA5", totalAmount().toFixed(2)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map