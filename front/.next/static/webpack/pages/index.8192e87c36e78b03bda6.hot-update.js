webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/FollowButton.js":
/*!******************************************!*\
  !*** ./pages/components/FollowButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/youngjoo/Downloads/projects/react-nodebird/front/pages/components/FollowButton.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar FollowButton = function FollowButton(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  });\n  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (isFollowing) {\n      dispatch;\n    }\n  }, [isFollowing]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    children: \"\\uD314\\uB85C\\uC6B0\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(FollowButton, \"53yWenZlooqmeOLBNNH5jj7A33c=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = FollowButton;\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanM/MmZjYyJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJwb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiaWQiLCJVc2VyIiwib25Gb2xsb3ciLCJ1c2VDYWxsYmFjayIsImRpc3BhdGNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDaEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBREs7QUFBQSxNQUN2QkMsRUFEdUIsZ0JBQ3ZCQSxFQUR1Qjs7QUFFL0IsTUFBTUMsV0FBVyxHQUFHRCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRUUsVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU1QsSUFBSSxDQUFDVSxJQUFMLENBQVVELEVBQTFCO0FBQUEsR0FBcEIsQ0FBcEI7QUFDQSxNQUFNRSxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMzQixRQUFJUCxXQUFKLEVBQWlCO0FBQ2JRLGNBQVE7QUFDWDtBQUNSLEdBSjJCLEVBSXpCLENBQUNSLFdBQUQsQ0FKeUIsQ0FBNUI7QUFLRixzQkFBTyxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FURDs7R0FBTU4sWTtVQUNhRSx1RDs7O0tBRGJGLFk7QUFXTkEsWUFBWSxDQUFDZSxTQUFiLEdBQXlCO0FBQ3ZCZCxNQUFJLEVBQUVlLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREEsQ0FBekI7QUFJZWxCLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoeyBwb3N0IH0pID0+IHtcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcbiAgICBjb25zdCBvbkZvbGxvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0ZvbGxvd2luZykge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoXG4gICAgICAgICAgICB9XG4gICAgfSwgW2lzRm9sbG93aW5nXSk7XG4gIHJldHVybiA8QnV0dG9uPu2MlOuhnOyasDwvQnV0dG9uPjtcbn07XG5cbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/FollowButton.js\n");

/***/ })

})