"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/dish-manage/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-manage/index!./src/pages/dish-manage/index.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-manage/index!./src/pages/dish-manage/index.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DishManagePage; }
/* harmony export */ });
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var _components_DishImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/DishImage */ "./src/components/DishImage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");



/**
 * 菜品管理列表页（管理员）
 *
 * 功能：
 * 1. 菜品列表展示（卡片形式）
 * 2. 搜索（名称关键词）
 * 3. 分类筛选
 * 4. 新增菜品（跳转到编辑页）
 * 5. 编辑菜品（跳转到编辑页）
 * 6. 删除菜品（软删除）
 * 7. 上下架切换
 */









function DishManagePage() {
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    user = _useUserStore.user,
    isLoggedIn = _useUserStore.isLoggedIn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    dishes = _useState2[0],
    setDishes = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, 2),
    keyword = _useState8[0],
    setKeyword = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState0 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState9, 2),
    catFilter = _useState0[0],
    setCatFilter = _useState0[1];
  var isAdmin = (user === null || user === void 0 ? void 0 : user.role) === 'ADMIN';

  /** 加载分类 */
  var loadCategories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
    var res, list, _t;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _api__WEBPACK_IMPORTED_MODULE_2__.categoryApi.list();
        case 1:
          res = _context.v;
          list = Array.isArray(res) ? res : (res === null || res === void 0 ? void 0 : res.data) || [];
          setCategories(list);
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error('[菜品管理] 加载分类失败:', _t);
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  })), []);

  /** 加载菜品列表（含全部，不过滤 isActive） */
  var loadDishes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
    var params, res, list, _t2;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          setLoading(true);
          _context2.p = 1;
          // 管理员查看所有菜品，传 all=true 获取包括下架的菜品
          params = {
            limit: 200,
            all: true,
            sort: 'newest'
          };
          if (catFilter) params.categoryId = catFilter;
          if (keyword) params.keyword = keyword;
          _context2.n = 2;
          return _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.list(params);
        case 2:
          res = _context2.v;
          list = Array.isArray(res) ? res : (res === null || res === void 0 ? void 0 : res.data) || [];
          setDishes(list);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error('[菜品管理] 加载菜品失败:', _t2);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '加载失败',
            icon: 'none'
          });
        case 4:
          _context2.p = 4;
          setLoading(false);
          return _context2.f(4);
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 3, 4, 5]]);
  })), [catFilter, keyword]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLoggedIn) {
      loadCategories();
    }
  }, [isLoggedIn, loadCategories]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLoggedIn) {
      loadDishes();
    }
  }, [isLoggedIn, loadDishes]);

  /** 删除菜品 */
  var handleDelete = function handleDelete(dish) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '确认删除',
      content: "\u786E\u5B9A\u8981\u5220\u9664\u300C".concat(dish.name, "\u300D\u5417\uFF1F\n\uFF08\u5C06\u6267\u884C\u4E0B\u67B6\u64CD\u4F5C\uFF0C\u6570\u636E\u4E0D\u4F1A\u7269\u7406\u5220\u9664\uFF09"),
      success: function () {
        var _success = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee3(res) {
          var _t3;
          return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                if (!res.confirm) {
                  _context3.n = 4;
                  break;
                }
                _context3.p = 1;
                _context3.n = 2;
                return (0,_api__WEBPACK_IMPORTED_MODULE_2__.deleteDish)(dish.id);
              case 2:
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '删除成功',
                  icon: 'success'
                });
                loadDishes();
                _context3.n = 4;
                break;
              case 3:
                _context3.p = 3;
                _t3 = _context3.v;
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || '删除失败',
                  icon: 'none'
                });
              case 4:
                return _context3.a(2);
            }
          }, _callee3, null, [[1, 3]]);
        }));
        function success(_x) {
          return _success.apply(this, arguments);
        }
        return success;
      }()
    });
  };

  /** 切换上下架 */
  var handleToggle = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee4(dish) {
      var _t4;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return (0,_api__WEBPACK_IMPORTED_MODULE_2__.toggleDishAvailable)(dish.id, !dish.isActive);
          case 1:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: dish.isActive ? '已下架' : '已上架',
              icon: 'success'
            });
            loadDishes();
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t4 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || '操作失败',
              icon: 'none'
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    return function handleToggle(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /** 去新增 */
  var goCreate = function goCreate() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/dish-edit/index'
    });
  };

  /** 去编辑 */
  var goEdit = function goEdit(dish) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/dish-edit/index?id=".concat(dish.id)
    });
  };

  /** 查看详情 */
  var goDetail = function goDetail(dish) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/dish-edit/index?id=".concat(dish.id, "&readonly=1")
    });
  };
  if (!isLoggedIn) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "dish-manage-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "empty-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "empty-icon",
          children: "\uD83D\uDD12"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "empty-text",
          children: "\u8BF7\u5148\u767B\u5F55"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }
  if (!isAdmin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "dish-manage-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "empty-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "empty-icon",
          children: "\uD83D\uDEAB"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: "empty-text",
          children: "\u4EC5\u7BA1\u7406\u5458\u53EF\u8BBF\u95EE"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: "dish-manage-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "manage-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "search-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Input, {
          className: "search-input",
          placeholder: "\u641C\u7D22\u83DC\u54C1\u540D\u79F0...",
          placeholderClass: "input-placeholder",
          value: keyword,
          onInput: function onInput(e) {
            return setKeyword(e.detail.value);
          },
          confirmType: "search",
          onConfirm: function onConfirm() {
            return loadDishes();
          }
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "search-btn",
          onClick: function onClick() {
            return loadDishes();
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            children: "\u641C\u7D22"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "header-actions",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "refresh-btn",
          onClick: function onClick() {
            setKeyword('');
            setCatFilter(undefined);
            setTimeout(function () {
              return loadDishes();
            }, 0);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            children: "\u91CD\u7F6E"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "add-btn",
          onClick: goCreate,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            children: "+ \u65B0\u589E"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "cat-filter-scroll",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "cat-filter-item ".concat(catFilter === undefined ? 'active' : ''),
        onClick: function onClick() {
          return setCatFilter(undefined);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          children: "\u5168\u90E8\u5206\u7C7B"
        }, void 0, false)
      }, void 0, false), categories.map(function (cat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "cat-filter-item ".concat(catFilter === cat.id ? 'active' : ''),
          onClick: function onClick() {
            return setCatFilter(cat.id);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            children: [cat.icon || '🍽️', " ", cat.name]
          }, void 0, true)
        }, cat.id, false);
      })]
    }, void 0, true), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "loading-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        children: "\u52A0\u8F7D\u4E2D..."
      }, void 0, false)
    }, void 0, false) : dishes.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "empty-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "empty-icon",
        children: "\uD83D\uDCE6"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "empty-text",
        children: "\u6682\u65E0\u83DC\u54C1"
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "empty-hint",
        children: "\u70B9\u51FB\u53F3\u4E0A\u89D2\"\u65B0\u589E\"\u6DFB\u52A0\u83DC\u54C1"
      }, void 0, false)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "dish-list",
      children: dishes.map(function (dish) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "dish-card",
          onClick: function onClick() {
            return goDetail(dish);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "dish-img-wrap",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_DishImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              src: dish.image,
              name: dish.name,
              width: 200,
              height: 150,
              radius: 12
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "status-badge ".concat(dish.isActive ? 'active' : 'inactive'),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                children: dish.isActive ? '在售' : '下架'
              }, void 0, false)
            }, void 0, false), dish.isRecommended && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "recommend-badge",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                children: "\u63A8\u8350"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "dish-info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "dish-name",
              children: dish.name
            }, void 0, false), dish.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "dish-desc",
              children: dish.description
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "dish-meta",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "dish-price",
                children: ["\xA5", Number(dish.price).toFixed(2)]
              }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "dish-stock",
                children: ["\u5E93\u5B58:", dish.stock || 0]
              }, void 0, true)]
            }, void 0, true), dish.category && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "dish-cat",
              children: [dish.category.icon || '🍽️', " ", dish.category.name]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "dish-actions",
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "action-btn ".concat(dish.isActive ? 'down-btn' : 'up-btn'),
              onClick: function onClick() {
                return handleToggle(dish);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                children: dish.isActive ? '下架' : '上架'
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "action-btn edit-btn",
              onClick: function onClick() {
                return goEdit(dish);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                children: "\u7F16\u8F91"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "action-btn del-btn",
              onClick: function onClick() {
                return handleDelete(dish);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                children: "\u5220\u9664"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, dish.id, true);
      })
    }, void 0, false)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/dish-manage/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/dish-manage/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dish_manage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-manage/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-manage/index!./src/pages/dish-manage/index.tsx");


var config = {"navigationBarTitleText":"菜品管理","navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dish_manage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/dish-manage/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dish_manage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/dish-manage/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map