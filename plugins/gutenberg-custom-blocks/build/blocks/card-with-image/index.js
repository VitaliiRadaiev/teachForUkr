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

/***/ "./src/blocks/card-with-image/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/card-with-image/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/card-with-image","version":"0.1.0","title":"Карточка з картинкою","icon":"smiley","category":"blocks","description":"","example":{},"supports":{"html":false},"attributes":{"isHide":{"type":"boolean","default":false},"classes":{"type":"string","default":""},"columns":{"type":"string","enum":["lg:col-span-3","lg:col-span-4","lg:col-span-6"],"default":"lg:col-span-3"},"mask":{"type":"number","default":1},"info":{"type":"boolean","default":false},"icon":{"type":"string","default":"icons/decor-icon-1.svg"}},"textdomain":"card-with-image","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./script.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/blocks/card-with-image/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/card-with-image/edit.js ***!
  \********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/card-with-image/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_icon_picker_IconPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icon-picker/IconPicker */ "./src/components/icon-picker/IconPicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    classes,
    className,
    columns,
    mask,
    info,
    icon
  } = attributes;
  const {
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core/block-editor').getBlocks(clientId), [clientId]);
  const [isInfoShow, setIsInfoShow] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2', {
      'active': isInfoShow
    }, classes, className, columns),
    onClick: e => {
      if (e.target.closest('[data-action="show-details"]')) {
        setIsInfoShow(true);
      }
      if (e.target.closest('[data-action="close-details"]')) {
        setIsInfoShow(false);
      }
    }
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/inner-block', {
      classes: 'card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]',
      simpleWrapper: true,
      options: {
        template: [['t4u/inner-block', {
          classes: 'hidden absolute z-3 top-[16px] lg:top-[30px] right-[16px] lg:right-[30px] cursor-pointer hover:scale-105 transition-transform',
          dataAttributes: {
            'data-action': 'show-details'
          },
          tag: 'button',
          simpleWrapper: true,
          options: {
            template: [['t4u/static-image', {
              classes: 'h-[30px] w-[30px] object-contain',
              url: 'icons/info.svg'
            }]],
            allowedBlocks: []
          }
        }], ['t4u/inner-block', {
          classes: 'grow-0 shrink-0 md-max:pr-[16px] md:p-0',
          simpleWrapper: true,
          options: {
            template: [['t4u/inner-block', {
              classes: 'aspect-square md:aspect-[1/1.136] w-[144px] md:w-[61.49%] md:mx-auto relative',
              simpleWrapper: true,
              options: {
                template: [['t4u/inner-block', {
                  classes: 'decor-icon absolute z-2 aspect-square w-[27%] md:w-[30.3%] top-[16px] md:top-[20px] 4xl:top-[30px] right-0 md:right-[-10%] flex items-center justify-center rounded-full bg-accent-first',
                  simpleWrapper: true,
                  options: {
                    template: [['t4u/static-image', {
                      classes: 'aspect-square w-[55%] object-cover color-light-primary-filter',
                      url: 'icons/decor-icon-1.svg'
                    }]],
                    allowedBlocks: []
                  }
                }], ['t4u/image', {
                  classes: 'ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1'
                }], ['t4u/static-image', {
                  classes: 'decor absolute z-2 accent-second-filter w-[13.88%] md:w-[15.15%] h-auto left-[13%] bottom-[10%]',
                  url: 'icons/rectangle-middle.svg'
                }]],
                allowedBlocks: []
              }
            }]],
            allowedBlocks: []
          }
        }], ['t4u/inner-block', {
          classes: 'grow shrink p-[16px] md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
          simpleWrapper: true,
          options: {
            template: [['t4u/heading', {
              classes: 'mb-[5px] text-dark-primary',
              htmlTeg: 'span',
              fontSize: 'lg'
            }], ['t4u/simple-text', {
              classes: 'mb-[20px]',
              canAddItem: false
            }], ['t4u/button', {
              classes: 'btn mt-auto',
              wrapperClasses: 'btn mt-auto',
              variant: 'btn-with-arrow'
            }]],
            allowedBlocks: []
          }
        }]],
        allowedBlocks: []
      }
    }], ['t4u/inner-block', {
      classes: 'card-rotate-back absolute top-0 left-0 h-full w-full nested-bg-item rounded-[12px] flex flex-col p-[20px] pt-[64px] sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
      simpleWrapper: true,
      options: {
        template: [['t4u/simple-html', {
          html: '<button data-action="close-details" class="absolute top-[20px] right-[20px] icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80"></button>'
        }], ['t4u/heading', {
          classes: 'text-dark-primary',
          htmlTeg: 'span',
          fontSize: 'lg'
        }], ['t4u/inner-block', {
          classes: 'mt-[10px] lg:mt-[20px] mb-[20px] h-full overflow-auto',
          simpleWrapper: true,
          options: {
            template: [['t4u/inner-block', {
              classes: 'max-h-full [&_.swiper-scrollbar]:right-0',
              dataAttributes: {
                'data-scroll-container': null
              },
              simpleWrapper: true,
              options: {
                template: [['t4u/simple-text', {
                  classes: 'text-dark-primary pr-[10px]'
                }]],
                allowedBlocks: []
              }
            }]],
            allowedBlocks: []
          }
        }], ['t4u/button', {
          classes: 'btn',
          variant: 'btn-with-enter-arrow'
        }]],
        allowedBlocks: []
      }
    }]],
    allowedBlocks: []
  });
  const toggleShowInfoBtn = () => {
    const btn = innerBlocks[0]?.innerBlocks[0];
    if (btn) {
      updateBlockAttributes(btn.clientId, {
        classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('absolute z-3 top-[16px] lg:top-[30px] right-[16px] lg:right-[30px] cursor-pointer hover:scale-105 transition-transform', {
          'hidden': info
        })
      });
    }
  };
  const setIcon = iconUrl => {
    const staticImage = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[0]?.innerBlocks[0];
    staticImage && updateBlockAttributes(staticImage.clientId, {
      url: iconUrl
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const cardRotateRront = innerBlocks[0];
    const imageWrap = innerBlocks[0]?.innerBlocks[1];
    const imageContainer = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0];
    const decorIcon = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[0];
    const img = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[1];
    const decor = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[2];
    const textWrapper = innerBlocks[0]?.innerBlocks[2];
    cardRotateRront && updateBlockAttributes(cardRotateRront.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col not-hover gap-y-[15px]', {
        'md-max:flex-row-reverse': !info,
        '4xl:gap-y-[20px]': columns === 'lg:col-span-3',
        'lg:gap-y-[30px] 4xl:gap-y-[40px]': columns === 'lg:col-span-6' || columns === 'lg:col-span-4'
      })
    });
    imageWrap && updateBlockAttributes(imageWrap.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('grow-0 shrink-0', {
        'md-max:pr-[16px] md:p-0': !info
      })
    });
    imageContainer && updateBlockAttributes(imageContainer.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('relative', {
        'aspect-square w-[144px]': !info,
        'md:aspect-[1/1.136] md:w-[61.49%] md:mx-auto': !info && mask === 1,
        'aspect-[1/1.136] w-[61.49%] mx-auto': info && mask === 1,
        'md:aspect-[1/0.7] md:w-[73%] md:mx-auto': !info && mask === 2,
        'aspect-[1/0.7] w-[73%] mx-auto': info && mask === 2
      })
    });
    decorIcon && updateBlockAttributes(decorIcon.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('decor-icon absolute z-2 aspect-square flex items-center justify-center rounded-full bg-accent-first md:right-[-10%]', {
        'w-[27%] right-0 top-[16px] md:top-[20px] 4xl:top-[30px]': !info,
        'w-[18.95%] right-[10%] top-[16px] md:top-[20px] 4xl:top-[30px]': info && mask === 1,
        'w-[16.39%] right-0 top-[63%] right-[20%] md:top-[62%] md:right-[10%] lg:top-[20px]': info && mask === 2,
        'md:w-[30.3%] md:right-0': mask === 1,
        'md:w-[25.53%]': mask === 2,
        'lg:w-[22.98%] lg:right-[6%]': mask === 1 && columns === 'lg:col-span-4',
        'lg:w-[15.07%] lg:right-[16%]': mask === 1 && columns === 'lg:col-span-6',
        'lg:w-[19.35%] lg:right-0': mask === 2 && columns === 'lg:col-span-4',
        'lg:w-[12.37%] lg:right-[7%]': mask === 2 && columns === 'lg:col-span-6'
      })
    });
    decor && updateBlockAttributes(decor.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('decor absolute z-2 accent-second-filter h-auto', {
        'w-[13.88%] left-[13%] bottom-[10%]': !info,
        'w-[9.47%] left-[15%] bottom-[13%]': info && mask === 1,
        'w-[8.19%] left-[9%] bottom-[6%]': info && mask === 2,
        'md:w-[15.15%] md:left-[13%] md:bottom-[10%]': mask === 1,
        'md:w-[12.76%] md:left-[6%] md:bottom-0': mask === 2,
        'lg:w-[11.49%]': mask === 1 && columns === 'lg:col-span-4',
        'lg:w-[7.53%] lg:left-[17%] lg:bottom-[13%]': mask === 1 && columns === 'lg:col-span-6',
        'lg:w-[9.67%] lg:left-[14%]': mask === 2 && columns === 'lg:col-span-4',
        'lg:w-[6.18%] lg:left-[16%] lg:bottom-[5%]': mask === 2 && columns === 'lg:col-span-6'
      })
    });
    img && updateBlockAttributes(img.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('ibg card-image-mask z-1', {
        'card-image-mask-1 image-mask-bottom-center': mask === 1,
        'card-image-mask-2 image-mask-center md:image-mask-bottom-center': mask === 2 && !info,
        'card-image-mask-2 image-mask-bottom-center': mask === 2 && info
      })
    });
    textWrapper && updateBlockAttributes(textWrapper.clientId, {
      classes: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('grow shrink p-[16px] md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start', {
        'pt-0': info
      })
    });
  }, [columns, mask, info]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        opened: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
            className: "flex items-center gap-x-[10px] cursor-pointer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
              checked: info,
              onChange: () => {
                setAttributes({
                  info: !info
                });
                toggleShowInfoBtn();
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-sm",
              children: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043D\u0430 \u0440\u043E\u0437\u0432\u043E\u0440\u043E\u0442\u0456"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0412\u0430\u0440\u0456\u0430\u043D\u0442\u0438 \u043C\u0430\u0441\u043E\u043A",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: mask,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              className: "!h-[100px] w-auto",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('general/card-image-mask-1.svg')
            }),
            value: 1
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              className: "!h-[100px] w-auto",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)('general/card-image-mask-2.svg')
            }),
            value: 2
          }],
          onChange: value => setAttributes({
            mask: +value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0420\u043E\u0437\u043C\u0456\u0440 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: columns,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              children: "1/4"
            }),
            value: 'lg:col-span-3'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              children: "1/3"
            }),
            value: 'lg:col-span-4'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              children: "1/2"
            }),
            value: 'lg:col-span-6'
          }],
          onChange: value => setAttributes({
            columns: value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_icon_picker_IconPicker__WEBPACK_IMPORTED_MODULE_7__.IconPicker, {
        iconUrl: icon,
        setIconUrl: iconUrl => {
          setAttributes({
            icon: iconUrl
          });
          setIcon(iconUrl);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: children
    })]
  });
}

/***/ }),

/***/ "./src/blocks/card-with-image/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/card-with-image/editor.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/card-with-image/save.js":
/*!********************************************!*\
  !*** ./src/blocks/card-with-image/save.js ***!
  \********************************************/
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

/***/ "./src/components/icon-picker/IconPicker.js":
/*!**************************************************!*\
  !*** ./src/components/icon-picker/IconPicker.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPicker: () => (/* binding */ IconPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const icons = ['icons/decor-icon-1.svg', 'icons/decor-icon-2.svg', 'icons/decor-icon-3.svg', 'icons/decor-icon-4.svg', 'icons/decor-icon-5.svg', 'icons/decor-icon-6.svg', 'icons/decor-icon-7.svg', 'icons/decor-icon-8.svg', 'icons/decor-icon-9.svg', 'icons/decor-icon-10.svg', 'icons/decor-icon-11.svg'];
const IconPicker = ({
  iconUrl,
  setIconUrl
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "\u041E\u0431\u0440\u0430\u0442\u0438 \u0456\u043A\u043E\u043D\u043A\u0443",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RadioControl, {
      selected: iconUrl,
      options: icons.map(iconUrl => ({
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[30px] w-auto",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(iconUrl)
        }),
        value: iconUrl
      })),
      onChange: value => setIconUrl(value)
    })
  });
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineString: () => (/* binding */ combineString),
/* harmony export */   getContainerClasses: () => (/* binding */ getContainerClasses),
/* harmony export */   getFlexAligmentClasses: () => (/* binding */ getFlexAligmentClasses),
/* harmony export */   getGapClasses: () => (/* binding */ getGapClasses),
/* harmony export */   getMarginClasses: () => (/* binding */ getMarginClasses),
/* harmony export */   getOptionsField: () => (/* binding */ getOptionsField),
/* harmony export */   getSectionsMarginClasses: () => (/* binding */ getSectionsMarginClasses),
/* harmony export */   getSectionsPaddingClasses: () => (/* binding */ getSectionsPaddingClasses),
/* harmony export */   getUrlToStaticImages: () => (/* binding */ getUrlToStaticImages),
/* harmony export */   removeDomain: () => (/* binding */ removeDomain)
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
/*!*********************************************!*\
  !*** ./src/blocks/card-with-image/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/card-with-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/card-with-image/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/card-with-image/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map