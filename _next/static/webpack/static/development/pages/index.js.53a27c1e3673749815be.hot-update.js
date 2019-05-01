webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/storages/localStorage */ "./node_modules/store/storages/localStorage.js");
/* harmony import */ var store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_masonry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/masonry */ "./components/masonry/index.tsx");
/* harmony import */ var _components_EmptyPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/EmptyPage */ "./components/EmptyPage.tsx");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/Utils */ "./utils/Utils.tsx");
/* harmony import */ var _BackTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BackTop */ "./components/BackTop.tsx");





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
  thumbnail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 160,
    overflow: 'hidden'
  },
  title: {
    wordBreak: 'break-word'
  },
  card: {
    margin: '16px 0'
  },
  cardBody: {
    height: '12rem'
  },
  cardCover: {
    width: '100%',
    paddingTop: '56.25%',
    position: 'relative',
    display: 'block'
  },
  cardThumbnail: {
    OObjectFit: 'cover',
    objectFit: 'cover',
    display: 'block',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  cardPreview: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    wordWrap: 'break-word',
    marginTop: '1.5rem'
  }
};

var Posts =
/*#__PURE__*/
function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Posts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Posts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      posts: _this.props.posts
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(function (e) {
      store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10___default.a.write('postsScroll', e.target.scrollTop);
    }, 100));

    _defineProperty(_assertThisInitialized(_this), "attachEvents", function () {
      document.querySelector('.ant-layout-content').addEventListener('scroll', _this.onScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "detachEvents", function () {
      document.querySelector('.ant-layout-content').removeEventListener('scroll', _this.onScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "getPostsScroll", function () {
      var postsScroll = store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10___default.a.read('postsScroll');
      var scrollTop = postsScroll ? parseInt(postsScroll, 10) : 0;
      var content = document.querySelector('.ant-layout-content');
      content.scrollTo(0, scrollTop);
    });

    _defineProperty(_assertThisInitialized(_this), "getPosts", function (params, tags, posts, callback) {
      var tag = tags[params.tag];
      var search = params.search;
      Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_14__["setMetadatas"])({});

      if (tag && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(posts)) {
        var paths = tag.paths;
        var filteredPosts = paths.reduce(function (prev, curr) {
          var metadata = posts[curr];
          return Object.assign(prev, _defineProperty({}, curr, metadata));
        }, {});
        console.log(filteredPosts);

        _this.setState({
          posts: filteredPosts
        }, function () {
          if (callback) {
            callback();
          }
        });
      } else if (search) {
        var _filteredPosts = Object.keys(posts).reduce(function (prev, curr) {
          var metadata = posts[curr];

          if (metadata.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 || metadata.preview.toLowerCase().indexOf(search.toLowerCase()) >= 0 || metadata.tags.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
            return Object.assign(prev, _defineProperty({}, curr, metadata));
          }

          return prev;
        }, {});

        _this.setState({
          posts: _filteredPosts
        }, function () {
          if (callback) {
            callback();
          }
        });
      } else {
        _this.setState({
          posts: posts
        }, function () {
          if (callback) {
            callback();
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (metadata) {
      var postHistory = JSON.parse(store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10___default.a.read('postHistory')) || [];
      var findIndex = postHistory.findIndex(function (value) {
        return value.path === metadata.path;
      });

      if (findIndex >= 0) {
        postHistory.splice(findIndex, 1);
      }

      postHistory.unshift({
        path: metadata.path,
        title: metadata.title
      });
      store_storages_localStorage__WEBPACK_IMPORTED_MODULE_10___default.a.write('postHistory', JSON.stringify(postHistory));
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(metadata.path);
    });

    _defineProperty(_assertThisInitialized(_this), "renderCard", function () {
      var authors = _this.props.authors;
      var posts = _this.state.posts;
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(posts) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(authors) ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_masonry__WEBPACK_IMPORTED_MODULE_12__["default"].Box, null, Object.keys(posts).map(function (key) {
        var metadata = posts[key];
        var author = authors[metadata.author];
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_masonry__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
          key: key,
          className: "container-col",
          col: "3"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
          hoverable: true,
          onClick: function onClick() {
            return _this.handleClick(metadata);
          },
          cover: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            as: key,
            href: "/post?slug=".concat(key)
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
            style: styles.cardCover
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
            style: styles.cardThumbnail,
            alt: "Post cover",
            src: metadata.cover || '/images/default/no-image.svg'
          }))),
          bodyStyle: styles.cardBody
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a.Meta, {
          avatar: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: author.avatar
          }, author.name.charAt(0).toUpperCase()),
          title: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
            className: "ant-card-meta-title"
          }, metadata.title.length > 30 ? metadata.title.substring(0, 30).concat('...') : metadata.title),
          description: moment__WEBPACK_IMPORTED_MODULE_7___default()(metadata.date).fromNow()
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: styles.cardPreview
        }, metadata.preview)));
      })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_EmptyPage__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    });

    return _this;
  }

  _createClass(Posts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          tags = _this$props.tags,
          posts = _this$props.posts,
          router = _this$props.router;
      this.getPosts(router.query, tags, posts, function () {
        _this2.getPostsScroll();
      });
      this.attachEvents();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var tags = nextProps.tags,
          posts = nextProps.posts,
          router = nextProps.router;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(router.query) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(tags)) {
        this.getPosts(router.query, tags, posts);
      } else {
        this.setState({
          posts: posts
        }, function () {
          _this3.getPostsScroll();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.detachEvents();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_11___default.a, {
        title: "Dev.log"
      }), this.renderCard(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_BackTop__WEBPACK_IMPORTED_MODULE_15__["default"], null));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ })

})
//# sourceMappingURL=index.js.53a27c1e3673749815be.hot-update.js.map