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

/***/ "./src/blocks/simple-text/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/simple-text/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/simple-text","version":"0.1.0","title":"Текстовий контейнер","icon":"text","category":"blocks","description":"","example":{},"supports":{"html":false},"attributes":{"isHide":{"type":"boolean","default":false},"margin":{"type":"object","default":{"top":"no","right":"no","bottom":"no","left":"no"}},"classes":{"type":"string","default":""},"size":{"type":"string","enum":["default","sm","md","lg"],"default":"md"},"canAddItem":{"type":"boolean","default":true},"aligment":{"type":"string","enum":["left","center","right"],"default":"left"}},"textdomain":"simple-text","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/blocks/simple-text/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/simple-text/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/is-hide/IsHide */ "./src/components/is-hide/IsHide.js");
/* harmony import */ var _components_size_control_MarginYControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/size-control/MarginYControl */ "./src/components/size-control/MarginYControl.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_size_control_ButtonsGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/size-control/ButtonsGroup */ "./src/components/size-control/ButtonsGroup.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/global */ "./src/global/global.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function Edit({
  attributes,
  setAttributes
}) {
  const {
    isHide,
    margin,
    classes,
    size,
    canAddItem,
    aligment
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getMarginClasses)(margin), `text-${size}`, `text-${aligment}`, {
      ['hide-block']: isHide,
      'canAddItem': canAddItem
    })
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/paragraph', {}]],
    allowedBlocks: canAddItem ? ['t4u/paragraph'] : []
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.AlignmentToolbar, {
        value: aligment,
        onChange: nextAlign => {
          setAttributes({
            aligment: nextAlign
          });
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_2__.IsHide, {
        isHide: isHide,
        setIsHide: val => setAttributes({
          isHide: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0420\u043E\u0437\u043C\u0456\u0440 \u0442\u0435\u043A\u0441\u0442\u0443",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_size_control_ButtonsGroup__WEBPACK_IMPORTED_MODULE_5__.ButtonsGroup, {
          value: size,
          setValue: val => setAttributes({
            size: val
          }),
          valuesMap: _global_global__WEBPACK_IMPORTED_MODULE_7__.TEXT_SIZES
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_size_control_MarginYControl__WEBPACK_IMPORTED_MODULE_3__.MarginYControl, {
        size: margin,
        setSize: s => setAttributes({
          margin: s
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: children
    })]
  });
}

/***/ }),

/***/ "./src/blocks/simple-text/save.js":
/*!****************************************!*\
  !*** ./src/blocks/simple-text/save.js ***!
  \****************************************/
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

/***/ "./src/components/size-control/ButtonsGroup.js":
/*!*****************************************************!*\
  !*** ./src/components/size-control/ButtonsGroup.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonsGroup: () => (/* binding */ ButtonsGroup)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ButtonsGroup = ({
  value,
  setValue,
  valuesMap = ['no', 'sm', 'md', 'lg', 'xl']
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "size-controll-container__buttons-group",
    children: valuesMap.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('size-controll-btn', {
        ['active']: v === value
      }),
      onClick: () => setValue(v),
      children: v
    }))
  });
};

/***/ }),

/***/ "./src/components/size-control/MarginYControl.js":
/*!*******************************************************!*\
  !*** ./src/components/size-control/MarginYControl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarginYControl: () => (/* binding */ MarginYControl)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SizeControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SizeControl */ "./src/components/size-control/SizeControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const MarginYControl = ({
  size,
  setSize
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456 \u043E\u0442\u0441\u0442\u0443\u043F\u0438",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SizeControl__WEBPACK_IMPORTED_MODULE_1__.SizeControl, {
      size: size,
      setSize: setSize
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

/***/ "./src/global/global.js":
/*!******************************!*\
  !*** ./src/global/global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RICH_TEXT_FORMATS: () => (/* binding */ RICH_TEXT_FORMATS),
/* harmony export */   TEXT_SIZES: () => (/* binding */ TEXT_SIZES)
/* harmony export */ });
const RICH_TEXT_FORMATS = ['core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'custom-format/color-highlight', 'custom-format/uppercase', 'custom-format/lowercase'];
const TEXT_SIZES = ["default", "sm", "md", "lg"];

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
  const top = margin.top !== 'no' ? `mt-${margin.top}` : '';
  const right = margin.right !== 'no' ? ` mr-${margin.right}` : '';
  const bottom = margin.bottom !== 'no' ? ` mb-${margin.bottom}` : '';
  const left = margin.left !== 'no' ? ` ml-${margin.left}` : '';
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
/*!*****************************************!*\
  !*** ./src/blocks/simple-text/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/simple-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/simple-text/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/simple-text/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map