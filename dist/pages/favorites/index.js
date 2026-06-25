"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/favorites/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/favorites/index!./src/pages/favorites/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/favorites/index!./src/pages/favorites/index.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FavoritesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cart */ "./src/store/cart.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var _components_DishImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DishImage */ "./src/components/DishImage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");



/**
 * 我的收藏页面
 *
 * 显示当前用户收藏的所有菜品，支持取消收藏和加入购物车。
 * 空状态时显示引导文字。
 */











function FavoritesPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    favorites = _useState2[0],
    setFavorites = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    unauthorized = _useState6[0],
    setUnauthorized = _useState6[1];
  var _useCartStore = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(),
    addItem = _useCartStore.addItem,
    removeItem = _useCartStore.removeItem,
    items = _useCartStore.items;

  /** 加载收藏列表（仅登录后调用） */
  var loadFavorites = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
    var data, msg, _t;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (isLoggedIn) {
            _context.n = 1;
            break;
          }
          setLoading(false);
          setUnauthorized(true);
          return _context.a(2);
        case 1:
          _context.p = 1;
          setLoading(true);
          setUnauthorized(false);
          _context.n = 2;
          return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.list();
        case 2:
          data = _context.v;
          setFavorites(data);
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("[favorites] load error:", _t);
          // 显示具体错误原因，帮助排查问题
          msg = (_t === null || _t === void 0 ? void 0 : _t.message) || String(_t || "获取收藏失败");
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: msg.length > 20 ? msg.slice(0, 18) + "..." : msg,
            icon: "none",
            duration: 2000
          });
        case 4:
          _context.p = 4;
          setLoading(false);
          return _context.f(4);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3, 4, 5]]);
  })), [isLoggedIn]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadFavorites();
  }, [loadFavorites]);

  /** 每次页面显示时重新加载（处理从其他页面返回的场景） */
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    loadFavorites();
  });

  /** 取消收藏 */
  var handleUnfavorite = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2(dishId) {
      var _t2;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.remove(dishId);
          case 1:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "已取消收藏",
              icon: "none"
            });
            setFavorites(favorites.filter(function (f) {
              return f.dishId !== dishId;
            }));
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "操作失败",
              icon: "none"
            });
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function handleUnfavorite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /** 获取菜品在购物车中的数量 */
  var getItemCount = function getItemCount(dishId) {
    var _items$find;
    return ((_items$find = items.find(function (i) {
      return i.dish.id === dishId;
    })) === null || _items$find === void 0 ? void 0 : _items$find.quantity) || 0;
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "favorites-page",
    style: themeStyle,
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "loading-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        children: "\u52A0\u8F7D\u4E2D..."
      }, void 0, false)
    }, void 0, false) : unauthorized ?
    /*#__PURE__*/
    /* 未登录提示 */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "empty-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-icon",
        children: "\uD83D\uDD12"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-text",
        children: "\u8BF7\u5148\u767B\u5F55"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-hint",
        children: "\u767B\u5F55\u540E\u5373\u53EF\u67E5\u770B\u60A8\u7684\u6536\u85CF\u83DC\u54C1"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "go-menu-btn",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
            url: "/pages/profile/index"
          });
        },
        children: "\u53BB\u767B\u5F55"
      }, void 0, false)]
    }, void 0, true) : favorites.length === 0 ?
    /*#__PURE__*/
    /* 空状态：无收藏 */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "empty-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-icon",
        children: "\u2764\uFE0F"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-text",
        children: "\u6682\u65E0\u6536\u85CF"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-hint",
        children: "\u53BB\u83DC\u5355\u9875\u901B\u901B\uFF0C\u6536\u85CF\u559C\u6B22\u7684\u83DC\u54C1\u5427"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "go-menu-btn",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
            url: "/pages/category/index"
          });
        },
        children: "\u53BB\u83DC\u5355"
      }, void 0, false)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.ScrollView, {
      scrollY: true,
      className: "favorites-list",
      children: favorites.map(function (fav) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "fav-card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DishImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            src: fav.dish.image || "",
            mode: "aspectFill",
            className: "fav-img"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "fav-info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "fav-name",
              children: fav.dish.name
            }, void 0, false), fav.dish.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "fav-desc",
              children: fav.dish.description
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "fav-footer",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "fav-price",
                children: ["\xA5", Number(fav.dish.price).toFixed(2)]
              }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "fav-actions",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "unfavorite-btn",
                  onClick: function onClick() {
                    return handleUnfavorite(fav.dishId);
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    children: "\u2764\uFE0F"
                  }, void 0, false)
                }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "quantity-ctrl",
                  children: [getItemCount(fav.dishId) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                      className: "btn-minus",
                      onClick: function onClick() {
                        return removeItem(fav.dishId);
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                        children: "-"
                      }, void 0, false)
                    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                      className: "qty-num",
                      children: getItemCount(fav.dishId)
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: "btn-add",
                    onClick: function onClick() {
                      return addItem(fav.dish);
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                      children: "+"
                    }, void 0, false)
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, fav.id, true);
      })
    }, void 0, false)
  }, void 0, false);
}

/***/ }),

/***/ "./src/pages/favorites/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/favorites/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_favorites_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/favorites/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/favorites/index!./src/pages/favorites/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_favorites_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/favorites/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_favorites_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/favorites/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map