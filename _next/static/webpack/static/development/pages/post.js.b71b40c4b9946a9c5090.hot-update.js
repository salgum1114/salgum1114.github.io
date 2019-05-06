webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./components/ErrorPage.tsx":
/*!**********************************!*\
  !*** ./components/ErrorPage.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ErrorPage = function ErrorPage(props) {
  var getImage = function getImage(status) {
    switch (status) {
      case 404:
        return {
          backgroundImage: 'url("/static/images/default/error_404.png")'
        };

      default:
        return {
          backgroundImage: 'url("/static/images/default/error_404.png")'
        };
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-error-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-error-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-error-image-element",
    style: getImage(props.status)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-error-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.status || 404, " \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

/***/ })

})
//# sourceMappingURL=post.js.b71b40c4b9946a9c5090.hot-update.js.map