"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/blindbox/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/blindbox/index!./src/pages/blindbox/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/blindbox/index!./src/pages/blindbox/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlindboxPage; }
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
 * 开盲盒页面
 *
 * 功能说明：
 * 1. 从所有菜品中随机抽取一道，模拟盲盒开奖效果
 * 2. 点击"开始" → 菜品名称快速轮播（加速效果）
 * 3. 点击"停止" → 轮播逐渐减速，最终停留在一道随机菜品
 * 4. 揭晓结果：展示菜品详情，支持加入收藏和购物车
 *
 * 动画策略：
 * - 使用 setInterval 控制轮播速度，开始阶段快速（50ms/次），
 *   停止阶段逐步降速（50→100→200→400→800ms），模拟物理减速
 * - 结果揭晓时带放大+渐显过渡效果
 */











/** 轮播状态 */

function BlindboxPage() {
  var _items$find;
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn;
  var _useCartStore = (0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.useCartStore)(),
    addItem = _useCartStore.addItem,
    items = _useCartStore.items;

  /** 所有可用菜品列表（全部） */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    allDishes = _useState2[0],
    setAllDishes = _useState2[1];
  /** 分类列表 */
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  /** 选中的分类 ID（'all' 表示全部） */
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    selectedCategoryId = _useState6[0],
    setSelectedCategoryId = _useState6[1];
  /** 加载中 */
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  /** 当前轮播展示的菜品 */
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    currentDish = _useState0[0],
    setCurrentDish = _useState0[1];
  /** 最终揭晓的菜品 */
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState1, 2),
    resultDish = _useState10[0],
    setResultDish = _useState10[1];
  /** 轮播状态 */
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('idle'),
    _useState12 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState11, 2),
    spinState = _useState12[0],
    setSpinState = _useState12[1];
  /** 是否已收藏 */
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState13, 2),
    isFavorited = _useState14[0],
    setIsFavorited = _useState14[1];
  /** 是否正在操作收藏 */
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState15, 2),
    favoriting = _useState16[0],
    setFavoriting = _useState16[1];

  // 使用 ref 存储定时器和状态，避免闭包陷阱
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var spinStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('idle');

  /** 加载所有菜品和分类 */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, dishRes, catRes, dishes, active, cats, _t;
        return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              setLoading(true);
              _context.n = 1;
              return Promise.all([_api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list({
                limit: 200,
                sort: 'newest'
              }), _api__WEBPACK_IMPORTED_MODULE_2__.categoryApi.list()]);
            case 1:
              _yield$Promise$all = _context.v;
              _yield$Promise$all2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_yield$Promise$all, 2);
              dishRes = _yield$Promise$all2[0];
              catRes = _yield$Promise$all2[1];
              dishes = (Array.isArray(dishRes) ? dishRes : dishRes === null || dishRes === void 0 ? void 0 : dishRes.data) || [];
              active = dishes.filter(function (d) {
                return d && Number(d.stock) > 0;
              });
              setAllDishes(active);
              cats = Array.isArray(catRes) ? catRes : (catRes === null || catRes === void 0 ? void 0 : catRes.data) || [];
              setCategories(cats);
              if (active.length === 0) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '暂无可用菜品',
                  icon: 'none'
                });
              }
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('[盲盒] 加载数据失败:', _t);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: '加载失败',
                icon: 'none'
              });
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
    loadData();
  }, []);

  /** 当前分类下的可用菜品（按 selectedCategoryId 过滤） */
  var filteredDishes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (selectedCategoryId === 'all') return allDishes;
    return allDishes.filter(function (d) {
      return d.categoryId === selectedCategoryId;
    });
  }, [allDishes, selectedCategoryId]);

  /** 随机获取一个菜品（不重复上一个） */
  var randomDish = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (prev) {
    if (filteredDishes.length <= 1) return filteredDishes[0];
    var d;
    do {
      d = filteredDishes[Math.floor(Math.random() * filteredDishes.length)];
    } while (d.id === (prev === null || prev === void 0 ? void 0 : prev.id) && filteredDishes.length > 1);
    return d;
  }, [filteredDishes]);

  /** 同步 ref 状态 */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    spinStateRef.current = spinState;
  }, [spinState]);

  /**
   * 轮播动画核心
   * 递归设置定时器，每次更新当前展示的菜品
   * @param speed - 当前轮播速度（ms），speed 越大越慢
   */
  var spinAnimation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (speed) {
    if (spinStateRef.current !== 'spinning' && spinStateRef.current !== 'stopping') {
      return;
    }
    setCurrentDish(function (prev) {
      return randomDish(prev);
    });
    timerRef.current = setTimeout(function () {
      return spinAnimation(speed);
    }, speed);
  }, [randomDish]);

  /**
   * 减速停止序列
   * 速度阶梯：100ms → 200ms → 400ms → 800ms
   * 每档轮播 2 次后进入下一档，最后一档结束后揭晓结果
   */
  var startDeceleration = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (finalDish) {
    var speeds = [100, 100, 200, 200, 400, 400, 800, 800]; // 每档2次
    var index = 0;
    var _tick = function tick() {
      if (index >= speeds.length) {
        // ✅ 减速完毕，定格展示 finalDish（这就是最终结果）
        setCurrentDish(finalDish);
        // 停留 800ms 让用户看清，再揭晓
        timerRef.current = setTimeout(function () {
          setResultDish(finalDish);
          setSpinState('revealed');
        }, 800);
        return;
      }

      // 减速过程中展示诱饵菜品（排除 finalDish，且不重复上一个）
      setCurrentDish(function (prev) {
        var candidates = filteredDishes.filter(function (d) {
          return d.id !== finalDish.id && d.id !== (prev === null || prev === void 0 ? void 0 : prev.id);
        });
        if (candidates.length === 0) return prev || filteredDishes[0];
        return candidates[Math.floor(Math.random() * candidates.length)];
      });
      index++;
      timerRef.current = setTimeout(_tick, speeds[index - 1]);
    };
    _tick();
  }, [filteredDishes]);

  /** 点击"开始" */
  var handleStart = function handleStart() {
    if (!isLoggedIn) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }
    if (filteredDishes.length === 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '该分类暂无菜品',
        icon: 'none'
      });
      return;
    }

    // 重置状态
    setResultDish(null);
    setIsFavorited(false);
    setSpinState('spinning');

    // 立即显示第一个随机菜品
    setCurrentDish(randomDish(null));

    // 启动快速轮播（50ms 间隔）
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(function () {
      return spinAnimation(50);
    }, 50);
  };

  /** 点击"停止" */
  var handleStop = function handleStop() {
    if (spinState !== 'spinning') return;

    // 清除当前轮播定时器
    if (timerRef.current) clearTimeout(timerRef.current);
    setSpinState('stopping');

    // 随机选定最终菜品
    var _final = filteredDishes[Math.floor(Math.random() * filteredDishes.length)];

    // 延迟一帧后开始减速动画
    setTimeout(function () {
      return startDeceleration(_final);
    }, 60);
  };

  /**
   * 重新开盒
   * 清空结果，回到初始状态
   */
  var handleReset = function handleReset() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentDish(null);
    setResultDish(null);
    setIsFavorited(false);
    setSpinState('idle');
  };

  /** 添加/取消收藏 */
  var handleToggleFavorite = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2() {
      var _t2;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!resultDish || !isLoggedIn)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setFavoriting(true);
            _context2.p = 2;
            if (!isFavorited) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.remove(resultDish.id);
          case 3:
            setIsFavorited(false);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已取消收藏',
              icon: 'none'
            });
            _context2.n = 6;
            break;
          case 4:
            _context2.n = 5;
            return _api__WEBPACK_IMPORTED_MODULE_2__.favoriteApi.add(resultDish.id);
          case 5:
            setIsFavorited(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已加入收藏 ❤️',
              icon: 'none'
            });
          case 6:
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '操作失败',
              icon: 'none'
            });
          case 8:
            _context2.p = 8;
            setFavoriting(false);
            return _context2.f(8);
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 7, 8, 9]]);
    }));
    return function handleToggleFavorite() {
      return _ref2.apply(this, arguments);
    };
  }();

  /** 加入购物车 */
  var handleAddToCart = function handleAddToCart() {
    if (!resultDish) return;
    addItem(resultDish);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '已加入购物车 🛒',
      icon: 'none'
    });
  };

  /** 获取结果菜品在购物车中的数量 */
  var cartCount = resultDish ? ((_items$find = items.find(function (i) {
    return i.dish.id === resultDish.id;
  })) === null || _items$find === void 0 ? void 0 : _items$find.quantity) || 0 : 0;

  /** 清理定时器 */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "blindbox-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "loading-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "loading-icon",
          children: "\uD83C\uDF81"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          children: "\u51C6\u5907\u76F2\u76D2\u4E2D..."
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }

  // 登录引导
  if (!isLoggedIn) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "blindbox-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "login-guide",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "guide-icon",
          children: "\uD83D\uDD12"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "guide-text",
          children: "\u8BF7\u5148\u767B\u5F55"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "guide-hint",
          children: "\u767B\u5F55\u540E\u5373\u53EF\u5F00\u542F\u7F8E\u98DF\u76F2\u76D2"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "guide-btn",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
              url: '/pages/profile/index'
            });
          },
          children: "\u53BB\u767B\u5F55"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "blindbox-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "bg-decor",
      children: ['🍜', '🍕', '🍔', '🍱', '🍰', '🍗', '🥗', '🌮'].map(function (emoji, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "decor-item d".concat(i),
          style: {
            left: "".concat(10 + i % 4 * 24, "%"),
            top: i < 4 ? '8%' : '78%',
            animationDelay: "".concat(i * 0.3, "s")
          },
          children: emoji
        }, i, false);
      })
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "blindbox-main",
      children: [spinState !== 'revealed' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "box-area",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "dish-card ".concat(spinState === 'spinning' || spinState === 'stopping' ? 'spinning' : ''),
          children: spinState === 'idle' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "box-emoji",
              children: "\uD83C\uDF81"
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "box-label",
              children: "\u795E\u79D8\u76F2\u76D2"
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "box-hint",
              children: filteredDishes.length > 0 ? "\u5171 ".concat(filteredDishes.length, " \u9053\u7F8E\u98DF\u7B49\u4F60\u6765\u62BD") : '暂无可用菜品'
            }, void 0, false)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "spin-dish",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DishImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                src: (currentDish === null || currentDish === void 0 ? void 0 : currentDish.image) || '',
                className: "spin-img",
                preview: false,
                placeholder: "?"
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "spin-name",
                children: (currentDish === null || currentDish === void 0 ? void 0 : currentDish.name) || '???'
              }, void 0, false)]
            }, void 0, true), spinState === 'stopping' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "stopping-tip",
              children: "\u5373\u5C06\u63ED\u6653..."
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false), spinState === 'idle' && categories.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "category-selector",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.ScrollView, {
            scrollX: true,
            className: "cat-scroll",
            showScrollbar: false,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "cat-list",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "cat-tag ".concat(selectedCategoryId === 'all' ? 'active' : ''),
                onClick: function onClick() {
                  return setSelectedCategoryId('all');
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: "cat-icon",
                  children: "\uD83C\uDF7D\uFE0F"
                }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: "cat-name",
                  children: "\u5168\u90E8"
                }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: "cat-count",
                  children: allDishes.length
                }, void 0, false)]
              }, void 0, true), categories.map(function (cat) {
                var count = allDishes.filter(function (d) {
                  return d.categoryId === cat.id;
                }).length;
                if (count === 0) return null; // 只显示有菜品的分类
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: "cat-tag ".concat(selectedCategoryId === cat.id ? 'active' : ''),
                  onClick: function onClick() {
                    return setSelectedCategoryId(cat.id);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: "cat-icon",
                    children: cat.icon || '🍴'
                  }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: "cat-name",
                    children: cat.name
                  }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: "cat-count",
                    children: count
                  }, void 0, false)]
                }, cat.id, true);
              })]
            }, void 0, true)
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "box-actions",
          children: spinState === 'idle' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "start-btn",
            onClick: handleStart,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "btn-text",
              children: "\uD83C\uDFB2 \u5F00\u59CB\u62BD\u76F2\u76D2"
            }, void 0, false)
          }, void 0, false) : spinState === 'spinning' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "stop-btn",
            onClick: handleStop,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "btn-text",
              children: "\u270B \u505C\uFF01\u5C31\u8FD9\u4E2A"
            }, void 0, false)
          }, void 0, false) : spinState === 'stopping' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "stopping-msg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: "\u6B63\u5728\u63ED\u6653..."
            }, void 0, false)
          }, void 0, false) : null
        }, void 0, false)]
      }, void 0, true), spinState === 'revealed' && resultDish && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "result-area",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "reveal-card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "reveal-badge",
            children: "\uD83C\uDF89 \u606D\u559C\u83B7\u5F97"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DishImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            src: resultDish.image || '',
            className: "result-img",
            placeholder: "?"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "result-name",
            children: resultDish.name
          }, void 0, false), resultDish.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "result-desc",
            children: resultDish.description
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "result-meta",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "result-price",
              children: ["\xA5", Number(resultDish.price).toFixed(2)]
            }, void 0, true), resultDish.sales > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "result-sales",
              children: ["\u5DF2\u552E ", resultDish.sales]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "result-actions",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "fav-btn ".concat(isFavorited ? 'favorited' : '', " ").concat(favoriting ? 'disabled' : ''),
              onClick: favoriting ? undefined : handleToggleFavorite,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                children: isFavorited ? '❤️ 已收藏' : '🤍 收藏'
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "cart-btn",
              onClick: handleAddToCart,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                children: cartCount > 0 ? "\uD83D\uDED2 \u52A0\u5165\u8D2D\u7269\u8F66 (".concat(cartCount, ")") : '🛒 加入购物车'
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "again-btn",
            onClick: handleReset,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: "\uD83D\uDD04 \u518D\u6765\u4E00\u6B21"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/blindbox/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/blindbox/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_blindbox_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/blindbox/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/blindbox/index!./src/pages/blindbox/index.tsx");


var config = {"navigationBarTitleText":"开盲盒","navigationBarBackgroundColor":"#1a1a2e","navigationBarTextStyle":"white"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_blindbox_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/blindbox/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_blindbox_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/blindbox/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map