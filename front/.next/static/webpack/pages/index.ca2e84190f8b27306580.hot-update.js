webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/AppLayout.jsx":
/*!****************************************!*\
  !*** ./pages/components/AppLayout.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ \"./pages/components/UserProfile.jsx\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoginForm */ \"./pages/components/LoginForm.jsx\");\n\n\n\nvar _jsxFileName = \"/Users/youngjoo/Downloads/projects/react-nodebird/front/pages/components/AppLayout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  .ant-row {\\n    margin-right: 0 !important;\\n    margin-left: 0 !important;\\n  }\\n  .ant-col:first-child {\\n    padding-left: 0 !important;\\n  }\\n  .ant-col:last-child {\\n    padding-right: 0 !important;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"].Search).withConfig({\n  displayName: \"AppLayout__SearchInput\",\n  componentId: \"sc-105y4ot-0\"\n})([\"vertical-align:middle;\"]);\n_c = SearchInput;\nvar MainRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"]).withConfig({\n  displayName: \"AppLayout__MainRow\",\n  componentId: \"sc-105y4ot-1\"\n})([\"justify-content:center;\"]);\n_c2 = MainRow;\nvar Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__[\"createGlobalStyle\"])(_templateObject());\n_c3 = Global;\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('light'),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var changeTheme = function changeTheme(value) {\n    setTheme(value ? 'dark' : 'light');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Global, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"], {\n      mode: \"horizontal\",\n      theme: theme,\n      style: {\n        margin: '10px'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uB178\\uB4DC\\uBC84\\uB4DC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)\n      }, \"1\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD504\\uB85C\\uD544\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, \"2\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SearchInput, {\n          enterButton: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)\n      }, \"3\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/signup\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, \"4\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n        style: {\n          \"float\": 'right'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], {\n          onChange: changeTheme\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)\n      }, \"5\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MainRow, {\n      gutter: 8,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n        xs: 24,\n        md: 6,\n        children: me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_UserProfile__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LoginForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 35\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n        xs: 24,\n        md: 12,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n        xs: 24,\n        md: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://zucca.tistory.com\",\n          target: \"_blank\",\n          rel: \"noreferrer noopener\",\n          style: {\n            padding: '20px'\n          },\n          children: \"Made by devZucca\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AppLayout, \"ek33e2uzaBMsJsuca112sAez41o=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c4 = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"SearchInput\");\n$RefreshReg$(_c2, \"MainRow\");\n$RefreshReg$(_c3, \"Global\");\n$RefreshReg$(_c4, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9BcHBMYXlvdXQuanN4PzcyNWQiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIk1haW5Sb3ciLCJSb3ciLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsImNoYW5nZVRoZW1lIiwidmFsdWUiLCJtYXJnaW4iLCJwYWRkaW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBUCxDQUFUO0FBQUE7QUFBQTtBQUFBLDhCQUFqQjtLQUFNSCxXO0FBR04sSUFBTUksT0FBTyxHQUFHSCxpRUFBTSxDQUFDSSx3Q0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLCtCQUFiO01BQU1ELE87QUFJTixJQUFNRSxNQUFNLEdBQUdDLDJFQUFILG1CQUFaO01BQU1ELE07O0FBYU4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEscUJBQ25CQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQURRO0FBQUEsTUFDMUJDLEVBRDBCLGdCQUMxQkEsRUFEMEI7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsT0FBRCxDQUZBO0FBQUEsTUFFM0JDLEtBRjJCO0FBQUEsTUFFcEJDLFFBRm9COztBQUdsQyxNQUFNQyxX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QUFDYSxTQUFWLEdBQXNCO0FBQ3BCWixVQUFRLEVBQUVhLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QjtBQUllaEIsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0FwcExheW91dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCwgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcblxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5jb25zdCBNYWluUm93ID0gc3R5bGVkKFJvdylgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtY29sOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LWNvbDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcbiAgY29uc3QgY2hhbmdlVGhlbWUgPSAodmFsdWUpID0+IHtcbiAgICBzZXRUaGVtZSh2YWx1ZSA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgdGhlbWU9e3RoZW1lfSBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPuuFuOuTnOuyhOuTnDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxhPu2UhOuhnO2VhDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5cbiAgICAgICAgICA8U2VhcmNoSW5wdXQgZW50ZXJCdXR0b24gLz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XG4gICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVRoZW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgICAgPE1haW5Sb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8venVjY2EudGlzdG9yeS5jb21cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWFkZSBieSBkZXZadWNjYVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L01haW5Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/AppLayout.jsx\n");

/***/ })

})