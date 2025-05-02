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

/***/ "./src/sections/cards-with-animate-icons/item/block.json":
/*!***************************************************************!*\
  !*** ./src/sections/cards-with-animate-icons/item/block.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/cards-with-animate-icons-item","version":"0.1.0","title":"Кртка з анімованою іконкою","icon":"smiley","description":"","example":{},"supports":{"html":false},"attributes":{"decor":{"type":"number","default":1},"columns":{"type":"string","enum":["lg:col-span-3","lg:col-span-4","md:col-span-2 lg:col-span-6","md:col-span-2 lg:col-span-12"],"default":"lg:col-span-4"}},"parent":["t4u/cards-with-animate-icons"],"textdomain":"cards-with-animate-icons-item","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/sections/cards-with-animate-icons/item/edit.js":
/*!************************************************************!*\
  !*** ./src/sections/cards-with-animate-icons/item/edit.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/sections/cards-with-animate-icons/item/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    decor,
    columns
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])("nested-bg-item min-h-[75px] md:min-h-[130px] xl:min-h-[165px] 4xl:min-h-[190px] p-[16px] md:p-[20px] xl:p-[30px] rounded-[12px] relative text-dark-primary md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2", columns)
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/inner-block', {
      classes: 'h-full flex flex-col first-no-margin last-no-margin pr-[20px] md:pr-[35px] xl:pr-[40px] 4xl:pr-[45px]',
      simpleWrapper: true,
      options: {
        template: [['t4u/heading', {
          classes: 'text-dark-primary ',
          fontSize: 'lg'
        }], ['t4u/simple-text', {
          classes: 'mt-[10px] mb-[20px]',
          canAddItem: true
        }], ["t4u/buttons-group", {
          classes: 'mt-auto',
          options: {
            template: [["t4u/button", {
              variant: 'btn-with-enter-arrow',
              acfField: 'text_review',
              acfFieldType: 'text'
            }]],
            allowedBlocks: ['t4u/button']
          }
        }]],
        allowedBlocks: []
      }
    }]],
    allowedBlocks: []
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0412\u0430\u0440\u0456\u0430\u043D\u0442\u0438 \u0434\u0435\u043A\u043E\u0440\u0443",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: decor,
          options: [...Array(10).keys()].map(i => ({
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "!h-[25px] w-auto",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)(`icons/figurines-decor-${i + 1}.svg`),
              alt: "icon"
            }),
            value: i + 1
          })),
          onChange: value => setAttributes({
            decor: +value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0420\u043E\u0437\u043C\u0456\u0440 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: columns,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: "1/4"
            }),
            value: 'lg:col-span-3'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: "1/3"
            }),
            value: 'lg:col-span-4'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: "1/2"
            }),
            value: 'md:col-span-2 lg:col-span-6'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: "1/1"
            }),
            value: 'md:col-span-2 lg:col-span-12'
          }],
          onChange: value => setAttributes({
            columns: value
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute top-[2px] md:top-[-10px] xl:top-[-5px] 4xl:[-10px] right-[16px] md:right-[20px] xl:right-[30px] [&_svg]:h-full [&_svg]:w-auto h-[14px] md:h-[30px] xl:h-[35px] 4xl:h-[40px] -rotate-90 origin-bottom-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "h-full w-auto",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)(`icons/figurines-decor-${decor}.svg`),
          alt: "icon"
        })
      }), children]
    })]
  });
}

/***/ }),

/***/ "./src/sections/cards-with-animate-icons/item/editor.scss":
/*!****************************************************************!*\
  !*** ./src/sections/cards-with-animate-icons/item/editor.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sections/cards-with-animate-icons/item/save.js":
/*!************************************************************!*\
  !*** ./src/sections/cards-with-animate-icons/item/save.js ***!
  \************************************************************/
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
/*!*************************************************************!*\
  !*** ./src/sections/cards-with-animate-icons/item/index.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/sections/cards-with-animate-icons/item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/sections/cards-with-animate-icons/item/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/sections/cards-with-animate-icons/item/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map