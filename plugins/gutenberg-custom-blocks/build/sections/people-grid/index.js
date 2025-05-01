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

/***/ "./src/components/default-sections-controls/DefaultSectionsControls.js":
/*!*****************************************************************************!*\
  !*** ./src/components/default-sections-controls/DefaultSectionsControls.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultSectionsControls: () => (/* binding */ DefaultSectionsControls)
/* harmony export */ });
/* harmony import */ var _components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/is-hide/IsHide */ "./src/components/is-hide/IsHide.js");
/* harmony import */ var _components_space_control_MarginYControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/space-control/MarginYControl */ "./src/components/space-control/MarginYControl.js");
/* harmony import */ var _components_space_control_PaddingYControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/space-control/PaddingYControl */ "./src/components/space-control/PaddingYControl.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/global */ "./src/global/global.js");
/* harmony import */ var _components_sections_bg_color_pallet_SectionsBgColorPallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sections-bg-color-pallet/SectionsBgColorPallet */ "./src/components/sections-bg-color-pallet/SectionsBgColorPallet.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DefaultSectionsControls = ({
  attributes,
  setAttributes
}) => {
  const {
    isHide,
    padding,
    margin,
    background
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_is_hide_IsHide__WEBPACK_IMPORTED_MODULE_0__.IsHide, {
      isHide: isHide,
      setIsHide: val => setAttributes({
        isHide: val
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_sections_bg_color_pallet_SectionsBgColorPallet__WEBPACK_IMPORTED_MODULE_4__.SectionsBgColorPallet, {
      color: background,
      setColor: val => setAttributes({
        background: val
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_space_control_PaddingYControl__WEBPACK_IMPORTED_MODULE_2__.PaddingYControl, {
      size: padding,
      setSize: s => setAttributes({
        padding: s
      }),
      sizesMap: _global_global__WEBPACK_IMPORTED_MODULE_3__.SECTIONS_PADDING_MAP
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_space_control_MarginYControl__WEBPACK_IMPORTED_MODULE_1__.MarginYControl, {
      size: margin,
      setSize: s => setAttributes({
        margin: s
      }),
      sizesMap: _global_global__WEBPACK_IMPORTED_MODULE_3__.SECTIONS_MARGIN_MAP
    })]
  });
};

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

/***/ "./src/components/section-decor-picker/SectionsDecorPicker.js":
/*!********************************************************************!*\
  !*** ./src/components/section-decor-picker/SectionsDecorPicker.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionsDecorPicker: () => (/* binding */ SectionsDecorPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SectionsDecorPicker = ({
  decor,
  setDecor
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "\u0414\u0435\u043A\u043E\u0440 \u0441\u0435\u043A\u0446\u0456\u0457",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RadioControl, {
      selected: +decor,
      options: [{
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-lg",
          children: "\u041D\u0435\u043C\u0430\u0454"
        }),
        value: 0
      }, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[100px] w-auto bg-light-primary-80",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(`general/section-decor-1.jpg`),
          alt: "icon"
        }),
        value: 1
      }, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[100px] w-auto bg-light-primary-80 -scale-x-100",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(`general/section-decor-1.jpg`),
          alt: "icon"
        }),
        value: 2
      }, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[100px] w-auto bg-light-primary-80",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(`general/section-decor-2.jpg`),
          alt: "icon"
        }),
        value: 3
      }, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[100px] w-auto bg-light-primary-80 -scale-x-100",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(`general/section-decor-2.jpg`),
          alt: "icon"
        }),
        value: 4
      }, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[100px] w-auto bg-light-primary-80",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(`general/section-decor-3.jpg`),
          alt: "icon"
        }),
        value: 5
      }, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "!h-[100px] w-auto bg-light-primary-80 -scale-x-100",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getUrlToStaticImages)(`general/section-decor-3.jpg`),
          alt: "icon"
        }),
        value: 6
      }],
      onChange: value => setDecor(+value)
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
const TEXT_CONTENT_ALLOWD_BLOCKS = ['t4u/heading', 't4u/paragraph', 't4u/ul-list-square'];
const LIST_GAP_Y_MAP = {
  sm: 'gap-y-[5px]',
  md: 'gap-y-[10px]',
  lg: 'gap-y-[25px]',
  xl: 'gap-y-[40px]'
};

/***/ }),

/***/ "./src/hooks/hooks.js":
/*!****************************!*\
  !*** ./src/hooks/hooks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFetchOnVisible = (fetchCallback, deps = [], shouldFetch = true) => {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isFetched, setIsFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!shouldFetch) return;
    observerRef.current = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting && !isFetched && typeof fetchCallback === 'function') {
        setIsLoading(true);
        fetchCallback()?.then(result => {
          setData(result);
          setIsFetched(true);
          setIsLoading(false);
          observer.disconnect();
        })?.catch(err => {
          setError(err);
          setIsLoading(false);
        });
      }
    }, {
      threshold: 0.1
    });
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }
    return () => observerRef.current?.disconnect();
  }, [isFetched, shouldFetch, ...deps]);
  const refetch = fetchCallback => {
    setIsLoading(true);
    fetchCallback()?.then(result => {
      setData(result);
      setIsFetched(true);
      setIsLoading(false);
      observer.disconnect();
    })?.catch(err => {
      setError(err);
      setIsLoading(false);
    });
  };
  return {
    ref,
    data,
    error,
    isFetched,
    isLoading,
    refetch
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchOnVisible);

/***/ }),

/***/ "./src/sections/people-grid/block.json":
/*!*********************************************!*\
  !*** ./src/sections/people-grid/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/people-grid","version":"0.1.0","title":"Люди список","category":"news_stories_cases_other","icon":"layout","description":"","example":{},"supports":{"html":false},"attributes":{"isHide":{"type":"boolean","default":false},"padding":{"type":"object","default":{"top":"lg","right":"","bottom":"lg","left":""}},"margin":{"type":"object","default":{"top":"","right":"","bottom":"","left":""}},"background":{"type":"string","enum":["bg-light-primary","bg-light-primary-80"],"default":"bg-light-primary-80"},"preview":{"type":"string"},"decor":{"type":"number","default":1},"selectedCategories":{"type":"array","default":[]},"selectedPosts":{"type":"array","default":[]}},"textdomain":"people-grid","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./script.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/sections/people-grid/edit.js":
/*!******************************************!*\
  !*** ./src/sections/people-grid/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/sections/people-grid/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_default_sections_controls_DefaultSectionsControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/default-sections-controls/DefaultSectionsControls */ "./src/components/default-sections-controls/DefaultSectionsControls.js");
/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/hooks */ "./src/hooks/hooks.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ui_slider_nav_SliderNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/slider-nav/SliderNav */ "./src/ui/slider-nav/SliderNav.js");
/* harmony import */ var _components_section_decor_picker_SectionsDecorPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/section-decor-picker/SectionsDecorPicker */ "./src/components/section-decor-picker/SectionsDecorPicker.js");
/* harmony import */ var _ui_section_decor_SectionDecor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/section-decor/SectionDecor */ "./src/ui/section-decor/SectionDecor.js");
/* harmony import */ var _ui_card_people_CardPeople__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/card-people/CardPeople */ "./src/ui/card-people/CardPeople.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);















const posts_per_page = 50;
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    preview,
    isHide,
    padding,
    margin,
    background,
    className,
    decor,
    selectedCategories,
    selectedPosts
  } = attributes;
  const [filterPosts, setFilterPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [isFilterPostsFetching, setIsFilterPostFetching] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [page, setPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [max_num_pages, setMax_num_pages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const [renderPosts, setRenderPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/block-editor');
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/block-editor').getBlocks(clientId), [clientId]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('people-gird-section rounded-[20px] md:rounded-[30px] overflow-hidden relative', className, background, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getSectionsMarginClasses)(margin), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getSectionsPaddingClasses)(padding), {
      ['hide-block']: isHide
    })
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/head-block', {
      classes: "order-1 [&~.t4u-content]:mt-[30px] md:[&~.t4u-content]:mt-[50px] 4xl:[&~.t4u-content]:mt-[60px]",
      aligment: "center",
      container: "lg"
    }], ["t4u/buttons-group", {
      classes: 'mt-[40px] xl:mt-[50px] order-3',
      alignment: 'center',
      options: {
        template: [["t4u/button", {
          classes: 'show-more-btn',
          acfField: 'text_show_more',
          acfFieldType: 'text',
          variant: 'btn-primary',
          renderAs: 'button',
          simpleWrapper: true,
          dataAttributes: {
            'data-action': 'show-more-btn'
          }
        }]],
        allowedBlocks: ['t4u/button']
      }
    }]],
    allowedBlocks: []
  });
  const fetchPosts = () => {
    const path = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.buildApiPath)('site-core/v1/people', {
      category: selectedCategories.length ? selectedCategories.join(',') : undefined,
      posts_per_page: 12
    });
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path
    });
  };
  const {
    ref,
    data,
    isLoading,
    refetch
  } = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchPosts);
  const fetchPostsByIds = () => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
    path: `site-core/v1/people-by-ids?ids=${selectedPosts.join(',')}`
  });
  const {
    ref: postsByIdsRef,
    data: postsByIdsData,
    isLoading: isLoadingPostsByIds,
    refetch: refetchPostsByIds
  } = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchPostsByIds);
  const fetchCategoriesData = () => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
    path: 'site-core/v1/people-categories'
  });
  const {
    ref: refCategories,
    data: dataCategories,
    isLoading: isLoadingCategories
  } = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchCategoriesData);
  const fetchPostsForFilter = () => {
    const path = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.buildApiPath)('site-core/v1/people', {
      category: selectedCategories.length ? selectedCategories.join(',') : undefined,
      page: page,
      search: search,
      posts_per_page: posts_per_page
    });
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path
    });
  };
  const {
    ref: postsForFilterRef,
    data: postsForFilter,
    isLoading: isPostsForFilterLoading,
    refetch: refetchPostsForFilter
  } = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchPostsForFilter);
  const loadMorePostsForFilter = async ({
    selectedCategories,
    page,
    search,
    posts_per_page
  }) => {
    setIsFilterPostFetching(true);
    const path = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.buildApiPath)('site-core/v1/people', {
      category: selectedCategories.length ? selectedCategories.join(',') : undefined,
      page: page,
      search: search,
      posts_per_page: posts_per_page
    });
    const res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path
    });
    setFilterPosts(posts => [...posts, ...res.posts]);
    setMax_num_pages(res.max_num_pages);
    setIsFilterPostFetching(false);
  };
  const loadPostsForFilter = async ({
    selectedCategories,
    page,
    search,
    posts_per_page
  }) => {
    setIsFilterPostFetching(true);
    const path = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.buildApiPath)('site-core/v1/people', {
      category: selectedCategories.length ? selectedCategories.join(',') : undefined,
      page: page,
      search: search,
      posts_per_page: posts_per_page
    });
    const res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path
    });
    setFilterPosts(res.posts);
    setMax_num_pages(res.max_num_pages);
    setIsFilterPostFetching(false);
  };
  const debouncedloadPostsForFilter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.debounce)(loadPostsForFilter, 500), []);
  const handleCategoryChange = (checkedCategory, selectedCategories, isChecked) => {
    let ids = [];
    if (isChecked) {
      ids = [...selectedCategories, checkedCategory];
      setAttributes({
        selectedCategories: ids
      });
    } else {
      ids = selectedCategories.filter(id => id !== checkedCategory);
      setAttributes({
        selectedCategories: ids
      });
    }
    refetch(() => {
      const path = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.buildApiPath)('site-core/v1/people', {
        category: ids.length ? ids.join(',') : undefined,
        posts_per_page: 12
      });
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
        path
      });
    });
    loadPostsForFilter({
      selectedCategories: ids,
      page: 1,
      search: '',
      posts_per_page
    });
    setPage(1);
    setSearch('');
  };
  const clearSelectedCategories = () => {
    let ids = [];
    setAttributes({
      selectedCategories: ids
    });
    refetch(() => {
      const path = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.buildApiPath)('site-core/v1/people', {
        category: ids.length ? ids.join(',') : undefined,
        posts_per_page: 12
      });
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
        path
      });
    });
    loadPostsForFilter({
      selectedCategories: ids,
      page: 1,
      search: '',
      posts_per_page
    });
    setPage(1);
    setSearch('');
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selectedPosts.length) {
      const buttonsGroup = innerBlocks[1];
      buttonsGroup && updateBlockAttributes(buttonsGroup.clientId, {
        isHide: true
      });
    } else {
      const buttonsGroup = innerBlocks[1];
      buttonsGroup && updateBlockAttributes(buttonsGroup.clientId, {
        isHide: false
      });
    }
  }, [selectedPosts.length]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (postsForFilter) {
      setFilterPosts(postsForFilter.posts);
      setMax_num_pages(postsForFilter.max_num_pages);
    }
  }, [postsForFilter]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    return () => {
      debouncedloadPostsForFilter.cancel();
    };
  }, [debouncedloadPostsForFilter]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    refetchPostsByIds(() => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path: `site-core/v1/people-by-ids?ids=${selectedPosts.join(',')}`
    }));
  }, [selectedPosts]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selectedPosts.length && data && postsByIdsData) {
      setRenderPosts(postsByIdsData.posts);
    } else if (data) {
      setRenderPosts(data.posts);
    }
  }, [selectedPosts, data, postsByIdsData]);
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
      src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlToStaticImages)(preview)
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_default_sections_controls_DefaultSectionsControls__WEBPACK_IMPORTED_MODULE_7__.DefaultSectionsControls, {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u0442\u0456\u043B\u044C\u043A\u0438 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F\u0445",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])({
            'disabled': isFilterPostsFetching || isPostsForFilterLoading || isLoadingPostsByIds
          }),
          children: [isLoadingCategories && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "text-center text-lg",
            children: "\u0417\u0430\u0432\u0430\u0442\u043D\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F ..."
          }), !!dataCategories && dataCategories.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: dataCategories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
                label: category.name,
                checked: selectedCategories.includes(category.term_id),
                onChange: isChecked => handleCategoryChange(category.term_id, selectedCategories, isChecked)
              }, category.term_id), category.sub_categories && category.sub_categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
                className: "pl-[15px]",
                label: category.name,
                checked: selectedCategories.includes(category.term_id),
                onChange: isChecked => handleCategoryChange(category.term_id, selectedCategories, isChecked)
              }, category.term_id))]
            }))
          }) : !isLoadingCategories && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "text-center text-lg",
            children: "\u041D\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E"
          }), !!selectedCategories.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => clearSelectedCategories(),
            variant: "primary",
            size: "compact",
            children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043E\u0431\u0440\u0430\u043D\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "mt-[20px] text-[14px] font-bold",
            children: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u0442\u0456\u043B\u044C\u043A\u0438 \u043E\u0431\u0440\u0430\u043D\u0438\u0445 \u043B\u044E\u0434\u0435\u0439"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
            className: "w-full mt-[5px]",
            type: "search",
            placeholder: "\u041F\u043E\u0448\u0443\u043A",
            value: search,
            onChange: e => {
              debouncedloadPostsForFilter({
                selectedCategories,
                page: 1,
                search: e.target.value,
                posts_per_page
              });
              setSearch(e.target.value);
              setPage(1);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "mt-[5px] max-h-[400px] overflow-auto",
            children: [filterPosts.length ? filterPosts.map(post => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              title: post.title,
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('btn cursor-pointer p-[5px] transition-opacity hover:bg-light-primary-80 hover:[&.bg-light-primary-60]:bg-light-primary-40', {
                'bg-light-primary-60': selectedPosts.includes(post.id)
              }),
              onClick: e => {
                if (e.target.closest('.btn').classList.contains('bg-light-primary-60')) {
                  setAttributes({
                    selectedPosts: selectedPosts.filter(id => id != post.id)
                  });
                } else {
                  setAttributes({
                    selectedPosts: [...selectedPosts, post.id]
                  });
                }
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                style: {
                  '--line': 1,
                  '--line-height': '1.4em'
                },
                className: "text-sm truncate-text",
                children: post.title
              })
            }, post.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "text-center text-sm",
              children: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"
            }), isPostsForFilterLoading || isFilterPostsFetching ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "text-sm",
              children: "\u0417\u0430\u0432\u0430\u0442\u043D\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F ..."
            }) : page < max_num_pages && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "small",
              onClick: () => {
                loadMorePostsForFilter({
                  selectedCategories,
                  page: page + 1,
                  search,
                  posts_per_page
                });
                setPage(page + 1);
              },
              children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"
            })]
          }), !!selectedPosts.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "primary",
            className: "mt-[10px]",
            onClick: () => setAttributes({
              selectedPosts: []
            }),
            children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043E\u0431\u0440\u0430\u043D\u0456 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_section_decor_picker_SectionsDecorPicker__WEBPACK_IMPORTED_MODULE_11__.SectionsDecorPicker, {
        decor: decor,
        setDecor: value => setAttributes({
          decor: value
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_section_decor_SectionDecor__WEBPACK_IMPORTED_MODULE_12__.SectionDecor, {
        decor: decor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        ref: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.mergeRefs)(ref, refCategories, postsByIdsRef, postsForFilterRef),
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('container flex flex-col relative z-2', {
          'disabled': isLoadingPostsByIds
        }),
        children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "t4u-content relative order-2 first-child-no-margin",
          children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "text-center text-lg",
            children: "\u0417\u0430\u0432\u0430\u0442\u043D\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F ..."
          }), !!renderPosts.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "grid gap-[20px] lg:gap-[24px] 4xl:gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            children: renderPosts.map(post => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "relative",
              children: [!!selectedPosts.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
                onClick: () => {
                  setAttributes({
                    selectedPosts: selectedPosts.filter(id => id != post.id)
                  });
                },
                className: "absolute z-3 top-0 right-0 icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_card_people_CardPeople__WEBPACK_IMPORTED_MODULE_13__.CardPeople, {
                post: post
              })]
            }))
          }) : !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "text-center text-lg",
            children: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/sections/people-grid/editor.scss":
/*!**********************************************!*\
  !*** ./src/sections/people-grid/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sections/people-grid/save.js":
/*!******************************************!*\
  !*** ./src/sections/people-grid/save.js ***!
  \******************************************/
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

/***/ "./src/ui/card-people/CardPeople.js":
/*!******************************************!*\
  !*** ./src/ui/card-people/CardPeople.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardPeople: () => (/* binding */ CardPeople)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const CardPeople = ({
  post
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "card-people nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "aspect-[1/0.833] lg:aspect-[1/0.864] grow-0 shrink-0 rounded-[8px] relative overflow-hidden",
      dangerouslySetInnerHTML: {
        __html: post.image
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-[20px] lg:mt-[30px] px-[15px] pb-[15px] grow shrink flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "h3 text-dark-primary",
        children: post.title
      }), !!post.excerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "mt-[5px] mb-[20px] text-md text-dark-primary-60 last-child-no-margin",
        children: post.excerpt
      }), !!post.social && Array.isArray(post.social) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "mt-auto flex flex-wrap gap-[12px]",
        children: post.social.map(social => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex items-center justify-center h-[44px] xl:h-[36px] 4xl:h-[40px] w-[44px] xl:w-[36px] 4xl:w-[40px] rounded-full bg-accent-first transition-colors hover:bg-accent-first-50",
          "aria-label": "Show in social",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            className: "h-[20px] w-auto color-light-primary-filter",
            src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getSocialIconByUrl)(social.link))
          })
        }))
      })]
    })]
  });
};

/***/ }),

/***/ "./src/ui/section-decor/SectionDecor.js":
/*!**********************************************!*\
  !*** ./src/ui/section-decor/SectionDecor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionDecor: () => (/* binding */ SectionDecor)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SectionDecor = ({
  decor
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "absolute z-1 top-0 left-0 w-full h-full pointer-events-none overflow-hidden",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container h-full relative",
      children: [decor === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "absolute right-0 bottom-[70px] md:bottom-[80px] lg:bottom-[100px] h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semicircle-bottom.svg'),
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-full w-auto aos-rotate-left",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semi-tours-left.svg'),
          alt: ""
        })]
      }), decor === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "absolute left-0 bottom-[70px] md:bottom-[80px] lg:bottom-[100px] h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -scale-x-100",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semicircle-bottom.svg'),
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-full w-auto aos-rotate-left",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semi-tours-left.svg'),
          alt: ""
        })]
      }), decor === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute left-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -translate-x-1/2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semi-torus-top.svg'),
          alt: ""
        })
      }), decor === 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute right-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex translate-x-1/2 -scale-x-100",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semi-torus-top.svg'),
          alt: ""
        })
      }), decor === 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute left-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -translate-x-1/2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semicircle-bottom.svg'),
          alt: ""
        })
      }), decor === 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute right-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex translate-x-1/2 -scale-x-100",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          className: "accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right",
          src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getUrlToStaticImages)('icons/semicircle-bottom.svg'),
          alt: ""
        })
      })]
    })
  });
};

/***/ }),

/***/ "./src/ui/slider-nav/SliderNav.js":
/*!****************************************!*\
  !*** ./src/ui/slider-nav/SliderNav.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderNav: () => (/* binding */ SliderNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SliderNav = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "mt-[20px] md:mt-[30px] flex justify-center [&:has(.swiper-pagination-lock)]:hidden pointer-events-none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "slider-bullets",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "bullets-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "bullet active",
            "data-index": "0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "bullet next",
            "data-index": "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "bullet next-next",
            "data-index": "2"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "hidden lg:block absolute right-0 bottom-[calc(100%+50px)] pointer-events-none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "inline-flex gap-[24px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          className: "nav-btn prev icon-arrow-left-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          className: "nav-btn next icon-arrow-right-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"
        })]
      })
    })]
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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/*!*******************************************!*\
  !*** ./src/sections/people-grid/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/sections/people-grid/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/sections/people-grid/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/sections/people-grid/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {
    attributes: {
      preview: 'general/preview-section-people-grid.jpg'
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map