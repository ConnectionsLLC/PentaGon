"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./components/Post.tsx\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(\"timestamp\", \"desc\")), function(snapshot) {\n            setPosts(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db\n    ]);\n    var sendComment = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return C_Users_ANIKET_Desktop_Pentagon_Twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function sendComment(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: posts.map(function(post) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: post.id,\n                username: post.data().username,\n                userImg: post.data().profileImg,\n                img: post.data().image,\n                posttext: post.data().posttext\n            }, post.id, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\components\\\\Posts.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\components\\\\Posts.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBa0Q7QUFDekI7QUFDaUQ7QUFDekM7O0FBSWpDLFNBQVNTLEtBQUssR0FBRzs7O0lBQ2YsSUFBMkJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBaENRLEtBQUssR0FBZVIsR0FBWSxHQUEzQixFQUFHUyxRQUFRLEdBQUlULEdBQVksR0FBaEI7SUFHdkJELGdEQUFTLENBQ1A7ZUFDSEcsK0RBQVUsQ0FBQ0UsMERBQUssQ0FBQ0QsK0RBQVUsQ0FBQ0cseUNBQUUsRUFBRSxPQUFPLENBQUMsRUFBRUQsNERBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDdEVLLFNBQUFBLFFBQVEsRUFBSTtZQUNSRCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1NBQ3hCLENBQ0E7S0FBQSxFQUNEO1FBQUNMLHlDQUFFO0tBQUMsQ0FDTCxDQUFDO0lBRUYsSUFBTU0sV0FBVzttQkFBRyx3UEFBT0MsQ0FBQyxFQUFLOzs7Ozs7OztTQUVoQzt3QkFGS0QsV0FBVyxDQUFVQyxDQUFDOzs7T0FFM0I7SUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUssQ0FBQztJQU9sQixxQkFDRSw4REFBQ1EsS0FBRztrQkFDRFIsS0FBSyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpQ0FDZCw4REFBQ2pCLDZDQUFJO2dCQUVMa0IsRUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUU7Z0JBQ1hDLFFBQVEsRUFBRUYsSUFBSSxDQUFDRyxJQUFJLEVBQUUsQ0FBQ0QsUUFBUTtnQkFDOUJFLE9BQU8sRUFBRUosSUFBSSxDQUFDRyxJQUFJLEVBQUUsQ0FBQ0UsVUFBVTtnQkFDL0JDLEdBQUcsRUFBRU4sSUFBSSxDQUFDRyxJQUFJLEVBQUUsQ0FBQ0ksS0FBSztnQkFDdEJDLFFBQVEsRUFBRVIsSUFBSSxDQUFDRyxJQUFJLEVBQUUsQ0FBQ0ssUUFBUTtlQUx6QlIsSUFBSSxDQUFDQyxFQUFFOzs7O3FCQU1WO1NBQ0gsQ0FBQzs7Ozs7WUFDRSxDQUNKO0NBRUw7R0F4Q1FaLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTBDZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9lZmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdCdcclxuaW1wb3J0IHtvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgb3JkZXJCeX0gZnJvbSAnQGZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IFtwb3N0cyAsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4gXHJcbiBvblNuYXBzaG90KHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdwb3N0cycpLCBvcmRlckJ5KCd0aW1lc3RhbXAnLCAnZGVzYycpKSxcclxuICBzbmFwc2hvdCA9PiB7XHJcbiAgICAgIHNldFBvc3RzKHNuYXBzaG90LmRvY3MpXHJcbiAgICB9XHJcbiAgICApLFxyXG4gICAgW2RiXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNlbmRDb21tZW50ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2cocG9zdHMpXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPFBvc3QgXHJcbiAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgIGlkPXtwb3N0LmlkfVxyXG4gICAgICAgIHVzZXJuYW1lPXtwb3N0LmRhdGEoKS51c2VybmFtZX1cclxuICAgICAgICB1c2VySW1nPXtwb3N0LmRhdGEoKS5wcm9maWxlSW1nfVxyXG4gICAgICAgIGltZz17cG9zdC5kYXRhKCkuaW1hZ2V9XHJcbiAgICAgICAgcG9zdHRleHQ9e3Bvc3QuZGF0YSgpLnBvc3R0ZXh0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9zdCIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwiZGIiLCJQb3N0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJzbmFwc2hvdCIsImRvY3MiLCJzZW5kQ29tbWVudCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFwIiwicG9zdCIsImlkIiwidXNlcm5hbWUiLCJkYXRhIiwidXNlckltZyIsInByb2ZpbGVJbWciLCJpbWciLCJpbWFnZSIsInBvc3R0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n"));

/***/ })

});