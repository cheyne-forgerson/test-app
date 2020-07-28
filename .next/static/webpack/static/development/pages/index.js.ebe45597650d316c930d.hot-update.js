webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hamburger */ \"./components/Hamburger.js\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hamburger.module.css */ \"./components/Hamburger.module.css\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Layout(props) {\n  _s();\n\n  //NAV HAMBURGER\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      toggleHamClass = _useState[0],\n      setHamClass = _useState[1]; //NAV\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      displayNav = _useState2[0],\n      setDisplayNav = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      navStyle = _useState3[0],\n      setNavStyle = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      openCloseNav = _useState4[0],\n      setOpenCloseNav = _useState4[1];\n\n  function toggleNav() {\n    if (toggleHamClass === true) {\n      setHamClass(false);\n      setDisplayNav(false);\n    } else {\n      setHamClass(true);\n      setDisplayNav(true);\n      setTimeout(function () {\n        setNavClass(\"navContainer fadein\");\n      }, 10);\n    }\n  }\n\n  function navBtnClick() {\n    ;\n  }\n\n  return __jsx(\"div\", {\n    className: \"layout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    navShow: navStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    navIcon4: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navIcon4,\n    hamContainer: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hamContainer,\n    navBtnClass: openCloseNav,\n    hamClick: function hamClick() {\n      return navBtnClick();\n    },\n    hamClass: toggleHamClass ? _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.open : \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Layout, \"5y+d4eS+fIB+ry04Pw2WFVFhAP0=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJ0b2dnbGVIYW1DbGFzcyIsInNldEhhbUNsYXNzIiwiZGlzcGxheU5hdiIsInNldERpc3BsYXlOYXYiLCJuYXZTdHlsZSIsInNldE5hdlN0eWxlIiwib3BlbkNsb3NlTmF2Iiwic2V0T3BlbkNsb3NlTmF2IiwidG9nZ2xlTmF2Iiwic2V0VGltZW91dCIsInNldE5hdkNsYXNzIiwibmF2QnRuQ2xpY2siLCJjaGlsZHJlbiIsImhhbVN0eWxlcyIsIm5hdkljb240IiwiaGFtQ29udGFpbmVyIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ25CO0FBRG1CLGtCQUVtQkMsc0RBQVEsQ0FBQyxLQUFELENBRjNCO0FBQUEsTUFFWkMsY0FGWTtBQUFBLE1BRUlDLFdBRkosaUJBSW5COzs7QUFKbUIsbUJBS2lCRixzREFBUSxDQUFDLEtBQUQsQ0FMekI7QUFBQSxNQUtaRyxVQUxZO0FBQUEsTUFLQUMsYUFMQTs7QUFBQSxtQkFNYUosc0RBQVEsQ0FBQyxFQUFELENBTnJCO0FBQUEsTUFNWkssUUFOWTtBQUFBLE1BTUZDLFdBTkU7O0FBQUEsbUJBT3FCTixzREFBUSxDQUFDLEtBQUQsQ0FQN0I7QUFBQSxNQU9aTyxZQVBZO0FBQUEsTUFPRUMsZUFQRjs7QUFTbkIsV0FBU0MsU0FBVCxHQUFxQjtBQUNqQixRQUFJUixjQUFjLEtBQUssSUFBdkIsRUFBNkI7QUFDM0JDLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsS0FIRCxNQUdPO0FBQ0xGLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FNLGdCQUFVLENBQUMsWUFBTTtBQUNmQyxtQkFBVyxDQUFDLHFCQUFELENBQVg7QUFDRCxPQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0Q7QUFDSjs7QUFFRCxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCO0FBQ0Q7O0FBR0QsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tiLEtBQUssQ0FBQ2MsUUFEWCxDQURKLEVBSUksTUFBQyx1REFBRDtBQUFLLFdBQU8sRUFBRVIsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLDZEQUFEO0FBQ0UsWUFBUSxFQUFFUyx1RUFBUyxDQUFDQyxRQUR0QjtBQUVFLGdCQUFZLEVBQUVELHVFQUFTLENBQUNFLFlBRjFCO0FBR0UsZUFBVyxFQUFFVCxZQUhmO0FBSUUsWUFBUSxFQUFFO0FBQUEsYUFBTUssV0FBVyxFQUFqQjtBQUFBLEtBSlo7QUFLRSxZQUFRLEVBQUVYLGNBQWMsR0FBR2EsdUVBQVMsQ0FBQ0csSUFBYixHQUFvQixFQUw5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FESjtBQWVIOztHQTFDUW5CLE07O0tBQUFBLE07QUE0Q01BLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7IFxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0hhbWJ1cmdlcic7XG5pbXBvcnQgaGFtU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvSGFtYnVyZ2VyLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIC8vTkFWIEhBTUJVUkdFUlxuICAgIGNvbnN0IFt0b2dnbGVIYW1DbGFzcywgc2V0SGFtQ2xhc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy9OQVZcbiAgICBjb25zdCBbZGlzcGxheU5hdiwgc2V0RGlzcGxheU5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25hdlN0eWxlLCBzZXROYXZTdHlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbb3BlbkNsb3NlTmF2LCBzZXRPcGVuQ2xvc2VOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgICAgICBpZiAodG9nZ2xlSGFtQ2xhc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRIYW1DbGFzcyhmYWxzZSk7XG4gICAgICAgICAgc2V0RGlzcGxheU5hdihmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0SGFtQ2xhc3ModHJ1ZSk7XG4gICAgICAgICAgc2V0RGlzcGxheU5hdih0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldE5hdkNsYXNzKFwibmF2Q29udGFpbmVyIGZhZGVpblwiKTtcbiAgICAgICAgICB9LCAxMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdkJ0bkNsaWNrKCkge1xuICAgICAgO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE5hdiBuYXZTaG93PXtuYXZTdHlsZX0vPlxuICAgICAgICAgICAgPEhhbWJ1cmdlciBcbiAgICAgICAgICAgICAgbmF2SWNvbjQ9e2hhbVN0eWxlcy5uYXZJY29uNH1cbiAgICAgICAgICAgICAgaGFtQ29udGFpbmVyPXtoYW1TdHlsZXMuaGFtQ29udGFpbmVyfVxuICAgICAgICAgICAgICBuYXZCdG5DbGFzcz17b3BlbkNsb3NlTmF2fVxuICAgICAgICAgICAgICBoYW1DbGljaz17KCkgPT4gbmF2QnRuQ2xpY2soKX1cbiAgICAgICAgICAgICAgaGFtQ2xhc3M9e3RvZ2dsZUhhbUNsYXNzID8gaGFtU3R5bGVzLm9wZW4gOiBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})