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
/* harmony export */   RICH_TEXT_FORMATS: () => (/* binding */ RICH_TEXT_FORMATS),
/* harmony export */   SECTIONS_MARGIN_MAP: () => (/* binding */ SECTIONS_MARGIN_MAP),
/* harmony export */   SECTIONS_PADDING_MAP: () => (/* binding */ SECTIONS_PADDING_MAP),
/* harmony export */   TEXT_SIZES: () => (/* binding */ TEXT_SIZES)
/* harmony export */ });
const RICH_TEXT_FORMATS = ['core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'custom-format/color-highlight', 'custom-format/uppercase', 'custom-format/lowercase'];
const TEXT_SIZES = ["sm", "md", "lg", "xl"];
const SECTIONS_MARGIN_MAP = ['no', 'sm', 'md', 'lg', 'xl'];
const SECTIONS_PADDING_MAP = ['no', 'sm', 'md', 'lg', 'xl'];

/***/ }),

/***/ "./src/sections/image-text-button-row/block.json":
/*!*******************************************************!*\
  !*** ./src/sections/image-text-button-row/block.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"t4u/image-text-button-row","version":"0.1.0","title":"Картинка + текст горизонтально","category":"image-text-button-row","icon":"layout","description":"","supports":{"html":false},"attributes":{"isHide":{"type":"boolean","default":false},"padding":{"type":"object","default":{"top":"lg","right":"","bottom":"lg","left":""}},"margin":{"type":"object","default":{"top":"","right":"","bottom":"","left":""}},"background":{"type":"string","enum":["bg-light-primary","bg-light-primary-80"],"default":"bg-light-primary-80"},"directions":{"type":"string","enum":["left","right"],"default":"left"},"decor":{"type":"number","default":1}},"textdomain":"image-text-button-row","editorScript":"file:./index.js","editorStyle":"file:./index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/sections/image-text-button-row/edit.js":
/*!****************************************************!*\
  !*** ./src/sections/image-text-button-row/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/sections/image-text-button-row/editor.scss");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_default_sections_controls_DefaultSectionsControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/default-sections-controls/DefaultSectionsControls */ "./src/components/default-sections-controls/DefaultSectionsControls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes
}) {
  const {
    isHide,
    padding,
    margin,
    background,
    className,
    directions,
    decor
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('image-text-button-row rounded-[20px] md:rounded-[30px] relative overflow-hidden', className, background, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionsMarginClasses)(margin), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionsPaddingClasses)(padding), {
      ['hide-block']: isHide
    })
  });
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({}, {
    template: [['t4u/inner-block', {
      classes: 'relative aspect-[1/0.88] md:aspect-[1/0.807] lg:aspect-auto lg:min-h-[536px] 4xl:min-h-[730px] lg:shrink lg:grow',
      dataAttributes: {
        'data-height-var': '--image-height, .image-text-button-row'
      },
      simpleWrapper: true,
      options: {
        template: [['t4u/image', {
          classes: 'ibg rounded-[12px]'
        }]],
        allowedBlocks: []
      }
    }], ['t4u/inner-block', {
      classes: 'lg:shrink-0 lg:grow-0 lg:w-[49%] lg:max-w-[468px] xl:max-w-[865px]',
      simpleWrapper: true,
      options: {
        template: [['t4u/sup-title', {}], ['t4u/heading', {
          classes: "mt-[16px] md:mt-[20px] text-dark-primary"
        }], ['t4u/simple-text', {
          classes: "mt-[30px] md:mt-[20px] lg:mt-[30px]",
          size: "md"
        }], ["t4u/buttons-group", {
          classes: 'mt-[30px] md:mt-[20px] lg:mt-[30px]',
          options: {
            template: [["t4u/button", {
              variant: "btn-primary",
              acfField: "text_more_details",
              acfFieldType: "text"
            }]],
            allowedBlocks: ['t4u/button']
          }
        }]],
        allowedBlocks: []
      }
    }]],
    allowedBlocks: []
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_default_sections_controls_DefaultSectionsControls__WEBPACK_IMPORTED_MODULE_5__.DefaultSectionsControls, {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u0435\u043A\u0446\u0456\u0457",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: directions,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "!h-[100px] w-auto",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)(`general/image-text-button-row-left.jpg`),
              alt: "icon"
            }),
            value: 'left'
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "!h-[100px] w-auto",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)(`general/image-text-button-row-right.jpg`),
              alt: "icon"
            }),
            value: 'right'
          }],
          onChange: value => setAttributes({
            directions: value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "\u0414\u0435\u043A\u043E\u0440 \u0441\u0435\u043A\u0446\u0456\u0457",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: decor,
          options: [{
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-lg",
              children: "\u041D\u0435\u043C\u0430\u0454"
            }),
            value: 0
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "!h-[100px] w-auto bg-light-primary-80",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)(`general/image-text-button-row-decor-1.png`),
              alt: "icon"
            }),
            value: 1
          }, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "!h-[100px] w-auto bg-light-primary-80",
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)(`general/image-text-button-row-decor-2.png`),
              alt: "icon"
            }),
            value: 2
          }],
          onChange: value => setAttributes({
            decor: +value
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      ...blockProps,
      children: [decor !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('absolute z-3 pointer-events-none top-0 left-0 w-full h-full', {
            '-scale-x-100': directions === 'right'
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "container h-full relative",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('absolute h-[138px] md:h-[245px] w-auto left-[-64px] md:left-[-125px] lg:left-[-109px] 4xl:left-[-84px] lg:top-[134px] 4xl:top-[130px]', {
                'top-[70px] md:top-[92px]': directions === 'left',
                'bottom-[calc(var(--image-height)-68px)] md:bottom-[calc(var(--image-height)-145px)] lg:bottom-auto': directions === 'right'
              }),
              src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)('general/rectangle-turn-left.svg'),
              alt: "decor"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('absolute z-1 pointer-events-none top-0 left-0 w-full h-full', {
            '-scale-x-100': directions === 'right'
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "container h-full relative",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('absolute h-[106px] md:h-[168px] lg:h-[239px] w-auto right-[-97px] md:right-[-169px] lg:right-[-235px] lg:bottom-[122px]', {
                'bottom-[68px] md:bottom-[98px]': directions === 'left',
                'top-[31.5%] md:top-[22.5%] lg:top-auto': directions === 'right',
                'lg:!bottom-0': decor === 2
              }),
              src: decor === 1 ? (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)('general/semi-torus-down.svg') : (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)('general/semi-torus-top.svg'),
              alt: "decor"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('container flex lg:items-center lg:gap-x-[40px] xl:gap-x-[65px] gap-y-[40px] md:gap-y-[50px] relative z-2', {
          'flex-col lg:flex-row': directions === 'left',
          'flex-col-reverse lg:flex-row-reverse': directions === 'right'
        }),
        children: children
      })]
    })]
  });
}

/***/ }),

/***/ "./src/sections/image-text-button-row/editor.scss":
/*!********************************************************!*\
  !*** ./src/sections/image-text-button-row/editor.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sections/image-text-button-row/save.js":
/*!****************************************************!*\
  !*** ./src/sections/image-text-button-row/save.js ***!
  \****************************************************/
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
/* harmony export */   combineString: () => (/* binding */ combineString),
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
/*!*****************************************************!*\
  !*** ./src/sections/image-text-button-row/index.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/sections/image-text-button-row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/sections/image-text-button-row/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/sections/image-text-button-row/block.json");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {
    attributes: {
      decor: 0
    },
    innerBlocks: [{
      name: "t4u/image",
      attributes: {
        classes: "",
        url: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getUrlToStaticImages)('general/preview-section-image-text-button-row.jpg'),
        imageId: 1
      }
    }]
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map