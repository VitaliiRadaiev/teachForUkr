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

/***/ "./src/blocks/card-with-image-logo/block.json":
/*!****************************************************!*\
  !*** ./src/blocks/card-with-image-logo/block.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/card-with-image-logo","version":"0.1.0","title":"Картка за картинкою + логотип","icon":"smiley","category":"blocks","description":"","example":{},"supports":{"html":false},"attributes":{"classes":{"type":"string","default":""},"columns":{"type":"string","enum":["lg:col-span-3","lg:col-span-4","lg:col-span-6","lg:col-span-12"],"default":"lg:col-span-4"}},"textdomain":"card-with-image-logo","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/blocks/card-with-image-logo/edit.js":
/*!*************************************************!*\
  !*** ./src/blocks/card-with-image-logo/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/card-with-image-logo/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    classes,
    className,
    columns
  } = attributes;
  const {
    insertBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/block-editor');
  const {
    getBlock,
    getBlockRootClientId,
    ...rest
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/block-editor'), [clientId]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('card-with-image-logo shrink-0 grow-0 relative nested-bg-item rounded-[12px] p-[5px] flex flex-col', classes, className, columns)
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/inner-block', {
      classes: 'aspect-[1/0.597] grow-0 shrink-0 rounded-[8px] bg-dark-primary-10 overflow-hidden relative',
      simpleWrapper: true,
      options: {
        template: [['t4u/image', {
          classes: 'ibg'
        }]],
        allowedBlocks: []
      }
    }], ['t4u/inner-block', {
      classes: 'grow shrink mt-[16px] md:mt-[20px] xl:mt-[30px] pb-[11px] px-[11px] md:pb-[15px] md:px-[15px] flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
      simpleWrapper: true,
      options: {
        template: [['t4u/inner-block', {
          classes: 'h-[30px] flex items-center [&_img:not([src])]:w-[140px]',
          options: {
            template: [['t4u/image', {
              classes: 'h-auto w-auto max-h-full max-w-full'
            }]],
            allowedBlocks: []
          }
        }], ['t4u/heading', {
          classes: 'mt-[16px] text-dark-primary',
          fontSize: 'lg'
        }], ['t4u/simple-text', {
          classes: 'mt-[5px] mb-[20px]',
          canAddItem: false
        }], ['t4u/button', {
          classes: 'btn mt-auto',
          wrapperClasses: 'btn mt-auto',
          variant: 'btn-with-arrow',
          acfField: 'text_more_details',
          acfFieldType: 'text'
        }]],
        allowedBlocks: []
      }
    }]],
    allowedBlocks: []
  });
  const saveBlock = () => {
    const block = getBlock(clientId);
    const parent = getBlock(getBlockRootClientId(clientId));
    console.log(block);
    const html = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.serialize)([block]);
    console.log(html);
    const parsedBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(html);
    console.log(parsedBlock);
    insertBlocks(parsedBlock, 1, parent.clientId, true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\u0420\u043E\u0437\u043C\u0456\u0440 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
          selected: columns,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "1/4"
            }),
            value: 'lg:col-span-3'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "1/3"
            }),
            value: 'lg:col-span-4'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "1/2"
            }),
            value: 'lg:col-span-6'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "1/1"
            }),
            value: 'lg:col-span-12'
          }],
          onChange: value => setAttributes({
            columns: value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\u0420\u043E\u0437\u043C\u0456\u0440 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: saveBlock,
          children: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...blockProps,
      children: children
    })]
  });
}

/***/ }),

/***/ "./src/blocks/card-with-image-logo/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/card-with-image-logo/editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/card-with-image-logo/save.js":
/*!*************************************************!*\
  !*** ./src/blocks/card-with-image-logo/save.js ***!
  \*************************************************/
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
/*!**************************************************!*\
  !*** ./src/blocks/card-with-image-logo/index.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/card-with-image-logo/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/card-with-image-logo/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/card-with-image-logo/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map