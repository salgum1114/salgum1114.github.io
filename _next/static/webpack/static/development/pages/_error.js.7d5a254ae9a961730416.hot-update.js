webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/Title.tsx":
/*!******************************!*\
  !*** ./components/Title.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Events */ "./utils/Events.tsx");



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






var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  menuCollapse: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 16,
    cursor: 'pointer'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    color: '#000',
    fontWeight: 500,
    whiteSpace: 'nowrap'
  },
  search: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 16
  }
};

var Title =
/*#__PURE__*/
function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Title);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Title)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      post: {},
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "waitForPostContainer", function (content) {
      setTimeout(function () {
        if (content) {
          _this.attachEvents(content);

          return;
        }

        var queryContent = document.querySelector('.blog-post');

        _this.waitForPostContainer(queryContent);
      }, 5);
    });

    _defineProperty(_assertThisInitialized(_this), "attachEvents", function (content) {
      content.addEventListener('scroll', _this.onScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "detachEvents", function () {
      var content = document.querySelector('.container');

      if (content) {
        content.removeEventListener('scroll', _this.onScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(function (e) {
      if (e.target.scrollTop >= 64) {
        var content = document.querySelector('.blog-backtop');

        if (content) {
          content.classList.add('visible');
        }

        if (_this.timeoutId) {
          clearTimeout(_this.timeoutId);
        }

        _this.timeoutId = setTimeout(function () {
          var content = document.querySelector('.blog-backtop');

          if (content) {
            content.classList.remove('visible');
          }
        }, 1500);

        if (next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname === '/') {
          return;
        }

        if (!_this.state.visible) {
          _this.setState({
            visible: true
          });
        }
      } else {
        var _content = document.querySelector('.blog-backtop');

        if (_content) {
          _content.classList.remove('visible');
        }

        if (_this.state.visible) {
          _this.setState({
            visible: false
          });
        }
      }
    }, 200));

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      _utils_Events__WEBPACK_IMPORTED_MODULE_6__["default"].emit('searchcollapse');
    });

    _defineProperty(_assertThisInitialized(_this), "handlePosts", function () {
      _this.setState({
        visible: false
      });

      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    });

    return _this;
  }

  _createClass(Title, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('aetataatata');

      if (next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname !== '/') {
        var content = document.querySelector('.blog-post');
        this.waitForPostContainer(content);
      }

      _utils_Events__WEBPACK_IMPORTED_MODULE_6__["default"].on('setpost', function (post) {
        if (post !== _this2.state.post) {
          _this2.setState({
            post: post,
            visible: false
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.detachEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          visible = _this$state.visible,
          post = _this$state.post;
      var classname = classnames__WEBPACK_IMPORTED_MODULE_3___default()('container-title', {
        visible: visible
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.container
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.menuCollapse
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          fontSize: '1.25rem'
        },
        type: "bars",
        onClick: this.handlePosts
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.title
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: classname
      }, visible && post.title), !visible && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://github.com/salgum1114",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          fontSize: '1.25rem'
        },
        type: "github"
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.search
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          fontSize: '1.25rem'
        },
        type: "search",
        onClick: this.handleSearch
      })));
    }
  }]);

  return Title;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=_error.js.7d5a254ae9a961730416.hot-update.js.map