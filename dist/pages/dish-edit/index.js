"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/dish-edit/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-edit/index!./src/pages/dish-edit/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-edit/index!./src/pages/dish-edit/index.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DishEditPage; }
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
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/user */ "./src/store/user.ts");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");



/**
 * 菜品新增/编辑页（管理员）
 *
 * 功能：
 * 1. 表单：名称、价格、分类、描述、图片、库存、上架状态、推荐状态
 * 2. 图片上传（选择图片 → 上传到服务器）
 * 3. 提交（新增/更新）
 *
 * 路由参数：
 *   - 无参数：新增模式
 *   - id=xxx：编辑模式，加载菜品详情
 *   - readonly=1：只读模式（查看详情）
 */








function DishEditPage() {
  var _router$params, _router$params2, _categories$find;
  var _useTheme = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)(),
    themeStyle = _useTheme.themeStyle;
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    user = _useUserStore.user,
    isLoggedIn = _useUserStore.isLoggedIn;
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  // 路由参数
  var dishId = (_router$params = router.params) !== null && _router$params !== void 0 && _router$params.id ? parseInt(router.params.id) : undefined;
  var readonly = ((_router$params2 = router.params) === null || _router$params2 === void 0 ? void 0 : _router$params2.readonly) === '1';
  var isEdit = !!dishId && !readonly;

  // 表单状态
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    price = _useState4[0],
    setPrice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState6 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    categoryId = _useState6[0],
    setCategoryId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
    description = _useState8[0],
    setDescription = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('999'),
    _useState0 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState9, 2),
    stock = _useState0[0],
    setStock = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState1, 2),
    isActive = _useState10[0],
    setIsActive = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState11, 2),
    isRecommended = _useState12[0],
    setIsRecommended = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState13, 2),
    imageUrl = _useState14[0],
    setImageUrl = _useState14[1]; // 已上传的图片 URL
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState15, 2),
    tempImagePath = _useState16[0],
    setTempImagePath = _useState16[1]; // 本地临时图片路径
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState17, 2),
    categories = _useState18[0],
    setCategories = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState19, 2),
    submitting = _useState20[0],
    setSubmitting = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!dishId),
    _useState22 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState21, 2),
    loading = _useState22[0],
    setLoading = _useState22[1];
  var isAdmin = (user === null || user === void 0 ? void 0 : user.role) === 'ADMIN';

  /** 加载分类列表 */
  var loadCategories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
    var res, list, _t;
    return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
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
          console.error('[菜品编辑] 加载分类失败:', _t);
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  })), []);

  /** 加载菜品详情（编辑模式） */
  var loadDishDetail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref2 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee2(id) {
      var dish, _t2;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setLoading(true);
            _context2.p = 1;
            _context2.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_2__.dishApi.detail(id);
          case 2:
            dish = _context2.v;
            setName(dish.name || '');
            setPrice(dish.price !== undefined ? String(dish.price) : '');
            setCategoryId(dish.categoryId);
            setDescription(dish.description || '');
            setStock(String(dish.stock || 999));
            setIsActive(dish.isActive !== false);
            setIsRecommended(!!dish.isRecommended);
            setImageUrl(dish.image || '');
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error('[菜品编辑] 加载菜品详情失败:', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载失败',
              icon: 'none'
            });
            setTimeout(function () {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            }, 1500);
          case 4:
            _context2.p = 4;
            setLoading(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadCategories();
  }, [loadCategories]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dishId) {
      loadDishDetail(dishId);
    }
  }, [dishId, loadDishDetail]);

  /** 选择图片 */
  var handleChooseImage = function handleChooseImage() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        setTempImagePath(res.tempFilePaths[0]);
      },
      fail: function fail(err) {
        console.error('[菜品编辑] 选择图片失败:', err);
      }
    });
  };

  /** 上传图片到服务器 */
  var uploadImage = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee3() {
      var _data$data, uploadRes, data, _t3;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (tempImagePath) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, imageUrl);
          case 1:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: '上传图片...',
              mask: true
            });
            _context3.p = 2;
            _context3.n = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().uploadFile({
              url: "".concat(_api__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_BASE, "/api/upload"),
              filePath: tempImagePath,
              name: 'image',
              formData: {
                type: 'dish'
              },
              header: {
                Authorization: "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('token'))
              }
            });
          case 3:
            uploadRes = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            data = JSON.parse(uploadRes.data);
            if (!(data.success && (_data$data = data.data) !== null && _data$data !== void 0 && _data$data.url)) {
              _context3.n = 4;
              break;
            }
            return _context3.a(2, data.data.url);
          case 4:
            throw new Error(data.message || '上传失败');
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            console.error('[菜品编辑] 上传图片失败:', _t3);
            throw new Error((_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || '图片上传失败');
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 5]]);
    }));
    return function uploadImage() {
      return _ref3.apply(this, arguments);
    };
  }();

  /** 提交表单 */
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee4() {
      var finalImageUrl, dishData, msg, _t4;
      return (0,C_Users_hgw10_WorkBuddy_2026_06_23_15_03_39_food_order_system_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (name.trim()) {
              _context4.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入菜品名称',
              icon: 'none'
            });
            return _context4.a(2);
          case 1:
            if (!(!price || isNaN(Number(price)) || Number(price) <= 0)) {
              _context4.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入有效价格',
              icon: 'none'
            });
            return _context4.a(2);
          case 2:
            if (categoryId) {
              _context4.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择分类',
              icon: 'none'
            });
            return _context4.a(2);
          case 3:
            setSubmitting(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
              title: '保存中...',
              mask: true
            });
            _context4.p = 4;
            _context4.n = 5;
            return uploadImage();
          case 5:
            finalImageUrl = _context4.v;
            dishData = {
              name: name.trim(),
              price: Number(price),
              categoryId: categoryId,
              description: description.trim() || undefined,
              stock: stock ? parseInt(stock) : 999,
              isActive: isActive,
              isRecommended: isRecommended,
              image: finalImageUrl || undefined
            };
            if (!(dishId && isEdit)) {
              _context4.n = 7;
              break;
            }
            _context4.n = 6;
            return (0,_api__WEBPACK_IMPORTED_MODULE_2__.updateDish)(dishId, dishData);
          case 6:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '更新成功',
              icon: 'success'
            });
            _context4.n = 9;
            break;
          case 7:
            _context4.n = 8;
            return (0,_api__WEBPACK_IMPORTED_MODULE_2__.createDish)(dishData);
          case 8:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '添加成功',
              icon: 'success'
            });
          case 9:
            setTimeout(function () {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            }, 1500);
            _context4.n = 11;
            break;
          case 10:
            _context4.p = 10;
            _t4 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            msg = (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || '保存失败';
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: msg.length > 20 ? msg.slice(0, 18) + '...' : msg,
              icon: 'none',
              duration: 2500
            });
            console.error('[菜品编辑] 提交失败:', _t4);
          case 11:
            _context4.p = 11;
            setSubmitting(false);
            return _context4.f(11);
          case 12:
            return _context4.a(2);
        }
      }, _callee4, null, [[4, 10, 11, 12]]);
    }));
    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();

  /** 分类 Picker 选项 */
  var catPickerRange = categories.map(function (c) {
    return c.icon ? "".concat(c.icon, " ").concat(c.name) : c.name;
  });
  if (!isLoggedIn || !isAdmin) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "dish-edit-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "empty-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "empty-icon",
          children: "\uD83D\uDEAB"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "empty-text",
          children: "\u65E0\u6743\u8BBF\u95EE"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "dish-edit-page",
      style: themeStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "loading-wrap",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          children: "\u52A0\u8F7D\u4E2D..."
        }, void 0, false)
      }, void 0, false)
    }, void 0, false);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "dish-edit-page",
    style: themeStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "page-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: "page-title",
        children: readonly ? '菜品详情' : dishId ? '编辑菜品' : '新增菜品'
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "image-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "image-upload-area",
        onClick: readonly ? undefined : handleChooseImage,
        children: tempImagePath || imageUrl ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "image-preview",
          style: {
            backgroundImage: "url(".concat(tempImagePath || imageUrl, ")")
          }
        }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "image-placeholder",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "upload-icon",
            children: "\uD83D\uDCF7"
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "upload-text",
            children: "\u70B9\u51FB\u4E0A\u4F20\u83DC\u54C1\u56FE\u7247"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "form-section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u83DC\u54C1\u540D\u79F0 *"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
          className: "form-input",
          placeholder: "\u8BF7\u8F93\u5165\u83DC\u54C1\u540D\u79F0",
          placeholderClass: "input-placeholder",
          value: name,
          onInput: function onInput(e) {
            return setName(e.detail.value);
          },
          disabled: readonly,
          maxlength: 50
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u4EF7\u683C\uFF08\u5143\uFF09 *"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
          className: "form-input",
          type: "digit",
          placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C",
          placeholderClass: "input-placeholder",
          value: price,
          onInput: function onInput(e) {
            return setPrice(e.detail.value);
          },
          disabled: readonly
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u5206\u7C7B *"
        }, void 0, false), readonly ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "form-value",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            children: ((_categories$find = categories.find(function (c) {
              return c.id === categoryId;
            })) === null || _categories$find === void 0 ? void 0 : _categories$find.name) || '未选择'
          }, void 0, false)
        }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Picker, {
          mode: "selector",
          range: catPickerRange,
          onChange: function onChange(e) {
            var idx = e.detail.value;
            setCategoryId(categories[idx].id);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "form-picker",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: categoryId ? '' : 'input-placeholder',
              children: categoryId ? catPickerRange[categories.findIndex(function (c) {
                return c.id === categoryId;
              })] : '请选择分类'
            }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "picker-arrow",
              children: "\u25BC"
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u5E93\u5B58"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
          className: "form-input",
          type: "number",
          placeholder: "\u9ED8\u8BA4999",
          placeholderClass: "input-placeholder",
          value: stock,
          onInput: function onInput(e) {
            return setStock(e.detail.value);
          },
          disabled: readonly
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u63CF\u8FF0"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Textarea, {
          className: "form-textarea",
          placeholder: "\u83DC\u54C1\u63CF\u8FF0\uFF08\u53EF\u9009\uFF09",
          placeholderClass: "input-placeholder",
          value: description,
          onInput: function onInput(e) {
            return setDescription(e.detail.value);
          },
          disabled: readonly,
          maxlength: 200,
          autoHeight: true
        }, void 0, false)]
      }, void 0, true), !readonly && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item switch-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u7ACB\u5373\u4E0A\u67B6"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Switch, {
          checked: isActive,
          onChange: function onChange(e) {
            return setIsActive(e.detail.value);
          },
          color: "#ff6b35"
        }, void 0, false)]
      }, void 0, true), !readonly && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "form-item switch-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "form-label",
          children: "\u8BBE\u4E3A\u63A8\u8350"
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Switch, {
          checked: isRecommended,
          onChange: function onChange(e) {
            return setIsRecommended(e.detail.value);
          },
          color: "#ff6b35"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), !readonly && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "submit-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "submit-btn ".concat(submitting ? 'disabled' : ''),
        onClick: submitting ? undefined : handleSubmit,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          children: submitting ? '保存中...' : dishId ? '保存修改' : '添加菜品'
        }, void 0, false)
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/dish-edit/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/dish-edit/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dish_edit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-edit/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dish-edit/index!./src/pages/dish-edit/index.tsx");


var config = {"navigationBarTitleText":"编辑菜品","navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dish_edit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/dish-edit/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dish_edit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/dish-edit/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map