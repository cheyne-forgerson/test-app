webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hamburger */ \"./components/Hamburger.js\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hamburger.module.css */ \"./components/Hamburger.module.css\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nfunction Layout(props) {\n  _s();\n\n  var _jsx;\n\n  //NAV\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openNav = _useState[0],\n      setOpenNav = _useState[1];\n\n  function navBtnClick() {\n    openNav ? setOpenNav(false) : setOpenNav(true);\n  }\n\n  var navOpen = function navOpen() {\n    \"\";\n  };\n\n  var navClosed = function navClosed() {\n    diplay: \"none\";\n  };\n\n  return __jsx(\"div\", {\n    className: \"layout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  })), __jsx(_components_Hamburger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (_jsx = {\n    navIcon4: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.navIcon4,\n    hamContainer: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.hamContainer,\n    hamClass: openNav,\n    hamClick: function hamClick() {\n      return navBtnClick();\n    }\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"hamClass\", openNav ? _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.open : \"\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 13\n  }), _jsx)));\n}\n\n_s(Layout, \"mhNAlo2fD6mfKONZxgLu2vuoT9E=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJvcGVuTmF2Iiwic2V0T3Blbk5hdiIsIm5hdkJ0bkNsaWNrIiwibmF2T3BlbiIsIm5hdkNsb3NlZCIsImRpcGxheSIsImNoaWxkcmVuIiwiaGFtU3R5bGVzIiwibmF2SWNvbjQiLCJoYW1Db250YWluZXIiLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQTs7QUFFbkI7QUFGbUIsa0JBR1dDLHNEQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR1pDLE9BSFk7QUFBQSxNQUdIQyxVQUhHOztBQUtuQixXQUFTQyxXQUFULEdBQXVCO0FBQ3JCRixXQUFPLEdBQUdDLFVBQVUsQ0FBQyxLQUFELENBQWIsR0FBdUJBLFVBQVUsQ0FBQyxJQUFELENBQXhDO0FBQ0Q7O0FBRUQsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFDO0FBQUcsR0FBMUI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFDQyxVQUFNLEVBQUU7QUFBTyxHQUF4Qzs7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsS0FBSyxDQUFDUSxRQURYLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKSixFQVFJLE1BQUMsNkRBQUQ7QUFDRSxZQUFRLEVBQUVDLHVFQUFTLENBQUNDLFFBRHRCO0FBRUUsZ0JBQVksRUFBRUQsdUVBQVMsQ0FBQ0UsWUFGMUI7QUFHRSxZQUFRLEVBQUVULE9BSFo7QUFJRSxZQUFRLEVBQUU7QUFBQSxhQUFNRSxXQUFXLEVBQWpCO0FBQUE7QUFKWixpSEFLWUYsT0FBTyxHQUFHTyx1RUFBUyxDQUFDRyxJQUFiLEdBQW9CLEVBTHZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixDQURKO0FBa0JIOztHQTlCUWIsTTs7S0FBQUEsTTtBQWdDTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JzsgXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvSGFtYnVyZ2VyJztcbmltcG9ydCBoYW1TdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1idXJnZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG5cbiAgICAvL05BVlxuICAgIGNvbnN0IFtvcGVuTmF2LCBzZXRPcGVuTmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIG5hdkJ0bkNsaWNrKCkge1xuICAgICAgb3Blbk5hdiA/IHNldE9wZW5OYXYoZmFsc2UpIDogc2V0T3Blbk5hdih0cnVlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmF2T3BlbiA9ICgpID0+IHtcIlwifTtcbiAgICBjb25zdCBuYXZDbG9zZWQgPSAoKSA9PiB7ZGlwbGF5OiBcIm5vbmVcIn07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgICAgIDxIYW1idXJnZXIgXG4gICAgICAgICAgICAgIG5hdkljb240PXtoYW1TdHlsZXMubmF2SWNvbjR9XG4gICAgICAgICAgICAgIGhhbUNvbnRhaW5lcj17aGFtU3R5bGVzLmhhbUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgaGFtQ2xhc3M9e29wZW5OYXZ9XG4gICAgICAgICAgICAgIGhhbUNsaWNrPXsoKSA9PiBuYXZCdG5DbGljaygpfVxuICAgICAgICAgICAgICBoYW1DbGFzcz17b3Blbk5hdiA/IGhhbVN0eWxlcy5vcGVuIDogXCJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})