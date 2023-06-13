"use strict";
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/components/userBuy.ts":
/*!***********************************!*\
  !*** ./src/components/userBuy.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.ts");

/* harmony default export */ __webpack_exports__["default"] = (function () {
    return {
        buyList: [],
        init: function init() {
            var _this = this;
            fetch(_utils_helper__WEBPACK_IMPORTED_MODULE_0__.api.base + '/user-buy/1', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                _this.buyList = response;
            });
        }
    };
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "49d4fbf2c8f9a17f59b0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f8860366a1f7bf0ae38e.hot-update.js.map