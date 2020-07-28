webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hamburger */ \"./components/Hamburger.js\");\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Layout(props) {\n  _s();\n\n  //NAV HAMBURGER\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      toggleHamClass = _useState[0],\n      setHamClass = _useState[1]; //NAV\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      displayNav = _useState2[0],\n      setDisplayNav = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"none\"),\n      navClass = _useState3[0],\n      setNavClass = _useState3[1];\n\n  function toggleNav() {\n    if (toggleHamClass === true) {\n      setHamClass(false);\n      setNavClass(\"navContainer fadeout\");\n      setTimeout(function () {\n        setDisplayNav(false);\n      }, 750);\n    } else {\n      setHamClass(true);\n      setDisplayNav(true);\n      setTimeout(function () {\n        setNavClass(\"navContainer fadein\");\n      }, 10);\n    }\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Layout, \"GJwjhF84Vz6UV9yPU8+VeCd9IJE=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJ0b2dnbGVIYW1DbGFzcyIsInNldEhhbUNsYXNzIiwiZGlzcGxheU5hdiIsInNldERpc3BsYXlOYXYiLCJuYXZDbGFzcyIsInNldE5hdkNsYXNzIiwidG9nZ2xlTmF2Iiwic2V0VGltZW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNuQjtBQURtQixrQkFFbUJDLHNEQUFRLENBQUMsS0FBRCxDQUYzQjtBQUFBLE1BRVpDLGNBRlk7QUFBQSxNQUVJQyxXQUZKLGlCQUluQjs7O0FBSm1CLG1CQUtpQkYsc0RBQVEsQ0FBQyxFQUFELENBTHpCO0FBQUEsTUFLWkcsVUFMWTtBQUFBLE1BS0FDLGFBTEE7O0FBQUEsbUJBTWFKLHNEQUFRLENBQUMsTUFBRCxDQU5yQjtBQUFBLE1BTVpLLFFBTlk7QUFBQSxNQU1GQyxXQU5FOztBQVFuQixXQUFTQyxTQUFULEdBQXFCO0FBQ2pCLFFBQUlOLGNBQWMsS0FBSyxJQUF2QixFQUE2QjtBQUMzQkMsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUksaUJBQVcsQ0FBQyxzQkFBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUMsWUFBTTtBQUNmSixxQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxLQU5ELE1BTU87QUFDTEYsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUUsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUksZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZGLG1CQUFXLENBQUMscUJBQUQsQ0FBWDtBQUNELE9BRlMsRUFFUCxFQUZPLENBQVY7QUFHRDtBQUNKOztBQUVELFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsS0FBSyxDQUFDVSxRQURYLENBREosRUFJSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREo7QUFTSDs7R0FqQ1FYLE07O0tBQUFBLE07QUFtQ01BLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7IFxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0hhbWJ1cmdlcic7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gICAgLy9OQVYgSEFNQlVSR0VSXG4gICAgY29uc3QgW3RvZ2dsZUhhbUNsYXNzLCBzZXRIYW1DbGFzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvL05BVlxuICAgIGNvbnN0IFtkaXNwbGF5TmF2LCBzZXREaXNwbGF5TmF2XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuYXZDbGFzcywgc2V0TmF2Q2xhc3NdID0gdXNlU3RhdGUoXCJub25lXCIpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgICAgICBpZiAodG9nZ2xlSGFtQ2xhc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRIYW1DbGFzcyhmYWxzZSk7XG4gICAgICAgICAgc2V0TmF2Q2xhc3MoXCJuYXZDb250YWluZXIgZmFkZW91dFwiKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0RGlzcGxheU5hdihmYWxzZSk7XG4gICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRIYW1DbGFzcyh0cnVlKTtcbiAgICAgICAgICBzZXREaXNwbGF5TmF2KHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TmF2Q2xhc3MoXCJuYXZDb250YWluZXIgZmFkZWluXCIpO1xuICAgICAgICAgIH0sIDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICA8SGFtYnVyZ2VyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})