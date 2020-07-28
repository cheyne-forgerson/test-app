webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hamburger */ \"./components/Hamburger.js\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hamburger.module.css */ \"./components/Hamburger.module.css\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ \"./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js\");\n\n\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction Layout(props) {\n  _s();\n\n  var _jsx;\n\n  //NAV\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openNav = _useState[0],\n      setOpenNav = _useState[1];\n\n  function navBtnClick() {\n    openNav ? setOpenNav(false) : setOpenNav(true);\n  }\n\n  var navOpen = {\n    display: \"flex\"\n  };\n  var navClosed = {\n    display: \"none\"\n  };\n  return __jsx(\"div\", {\n    className: \"layout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(\"div\", {\n    style: openNav ? navOpen : navClosed,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  })), __jsx(_components_Hamburger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (_jsx = {\n    navIcon4: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.navIcon4,\n    hamContainer: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.hamContainer,\n    hamClass: openNav,\n    hamClick: function hamClick() {\n      return navBtnClick();\n    }\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"hamClass\", openNav ? _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.open : \"\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 13\n  }), _jsx)));\n}\n\n_s(Layout, \"mhNAlo2fD6mfKONZxgLu2vuoT9E=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJvcGVuTmF2Iiwic2V0T3Blbk5hdiIsIm5hdkJ0bkNsaWNrIiwibmF2T3BlbiIsImRpc3BsYXkiLCJuYXZDbG9zZWQiLCJjaGlsZHJlbiIsImhhbVN0eWxlcyIsIm5hdkljb240IiwiaGFtQ29udGFpbmVyIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUE7O0FBRW5CO0FBRm1CLGtCQUdXQyxzREFBUSxDQUFDLEtBQUQsQ0FIbkI7QUFBQSxNQUdaQyxPQUhZO0FBQUEsTUFHSEMsVUFIRzs7QUFLbkIsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkYsV0FBTyxHQUFHQyxVQUFVLENBQUMsS0FBRCxDQUFiLEdBQXVCQSxVQUFVLENBQUMsSUFBRCxDQUF4QztBQUNEOztBQUVELE1BQU1FLE9BQU8sR0FBRztBQUNkQyxXQUFPLEVBQUU7QUFESyxHQUFoQjtBQUdBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkQsV0FBTyxFQUFFO0FBRE8sR0FBbEI7QUFJQSxTQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sS0FBSyxDQUFDUSxRQURYLENBREosRUFJSTtBQUFLLFNBQUssRUFBRU4sT0FBTyxHQUFHRyxPQUFILEdBQWFFLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpKLEVBUUksTUFBQyw2REFBRDtBQUNFLFlBQVEsRUFBRUUsdUVBQVMsQ0FBQ0MsUUFEdEI7QUFFRSxnQkFBWSxFQUFFRCx1RUFBUyxDQUFDRSxZQUYxQjtBQUdFLFlBQVEsRUFBRVQsT0FIWjtBQUlFLFlBQVEsRUFBRTtBQUFBLGFBQU1FLFdBQVcsRUFBakI7QUFBQTtBQUpaLGlIQUtZRixPQUFPLEdBQUdPLHVFQUFTLENBQUNHLElBQWIsR0FBb0IsRUFMdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLENBREo7QUFrQkg7O0dBbENRYixNOztLQUFBQSxNO0FBb0NNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnOyBcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1idXJnZXInO1xuaW1wb3J0IGhhbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL0hhbWJ1cmdlci5tb2R1bGUuY3NzJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmFCZWxsRXhjbGFtYXRpb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcHJvLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuXG4gICAgLy9OQVZcbiAgICBjb25zdCBbb3Blbk5hdiwgc2V0T3Blbk5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBuYXZCdG5DbGljaygpIHtcbiAgICAgIG9wZW5OYXYgPyBzZXRPcGVuTmF2KGZhbHNlKSA6IHNldE9wZW5OYXYodHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hdk9wZW4gPSB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIlxuICAgIH1cbiAgICBjb25zdCBuYXZDbG9zZWQgPSB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e29wZW5OYXYgPyBuYXZPcGVuIDogbmF2Q2xvc2VkfT5cbiAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgICAgICA8SGFtYnVyZ2VyIFxuICAgICAgICAgICAgICBuYXZJY29uND17aGFtU3R5bGVzLm5hdkljb240fVxuICAgICAgICAgICAgICBoYW1Db250YWluZXI9e2hhbVN0eWxlcy5oYW1Db250YWluZXJ9XG4gICAgICAgICAgICAgIGhhbUNsYXNzPXtvcGVuTmF2fVxuICAgICAgICAgICAgICBoYW1DbGljaz17KCkgPT4gbmF2QnRuQ2xpY2soKX1cbiAgICAgICAgICAgICAgaGFtQ2xhc3M9e29wZW5OYXYgPyBoYW1TdHlsZXMub3BlbiA6IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})