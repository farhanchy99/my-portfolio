"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 9142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3603);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);



const TypingAnimation = ({ typingData , extraClassName  })=>{
    // Create Ref element.
    const el = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const typed = new (typed_js__WEBPACK_IMPORTED_MODULE_2___default())(el.current, {
            strings: typingData ? typingData : [
                "I code cool <strong>websites</strong>",
                "I develop <strong>websites</strong>",
                "I love <strong>developing work</strong>", 
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false
        });
        // Destropying
        return ()=>{
            typed.destroy();
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `${extraClassName} typing-subtitle`,
        id: "subtitle",
        ref: el
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypingAnimation);


/***/ })

};
;