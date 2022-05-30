webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.tsx\");\n/* harmony import */ var _components_Textarea_TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textarea/TextArea */ \"./components/Textarea/TextArea.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\nvar _jsxFileName = \"/Users/wildiney/Repositories/speak-it/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('pt-BR'),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var init = function init() {\n    if (typeof speechSynthesis === 'undefined') {\n      alert('Não é possível ativar o sistema de voz');\n    } else {\n      speak('');\n    }\n  };\n\n  var speak = function speak(text) {\n    var synth = window.speechSynthesis;\n    var voice = synth.getVoices().filter(function (voice) {\n      return voice.lang === language;\n    })[0];\n    var utterance = new SpeechSynthesisUtterance(text);\n    utterance.voice = voice;\n    synth.speak(utterance);\n  };\n\n  var speakThis = function speakThis() {\n    var speakAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n    if (text === '') {\n      return;\n    }\n\n    if (speakAll == true) {\n      speak(txt);\n      return;\n    }\n\n    if (txt.slice(-1) === ' ') {\n      var lastWord = txt.split(' ').slice(-2);\n      speak(lastWord);\n    } else {\n      var lastChar = txt.slice(-1);\n      speak(lastChar);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    init();\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Speak it\")), __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Textarea_TextArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    keyupHandler: setText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    clickHandler: speakThis,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Leia!\")));\n}\n\n_s(index, \"zkjHwvHN++9QzmuVLG7jN+CalIA=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ0ZXh0Iiwic2V0VGV4dCIsImluaXQiLCJzcGVlY2hTeW50aGVzaXMiLCJhbGVydCIsInNwZWFrIiwic3ludGgiLCJ3aW5kb3ciLCJ2b2ljZSIsImdldFZvaWNlcyIsImZpbHRlciIsImxhbmciLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJzcGVha1RoaXMiLCJzcGVha0FsbCIsInR4dCIsInNsaWNlIiwibGFzdFdvcmQiLCJzcGxpdCIsImxhc3RDaGFyIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsT0FBRCxDQUR6QjtBQUFBLE1BQ1JDLFFBRFE7QUFBQSxNQUNFQyxXQURGOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVSRyxJQUZRO0FBQUEsTUFFRkMsT0FGRTs7QUFJZixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQUksT0FBT0MsZUFBUCxLQUEyQixXQUEvQixFQUE0QztBQUMxQ0MsV0FBSyxDQUFDLHdDQUFELENBQUw7QUFDRCxLQUZELE1BRU87QUFDTEMsV0FBSyxDQUFDLEVBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTCxJQUFELEVBQVU7QUFDdEIsUUFBTU0sS0FBSyxHQUFHQyxNQUFNLENBQUNKLGVBQXJCO0FBQ0EsUUFBTUssS0FBSyxHQUFHRixLQUFLLENBQUNHLFNBQU4sR0FBa0JDLE1BQWxCLENBQXlCLFVBQUNGLEtBQUQsRUFBVztBQUNoRCxhQUFPQSxLQUFLLENBQUNHLElBQU4sS0FBZWIsUUFBdEI7QUFDRCxLQUZhLEVBRVgsQ0FGVyxDQUFkO0FBR0EsUUFBTWMsU0FBUyxHQUFHLElBQUlDLHdCQUFKLENBQTZCYixJQUE3QixDQUFsQjtBQUNBWSxhQUFTLENBQUNKLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0FGLFNBQUssQ0FBQ0QsS0FBTixDQUFZTyxTQUFaO0FBQ0QsR0FSRDs7QUFVQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFzQjtBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixLQUFVOztBQUN0QyxRQUFJZixJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsUUFBSWUsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCVixXQUFLLENBQUNXLEdBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUEsR0FBRyxDQUFDQyxLQUFKLENBQVUsQ0FBQyxDQUFYLE1BQWtCLEdBQXRCLEVBQTJCO0FBQ3pCLFVBQUlDLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVUsR0FBVixFQUFlRixLQUFmLENBQXFCLENBQUMsQ0FBdEIsQ0FBZjtBQUNBWixXQUFLLENBQUNhLFFBQUQsQ0FBTDtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUlFLFFBQVEsR0FBR0osR0FBRyxDQUFDQyxLQUFKLENBQVUsQ0FBQyxDQUFYLENBQWY7QUFDQVosV0FBSyxDQUFDZSxRQUFELENBQUw7QUFDRDtBQUNGLEdBaEJEOztBQWtCQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RuQixRQUFJO0FBQ0wsR0FGUSxDQUFUO0FBSUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFJRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQVUsZ0JBQVksRUFBRUQsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFRLGdCQUFZLEVBQUVhLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixDQUpGLENBREY7QUFXRDs7R0F2RFFsQixLOztBQXlETUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL1RleHRhcmVhL1RleHRBcmVhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCdwdC1CUicpXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzcGVlY2hTeW50aGVzaXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhbGVydCgnTsOjbyDDqSBwb3Nzw612ZWwgYXRpdmFyIG8gc2lzdGVtYSBkZSB2b3onKVxuICAgIH0gZWxzZSB7XG4gICAgICBzcGVhaygnJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBzcGVhayA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3ludGggPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzO1xuICAgIGNvbnN0IHZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKCh2b2ljZSkgPT4ge1xuICAgICAgcmV0dXJuIHZvaWNlLmxhbmcgPT09IGxhbmd1YWdlXG4gICAgfSlbMF1cbiAgICBjb25zdCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHQpXG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gdm9pY2VcbiAgICBzeW50aC5zcGVhayh1dHRlcmFuY2UpXG4gIH1cblxuICBjb25zdCBzcGVha1RoaXMgPSAoc3BlYWtBbGwgPSBmYWxzZSkgPT4ge1xuICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNwZWFrQWxsID09IHRydWUpIHtcbiAgICAgIHNwZWFrKHR4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eHQuc2xpY2UoLTEpID09PSAnICcpIHtcbiAgICAgIGxldCBsYXN0V29yZCA9IHR4dC5zcGxpdCgnICcpLnNsaWNlKC0yKVxuICAgICAgc3BlYWsobGFzdFdvcmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBsYXN0Q2hhciA9IHR4dC5zbGljZSgtMSlcbiAgICAgIHNwZWFrKGxhc3RDaGFyKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdCgpO1xuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3BlYWsgaXQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPFRleHRBcmVhIGtleXVwSGFuZGxlcj17c2V0VGV4dH0+PC9UZXh0QXJlYT5cbiAgICAgICAgPEJ1dHRvbiBjbGlja0hhbmRsZXI9e3NwZWFrVGhpc30+TGVpYSE8L0J1dHRvbj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})