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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar User = function(data) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var pid = router.query.User;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var docRef, snapshots, username;\n            return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", pid);\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n                    case 3:\n                        snapshots = _ctx.sent;\n                        username = snapshots.data().username;\n                        setItems(username);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    // const docRef = doc(db, \"users\", pid);\n    // const docSnap = await getDoc(docRef);\n    // const data = docSnap.data().username;\n    // console.log(data)\n    // setItems(data)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \"Post: \",\n                    pid\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[User].tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, _this);\n};\n_s(User, \"v0gFUTR0l7Rlhmq5iA8idYT4g4g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bVXNlcl0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXVDO0FBQ0U7QUFDbUc7QUFDMUc7O0FBSWxDLElBQU1NLElBQUksR0FBRyxTQUFDQyxJQUFJLEVBQUs7O0lBQ25CLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUFNUyxHQUFHLEdBQUlELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDSixJQUFJO0lBQzlCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CUyxLQUFLLEdBQWNULEdBQVksR0FBMUIsRUFBRVUsUUFBUSxHQUFJVixHQUFZLEdBQWhCO0lBRXBCRCxnREFBUyxDQUFDLFdBQU07UUFDViwrUEFBWTtnQkFDTlksTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLFFBQVE7Ozs7d0JBRlJGLE1BQU0sR0FBR1YsdURBQUcsQ0FBQ0UseUNBQUUsRUFBRSxPQUFPLEVBQUVJLEdBQUcsQ0FBQyxDQUFDOzsrQkFDYkwsMERBQU0sQ0FBQ1MsTUFBTSxDQUFDOzt3QkFBaENDLFNBQVMsWUFBdUI7d0JBQ2hDQyxRQUFRLEdBQUdELFNBQVMsQ0FBQ1AsSUFBSSxFQUFFLENBQUNRLFFBQVE7d0JBQzFDSCxRQUFRLENBQUNHLFFBQVEsQ0FBQzs7Ozs7O1NBQ25CLElBQUc7S0FDUCxFQUFFLEVBQUUsQ0FBQztJQUlSLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFLakIscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxHQUFDOztvQkFBQyxRQUFNO29CQUFDUixHQUFHOzs7Ozs7cUJBQUs7MEJBQ2xCLDhEQUFDUyxJQUFFOzBCQUFFLE9BQUs7Ozs7O3FCQUFLOzs7Ozs7YUFJYixDQUNUO0NBQ0o7R0FsQ0taLElBQUk7O1FBQ1NOLGtEQUFTOzs7QUFEdEJNLEtBQUFBLElBQUk7QUFvQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW1VzZXJdLnRzeD8wN2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsZG9jLCBnZXREb2NzLCBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsIGdldERvYywgb25TbmFwc2hvdCwgZ2V0RG9jRnJvbUNhY2hlLCAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7ZGJ9ICBmcm9tICcuLi8uLi9maXJlYmFzZSdcclxuXHJcblxyXG5cclxuY29uc3QgVXNlciA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcGlkICA9IHJvdXRlci5xdWVyeS5Vc2VyIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIDsoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsICd1c2VycycsIHBpZCk7IFxyXG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBnZXREb2MoZG9jUmVmKVxyXG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHNuYXBzaG90cy5kYXRhKCkudXNlcm5hbWVcclxuICAgICAgICAgICAgc2V0SXRlbXModXNlcm5hbWUpXHJcbiAgICAgICAgICB9KSgpXHJcbiAgICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgICAgIFxyXG4gICBcclxuICAgIC8vIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJ1c2Vyc1wiLCBwaWQpO1xyXG4gICAgLy8gY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IGRvY1NuYXAuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIHNldEl0ZW1zKGRhdGEpXHJcblxyXG4gIFxyXG5cclxuICBcclxuICAgIHJldHVybiggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+UG9zdDoge3BpZH08L3A+XHJcbiAgICAgICAgICAgIDxoMSA+SGVsbG88L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZG9jIiwiZ2V0RG9jIiwiZGIiLCJVc2VyIiwiZGF0YSIsInJvdXRlciIsInBpZCIsInF1ZXJ5IiwiaXRlbXMiLCJzZXRJdGVtcyIsImRvY1JlZiIsInNuYXBzaG90cyIsInVzZXJuYW1lIiwiZGl2IiwicCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[User].tsx\n"));

/***/ })

});