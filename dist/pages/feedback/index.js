"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/feedback/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/index!./src/pages/feedback/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/index!./src/pages/feedback/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FeedbackPage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");





/**
 * 意见反馈页面
 *
 * 功能：
 * 1. 文字输入框：用户填写反馈内容（必填，最多 500 字）
 * 2. 图片上传：可选项，最多上传 4 张图片
 * 3. 提交按钮：校验后调用 feedbackApi.submit 提交到后端
 *
 * 权限：需要登录，未登录时显示引导页
 */









function FeedbackPage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    isLoggedIn = _useUserStore.isLoggedIn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    images = _useState4[0],
    setImages = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    submitting = _useState6[0],
    setSubmitting = _useState6[1];

  /** 未登录时显示引导页 */
  if (!isLoggedIn) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "feedback-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "empty-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "empty-icon",
          children: "\uD83D\uDD12"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "empty-text",
          children: "\u8BF7\u5148\u767B\u5F55"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "empty-hint",
          children: "\u767B\u5F55\u540E\u5373\u53EF\u63D0\u4EA4\u53CD\u9988\u610F\u89C1"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "go-menu-btn",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
              url: "/pages/profile/index"
            });
          },
          children: "\u53BB\u767B\u5F55"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }

  /** 选择图片（调用微信原生选择图片 API） */
  var handleChooseImage = function handleChooseImage() {
    var remaining = 4 - images.length;
    if (remaining <= 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "最多上传4张图片",
        icon: "none"
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: remaining,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: function success(res) {
        setImages([].concat((0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(images), (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(res.tempFilePaths)));
      },
      fail: function fail(err) {
        console.error("[feedback] 选择图片失败:", err);
      }
    });
  };

  /** 移除已选中的图片 */
  var handleRemoveImage = function handleRemoveImage(index) {
    setImages(images.filter(function (_, i) {
      return i !== index;
    }));
  };

  /** 提交反馈 */
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var imageUrls, _iterator, _step, filePath, _data$data, uploadRes, data, msg, _t, _t2, _t3;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (content.trim()) {
              _context.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请输入反馈内容",
              icon: "none"
            });
            return _context.a(2);
          case 1:
            if (!submitting) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            setSubmitting(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: "提交中...",
              mask: true
            });
            _context.p = 3;
            // 如果有图片，先上传到服务器获取 URL
            imageUrls = [];
            if (!(images.length > 0)) {
              _context.n = 14;
              break;
            }
            _iterator = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(images);
            _context.p = 4;
            _iterator.s();
          case 5:
            if ((_step = _iterator.n()).done) {
              _context.n = 10;
              break;
            }
            filePath = _step.value;
            _context.p = 6;
            _context.n = 7;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().uploadFile({
              url: "".concat(_api__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_BASE, "/api/upload"),
              filePath: filePath,
              name: "image",
              formData: {
                type: "feedback"
              },
              header: {
                Authorization: "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("token"))
              }
            });
          case 7:
            uploadRes = _context.v;
            data = JSON.parse(uploadRes.data);
            if (data.success && (_data$data = data.data) !== null && _data$data !== void 0 && _data$data.url) {
              imageUrls.push(data.data.url);
            } else {
              console.error("[feedback] 上传响应异常:", uploadRes.data);
            }
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t = _context.v;
            console.error("[feedback] 上传图片失败:", _t);
            // 上传失败不阻断流程，仅提示一次
          case 9:
            _context.n = 5;
            break;
          case 10:
            _context.n = 12;
            break;
          case 11:
            _context.p = 11;
            _t2 = _context.v;
            _iterator.e(_t2);
          case 12:
            _context.p = 12;
            _iterator.f();
            return _context.f(12);
          case 13:
            if (imageUrls.length === 0 && images.length > 0) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "图片上传失败，将仅提交文字",
                icon: "none"
              });
            }
          case 14:
            _context.n = 15;
            return _api__WEBPACK_IMPORTED_MODULE_2__.feedbackApi.submit({
              content: content.trim(),
              images: imageUrls
            });
          case 15:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "感谢您的反馈！",
              icon: "success",
              duration: 2000
            });
            setTimeout(function () {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            }, 2000);
            _context.n = 17;
            break;
          case 16:
            _context.p = 16;
            _t3 = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            msg = (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "提交失败，请重试";
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: msg.length > 20 ? msg.slice(0, 18) + "..." : msg,
              icon: "none",
              duration: 2500
            });
            console.error("[feedback] submit error:", _t3);
          case 17:
            _context.p = 17;
            setSubmitting(false);
            return _context.f(17);
          case 18:
            return _context.a(2);
        }
      }, _callee, null, [[6, 8], [4, 11, 12, 13], [3, 16, 17, 18]]);
    }));
    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: "feedback-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "feedback-hint",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
        children: "\u60A8\u7684\u610F\u89C1\u5BF9\u6211\u4EEC\u975E\u5E38\u91CD\u8981\uFF0C\u8BF7\u8BE6\u7EC6\u63CF\u8FF0\u60A8\u9047\u5230\u7684\u95EE\u9898\u6216\u5EFA\u8BAE\u3002"
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "feedback-form",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Textarea, {
        className: "feedback-textarea",
        placeholder: "\u8BF7\u8F93\u5165\u53CD\u9988\u5185\u5BB9\uFF08\u5FC5\u586B\uFF0C\u6700\u591A500\u5B57\uFF09...",
        maxlength: 500,
        value: content,
        onInput: function onInput(e) {
          return setContent(e.detail.value);
        },
        autoHeight: true
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "image-section",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "section-label",
          children: "\u56FE\u7247\uFF08\u9009\u586B\uFF0C\u6700\u591A4\u5F20\uFF09"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "image-grid",
          children: [images.map(function (url, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "image-item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
                className: "image-preview",
                style: {
                  backgroundImage: "url(".concat(url, ")")
                },
                onClick: function onClick() {
                  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
                    urls: images,
                    current: url
                  });
                }
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
                className: "remove-btn",
                onClick: function onClick() {
                  return handleRemoveImage(i);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                  children: "\xD7"
                }, void 0, false)
              }, void 0, false)]
            }, i, true);
          }), images.length < 4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "add-image-btn",
            onClick: handleChooseImage,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "add-icon",
              children: "+"
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "add-text",
              children: "\u6DFB\u52A0\u56FE\u7247"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "submit-area",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        className: "submit-btn ".concat(submitting ? "disabled" : ""),
        onClick: submitting ? undefined : handleSubmit,
        children: submitting ? "提交中..." : "提交反馈"
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/feedback/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/feedback/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/index!./src/pages/feedback/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/feedback/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createForOfIteratorHelper; }
/* harmony export */ });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/feedback/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map