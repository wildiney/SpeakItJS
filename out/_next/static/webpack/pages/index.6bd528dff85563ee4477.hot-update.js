webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.tsx\");\n/* harmony import */ var _components_Textarea_TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textarea/TextArea */ \"./components/Textarea/TextArea.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\nvar _jsxFileName = \"/Users/wildiney/Repositories/speak-it/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('pt-BR'),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var init = function init() {\n    if (typeof speechSynthesis === 'undefined') {\n      alert('Não é possível ativar o sistema de voz');\n    } else {\n      speak('');\n    }\n  };\n\n  var speak = function speak(text) {\n    var synth = window.speechSynthesis;\n    var voice = synth.getVoices().filter(function (voice) {\n      return voice.lang === language;\n    })[0];\n    var utterance = new SpeechSynthesisUtterance(text);\n    utterance.voice = voice;\n    synth.speak(utterance);\n  };\n\n  var speakThis = function speakThis() {\n    var speakAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    console.log(e.target);\n    var txt = txt_field.value.toLowerCase();\n    console.log(txt);\n\n    if (txt === '') {\n      return;\n    }\n\n    if (speakAll == true) {\n      speak(txt);\n      return;\n    }\n\n    if (txt.slice(-1) === ' ') {\n      var lastWord = txt.split(' ').slice(-2);\n      speak(lastWord);\n    } else {\n      var lastChar = txt.slice(-1);\n      speak(lastChar);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    init();\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"Speak it\")), __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Textarea_TextArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    keyupHandler: setText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    clickHandler: speakThis,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Leia!\")));\n}\n\n_s(index, \"lqb4eSG25RngHc1iMif9QtHVVJ8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ0ZXh0Iiwic2V0VGV4dCIsImluaXQiLCJzcGVlY2hTeW50aGVzaXMiLCJhbGVydCIsInNwZWFrIiwic3ludGgiLCJ3aW5kb3ciLCJ2b2ljZSIsImdldFZvaWNlcyIsImZpbHRlciIsImxhbmciLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJzcGVha1RoaXMiLCJzcGVha0FsbCIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidHh0IiwidHh0X2ZpZWxkIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIiwibGFzdFdvcmQiLCJzcGxpdCIsImxhc3RDaGFyIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsT0FBRCxDQUR6QjtBQUFBLE1BQ1JDLFFBRFE7QUFBQSxNQUNFQyxXQURGOztBQUFBLG1CQUVTRixzREFBUSxFQUZqQjtBQUFBLE1BRVJHLElBRlE7QUFBQSxNQUVGQyxPQUZFOztBQUlmLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsUUFBSSxPQUFPQyxlQUFQLEtBQTJCLFdBQS9CLEVBQTRDO0FBQzFDQyxXQUFLLENBQUMsd0NBQUQsQ0FBTDtBQUNELEtBRkQsTUFFTztBQUNMQyxXQUFLLENBQUMsRUFBRCxDQUFMO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNMLElBQUQsRUFBVTtBQUN0QixRQUFNTSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0osZUFBckI7QUFDQSxRQUFNSyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixHQUFrQkMsTUFBbEIsQ0FBeUIsVUFBQ0YsS0FBRCxFQUFXO0FBQ2hELGFBQU9BLEtBQUssQ0FBQ0csSUFBTixLQUFlYixRQUF0QjtBQUNELEtBRmEsRUFFWCxDQUZXLENBQWQ7QUFHQSxRQUFNYyxTQUFTLEdBQUcsSUFBSUMsd0JBQUosQ0FBNkJiLElBQTdCLENBQWxCO0FBQ0FZLGFBQVMsQ0FBQ0osS0FBVixHQUFrQkEsS0FBbEI7QUFDQUYsU0FBSyxDQUFDRCxLQUFOLENBQVlPLFNBQVo7QUFDRCxHQVJEOztBQVVBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQXNCO0FBQUEsUUFBckJDLFFBQXFCLHVFQUFWLEtBQVU7QUFDdENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFDLENBQUNDLE1BQWQ7QUFDQSxRQUFJQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsV0FBaEIsRUFBVjtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjs7QUFDQSxRQUFJQSxHQUFHLEtBQUssRUFBWixFQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsUUFBSUwsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCVixXQUFLLENBQUNlLEdBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUEsR0FBRyxDQUFDSSxLQUFKLENBQVUsQ0FBQyxDQUFYLE1BQWtCLEdBQXRCLEVBQTJCO0FBQ3pCLFVBQUlDLFFBQVEsR0FBR0wsR0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlRixLQUFmLENBQXFCLENBQUMsQ0FBdEIsQ0FBZjtBQUNBbkIsV0FBSyxDQUFDb0IsUUFBRCxDQUFMO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsVUFBSUUsUUFBUSxHQUFHUCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFDLENBQVgsQ0FBZjtBQUNBbkIsV0FBSyxDQUFDc0IsUUFBRCxDQUFMO0FBQ0Q7QUFDRixHQW5CRDs7QUFxQkFDLHlEQUFTLENBQUMsWUFBTTtBQUNkMUIsUUFBSTtBQUNMLEdBRlEsQ0FBVDtBQUlBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBSUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFVLGdCQUFZLEVBQUVELE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaUVBQUQ7QUFBUSxnQkFBWSxFQUFFYSxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsQ0FKRixDQURGO0FBV0Q7O0dBMURRbEIsSzs7QUE0RE1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0YXJlYS9UZXh0QXJlYSdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgncHQtQlInKVxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHNwZWVjaFN5bnRoZXNpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFsZXJ0KCdOw6NvIMOpIHBvc3PDrXZlbCBhdGl2YXIgbyBzaXN0ZW1hIGRlIHZveicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWFrKCcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNwZWFrID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBzeW50aCA9IHdpbmRvdy5zcGVlY2hTeW50aGVzaXM7XG4gICAgY29uc3Qgdm9pY2UgPSBzeW50aC5nZXRWb2ljZXMoKS5maWx0ZXIoKHZvaWNlKSA9PiB7XG4gICAgICByZXR1cm4gdm9pY2UubGFuZyA9PT0gbGFuZ3VhZ2VcbiAgICB9KVswXVxuICAgIGNvbnN0IHV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodGV4dClcbiAgICB1dHRlcmFuY2Uudm9pY2UgPSB2b2ljZVxuICAgIHN5bnRoLnNwZWFrKHV0dGVyYW5jZSlcbiAgfVxuXG4gIGNvbnN0IHNwZWFrVGhpcyA9IChzcGVha0FsbCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgbGV0IHR4dCA9IHR4dF9maWVsZC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc29sZS5sb2codHh0KVxuICAgIGlmICh0eHQgPT09ICcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc3BlYWtBbGwgPT0gdHJ1ZSkge1xuICAgICAgc3BlYWsodHh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR4dC5zbGljZSgtMSkgPT09ICcgJykge1xuICAgICAgbGV0IGxhc3RXb3JkID0gdHh0LnNwbGl0KCcgJykuc2xpY2UoLTIpXG4gICAgICBzcGVhayhsYXN0V29yZClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGxhc3RDaGFyID0gdHh0LnNsaWNlKC0xKVxuICAgICAgc3BlYWsobGFzdENoYXIpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0KCk7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TcGVhayBpdDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8VGV4dEFyZWEga2V5dXBIYW5kbGVyPXtzZXRUZXh0fT48L1RleHRBcmVhPlxuICAgICAgICA8QnV0dG9uIGNsaWNrSGFuZGxlcj17c3BlYWtUaGlzfT5MZWlhITwvQnV0dG9uPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})