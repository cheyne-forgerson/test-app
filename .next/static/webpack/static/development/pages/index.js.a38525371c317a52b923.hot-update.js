webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hamburger */ \"./components/Hamburger.js\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.module.css */ \"./components/Nav.module.css\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Layout(props) {\n  _s();\n\n  //NAV HAMBURGER\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      toggleHamClass = _useState[0],\n      setHamClass = _useState[1]; //NAV\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      displayNav = _useState2[0],\n      setDisplayNav = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"fadein \".concat(_Nav_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navContainer)),\n      navClass = _useState3[0],\n      setNavClass = _useState3[1];\n\n  function toggleNav() {\n    if (toggleHamClass === true) {\n      setHamClass(false);\n      setNavClass(\"navContainer fadeout\");\n      setTimeout(function () {\n        setDisplayNav(false);\n      }, 750);\n    } else {\n      setHamClass(true);\n      setDisplayNav(true);\n      setTimeout(function () {\n        setNavClass(\"navContainer fadein\");\n      }, 10);\n    }\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Layout, \"4lYx8veHKjjZoY9026COKREWWkE=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJ0b2dnbGVIYW1DbGFzcyIsInNldEhhbUNsYXNzIiwiZGlzcGxheU5hdiIsInNldERpc3BsYXlOYXYiLCJuYXZTdHlsZXMiLCJuYXZDb250YWluZXIiLCJuYXZDbGFzcyIsInNldE5hdkNsYXNzIiwidG9nZ2xlTmF2Iiwic2V0VGltZW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDbkI7QUFEbUIsa0JBRW1CQyxzREFBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUVaQyxjQUZZO0FBQUEsTUFFSUMsV0FGSixpQkFJbkI7OztBQUptQixtQkFLaUJGLHNEQUFRLENBQUMsRUFBRCxDQUx6QjtBQUFBLE1BS1pHLFVBTFk7QUFBQSxNQUtBQyxhQUxBOztBQUFBLG1CQU1hSixzREFBUSxrQkFBV0ssc0RBQVMsQ0FBQ0MsWUFBckIsRUFOckI7QUFBQSxNQU1aQyxRQU5ZO0FBQUEsTUFNRkMsV0FORTs7QUFRbkIsV0FBU0MsU0FBVCxHQUFxQjtBQUNqQixRQUFJUixjQUFjLEtBQUssSUFBdkIsRUFBNkI7QUFDM0JDLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FNLGlCQUFXLENBQUMsc0JBQUQsQ0FBWDtBQUNBRSxnQkFBVSxDQUFDLFlBQU07QUFDZk4scUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0QsS0FORCxNQU1PO0FBQ0xGLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FNLGdCQUFVLENBQUMsWUFBTTtBQUNmRixtQkFBVyxDQUFDLHFCQUFELENBQVg7QUFDRCxPQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0Q7QUFDSjs7QUFFRCxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tULEtBQUssQ0FBQ1ksUUFEWCxDQURKLEVBSUksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKO0FBU0g7O0dBakNRYixNOztLQUFBQSxNO0FBbUNNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnOyBcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1idXJnZXInO1xuaW1wb3J0IG5hdlN0eWxlcyBmcm9tICcuL05hdi5tb2R1bGUuY3NzJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgICAvL05BViBIQU1CVVJHRVJcbiAgICBjb25zdCBbdG9nZ2xlSGFtQ2xhc3MsIHNldEhhbUNsYXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vTkFWXG4gICAgY29uc3QgW2Rpc3BsYXlOYXYsIHNldERpc3BsYXlOYXZdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW25hdkNsYXNzLCBzZXROYXZDbGFzc10gPSB1c2VTdGF0ZShgZmFkZWluICR7bmF2U3R5bGVzLm5hdkNvbnRhaW5lcn1gKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgaWYgKHRvZ2dsZUhhbUNsYXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgc2V0SGFtQ2xhc3MoZmFsc2UpO1xuICAgICAgICAgIHNldE5hdkNsYXNzKFwibmF2Q29udGFpbmVyIGZhZGVvdXRcIilcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldERpc3BsYXlOYXYoZmFsc2UpO1xuICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0SGFtQ2xhc3ModHJ1ZSk7XG4gICAgICAgICAgc2V0RGlzcGxheU5hdih0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldE5hdkNsYXNzKFwibmF2Q29udGFpbmVyIGZhZGVpblwiKTtcbiAgICAgICAgICB9LCAxMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPEhhbWJ1cmdlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})