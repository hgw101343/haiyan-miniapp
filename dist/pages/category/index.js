"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/category/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/category/index!./src/pages/category/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/category/index!./src/pages/category/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CategoryPage; }
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













function CategoryPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    activeCat = _useState4[0],
    setActiveCat = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    dishes = _useState6[0],
    setDishes = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    error = _useState0[0],
    setError = _useState0[1];
  /** 已收藏的菜品 ID 集合 */
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set()),
    _useState10 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState1, 2),
    favoriteIds = _useState10[0],
    setFavoriteIds = _useState10[1];
  var _useCartStore = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(),
    addItem = _useCartStore.addItem,
    removeItem = _useCartStore.removeItem,
    items = _useCartStore.items,
    totalCount = _useCartStore.totalCount,
    totalAmount = _useCartStore.totalAmount;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadCategories();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (activeCat) loadDishes(activeCat);
  }, [activeCat]);
  var loadCategories = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var cats, preselected, favs, _t, _t2;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            setError(false);
            _context.n = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__.categoryApi.list();
          case 1:
            cats = _context.v;
            setCategories(cats);
            if (cats.length > 0) {
              // 优先读取从首页传来的选中分类 ID
              preselected = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('active_cat');
              if (preselected && cats.find(function (c) {
                return c.id === preselected;
              })) {
                setActiveCat(preselected);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().removeStorageSync('active_cat');
              } else {
                setActiveCat(cats[0].id);
              }
            }
            // 加载收藏列表（仅登录用户）
            if (!isLoggedIn) {
              _context.n = 5;
              break;
            }
            _context.p = 2;
            _context.n = 3;
            return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.list();
          case 3:
            favs = _context.v;
            setFavoriteIds(new Set(favs.map(function (f) {
              return f.dishId;
            })));
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t2 = _context.v;
            console.error("加载分类失败:", _t2);
            setError(true);
          case 7:
            _context.p = 7;
            setLoading(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4], [0, 6, 7, 8]]);
    }));
    return function loadCategories() {
      return _ref.apply(this, arguments);
    };
  }();

  /** 切换收藏状态（需登录，乐观更新） */
  var toggleFavorite = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2(dishId) {
      var isFav, _t3;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (isLoggedIn) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请先登录',
              icon: 'none',
              duration: 1500
            });
            return _context2.a(2);
          case 1:
            isFav = favoriteIds.has(dishId);
            setFavoriteIds(function (prev) {
              var next = new Set(prev);
              isFav ? next.delete(dishId) : next.add(dishId);
              return next;
            });
            _context2.p = 2;
            if (!isFav) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.remove(dishId);
          case 3:
            _context2.n = 5;
            break;
          case 4:
            _context2.n = 5;
            return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.add(dishId);
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t3 = _context2.v;
            setFavoriteIds(function (prev) {
              var next = new Set(prev);
              isFav ? next.add(dishId) : next.delete(dishId);
              return next;
            });
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 6]]);
    }));
    return function toggleFavorite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var loadDishes = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee3(catId) {
      var res, _t4;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setLoading(true);
            _context3.n = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list({
              categoryId: catId,
              limit: 50
            });
          case 1:
            res = _context3.v;
            setDishes(res);
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t4 = _context3.v;
            console.error("加载菜品失败:", _t4);
          case 3:
            _context3.p = 3;
            setLoading(false);
            return _context3.f(3);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2, 3, 4]]);
    }));
    return function loadDishes(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getItemCount = function getItemCount(dishId) {
    var _items$find;
    return ((_items$find = items.find(function (i) {
      return i.dish.id === dishId;
    })) === null || _items$find === void 0 ? void 0 : _items$find.quantity) || 0;
  };
  var handleRefresh = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    loadCategories();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "category-page",
    style: themeStyle,
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "loading-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "loading-text",
        children: "\u52A0\u8F7D\u4E2D..."
      }, void 0, false)
    }, void 0, false), !loading && categories.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "empty-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-icon",
        children: "\uD83C\uDF7D\uFE0F"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "empty-text",
        children: error ? "加载失败，请下拉刷新" : "暂无分类"
      }, void 0, false), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "retry-btn",
        onClick: handleRefresh,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "retry-text",
          children: "\u70B9\u51FB\u91CD\u8BD5"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), categories.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.ScrollView, {
      scrollY: true,
      className: "left-nav",
      children: categories.map(function (cat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "nav-item ".concat(activeCat === cat.id ? "active" : ""),
          onClick: function onClick() {
            return setActiveCat(cat.id);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "nav-icon",
            children: cat.icon
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "nav-name",
            children: cat.name
          }, void 0, false)]
        }, cat.id, true);
      })
    }, void 0, false), categories.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.ScrollView, {
      scrollY: true,
      className: "right-dishes",
      children: dishes.length === 0 && !loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "empty-dishes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "empty-text",
          children: "\u6682\u65E0\u83DC\u54C1"
        }, void 0, false)
      }, void 0, false) : dishes.map(function (dish) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "dish-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DishImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            src: dish.image || "",
            mode: "aspectFill",
            className: "dish-img"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "fav-btn ".concat(favoriteIds.has(dish.id) ? "active" : ""),
            onClick: function onClick(e) {
              e.stopPropagation();
              toggleFavorite(dish.id);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: favoriteIds.has(dish.id) ? "❤️" : "🤍"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "dish-meta",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "dish-name",
              children: dish.name
            }, void 0, false), dish.isFeatured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "tag-hot",
              children: "\u70ED\u95E8"
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "dish-desc",
              children: dish.description
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "dish-footer",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "dish-price",
                children: ["\xA5", Number(dish.price).toFixed(2)]
              }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "stepper",
                children: [getItemCount(dish.id) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: "btn minus",
                    onClick: function onClick() {
                      return removeItem(dish.id);
                    },
                    children: "-"
                  }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: "num",
                    children: getItemCount(dish.id)
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "btn plus",
                  onClick: function onClick() {
                    return addItem(dish);
                  },
                  children: "+"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, dish.id, true);
      })
    }, void 0, false), totalCount() > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "cart-bar",
      onClick: function onClick() {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
          url: "/pages/cart/index"
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "cart-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "cart-icon",
          children: "\uD83D\uDED2"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "badge",
          children: totalCount()
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "cart-go",
        children: "\u53BB\u7ED3\u7B97"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "cart-price",
        children: ["\xA5", totalAmount().toFixed(2)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/category/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/category/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_category_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/category/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/category/index!./src/pages/category/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_category_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/category/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_category_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/category/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map