"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./components/MiniProfile.tsx":
/*!************************************!*\
  !*** ./components/MiniProfile.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MiniProfile() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 p-2 rounded-lg items-center justify-between ml-10 w-[85%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL,\n                alt: \"\",\n                className: \"w-26 h-16 rounded-full border p-[2px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\MiniProfile.tsx\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 mx-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold\",\n                        children: user.displayName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\MiniProfile.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-sm text-gray-400\",\n                        children: \"Welcome to PentaGon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\MiniProfile.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-blue-400 text-sm font-semibold\",\n                        onClick: function() {\n                            return _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut();\n                        },\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\MiniProfile.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\MiniProfile.tsx\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\MiniProfile.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(MiniProfile, \"hP/7NvzUIXfxIpRVjMlmHSnysKo=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = MiniProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniProfile);\nvar _c;\n$RefreshReg$(_c, \"MiniProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pbmlQcm9maWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5QjtBQUNnQztBQUN0Qjs7QUFFbkMsU0FBU0csV0FBVyxHQUFHOztJQUdyQixJQUFlRixHQUFrQixvRkFBbEJBLHVFQUFZLENBQUNDLDJDQUFJLENBQUMsTUFBMUJFLElBQUksR0FBSUgsR0FBa0IsR0FBdEI7SUFDWCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsNkVBQTZFOzswQkFFdEYsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxRQUFRO2dCQUFFQyxHQUFHLEVBQUMsRUFBRTtnQkFBQ0osU0FBUyxFQUFDLHVDQUF1Qzs7Ozs7b0JBQUc7MEJBQ3BGLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsYUFBYTs7a0NBQzFCLDhEQUFDSyxJQUFFO3dCQUFDTCxTQUFTLEVBQUMsV0FBVztrQ0FBRUYsSUFBSSxDQUFDUSxXQUFXOzs7Ozs0QkFBTTtrQ0FDakQsOERBQUNDLElBQUU7d0JBQUNQLFNBQVMsRUFBQyx1QkFBdUI7a0NBQUMscUJBQW1COzs7Ozs0QkFBSztrQ0FDbEUsOERBQUNRLFFBQU07d0JBQUNSLFNBQVMsRUFBQyxxQ0FBcUM7d0JBQUNTLE9BQU8sRUFBRTttQ0FBTWIsbURBQVksRUFBRTt5QkFBQTtrQ0FBRSxVQUFROzs7Ozs0QkFBUzs7Ozs7O29CQUNoRzs7Ozs7O1lBSU4sQ0FDUDtDQUNGO0dBbEJRQyxXQUFXOztRQUdIRixtRUFBWTs7O0FBSHBCRSxLQUFBQSxXQUFXO0FBb0JwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01pbmlQcm9maWxlLnRzeD80ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5mdW5jdGlvbiBNaW5pUHJvZmlsZSgpIHtcclxuXHJcbiAgXHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JheS0xMDAgcC0yIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtbC0xMCB3LVs4NSVdIFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5waG90b1VSTH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0yNiBoLTE2IHJvdW5kZWQtZnVsbCBib3JkZXIgcC1bMnB4XVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBteC00XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57dXNlci5kaXNwbGF5TmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+V2VsY29tZSB0byBQZW50YUdvbjwvaDM+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIHRleHQtc20gZm9udC1zZW1pYm9sZFwiIG9uQ2xpY2s9eygpID0+IGF1dGguc2lnbk91dCgpfT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5pUHJvZmlsZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJNaW5pUHJvZmlsZSIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsImFsdCIsImgyIiwiZGlzcGxheU5hbWUiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaWduT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MiniProfile.tsx\n"));

/***/ })

});