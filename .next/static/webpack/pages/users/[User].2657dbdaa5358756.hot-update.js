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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var _components_userData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/userData */ \"./components/userData.tsx\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar User = function(docSnap) {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var pid = router.query.User;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getUser = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var docRef, docSnap, item;\n                return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", pid);\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n                        case 3:\n                            docSnap = _ctx.sent;\n                            item = docSnap.data();\n                            setItems(items);\n                        case 6:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getUser() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \"Post: \",\n                    pid\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: items.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_userData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        uid: item.data(),\n                        username: item.data().username,\n                        userImg: item.data().profileImg,\n                        posttext: item.data().posttext,\n                        timestamp: item.data().timestamp\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n                lineNumber: 33,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_userData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                uid: undefined,\n                username: undefined,\n                userImg: undefined,\n                posttext: undefined,\n                timestamp: undefined\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(User, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bVXNlcl0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF1QztBQUNFO0FBQ21HO0FBQzFHO0FBQ2M7O0FBR2hELElBQU1PLElBQUksR0FBRyxTQUFDQyxPQUFPLEVBQUs7OztJQUN0QixJQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQUU7SUFDMUIsSUFBTVUsR0FBRyxHQUFJRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0osSUFBSTtJQUM5QixJQUEwQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQlUsS0FBSyxHQUFjVixHQUFZLEdBQTFCLEVBQUVXLFFBQVEsR0FBSVgsR0FBWSxHQUFoQjtJQUVwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTWEsT0FBTzt1QkFBRywrUEFBWTtvQkFDbEJDLE1BQU0sRUFDTlAsT0FBTyxFQUNQUSxJQUFJOzs7OzRCQUZKRCxNQUFNLEdBQUdaLHVEQUFHLENBQUNFLHlDQUFFLEVBQUUsT0FBTyxFQUFFSyxHQUFHLENBQUMsQ0FBQzs7bUNBQ2ZOLDBEQUFNLENBQUNXLE1BQU0sQ0FBQzs7NEJBQTlCUCxPQUFPLFlBQXVCOzRCQUM5QlEsSUFBSSxHQUFHUixPQUFPLENBQUNTLElBQUksRUFBRSxDQUFDOzRCQUM1QkosUUFBUSxDQUFDRCxLQUFLLENBQUM7Ozs7OzthQUVsQjs0QkFOS0UsT0FBTzs7O1dBTVo7S0FDSixDQUFDO0lBUUoscUJBQ0ksOERBQUNJLEtBQUc7OzBCQUNBLDhEQUFDQyxHQUFDOztvQkFBQyxRQUFNO29CQUFDVCxHQUFHOzs7Ozs7cUJBQUs7MEJBRWpCLDhEQUFDUSxLQUFHOzBCQUNBTixLQUFLLENBQUNRLEdBQUcsQ0FBQyxTQUFDSixJQUFJO3lDQUNaLDhEQUFDViw0REFBTzt3QkFDSmUsR0FBRyxFQUFFTCxJQUFJLENBQUNDLElBQUksRUFBRTt3QkFDaEJLLFFBQVEsRUFBRU4sSUFBSSxDQUFDQyxJQUFJLEVBQUUsQ0FBQ0ssUUFBUTt3QkFDOUJDLE9BQU8sRUFBRVAsSUFBSSxDQUFDQyxJQUFJLEVBQUUsQ0FBQ08sVUFBVTt3QkFFL0JDLFFBQVEsRUFBRVQsSUFBSSxDQUFDQyxJQUFJLEVBQUUsQ0FBQ1EsUUFBUTt3QkFDOUJDLFNBQVMsRUFBRVYsSUFBSSxDQUFDQyxJQUFJLEVBQUUsQ0FBQ1MsU0FBUzs7Ozs7OEJBRWxDO2lCQUNMLENBQUM7Ozs7O3FCQUNDOzBCQUNYLDhEQUFDcEIsNERBQU87Z0JBQUNlLEdBQUcsRUFBRU0sU0FBUztnQkFBRUwsUUFBUSxFQUFFSyxTQUFTO2dCQUFFSixPQUFPLEVBQUVJLFNBQVM7Z0JBQUVGLFFBQVEsRUFBRUUsU0FBUztnQkFBRUQsU0FBUyxFQUFFQyxTQUFTOzs7OztxQkFBRzs7Ozs7O2FBQ3hHLENBQ1Q7Q0FDSjtHQXpDS3BCLElBQUk7O1FBQ1NQLGtEQUFTOzs7QUFEdEJPLEtBQUFBLElBQUk7QUEyQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW1VzZXJdLnRzeD8wN2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsZG9jLCBnZXREb2NzLCBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsIGdldERvYywgb25TbmFwc2hvdCwgZ2V0RG9jRnJvbUNhY2hlLCAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7ZGJ9ICBmcm9tICcuLi8uLi9maXJlYmFzZSdcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyRGF0YSc7XHJcblxyXG5cclxuY29uc3QgVXNlciA9IChkb2NTbmFwKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcGlkICA9IHJvdXRlci5xdWVyeS5Vc2VyIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJ1c2Vyc1wiLCBwaWQpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jU25hcC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbXMoaXRlbXMpXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICAgIFxyXG4gICBcclxuICAgIFxyXG4gIFxyXG5cclxuICBcclxuICAgIHJldHVybiggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+UG9zdDoge3BpZH08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ9e2l0ZW0uZGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5kYXRhKCkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbWc9e2l0ZW0uZGF0YSgpLnByb2ZpbGVJbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0dGV4dD17aXRlbS5kYXRhKCkucG9zdHRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17aXRlbS5kYXRhKCkudGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQcm9maWxlIHVpZD17dW5kZWZpbmVkfSB1c2VybmFtZT17dW5kZWZpbmVkfSB1c2VySW1nPXt1bmRlZmluZWR9IHBvc3R0ZXh0PXt1bmRlZmluZWR9IHRpbWVzdGFtcD17dW5kZWZpbmVkfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkb2MiLCJnZXREb2MiLCJkYiIsIlByb2ZpbGUiLCJVc2VyIiwiZG9jU25hcCIsInJvdXRlciIsInBpZCIsInF1ZXJ5IiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldFVzZXIiLCJkb2NSZWYiLCJpdGVtIiwiZGF0YSIsImRpdiIsInAiLCJtYXAiLCJ1aWQiLCJ1c2VybmFtZSIsInVzZXJJbWciLCJwcm9maWxlSW1nIiwicG9zdHRleHQiLCJ0aW1lc3RhbXAiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[User].tsx\n"));

/***/ })

});