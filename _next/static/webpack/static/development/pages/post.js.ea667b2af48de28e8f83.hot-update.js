webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ErrorPage */ "./components/ErrorPage.tsx");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Tags */ "./components/Tags.tsx");
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Comments */ "./components/Comments.tsx");
/* harmony import */ var _components_AuthorInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AuthorInfo */ "./components/AuthorInfo.tsx");
/* harmony import */ var _components_BackTop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/BackTop */ "./components/BackTop.tsx");
/* harmony import */ var _utils_Events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/Events */ "./utils/Events.tsx");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/Utils */ "./utils/Utils.tsx");





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
    justifyContent: 'center'
  },
  viewContainer: {
    margin: 'auto',
    maxWidth: 992,
    flex: 1,
    width: 'inherit'
  },
  prevPost: {
    right: 0,
    position: 'fixed',
    marginRight: 32,
    fontSize: '1.25rem'
  },
  nextPost: {
    left: 0,
    position: 'relative',
    marginLeft: 32,
    fontSize: '1.25rem'
  },
  postHeader: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '20rem',
    marginBottom: '2rem'
  },
  postCover: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: '2.5em',
    textAlign: 'center',
    marginBottom: '2rem',
    lineHeight: '3.2rem',
    wordBreak: 'break-word',
    color: '#fff'
  },
  createdTime: {
    fontSize: '1.125em',
    color: '#ffffffc2'
  },
  createDate: {
    marginRight: 8
  },
  authorInfo: {
    margin: '32px 0 32px 0'
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    margin: '64px 0 32px 0'
  },
  tagsIcon: {
    fontSize: 18,
    marginRight: 16
  }
};

var Post =
/*#__PURE__*/
function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Post)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      post: {},
      author: {},
      error: false
    });

    _defineProperty(_assertThisInitialized(_this), "waitForPostContainer", function (content) {
      _this.timeoutId = setTimeout(function () {
        if (content) {
          _this.attachEvents(content);

          var images = document.querySelectorAll('.blog-markdown img');

          _this.attachImagesZoomable(images);

          return;
        }

        var queryContent = document.querySelector('.ant-layout-content');

        _this.waitForPostContainer(queryContent);
      }, 5);
    });

    _defineProperty(_assertThisInitialized(_this), "attachEvents", function (content) {
      var centerHeight = content.clientHeight / 2;
      var postPrev = document.getElementById('post-prev');

      if (postPrev) {
        postPrev.style.top = "".concat(content.scrollTop + centerHeight, "px");
      }

      var postNext = document.getElementById('post-next');

      if (postNext) {
        postNext.style.top = "".concat(content.scrollTop + centerHeight, "px");
      }

      content.addEventListener('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(function (e) {
        var centerHeight = e.target.clientHeight / 2;
        var postPrev = document.getElementById('post-prev');

        if (postPrev) {
          postPrev.style.top = "".concat(e.target.scrollTop + centerHeight, "px");
        }

        var postNext = document.getElementById('post-next');

        if (postNext) {
          postNext.style.top = "".concat(e.target.scrollTop + centerHeight, "px");
        }
      }, 200));
    });

    _defineProperty(_assertThisInitialized(_this), "attachImagesZoomable", function (images) {
      Object(medium_zoom__WEBPACK_IMPORTED_MODULE_12__["default"])(images);
    });

    _defineProperty(_assertThisInitialized(_this), "getPost", function (router, posts, authors) {
      var post = posts[router.query.slug];

      if (post) {
        Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_19__["setMetadatas"])(post);
        var author = authors[post.author];

        _this.setState({
          post: post,
          author: author
        }, function () {
          _utils_Events__WEBPACK_IMPORTED_MODULE_18__["default"].emit('setpost', post);
        });
      } else {
        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(posts)) {
          clearTimeout(_this.timeoutId);

          _this.setState({
            post: {},
            error: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickTag", function (e) {
      var tag = e.target.textContent;
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/?tag=".concat(tag.trim()));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSkeleton", function () {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: styles.viewContainer
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        speed: 2,
        primaryColor: "#f3f3f3",
        secondaryColor: "#ecebeb",
        height: 900,
        width: 400
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", {
        x: "0",
        y: "0",
        rx: "5",
        ry: "5",
        width: "400",
        height: "150"
      }), Array.from(new Array(30), function (v, k) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", {
          key: k,
          y: 120 + k * 30,
          rx: "0",
          ry: "0",
          width: "400",
          height: "12"
        });
      })));
    });

    return _this;
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var content = document.querySelector('.ant-layout-content');
      this.waitForPostContainer(content);
      var _this$props = this.props,
          router = _this$props.router,
          posts = _this$props.posts,
          authors = _this$props.authors;
      this.getPost(router, posts, authors);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var router = nextProps.router,
          posts = nextProps.posts,
          authors = nextProps.authors;
      this.getPost(router, posts, authors);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _utils_Events__WEBPACK_IMPORTED_MODULE_18__["default"].emit('setpost', {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          error = _this$state.error,
          post = _this$state.post,
          author = _this$state.author;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "container",
        style: styles.container
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a, {
        title: post.title || 'Dev.log'
      }), error ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
        status: 404
      }) : !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(post) ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default.a, {
        resistance: true,
        style: styles.viewContainer,
        index: post.prev ? 1 : 0,
        onChangeIndex: function onChangeIndex(index) {
          if (index === 2) next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(post.next);
          if (index === 1) next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(post.next);
          if (index === 0) next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(post.prev);
        }
      }, [post].reduce(function (prev, curr) {
        if (curr.prev) {
          prev.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: curr.prev,
            style: styles.viewContainer
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            id: "post-prev",
            style: styles.prevPost
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
            type: "arrow-left",
            style: {
              marginRight: 4
            }
          }), "\uC774\uC804 \uAE00")));
        }

        prev.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: curr.path,
          style: styles.viewContainer
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "post-header",
          style: _objectSpread({}, styles.postHeader, {
            backgroundImage: "url(".concat(post.cover || '/static/images/default/no-image.svg', ")")
          })
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: styles.postCover
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
          className: "post-title",
          style: styles.title
        }, post.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: styles.createdTime
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          style: styles.createDate
        }, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.date).format('YYYY.MM.DD')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "(".concat(moment__WEBPACK_IMPORTED_MODULE_5___default()(post.date).fromNow(), ")"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "blog-markdown"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "markdown-body",
          dangerouslySetInnerHTML: {
            __html: post.content
          }
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: styles.tags
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "tags",
          style: styles.tagsIcon
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Tags__WEBPACK_IMPORTED_MODULE_14__["default"], {
          tagStyle: {
            cursor: 'pointer'
          },
          tags: post.tags ? post.tags.trim().split(',') : [],
          onClick: _this2.handleClickTag
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: styles.authorInfo
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_AuthorInfo__WEBPACK_IMPORTED_MODULE_16__["default"], {
          author: author
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Comments__WEBPACK_IMPORTED_MODULE_15__["default"], null)));

        if (curr.next) {
          prev.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            key: curr.next,
            style: styles.viewContainer
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            id: "post-next",
            style: styles.nextPost
          }, "\uB2E4\uC74C \uAE00", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
            type: "arrow-right",
            style: {
              marginLeft: 4
            }
          }))));
        }

        return prev;
      }, [])), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_BackTop__WEBPACK_IMPORTED_MODULE_17__["default"], null)) : this.renderSkeleton());
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./node_modules/medium-zoom/dist/medium-zoom.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/medium-zoom/dist/medium-zoom.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! medium-zoom 1.0.4 | MIT License | https://github.com/francoischalifour/medium-zoom */var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},isSupported=function(a){return'IMG'===a.tagName},isNodeList=function(a){return NodeList.prototype.isPrototypeOf(a)},isNode=function(a){return a&&1===a.nodeType},isSvg=function(a){var b=a.currentSrc||a.src;return'.svg'===b.substr(-4).toLowerCase()},getImagesFromSelector=function(a){try{return Array.isArray(a)?a.filter(isSupported):isNodeList(a)?[].slice.call(a).filter(isSupported):isNode(a)?[a].filter(isSupported):'string'==typeof a?[].slice.call(document.querySelectorAll(a)).filter(isSupported):[]}catch(a){throw new TypeError('The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom')}},createOverlay=function(a){var b=document.createElement('div');return b.classList.add('medium-zoom-overlay'),b.style.background=a,b},cloneTarget=function(a){var b=a.getBoundingClientRect(),c=b.top,d=b.left,e=b.width,f=b.height,g=a.cloneNode(),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return g.removeAttribute('id'),g.style.position='absolute',g.style.top=c+h+'px',g.style.left=d+i+'px',g.style.width=e+'px',g.style.height=f+'px',g.style.transform='',g},createCustomEvent=function(a,b){var c=_extends({bubbles:!1,cancelable:!1,detail:void 0},b);if('function'==typeof window.CustomEvent)return new CustomEvent(a,c);var d=document.createEvent('CustomEvent');return d.initCustomEvent(a,c.bubbles,c.cancelable,c.detail),d},mediumZoom=function a(b){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(a){function b(){}a(b,b)},e=function(a){var b=a.target;return b===x?void n():void(-1===r.indexOf(b)||o({target:b}))},f=function(){if(!t&&w.original){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(u-a)>v.scrollOffset&&setTimeout(n,150)}},g=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a;if(a.background&&(x.style.background=a.background),a.container&&a.container instanceof Object&&(b.container=_extends({},v.container,a.container)),a.template){var c=isNode(a.template)?a.template:document.querySelector(a.template);b.template=c}return v=_extends({},v,b),r.forEach(function(a){a.dispatchEvent(createCustomEvent('medium-zoom:update',{detail:{zoom:y}}))}),y},h=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a(_extends({},v,b))},i=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=b.reduce(function(a,b){return[].concat(a,getImagesFromSelector(b))},[]);return d.filter(function(a){return-1===r.indexOf(a)}).forEach(function(a){r.push(a),a.classList.add('medium-zoom-image')}),s.forEach(function(a){var b=a.type,c=a.listener,e=a.options;d.forEach(function(a){a.addEventListener(b,c,e)})}),y},j=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];w.zoomed&&n();var d=0<b.length?b.reduce(function(a,b){return[].concat(a,getImagesFromSelector(b))},[]):r;return d.forEach(function(a){a.classList.remove('medium-zoom-image'),a.dispatchEvent(createCustomEvent('medium-zoom:detach',{detail:{zoom:y}}))}),r=r.filter(function(a){return-1===d.indexOf(a)}),y},k=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return r.forEach(function(d){d.addEventListener('medium-zoom:'+a,b,c)}),s.push({type:'medium-zoom:'+a,listener:b,options:c}),y},l=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return r.forEach(function(d){d.removeEventListener('medium-zoom:'+a,b,c)}),s=s.filter(function(c){return c.type!=='medium-zoom:'+a||c.listener.toString()!==b.toString()}),y},m=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.target,c=function(){var a=Math.min,b={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},c=void 0,d=void 0;if(v.container)if(v.container instanceof Object)b=_extends({},b,v.container),c=b.width-b.left-b.right-2*v.margin,d=b.height-b.top-b.bottom-2*v.margin;else{var e=isNode(v.container)?v.container:document.querySelector(v.container),f=e.getBoundingClientRect(),g=f.width,h=f.height,i=f.left,j=f.top;b=_extends({},b,{width:g,height:h,left:i,top:j})}c=c||b.width-2*v.margin,d=d||b.height-2*v.margin;var k=w.zoomedHd||w.original,l=isSvg(k)?c:k.naturalWidth||c,m=isSvg(k)?d:k.naturalHeight||d,n=k.getBoundingClientRect(),o=n.top,p=n.left,q=n.width,r=n.height,s=a(l,c)/q,t=a(m,d)/r,u=a(s,t),x=(-p+(c-q)/2+v.margin+b.left)/u,y=(-o+(d-r)/2+v.margin+b.top)/u,z='scale('+u+') translate3d('+x+'px, '+y+'px, 0)';w.zoomed.style.transform=z,w.zoomedHd&&(w.zoomedHd.style.transform=z)};return new d(function(a){if(b&&-1===r.indexOf(b))return void a(y);if(w.zoomed)return void a(y);if(b)w.original=b;else if(0<r.length){var d=r;w.original=d[0]}else return void a(y);if(w.original.dispatchEvent(createCustomEvent('medium-zoom:open',{detail:{zoom:y}})),u=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=!0,w.zoomed=cloneTarget(w.original),document.body.appendChild(x),v.template){var e=isNode(v.template)?v.template:document.querySelector(v.template);w.template=document.createElement('div'),w.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(w.template)}if(document.body.appendChild(w.zoomed),window.requestAnimationFrame(function(){document.body.classList.add('medium-zoom--opened')}),w.original.classList.add('medium-zoom-image--hidden'),w.zoomed.classList.add('medium-zoom-image--opened'),w.zoomed.addEventListener('click',n),w.zoomed.addEventListener('transitionend',function b(){t=!1,w.zoomed.removeEventListener('transitionend',b),w.original.dispatchEvent(createCustomEvent('medium-zoom:opened',{detail:{zoom:y}})),a(y)}),w.original.getAttribute('data-zoom-src')){w.zoomedHd=w.zoomed.cloneNode(),w.zoomedHd.removeAttribute('srcset'),w.zoomedHd.removeAttribute('sizes'),w.zoomedHd.src=w.zoomed.getAttribute('data-zoom-src'),w.zoomedHd.onerror=function(){clearInterval(f),console.warn('Unable to reach the zoom image target '+w.zoomedHd.src),w.zoomedHd=null,c()};var f=setInterval(function(){w.zoomedHd.complete&&(clearInterval(f),w.zoomedHd.classList.add('medium-zoom-image--opened'),w.zoomedHd.addEventListener('click',n),document.body.appendChild(w.zoomedHd),c())},10)}else if(w.original.hasAttribute('srcset')){w.zoomedHd=w.zoomed.cloneNode(),w.zoomedHd.removeAttribute('sizes');var g=w.zoomedHd.addEventListener('load',function(){w.zoomedHd.removeEventListener('load',g),w.zoomedHd.classList.add('medium-zoom-image--opened'),w.zoomedHd.addEventListener('click',n),document.body.appendChild(w.zoomedHd),c()})}else c()})},n=function(){return new d(function(a){if(t||!w.original)return void a(y);t=!0,document.body.classList.remove('medium-zoom--opened'),w.zoomed.style.transform='',w.zoomedHd&&(w.zoomedHd.style.transform=''),w.template&&(w.template.style.transition='opacity 150ms',w.template.style.opacity=0),w.original.dispatchEvent(createCustomEvent('medium-zoom:close',{detail:{zoom:y}})),w.zoomed.addEventListener('transitionend',function b(){w.original.classList.remove('medium-zoom-image--hidden'),document.body.removeChild(w.zoomed),w.zoomedHd&&document.body.removeChild(w.zoomedHd),document.body.removeChild(x),w.zoomed.classList.remove('medium-zoom-image--opened'),w.template&&document.body.removeChild(w.template),t=!1,w.zoomed.removeEventListener('transitionend',b),w.original.dispatchEvent(createCustomEvent('medium-zoom:closed',{detail:{zoom:y}})),w.original=null,w.zoomed=null,w.zoomedHd=null,w.template=null,a(y)})})},o=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.target;return w.original?n():m({target:b})},p=function(){return v},q=function(){return r},r=[],s=[],t=!1,u=0,v=c,w={original:null,zoomed:null,zoomedHd:null,template:null};'[object Object]'===Object.prototype.toString.call(b)?v=b:(b||'string'==typeof b)&&i(b),v=_extends({margin:0,background:'#fff',scrollOffset:40,container:null,template:null},v);var x=createOverlay(v.background);document.addEventListener('click',e),document.addEventListener('keyup',function(a){27===(a.keyCode||a.which)&&n()}),document.addEventListener('scroll',f),window.addEventListener('resize',n);var y={open:m,close:n,toggle:o,update:g,clone:h,attach:i,detach:j,on:k,off:l,getOptions:p,getImages:q,getZoomedImage:function(){return w.original}};return y};function styleInject(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&'undefined'!=typeof document){var d=document.head||document.getElementsByTagName('head')[0],e=document.createElement('style');e.type='text/css','top'===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}var css='.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}';styleInject('.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}');/* harmony default export */ __webpack_exports__["default"] = (mediumZoom);


/***/ })

})
//# sourceMappingURL=post.js.ea667b2af48de28e8f83.hot-update.js.map