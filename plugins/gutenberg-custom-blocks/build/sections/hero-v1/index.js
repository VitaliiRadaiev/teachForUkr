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

/***/ "./src/components/buttons-group/ButtonsGroup.js":
/*!******************************************************!*\
  !*** ./src/components/buttons-group/ButtonsGroup.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonsGroup: () => (/* binding */ ButtonsGroup)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _ButtonsGroup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonsGroup.scss */ "./src/components/buttons-group/ButtonsGroup.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ButtonsGroup = ({
  value,
  setValue,
  valuesMap = ['no', 'sm', 'md', 'lg', 'xl']
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "buttons-group",
    children: valuesMap.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('buttons-group-btn', {
        ['active']: v === value
      }),
      onClick: () => setValue(v === value ? '' : v),
      children: v
    }))
  });
};

/***/ }),

/***/ "./src/components/buttons-group/ButtonsGroup.scss":
/*!********************************************************!*\
  !*** ./src/components/buttons-group/ButtonsGroup.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/direction-icon/DirectionIcon.js":
/*!********************************************************!*\
  !*** ./src/components/direction-icon/DirectionIcon.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectionIcon: () => (/* binding */ DirectionIcon)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function DirectionIcon({
  direction
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "direction-icon",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('direction-icon-item', {
        ['active']: direction.includes('top')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('direction-icon-item', {
        ['active']: direction.includes('right')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('direction-icon-item', {
        ['active']: direction.includes('bottom')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('direction-icon-item', {
        ['active']: direction.includes('left')
      })
    })]
  });
}

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
/* harmony import */ var _buttons_group_ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons-group/ButtonsGroup */ "./src/components/buttons-group/ButtonsGroup.js");
/* harmony import */ var _direction_icon_DirectionIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../direction-icon/DirectionIcon */ "./src/components/direction-icon/DirectionIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const SizeControl = ({
  size,
  setSize,
  sizesMap = ['no', 'sm', 'md', 'lg', 'xl'],
  direction = 'top bottom'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "size-controll-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('top')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_direction_icon_DirectionIcon__WEBPACK_IMPORTED_MODULE_4__.DirectionIcon, {
        direction: "top"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_buttons_group_ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__.ButtonsGroup, {
        value: size.top,
        setValue: val => setSize({
          ...size,
          top: val
        }),
        valuesMap: sizesMap
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('bottom')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_direction_icon_DirectionIcon__WEBPACK_IMPORTED_MODULE_4__.DirectionIcon, {
        direction: "bottom"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_buttons_group_ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__.ButtonsGroup, {
        value: size.bottom,
        setValue: val => setSize({
          ...size,
          bottom: val
        }),
        valuesMap: sizesMap
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('right')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_direction_icon_DirectionIcon__WEBPACK_IMPORTED_MODULE_4__.DirectionIcon, {
        direction: "right"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_buttons_group_ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__.ButtonsGroup, {
        value: size.right,
        setValue: val => setSize({
          ...size,
          right: val
        }),
        valuesMap: sizesMap
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('size-controll-container__row', {
        ['hidden']: !direction.includes('left')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_direction_icon_DirectionIcon__WEBPACK_IMPORTED_MODULE_4__.DirectionIcon, {
        direction: "left"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_buttons_group_ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__.ButtonsGroup, {
        value: size.left,
        setValue: val => setSize({
          ...size,
          left: val
        }),
        valuesMap: sizesMap
      })]
    })]
  });
};

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
  sizesMap = ['no', 'sm', 'md', 'lg', 'xl', '2xl']
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

/***/ "./src/global/global.js":
/*!******************************!*\
  !*** ./src/global/global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTAINER_SIZES: () => (/* binding */ CONTAINER_SIZES),
/* harmony export */   LIST_GAP_Y_MAP: () => (/* binding */ LIST_GAP_Y_MAP),
/* harmony export */   RICH_TEXT_FORMATS: () => (/* binding */ RICH_TEXT_FORMATS),
/* harmony export */   SECTIONS_MARGIN_MAP: () => (/* binding */ SECTIONS_MARGIN_MAP),
/* harmony export */   SECTIONS_PADDING_MAP: () => (/* binding */ SECTIONS_PADDING_MAP),
/* harmony export */   TEXT_CONTENT_ALLOWD_BLOCKS: () => (/* binding */ TEXT_CONTENT_ALLOWD_BLOCKS),
/* harmony export */   TEXT_SIZES: () => (/* binding */ TEXT_SIZES)
/* harmony export */ });
const RICH_TEXT_FORMATS = ['core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'custom-format/color-highlight', 'custom-format/uppercase', 'custom-format/lowercase'];
const TEXT_SIZES = ["sm", "md", "lg", "xl"];
const SECTIONS_MARGIN_MAP = ['no', 'sm', 'md', 'lg', 'xl'];
const SECTIONS_PADDING_MAP = ['no', 'sm', 'md', 'lg', 'xl'];
const CONTAINER_SIZES = ["sm", "md", "lg", "xl", "2xl", "full"];
const TEXT_CONTENT_ALLOWD_BLOCKS = ['t4u/heading', 't4u/paragraph', 't4u/ul-list-square', 't4u/ol-list-number', 't4u/questionnaire', 't4u/article-image', 't4u/buttons-group', 't4u/button', 't4u/article-slider', 't4u/article-video', 't4u/article-quote', 't4u/article-box'];
const LIST_GAP_Y_MAP = {
  sm: 'gap-y-[5px]',
  md: 'gap-y-[10px]',
  lg: 'gap-y-[25px]',
  xl: 'gap-y-[40px]'
};

/***/ }),

/***/ "./src/sections/hero-v1/block.json":
/*!*****************************************!*\
  !*** ./src/sections/hero-v1/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/hero-v1","version":"0.1.0","title":"Баннер","category":"hero","icon":"layout","description":"","example":{},"supports":{"html":false},"attributes":{"isHide":{"type":"boolean","default":false},"margin":{"type":"object","default":{"top":"","right":"","bottom":"","left":""}},"padding":{"type":"object","default":{"top":"","right":"","bottom":"","left":""}},"background":{"type":"string","enum":["bg-light-primary","bg-light-primary-80"],"default":"bg-light-primary-80"},"mask":{"type":"number","default":1},"variants":{"type":"number","default":1},"preview":{"type":"string"},"id":{"type":"string"}},"textdomain":"hero-v1","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/sections/hero-v1/edit.js":
/*!**************************************!*\
  !*** ./src/sections/hero-v1/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/sections/hero-v1/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/is-hide/IsHide */ "./src/components/is-hide/IsHide.js");
/* harmony import */ var _components_space_control_MarginYControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/space-control/MarginYControl */ "./src/components/space-control/MarginYControl.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/global */ "./src/global/global.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const decor1_classes = {
  '1': 'absolute z-2 accent-first-filter w-[13.7%] h-auto top-0 right-[11.96%]',
  '2': 'absolute z-2 accent-first-filter w-[9.83%] h-auto top-[1%] right-[11.96%] rotate-[54deg]',
  '3': 'absolute z-2 accent-first-filter w-[9.83%] h-auto top-[4%] left-[4%] rotate-[-45deg]',
  '4': 'absolute z-2 accent-second-filter w-[9.83%] h-auto top-[4%] right-[7%] rotate-[54deg]'
};
const decor1_urls = {
  '1': 'icons/circle.svg',
  '2': 'icons/rectangle-short.svg',
  '3': 'icons/rectangle-short.svg',
  '4': 'icons/rectangle-short.svg'
};
const image_classes = {
  '1': 'ibg image-mask image-mask-1 image-mask-right-center z-1 bg-light-primary-60',
  '2': 'ibg image-mask image-mask-2 image-mask-right-center z-1 bg-light-primary-60',
  '3': 'ibg image-mask image-mask-3 image-mask-right-center z-1 bg-light-primary-60',
  '4': 'ibg image-mask image-mask-4 image-mask-right-center z-1 bg-light-primary-60'
};
const decor2_classes = {
  '1': 'absolute z-3 accent-second-filter w-[9.83%] h-auto left-0 bottom-[9%] origin-bottom-left rotate-[54deg]',
  '2': 'absolute z-3 accent-second-filter w-[14.75%] h-auto left-0 top-1/2 -translate-y-1/2',
  '3': 'absolute z-3 accent-second-filter w-[14.75%] h-auto left-[54%] bottom-0 -translate-x-1/2',
  '4': 'absolute z-3 accent-first-filter w-[14.75%] h-auto left-0 bottom-[16%]'
};
const decor2_urls = {
  '1': 'icons/rectangle.svg',
  '2': 'icons/circle.svg',
  '3': 'icons/circle.svg',
  '4': 'icons/pac-man.svg'
};
const template1 = ['t4u/inner-block', {
  classes: 'mt-[16px] md:mt-[20px] pb-[30px] 4xl:pb-[40px] lg:flex lg:gap-x-[20px] 4xl:gap-x-[40px] lg:justify-between',
  simpleWrapper: true,
  options: {
    template: [['t4u/inner-block', {
      classes: 'shrink grow lg:self-center',
      simpleWrapper: true,
      options: {
        template: [['t4u/sup-title', {}], ['t4u/heading', {
          classes: "mt-[16px] md:mt-[20px] xl:mt-[30px] text-dark-primary",
          htmlTeg: "h1",
          fontSize: "2xl",
          container: "full"
        }], ['t4u/simple-text', {
          classes: "mt-[20px] text-dark-primary",
          fontSize: "lg",
          container: "sm"
        }], ['t4u/inner-block', {
          classes: 'mt-[40px] md:mt-[50px] xl:mt-[65px] 4xl:mt-[80px] button-group flex items-center flex-wrap gap-y-[16px] gap-x-[30px]',
          options: {
            template: [["t4u/button", {
              acfField: 'link_join',
              classes: 'md:min-w-[312px]'
            }], ["t4u/paragraph", {
              classes: "mt-0 text-dark-primary lg:max-w-[315px] 4xl:max-w-[360px]",
              fontSize: "lg"
            }]],
            allowedBlocks: []
          }
        }]],
        allowedBlocks: []
      }
    }], ['t4u/inner-block', {
      classes: 'mt-[40px] lg:mt-0 aspect-[1/0.724] relative shrink-0 grow-0 lg:self-start lg:w-[400px] xl:w-[500px] 2xl:w-[610px] 4xl:w-[760px]',
      simpleWrapper: true,
      options: {
        template: [['t4u/static-image', {
          classes: "absolute z-2 accent-first-filter w-[13.7%] h-auto top-0 right-[11.96%]",
          url: "icons/circle.svg"
        }], ['t4u/image', {
          classes: "ibg image-mask image-mask-1 image-mask-right-center z-1 bg-light-primary-60"
        }], ['t4u/static-image', {
          classes: "absolute z-3 accent-second-filter w-[9.83%] h-auto left-0 bottom-[9%] origin-bottom-left rotate-[54deg]",
          url: "icons/rectangle.svg"
        }]],
        allowedBlocks: []
      }
    }]],
    allowedBlocks: []
  }
}];
const template2 = ['t4u/inner-block', {
  classes: 'mt-[16px] md:mt-[20px] pb-[30px] 4xl:pb-[40px] lg:flex lg:gap-x-[20px] 4xl:gap-x-[40px] lg:justify-between',
  simpleWrapper: true,
  options: {
    template: [['t4u/inner-block', {
      classes: 'shrink grow lg:self-center',
      simpleWrapper: true,
      options: {
        template: [['t4u/sup-title', {
          isHide: true
        }], ['t4u/heading', {
          classes: "mt-[16px] md:mt-[20px] xl:mt-[30px] text-dark-primary",
          htmlTeg: "h1",
          fontSize: "2xl",
          container: "full"
        }], ['t4u/heading', {
          classes: "mt-[10px] text-dark-primary",
          htmlTeg: "span",
          fontSize: "lg",
          container: "full"
        }], ['t4u/simple-text', {
          classes: "mt-[20px] text-dark-primary",
          fontSize: "lg",
          container: "sm"
        }], ['t4u/inner-block', {
          classes: "mt-[40px] md:mt-[50px] xl:mt-[65px] 4xl:mt-[80px]",
          simpleWrapper: true,
          options: {
            template: [['t4u/heading', {
              classes: "text-dark-primary",
              htmlTeg: "span",
              fontSize: "md"
            }], ["t4u/buttons-group", {
              classes: 'mt-[20px] md-max:buttons-dance',
              gap: {
                y: "sm",
                x: "sm"
              },
              options: {
                template: [["t4u/button", {
                  acfField: 'link_paypal',
                  variant: "btn-primary"
                }], ["t4u/button", {
                  acfField: 'link_wayforpay',
                  variant: "btn-primary"
                }], ["t4u/button", {
                  acfField: 'link_banktransfer',
                  variant: "btn-primary"
                }]],
                allowedBlocks: ['t4u/button']
              }
            }]],
            allowedBlocks: []
          }
        }]],
        allowedBlocks: []
      }
    }], ['t4u/inner-block', {
      classes: 'mt-[40px] lg:mt-0 aspect-[1/0.724] relative shrink-0 grow-0 lg:self-start lg:w-[400px] xl:w-[500px] 2xl:w-[610px] 4xl:w-[760px]',
      simpleWrapper: true,
      options: {
        template: [['t4u/static-image', {
          classes: "absolute z-2 accent-first-filter w-[9.83%] h-auto top-[1%] right-[11.96%] rotate-[54deg]",
          url: "icons/rectangle-short.svg "
        }], ['t4u/image', {
          classes: "ibg image-mask image-mask-2 image-mask-right-center z-1 bg-light-primary-60"
        }], ['t4u/static-image', {
          classes: "absolute z-3 accent-second-filter w-[14.75%] h-auto left-0 top-1/2 -translate-y-1/2",
          url: "icons/circle.svg"
        }]],
        allowedBlocks: []
      }
    }]],
    allowedBlocks: []
  }
}];
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    isHide,
    margin,
    className,
    mask,
    variants
  } = attributes;
  const {
    updateBlockAttributes,
    insertBlock,
    removeBlock,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core/block-editor').getBlocks(clientId), [clientId]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('hero-v1-section pt-[100px] md:pt-[127px] xl:pt-[112px] overflow-hidden ', className, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getSectionsMarginClasses)(margin), {
      ['hide-block']: isHide
    })
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/breadcrumbs', {
      classes: "text-sm"
    }], template1, ['t4u/hero-buttons', {}]],
    allowedBlocks: ['t4u/inner-block']
  });
  const changeTemplate = variants => {
    if (variants === 1) {
      const container = innerBlocks[1];
      const buttons = innerBlocks[2];
      removeBlock(container.clientId);
      buttons && updateBlockAttributes(buttons.clientId, {
        isHide: false
      });
      setAttributes({
        mask: 1
      });
      const newBlock = wp.blocks.createBlock(...template1);
      insertBlock(newBlock, 1, clientId, false);
    }
    if (variants === 2) {
      const container = innerBlocks[1];
      const buttons = innerBlocks[2];
      removeBlock(container.clientId);
      buttons && updateBlockAttributes(buttons.clientId, {
        isHide: true
      });
      setAttributes({
        mask: 2
      });
      const newBlock = wp.blocks.createBlock(...template2);
      insertBlock(newBlock, 1, clientId, false);
    }
    selectBlock(clientId);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const decor1 = innerBlocks[1]?.innerBlocks[1]?.innerBlocks[0];
    const image = innerBlocks[1]?.innerBlocks[1]?.innerBlocks[1];
    const decor2 = innerBlocks[1]?.innerBlocks[1]?.innerBlocks[2];
    decor1 && updateBlockAttributes(decor1.clientId, {
      classes: decor1_classes[mask],
      url: decor1_urls[mask]
    });
    image && updateBlockAttributes(image.clientId, {
      classes: image_classes[mask]
    });
    decor2 && updateBlockAttributes(decor2.clientId, {
      classes: decor2_classes[mask],
      url: decor2_urls[mask]
    });
  }, [mask]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_7__.IsHide, {
        isHide: isHide,
        setIsHide: val => setAttributes({
          isHide: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_space_control_MarginYControl__WEBPACK_IMPORTED_MODULE_8__.MarginYControl, {
        size: margin,
        setSize: s => setAttributes({
          margin: s
        }),
        sizesMap: _global_global__WEBPACK_IMPORTED_MODULE_9__.SECTIONS_MARGIN_MAP
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0412\u0430\u0440\u0456\u0430\u043D\u0442\u0438 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: variants,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              className: "!h-[100px]",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('general/preview-section-hero-v1.jpg')
            }),
            value: 1
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              className: "!h-[100px]",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('general/preview-section-hero-v2.jpg')
            }),
            value: 2
          }],
          onChange: value => {
            setAttributes({
              variants: +value
            });
            changeTemplate(+value);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0412\u0430\u0440\u0456\u0430\u043D\u0442\u0438 \u043C\u0430\u0441\u043E\u043A",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: mask,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "aspect-[1/0.724] relative w-[100px]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-2 accent-first-filter w-[13.7%] h-auto top-0 right-[11.96%]",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/circle.svg')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "ibg image-mask image-mask-1 image-mask-right-center z-1 bg-light-primary-60"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-3 accent-second-filter w-[9.83%] h-auto left-0 bottom-[9%] origin-bottom-left rotate-[54deg]",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/rectangle.svg')
              })]
            }),
            value: 1
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "aspect-[1/0.724] relative w-[100px]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-2 accent-first-filter w-[9.83%] h-auto top-[1%] right-[11.96%] rotate-[54deg]",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/rectangle-short.svg')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "ibg image-mask image-mask-2 image-mask-right-center z-1 bg-light-primary-60"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-3 accent-second-filter w-[14.75%] h-auto left-0 top-1/2 -translate-y-1/2",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/circle.svg')
              })]
            }),
            value: 2
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "aspect-[1/0.724] relative w-[100px]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-2 accent-first-filter w-[9.83%] h-auto top-[4%] left-[4%] rotate-[-45deg]",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/rectangle-short.svg')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "ibg image-mask image-mask-3 image-mask-right-center z-1 bg-light-primary-60"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-3 accent-second-filter w-[14.75%] h-auto left-[54%] bottom-0 -translate-x-1/2",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/circle.svg')
              })]
            }),
            value: 3
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "aspect-[1/0.724] relative w-[100px]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-2 accent-second-filter w-[9.83%] h-auto top-[4%] right-[7%] rotate-[54deg]",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/rectangle-short.svg')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "ibg image-mask image-mask-4 image-mask-right-center z-1 bg-light-primary-60"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: "absolute z-3 accent-first-filter w-[14.75%] h-auto left-0 bottom-[16%]",
                src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('icons/pac-man.svg')
              })]
            }),
            value: 4
          }],
          onChange: value => setAttributes({
            mask: +value
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("section", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "container pb-[30px] md:pb-[40px]",
        children: children
      })
    })]
  });
}

/***/ }),

/***/ "./src/sections/hero-v1/editor.scss":
/*!******************************************!*\
  !*** ./src/sections/hero-v1/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sections/hero-v1/save.js":
/*!**************************************!*\
  !*** ./src/sections/hero-v1/save.js ***!
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
/* harmony export */   buildApiPath: () => (/* binding */ buildApiPath),
/* harmony export */   combineString: () => (/* binding */ combineString),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   getContainerClasses: () => (/* binding */ getContainerClasses),
/* harmony export */   getFlexAligmentClasses: () => (/* binding */ getFlexAligmentClasses),
/* harmony export */   getGapClasses: () => (/* binding */ getGapClasses),
/* harmony export */   getMarginClasses: () => (/* binding */ getMarginClasses),
/* harmony export */   getOptionsField: () => (/* binding */ getOptionsField),
/* harmony export */   getSectionsMarginClasses: () => (/* binding */ getSectionsMarginClasses),
/* harmony export */   getSectionsPaddingClasses: () => (/* binding */ getSectionsPaddingClasses),
/* harmony export */   getSocialIconByUrl: () => (/* binding */ getSocialIconByUrl),
/* harmony export */   getUrlToStaticImages: () => (/* binding */ getUrlToStaticImages),
/* harmony export */   mergeRefs: () => (/* binding */ mergeRefs),
/* harmony export */   removeDomain: () => (/* binding */ removeDomain),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");


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
const getGapClasses = gap => {
  const x = gap.x ? `gap-x-${gap.x}` : '';
  const y = gap.y ? `gap-y-${gap.y}` : '';
  return (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(x, y);
};
const getContainerClasses = val => {
  if (!(val && val?.trim())) return '';
  return `block-container-${val}`;
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
const getUrlToStaticImages = endUrl => {
  return `${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/${endUrl}`;
};
const combineString = ({
  prefix = '',
  postfix = ''
}, value) => {
  if (!value) return '';
  return `${prefix}${value}${postfix}`;
};
const getFlexAligmentClasses = key => {
  if (!key) return '';
  const classesMap = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
    ['space-between']: 'justify-between'
  };
  return classesMap[key] || '';
};
const mergeRefs = (...refs) => {
  return el => {
    refs.forEach(ref => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(el);
      } else {
        ref.current = el;
      }
    });
  };
};
const debounce = (func, wait) => {
  let timeout;
  function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }
  debounced.cancel = function () {
    clearTimeout(timeout);
  };
  return debounced;
};
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
const buildApiPath = (basePath, query = {}) => {
  const url = new URL(basePath, window.location.origin);
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, value);
    }
  });
  url.search = params.toString();
  return url.pathname + url.search;
};
const getSocialIconByUrl = url => {
  const icons = {
    facebook: 'icons/facebook.svg',
    instagram: 'icons/instagram.svg',
    linkedin: 'icons/linkedin.svg',
    tiktok: 'icons/tiktok.svg',
    twitter: 'icons/twitter.svg'
  };
  if (url.includes('facebook.com')) {
    return icons.facebook;
  } else if (url.includes('instagram.com')) {
    return icons.instagram;
  } else if (url.includes('linkedin.com')) {
    return icons.linkedin;
  } else if (url.includes('tiktok.com')) {
    return icons.tiktok;
  } else if (url.includes('twitter.com') || url.includes('x.com')) {
    return icons.twitter;
  }
  return null;
};

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
  !*** ./src/sections/hero-v1/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/sections/hero-v1/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/sections/hero-v1/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/sections/hero-v1/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {
    innerBlocks: [{
      name: "t4u/static-image",
      attributes: {
        url: 'general/preview-section-hero-v1.jpg'
      }
    }]
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map