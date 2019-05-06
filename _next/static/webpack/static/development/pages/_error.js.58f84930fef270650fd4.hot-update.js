webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/storages/localStorage */ "./node_modules/store/storages/localStorage.js");
/* harmony import */ var store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Dialog */ "./components/Dialog.tsx");
/* harmony import */ var _utils_Events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/Events */ "./utils/Events.tsx");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
    flexDirection: 'column',
    height: '100%'
  },
  search: {
    margin: 16
  },
  tags: {
    margin: 16,
    flex: 1
  },
  tag: {
    margin: 8,
    cursor: 'pointer'
  },
  historyList: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    margin: 8
  },
  history: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 8
  },
  historyAction: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1
  },
  historyClear: {
    display: 'flex',
    justifyContent: 'center',
    padding: 8
  }
};

var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      search: '',
      searchHistory: [],
      postHistory: [],
      isMobile: false,
      collapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (key) {
      if (_this.state.isMobile) {
        _this.handleCancel();
      }

      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/?tag=".concat(key));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (value) {
      if (value && value.length) {
        var findIndex = _this.state.searchHistory.indexOf(value);

        if (findIndex >= 0) {
          _this.state.searchHistory.splice(findIndex, 1);
        }

        _this.state.searchHistory.unshift(value);

        store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.write('searchHistory', JSON.stringify(_this.state.searchHistory));

        _this.setState({
          searchHistory: _this.state.searchHistory
        });
      }

      if (_this.state.isMobile) {
        _this.handleCancel();
      }

      _this.setState({
        search: value
      });

      if (value.length) {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/?search=".concat(value));
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeSearch", function (e) {
      _this.setState({
        search: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectSearchHistory", function (search) {
      if (_this.state.isMobile) {
        _this.handleCancel();
      }

      _this.setState({
        search: search
      });

      if (search.length) {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/?search=".concat(search));
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectPostHistory", function (post) {
      if (_this.state.isMobile) {
        _this.handleCancel();
      }

      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(post.path);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteSearchHistory", function (index) {
      _this.state.searchHistory.splice(index, 1);

      store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.write('searchHistory', JSON.stringify(_this.state.searchHistory));

      _this.setState({
        searchHistory: _this.state.searchHistory
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeletePostHistory", function (index) {
      _this.state.postHistory.splice(index, 1);

      store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.write('postHistory', JSON.stringify(_this.state.postHistory));

      _this.setState({
        postHistory: _this.state.postHistory
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearSearchHistory", function () {
      store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.write('searchHistory', JSON.stringify([]));

      _this.setState({
        searchHistory: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearPostHistory", function () {
      store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.write('postHistory', JSON.stringify([]));

      _this.setState({
        postHistory: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        collapsed: false
      });
    });

    return _this;
  }

  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _utils_Events__WEBPACK_IMPORTED_MODULE_11__["default"].on('searchcollapse', function () {
        _this2.setState({
          collapsed: !_this2.state.collapsed
        });
      });
      var isMobile = false;

      if (typeof window.matchMedia !== 'function') {
        console.error('Does not support matchMedia');
      } else {
        var mql = window.matchMedia('(min-width: 576px)');
        isMobile = !mql.matches;
        mql.addListener(function (e) {
          _this2.setState({
            isMobile: !e.matches
          });
        });
      }

      this.setState({
        isMobile: isMobile
      });
      var router = this.props.router;
      var search;

      if (router && router.query) {
        search = router.query.search;
      }

      var searchHistory = JSON.parse(store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.read('searchHistory')) || [];
      var postHistory = JSON.parse(store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.read('postHistory')) || [];
      this.setState({
        search: search,
        searchHistory: searchHistory,
        postHistory: postHistory
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.isMobile && nextProps.router.pathname !== this.props.router.pathname) {
        this.setState({
          collapsed: false
        });
      }

      if (nextProps.post !== this.props.post) {
        var postHistory = JSON.parse(store_storages_localStorage__WEBPACK_IMPORTED_MODULE_7___default.a.read('postHistory')) || [];
        this.setState({
          postHistory: postHistory
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var tags = this.props.tags;
      var _this$state = this.state,
          isMobile = _this$state.isMobile,
          collapsed = _this$state.collapsed,
          search = _this$state.search,
          searchHistory = _this$state.searchHistory,
          postHistory = _this$state.postHistory;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        visible: collapsed,
        width: isMobile ? '100%' : '50%',
        closable: !isMobile,
        onCancel: this.handleCancel,
        style: {
          maxWidth: isMobile ? '100%' : null
        },
        contentStyle: {
          padding: 0
        },
        titleStyle: {
          backgroundColor: '#fff',
          padding: isMobile ? 0 : null,
          width: isMobile ? null : '100%'
        },
        footerStyle: {
          justifyContent: 'center'
        },
        footer: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "https://github.com/salgum1114",
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          style: {
            fontSize: '1.25rem'
          },
          type: "github"
        }))
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "blog-search",
        style: styles.container
      }, isMobile ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          margin: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
        prefix: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "arrow-left",
          onClick: this.handleCancel
        }),
        onChange: this.handleChangeSearch,
        onSearch: this.handleSearch,
        value: search,
        style: {
          height: 48
        }
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: styles.search
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
        onChange: this.handleChangeSearch,
        onSearch: this.handleSearch,
        value: search
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: styles.search
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "\uCD5C\uADFC \uAC80\uC0C9"), searchHistory.reduce(function (prev, curr, index) {
        if (index > 10) {
          return prev;
        }

        return prev.concat(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "blog-search-history",
          key: curr,
          style: styles.historyList,
          onClick: function onClick() {
            return _this3.handleSelectSearchHistory(curr);
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "clock-circle",
          theme: "filled"
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: styles.history
        }, curr), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: styles.historyAction
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "close",
          onClick: function onClick(e) {
            e.stopPropagation();

            _this3.handleDeleteSearchHistory(index);
          }
        }))));
      }, []), searchHistory.length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: this.handleClearSearchHistory,
        style: styles.historyClear
      }, "\uCD5C\uADFC \uAC80\uC0C9 \uBAA8\uB450 \uC9C0\uC6B0\uAE30") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _objectSpread({}, styles.historyClear, {
          color: '#999999'
        })
      }, "\uAC80\uC0C9 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: styles.search
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "\uCD5C\uADFC \uAE30\uB85D"), postHistory.reduce(function (prev, curr, index) {
        if (index > 10) {
          return prev;
        }

        return prev.concat(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "blog-search-history",
          key: curr.path,
          style: styles.historyList,
          onClick: function onClick() {
            return _this3.handleSelectPostHistory(curr);
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "clock-circle",
          theme: "filled"
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: styles.history
        }, curr.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: styles.historyAction
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "close",
          onClick: function onClick(e) {
            e.stopPropagation();

            _this3.handleDeletePostHistory(index);
          }
        }))));
      }, []), postHistory.length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: this.handleClearPostHistory,
        style: styles.historyClear
      }, "\uCD5C\uADFC \uAE30\uB85D \uBAA8\uB450 \uC9C0\uC6B0\uAE30") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _objectSpread({}, styles.historyClear, {
          color: '#999999'
        })
      }, "\uC77D\uC740 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: styles.tags
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "\uC804\uCCB4 \uD0DC\uADF8"), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(tags) && Object.keys(tags).map(function (key) {
        var tag = tags[key];
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: key,
          style: styles.tag,
          onClick: function onClick() {
            return _this3.handleClick(key);
          }
        }, "".concat(key, " (").concat(tag.total, ")"));
      }))));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=_error.js.58f84930fef270650fd4.hot-update.js.map