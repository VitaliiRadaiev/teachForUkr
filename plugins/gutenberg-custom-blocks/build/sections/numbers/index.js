/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/components/colorPallets/BgColorPallet.js":
/*!******************************************************!*\
  !*** ./src/components/colorPallets/BgColorPallet.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BgColorPallet: () => (/* binding */ BgColorPallet)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const BgColorPallet = ({
  colorName = 'bg-light-primary-80',
  setColorName
}) => {
  const colors = [{
    name: 'light',
    color: '#FFFFFF',
    className: 'bg-light-primary'
  }, {
    name: 'light 80',
    color: '#F6F6F6',
    className: 'bg-light-primary-80'
  }];
  const [colorData] = colors.filter(color => color.className === colorName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
    colors: colors,
    disableCustomColors: true,
    clearable: false,
    onChange: color => {
      const selectedColor = colors.find(c => c.color === color);
      if (selectedColor) {
        setColorName(selectedColor.className);
      }
    },
    value: colorData.color
  });
};

/***/ }),

/***/ "./src/components/is-hide/IsHide.js":
/*!******************************************!*\
  !*** ./src/components/is-hide/IsHide.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsHide: () => (/* binding */ IsHide)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const IsHide = ({
  isHide,
  setIsHide
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    opened: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        className: "flex items-center gap-x-[10px] cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FormToggle, {
          checked: isHide,
          onChange: () => setIsHide(!isHide)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438"
        })]
      })
    })
  });
};

/***/ }),

/***/ "./src/components/sections-bg-color-pallet/SectionsBgColorPallet.js":
/*!**************************************************************************!*\
  !*** ./src/components/sections-bg-color-pallet/SectionsBgColorPallet.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionsBgColorPallet: () => (/* binding */ SectionsBgColorPallet)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorPallets_BgColorPallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorPallets/BgColorPallet */ "./src/components/colorPallets/BgColorPallet.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SectionsBgColorPallet = ({
  color,
  setColor
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "\u041A\u043E\u043B\u0456\u0440 \u0437\u0430\u0434\u043D\u044C\u043E\u0433\u043E \u0444\u043E\u043D\u0443",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_colorPallets_BgColorPallet__WEBPACK_IMPORTED_MODULE_1__.BgColorPallet, {
      colorName: color,
      setColorName: val => setColor(val)
    })
  });
};

/***/ }),

/***/ "./src/components/size-control/SizeControl.js":
/*!****************************************************!*\
  !*** ./src/components/size-control/SizeControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeControl: () => (/* binding */ SizeControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SizeControl_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SizeControl.scss */ "./src/components/size-control/SizeControl.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const SizeControl = ({
  size,
  setSize,
  sizesMap = ['no', 'sm', 'md', 'lg', 'xl'],
  direction = 'top bottom'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "size-controll-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('top')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DirectionIcon, {
        direction: "top"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "size-controll-container__buttons-group",
        children: sizesMap.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-btn', {
            ['active']: s === size.top
          }),
          onClick: () => setSize({
            ...size,
            top: s
          }),
          children: s
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('bottom')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DirectionIcon, {
        direction: "bottom"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "size-controll-container__buttons-group",
        children: sizesMap.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-btn', {
            ['active']: s === size.bottom
          }),
          onClick: () => setSize({
            ...size,
            bottom: s
          }),
          children: s
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('right')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DirectionIcon, {
        direction: "right"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "size-controll-container__buttons-group",
        children: sizesMap.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-btn', {
            ['active']: s === size.right
          }),
          onClick: () => setSize({
            ...size,
            right: s
          }),
          children: s
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('left')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DirectionIcon, {
        direction: "left"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "size-controll-container__buttons-group",
        children: sizesMap.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-btn', {
            ['active']: s === size.left
          }),
          onClick: () => setSize({
            ...size,
            left: s
          }),
          children: s
        }))
      })]
    })]
  });
};
function DirectionIcon({
  direction
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "direction-icon",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('direction-icon-item', {
        ['active']: direction.includes('top')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('direction-icon-item', {
        ['active']: direction.includes('right')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('direction-icon-item', {
        ['active']: direction.includes('bottom')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('direction-icon-item', {
        ['active']: direction.includes('left')
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/size-control/SizeControl.scss":
/*!******************************************************!*\
  !*** ./src/components/size-control/SizeControl.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/space-control/MarginYControl.js":
/*!********************************************************!*\
  !*** ./src/components/space-control/MarginYControl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarginYControl: () => (/* binding */ MarginYControl)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _size_control_SizeControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../size-control/SizeControl */ "./src/components/size-control/SizeControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const MarginYControl = ({
  size,
  setSize,
  sizesMap = ['no', 'sm', 'md', 'lg', 'xl']
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456 \u043E\u0442\u0441\u0442\u0443\u043F\u0438",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_size_control_SizeControl__WEBPACK_IMPORTED_MODULE_1__.SizeControl, {
      size: size,
      setSize: setSize,
      sizesMap: sizesMap
    })
  });
};

/***/ }),

/***/ "./src/components/space-control/PaddingYControl.js":
/*!*********************************************************!*\
  !*** ./src/components/space-control/PaddingYControl.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaddingYControl: () => (/* binding */ PaddingYControl)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _size_control_SizeControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../size-control/SizeControl */ "./src/components/size-control/SizeControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const PaddingYControl = ({
  size,
  setSize,
  sizesMap = ['no', 'sm', 'md', 'lg', 'xl']
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u043E\u0442\u0441\u0442\u0443\u043F\u0438",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_size_control_SizeControl__WEBPACK_IMPORTED_MODULE_1__.SizeControl, {
      size: size,
      setSize: setSize,
      sizesMap: sizesMap
    })
  });
};

/***/ }),

/***/ "./src/global/global.js":
/*!******************************!*\
  !*** ./src/global/global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RICH_TEXT_FORMATS: () => (/* binding */ RICH_TEXT_FORMATS),
/* harmony export */   SECTIONS_MARGIN_MAP: () => (/* binding */ SECTIONS_MARGIN_MAP),
/* harmony export */   SECTIONS_PADDING_MAP: () => (/* binding */ SECTIONS_PADDING_MAP),
/* harmony export */   TEXT_SIZES: () => (/* binding */ TEXT_SIZES)
/* harmony export */ });
const RICH_TEXT_FORMATS = ['core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'custom-format/color-highlight', 'custom-format/uppercase', 'custom-format/lowercase'];
const TEXT_SIZES = ["default", "sm", "md", "lg"];
const SECTIONS_MARGIN_MAP = ['no', 'sm', 'md', 'lg'];
const SECTIONS_PADDING_MAP = ['no', 'sm', 'md', 'lg'];

/***/ }),

/***/ "./src/sections/numbers/block.json":
/*!*****************************************!*\
  !*** ./src/sections/numbers/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/numbers","version":"0.1.0","title":"Цифри","category":"numbers","icon":"layout","description":"","example":{},"supports":{"html":false},"attributes":{"isHide":{"type":"boolean","default":false},"padding":{"type":"object","default":{"top":"md","right":"","bottom":"md","left":""}},"margin":{"type":"object","default":{"top":"","right":"","bottom":"","left":""}},"background":{"type":"string","enum":["bg-light-primary","bg-light-primary-80"],"default":"bg-light-primary"}},"textdomain":"numbers","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/sections/numbers/edit.js":
/*!**************************************!*\
  !*** ./src/sections/numbers/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/sections/numbers/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/is-hide/IsHide */ "./src/components/is-hide/IsHide.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_space_control_MarginYControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/space-control/MarginYControl */ "./src/components/space-control/MarginYControl.js");
/* harmony import */ var _components_space_control_PaddingYControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/space-control/PaddingYControl */ "./src/components/space-control/PaddingYControl.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/global */ "./src/global/global.js");
/* harmony import */ var _components_sections_bg_color_pallet_SectionsBgColorPallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/sections-bg-color-pallet/SectionsBgColorPallet */ "./src/components/sections-bg-color-pallet/SectionsBgColorPallet.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










function Edit({
  attributes,
  setAttributes
}) {
  const {
    isHide,
    padding,
    margin,
    background,
    className
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('numbers-section rounded-[20px] md:rounded-[30px]', className, background, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionsMarginClasses)(margin), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionsPaddingClasses)(padding), {
      ['hide-block']: isHide
    })
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/inner-block', {
      classes: 'text-center max-w-[30.5rem] xl:max-w-[45.5rem] 4xl:max-w-[59.125rem] mx-auto',
      simpleWrapper: true,
      options: {
        template: [['t4u/sup-title', {}], ['t4u/heading', {
          classes: "mt-[16px] md:mt-[20px] text-dark-primary"
        }]],
        allowedBlocks: []
      }
    }], ['t4u/inner-block', {
      classes: 'mt-[30px] md:mt-[40px] xl:mt-[50px] grid xl:grid-cols-3 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]',
      canAddItem: true,
      options: {
        template: [['t4u/numbers-item', {}]],
        allowedBlocks: ['t4u/numbers-item']
      },
      allowedBlocks: []
    }]],
    allowedBlocks: []
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_3__.IsHide, {
        isHide: isHide,
        setIsHide: val => setAttributes({
          isHide: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_sections_bg_color_pallet_SectionsBgColorPallet__WEBPACK_IMPORTED_MODULE_8__.SectionsBgColorPallet, {
        color: background,
        setColor: val => setAttributes({
          background: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_space_control_PaddingYControl__WEBPACK_IMPORTED_MODULE_6__.PaddingYControl, {
        size: padding,
        setSize: s => setAttributes({
          padding: s
        }),
        sizesMap: _global_global__WEBPACK_IMPORTED_MODULE_7__.SECTIONS_PADDING_MAP
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_space_control_MarginYControl__WEBPACK_IMPORTED_MODULE_5__.MarginYControl, {
        size: margin,
        setSize: s => setAttributes({
          margin: s
        }),
        sizesMap: _global_global__WEBPACK_IMPORTED_MODULE_7__.SECTIONS_MARGIN_MAP
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "container",
        children: children
      })
    })]
  });
}

/***/ }),

/***/ "./src/sections/numbers/editor.scss":
/*!******************************************!*\
  !*** ./src/sections/numbers/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sections/numbers/save.js":
/*!**************************************!*\
  !*** ./src/sections/numbers/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

function Save() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  const {
    children
  } = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps.save(blockProps);
  return children;
}

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMarginClasses: () => (/* binding */ getMarginClasses),
/* harmony export */   getOptionsField: () => (/* binding */ getOptionsField),
/* harmony export */   getSectionsMarginClasses: () => (/* binding */ getSectionsMarginClasses),
/* harmony export */   getSectionsPaddingClasses: () => (/* binding */ getSectionsPaddingClasses),
/* harmony export */   removeDomain: () => (/* binding */ removeDomain)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

const getOptionsField = fieldName => {
  if (!fieldName) return null;
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `/site-core/v1/options/?field=${fieldName}`
  });
};
const getMarginClasses = margin => {
  const top = margin.top ? margin.top !== 'no' ? `mt-${margin.top}` : 'mt-0' : '';
  const right = margin.right ? margin.right !== 'no' ? ` mr-${margin.right}` : ' mr-0' : '';
  const bottom = margin.bottom ? margin.bottom !== 'no' ? ` mb-${margin.bottom}` : ' mb-0' : '';
  const left = margin.left ? margin.left !== 'no' ? ` ml-${margin.left}` : ' ml-0' : '';
  return `${top}${right}${bottom}${left}`;
};
const getSectionsMarginClasses = margin => {
  const top = margin.top ? margin.top !== 'no' ? `section-mt-${margin.top}` : 'mt-0' : '';
  const right = margin.right ? margin.right !== 'no' ? ` section-mr-${margin.right}` : ' mr-0' : '';
  const bottom = margin.bottom ? margin.bottom !== 'no' ? ` section-mb-${margin.bottom}` : ' mb-0' : '';
  const left = margin.left ? margin.left !== 'no' ? ` section-ml-${margin.left}` : ' ml-0' : '';
  return `${top}${right}${bottom}${left}`;
};
const getSectionsPaddingClasses = margin => {
  const top = margin.top ? margin.top !== 'no' ? `section-pt-${margin.top}` : 'pt-0' : '';
  const right = margin.right ? margin.right !== 'no' ? ` section-pr-${margin.right}` : ' pr-0' : '';
  const bottom = margin.bottom ? margin.bottom !== 'no' ? ` section-pb-${margin.bottom}` : ' pb-0' : '';
  const left = margin.left ? margin.left !== 'no' ? ` section-pl-${margin.left}` : ' pl-0' : '';
  return `${top}${right}${bottom}${left}`;
};
function removeDomain(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname;
  } catch (e) {
    console.error("Invalid URL:", e);
    return null;
  }
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/sections/numbers/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/sections/numbers/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/sections/numbers/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/sections/numbers/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map