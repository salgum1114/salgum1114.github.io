webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BackTop.tsx":
/*!********************************!*\
  !*** ./components/BackTop.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_5__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var BackTop =
/*#__PURE__*/
function (_Component) {
  _inherits(BackTop, _Component);

  function BackTop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BackTop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BackTop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "attachEvent", function (content) {
      content.addEventListener('scroll', _this.onScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default()(function (e) {
      var threshold = _this.props.threshold;

      if (e.target.scrollTop >= threshold) {
        var content = document.querySelector('.blog-backtop');
        content.classList.add('visible');

        if (_this.timeoutId) {
          clearTimeout(_this.timeoutId);
        }

        _this.timeoutId = setTimeout(function () {
          var content = document.querySelector('.blog-backtop');

          if (content) {
            content.classList.remove('visible');
          }
        }, 1500);
      } else {
        var _content = document.querySelector('.blog-backtop');

        _content.classList.remove('visible');
      }
    }, 200));

    _defineProperty(_assertThisInitialized(_this), "scrollStep", function () {
      if (_this.content.scrollTop === 0) {
        clearInterval(_this.intervalId);
      }

      _this.content.scrollTo(0, _this.content.scrollTop - _this.props.scrollStep);
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToTop", function () {
      if (_this.content && _this.props.target) {
        _this.intervalId = setInterval(function () {
          _this.scrollStep();
        }, _this.props.delayMs);
      }
    });

    return _this;
  }

  _createClass(BackTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var target = this.props.target;
      this.content = document.querySelector(target);

      if (this.content) {
        this.attachEvent(this.content);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "blog-backtop",
        type: "primary",
        shape: "circle",
        onClick: this.scrollToTop
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "to-top",
        style: {
          fontSize: '1.25rem'
        }
      }));
    }
  }]);

  return BackTop;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_defineProperty(BackTop, "defaultProps", {
  threshold: 64,
  target: '.ant-layout-content',
  scrollStep: 100,
  delayMs: 16
});

/* harmony default export */ __webpack_exports__["default"] = (BackTop);

/***/ })

})
//# sourceMappingURL=index.js.6f9e5e142dbb8f4b54e2.hot-update.js.map