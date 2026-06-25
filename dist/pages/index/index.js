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
 * 首页
 *
 * 页面结构自上而下：
 * 1. 搜索栏 — 输入关键词搜索菜品
 * 2. Banner — 今日推荐横幅
 * 3. 菜品列表 — 展示推荐菜品，支持加减购物车操作
 * 4. 购物车悬浮栏 — 有商品时固定在底部，显示总数量和总金额，点击跳转购物车
 *
 * 注意：推荐分类和全部分类快捷入口已注释（见下方解释），
 * 因为当前版本中分类导航由底部 Tab 的"分类"页承担。
 */

function IndexPage() {
  /** 主题样式字符串，注入根 View */
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  /** 分类列表 */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  /** 当前显示的菜品列表 */
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    dishes = _useState4[0],
    setDishes = _useState4[1];
  /** 搜索关键词 */
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    keyword = _useState6[0],
    setKeyword = _useState6[1];
  /** 页面加载状态 */
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  /** 已收藏的菜品 ID 集合，用于快速判断是否已收藏 */
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set()),
    _useState0 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    favoriteIds = _useState0[0],
    setFavoriteIds = _useState0[1];
  /** 购物车操作 */
  var _useCartStore = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(),
    addItem = _useCartStore.addItem,
    removeItem = _useCartStore.removeItem,
    items = _useCartStore.items,
    totalCount = _useCartStore.totalCount,
    totalAmount = _useCartStore.totalAmount;
  /** 登录状态，用于判断是否允许收藏操作 */
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, []);

  /**
   * 页面数据加载
   *
   * 使用 Promise.all 并行请求两个接口，提高加载速度：
   * - categoryApi.list(): 获取所有分类（首页不会直接展示，但为未来扩展预留）
   * - dishApi.list({ recommended: true }): 获取推荐菜品列表（首页主内容区）
   *
   * 并行请求失败时仅 console.error 记录，不阻塞页面渲染。
   */
  var loadData = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, cats, dishRes, favs, _t, _t2;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            // 并行请求：分类数据 + 推荐菜品数据 + 收藏列表
            _context.n = 1;
            return Promise.all([_api__WEBPACK_IMPORTED_MODULE_2__.categoryApi.list(), _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list({
              recommended: true
            })]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_yield$Promise$all, 2);
            cats = _yield$Promise$all2[0];
            dishRes = _yield$Promise$all2[1];
            setCategories(cats);
            setDishes(dishRes);

            // 加载收藏列表（静默：未登录或失败不阻塞页面）
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
            console.error(_t2);
          case 7:
            _context.p = 7;
            setLoading(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4], [0, 6, 7, 8]]);
    }));
    return function loadData() {
      return _ref.apply(this, arguments);
    };
  }();

  /** 切换收藏状态（需登录） */
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
            isFav = favoriteIds.has(dishId); // 乐观更新：先改 UI，再调接口
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
            // 接口失败，回滚状态
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

  /**
   * 搜索处理
   *
   * 行为：
   * - 有关键词时：调用 dishApi.list({ keyword }) 按名称模糊搜索
   * - 无关键词时（空搜索或清空）：重新加载默认推荐菜品列表
   *
   * 触发方式：用户输入内容后按键盘"完成"/"搜索"键（Input onConfirm 事件）
   */
  var handleSearch = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee3() {
      var res;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (keyword.trim()) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, loadData());
          case 1:
            _context3.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list({
              keyword: keyword
            });
          case 2:
            res = _context3.v;
            setDishes(res);
          case 3:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function handleSearch() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * 查询某菜品在购物车中的数量
   *
   * 用于控制菜品卡片上的加减按钮显示状态
   * 返回 0 时不显示减号按钮和数量，仅显示 + 按钮
   *
   * @param dishId - 菜品 ID
   * @returns 购物车中该菜品的数量，不在购物车中返回 0
   */
  var getItemCount = function getItemCount(dishId) {
    var item = items.find(function (i) {
      return i.dish.id === dishId;
    });
    return item ? item.quantity : 0;
  };

  /**
   * 跳转到菜单分类页，并预选指定分类
   *
   * 实现方式：
   * 1. 使用 switchTab 切换到分类 Tab 页（Tab 切换而非 navigateTo 页面跳转）
   * 2. 通过 setStorageSync 写入 'active_cat' key，目标页面读取此 key 并激活对应分类 Tab
   * 这是一种跨 Tab 传递参数的模式（Tab 页面不支持 URL query 参数）
   *
   * @param catId - 要预选中的分类 ID
   */
  var goToMenu = function goToMenu(catId) {
    // 跳转到菜单页（分类 Tab），传递要选中的分类 id
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: "/pages/category/index"
    });
    if (catId) {
      // 通过本地缓存传递分类 ID，分类页在 useDidShow 中读取并激活对应 Tab
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("active_cat", catId);
    }
  };

  /** 跳转到购物车页面（Tab 切换） */
  var goToCart = function goToCart() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: "/pages/cart/index"
    });
  };

  /**
   * 按分类筛选 —— 实际上是跳转到分类页并预选指定分类
   *
   * 首页不直接做分类筛选，而是委托给分类 Tab 处理。
   * 这样保持了单一职责：分类页管理分类视图，首页管理推荐内容。
   */
  var filterByCategory = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee4(catId) {
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            goToMenu(catId);
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function filterByCategory(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  /** 被标记为推荐的分类列表（用于首页推荐分类区域） */
  var recommendedCats = categories.filter(function (c) {
    return c.isRecommended;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "index-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "search-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "search-input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "search-icon",
          children: "\uD83D\uDD0D"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Input, {
          placeholder: "\u641C\u7D22\u83DC\u54C1...",
          value: keyword,
          onInput: function onInput(e) {
            return setKeyword(e.detail.value);
          },
          onConfirm: handleSearch // 键盘确认键触发搜索
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "banner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "banner-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "banner-title",
          children: "\u4ECA\u65E5\u63A8\u8350"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "banner-sub",
          children: "\u65B0\u9C9C\u98DF\u6750 \xB7 \u73B0\u505A\u73B0\u5356"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "category-section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\uD83D\uDCCB\u5F3A\u529B\u63A8\u8350"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.ScrollView, {
        scrollY: true,
        className: "dish-list",
        children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "loading",
          children: "\u52A0\u8F7D\u4E2D..."
        }, void 0, false) : dishes.map(function (dish) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "dish-card",
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
              className: "dish-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "dish-name",
                children: dish.name
              }, void 0, false), dish.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "dish-desc",
                children: dish.description
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "dish-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: "dish-price",
                  children: ["\xA5", Number(dish.price).toFixed(2)]
                }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "quantity-ctrl",
                  children: [getItemCount(dish.id) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                      className: "btn-minus",
                      onClick: function onClick() {
                        return removeItem(dish.id);
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                        children: "-"
                      }, void 0, false)
                    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                      className: "qty-num",
                      children: getItemCount(dish.id)
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: "btn-add",
                    onClick: function onClick() {
                      return addItem(dish);
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                      children: "+"
                    }, void 0, false)
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true)]
          }, dish.id, true);
        })
      }, void 0, false)]
    }, void 0, true), totalCount() > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "cart-bar",
      onClick: goToCart,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "cart-icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          children: "\uD83D\uDED2"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "cart-badge",
          children: totalCount()
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "cart-label",
        children: "\u53BB\u7ED3\u7B97"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
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