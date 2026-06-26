"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/splash/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./src/pages/splash/index.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./src/pages/splash/index.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SplashPage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var requestAnimationFrame = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/index.js")["requestAnimationFrame"];






/**
 * 开屏广告页面（Splash Screen）
 *
 * 功能说明：
 * 1. 小程序启动时第一个展示的页面，作为品牌展示和加载过渡
 * 2. 展示品牌 Logo、品牌名称、Slogan 和食欲感十足的视觉设计
 * 3. 带有入场动画效果（Logo 弹跳、文字渐显、食物装饰飘动）
 * 4. 2.5 秒后自动跳转到首页（用户可点击"立即体验"按钮提前跳过）
 *
 * 设计理念：
 * - 暖色调背景（渐变橙色 → 红色），激发食欲
 * - 食物 emoji 装饰元素随机飘落，增加活泼感和食欲吸引力
 * - 太阳厨师 Logo 居中大图展示，配合弹跳动画
 * - 底部品牌信息简洁有力
 */

function SplashPage() {
  /** 动画是否已就绪（用于触发 CSS transition） */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    ready = _useState2[0],
    setReady = _useState2[1];
  /** 飘落的食物 emoji 列表 */
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      // 预设食物 emoji 池，每次随机取 12 个
      var pool = ["🍜", "🍲", "🍛", "🍱", "🥘", "🍝", "🦐", "🥩", "🥗", "🌶️", "🧄", "🫚", "🍗", "🦀", "🐟", "🥟", "🍤", "🫕", "🥮"];
      var items = [];
      for (var i = 0; i < 12; i++) {
        items.push({
          emoji: pool[Math.floor(Math.random() * pool.length)],
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 3,
          size: 16 + Math.random() * 20
        });
      }
      return items;
    }),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 1),
    foodItems = _useState4[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 延迟一帧触发动画，确保 DOM 已渲染
    requestAnimationFrame(function () {
      return setReady(true);
    });

    // 2.5 秒后自动跳转到 Tab 首页
    var timer = setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
        url: "/pages/index/index"
      });
    }, 2500);
    return function () {
      return clearTimeout(timer);
    };
  }, []);

  /**
   * 用户点击"立即体验"，提前关闭开屏页并进入首页
   */
  var handleEnter = function handleEnter() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: "/pages/index/index"
    });
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "splash-page",
    children: [foodItems.map(function (item, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "food-float ".concat(ready ? "active" : ""),
        style: {
          left: "".concat(item.left, "%"),
          animationDelay: "".concat(item.delay, "s"),
          animationDuration: "".concat(item.duration, "s"),
          fontSize: "".concat(item.size, "rpx"),
          opacity: 0.15 + Math.random() * 0.25
        },
        children: item.emoji
      }, idx, false);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "splash-content ".concat(ready ? "ready" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "logo-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "logo-glow"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
          className: "logo-img",
          src: __webpack_require__(/*! ../../assets/logo.jpg */ "./src/assets/logo.jpg"),
          mode: "aspectFit"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "brand-name",
        children: "\u6D77\u5BB4\u79C1\u53A8"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "slogan-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "slogan-text",
          children: "\u6BCF\u65E5\u65B0\u9C9C"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "slogan-dot",
          children: "\xB7"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "slogan-text",
          children: "\u73B0\u505A\u73B0\u5356"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "slogan-dot",
          children: "\xB7"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "slogan-text",
          children: "\u5BB6\u7684\u5473\u9053"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "sub-slogan",
        children: "\u7504\u9009\u98DF\u6750 \xB7 \u5320\u5FC3\u70F9\u996A \xB7 \u6E29\u6696\u6BCF\u4E00\u9910"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "divider",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "divider-line"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "divider-icon",
          children: "\uD83C\uDF7D\uFE0F"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "divider-line"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "feature-tags",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "tag",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "tag-emoji",
            children: "\uD83C\uDF3F"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "tag-text",
            children: "\u65B0\u9C9C\u76F4\u8FBE"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "tag",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "tag-emoji",
            children: "\uD83D\uDD25"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "tag-text",
            children: "\u73B0\u70B9\u73B0\u505A"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "tag",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "tag-emoji",
            children: "\uD83D\uDCAF"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "tag-text",
            children: "\u54C1\u8D28\u4FDD\u8BC1"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "splash-footer ".concat(ready ? "ready" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "enter-btn",
        onClick: handleEnter,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "enter-text",
          children: "\u7ACB\u5373\u4F53\u9A8C"
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "copyright",
        children: "\xA9 \u6D77\u5BB4\u79C1\u53A8 Food Order System"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/splash/index.tsx":
/*!************************************!*\
  !*** ./src/pages/splash/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_splash_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./src/pages/splash/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_splash_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/splash/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_splash_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/splash/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map