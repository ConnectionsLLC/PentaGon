"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[User]",{

/***/ "./pages/users/[User].tsx":
/*!********************************!*\
  !*** ./pages/users/[User].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar User = function(docSnap) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var pid = router.query.User;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getUser = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var docRef, docSnap, item;\n                return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", pid);\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n                        case 3:\n                            docSnap = _ctx.sent;\n                            item = docSnap.data();\n                            console.log();\n                            setItems(items);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getUser() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: [\n                \"Post: \",\n                pid\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(User, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bVXNlcl0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXVDO0FBQ0U7QUFDbUc7QUFDMUc7O0FBSWxDLElBQU1NLElBQUksR0FBRyxTQUFDQyxPQUFPLEVBQUs7O0lBQ3RCLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUFNUyxHQUFHLEdBQUlELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDSixJQUFJO0lBQzlCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CUyxLQUFLLEdBQWNULEdBQVksR0FBMUIsRUFBRVUsUUFBUSxHQUFJVixHQUFZLEdBQWhCO0lBRXBCRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFNWSxPQUFPO3VCQUFHLCtQQUFZO29CQUNsQkMsTUFBTSxFQUNOUCxPQUFPLEVBQ1BRLElBQUk7Ozs7NEJBRkpELE1BQU0sR0FBR1gsdURBQUcsQ0FBQ0UseUNBQUUsRUFBRSxPQUFPLEVBQUVJLEdBQUcsQ0FBQyxDQUFDOzttQ0FDZkwsMERBQU0sQ0FBQ1UsTUFBTSxDQUFDOzs0QkFBOUJQLE9BQU8sWUFBdUI7NEJBQzlCUSxJQUFJLEdBQUdSLE9BQU8sQ0FBQ1MsSUFBSSxFQUFFLENBQUM7NEJBQzVCQyxPQUFPLENBQUNDLEdBQUcsRUFBRTs0QkFDYk4sUUFBUSxDQUFDRCxLQUFLLENBQUM7Ozs7OzthQUVsQjs0QkFQS0UsT0FBTzs7O1dBT1o7S0FDSixDQUFDO0lBUUoscUJBQ0ksOERBQUNNLEtBQUc7a0JBQ0EsNEVBQUNDLEdBQUM7O2dCQUFDLFFBQU07Z0JBQUNYLEdBQUc7Ozs7OztpQkFBSzs7Ozs7YUFJaEIsQ0FDVDtDQUNKO0dBOUJLSCxJQUFJOztRQUNTTixrREFBUzs7O0FBRHRCTSxLQUFBQSxJQUFJO0FBZ0NWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tVc2VyXS50c3g/MDdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLGRvYywgZ2V0RG9jcywgY29ubmVjdEZpcmVzdG9yZUVtdWxhdG9yLCBnZXREb2MsIG9uU25hcHNob3QsIGdldERvY0Zyb21DYWNoZSwgIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQge2RifSAgZnJvbSAnLi4vLi4vZmlyZWJhc2UnXHJcblxyXG5cclxuXHJcbmNvbnN0IFVzZXIgPSAoZG9jU25hcCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHBpZCAgPSByb3V0ZXIucXVlcnkuVXNlciBhcyBzdHJpbmdcclxuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXNlcnNcIiwgcGlkKTtcclxuICAgICAgICAgICAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY1NuYXAuZGF0YSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgICBzZXRJdGVtcyhpdGVtcylcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICBcclxuICAgICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgXHJcblxyXG4gIFxyXG4gICAgcmV0dXJuKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5Qb3N0OiB7cGlkfTwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRvYyIsImdldERvYyIsImRiIiwiVXNlciIsImRvY1NuYXAiLCJyb3V0ZXIiLCJwaWQiLCJxdWVyeSIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXRVc2VyIiwiZG9jUmVmIiwiaXRlbSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[User].tsx\n"));

/***/ })

});