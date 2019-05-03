webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/Utils.tsx":
/*!*************************!*\
  !*** ./utils/Utils.tsx ***!
  \*************************/
/*! exports provided: setMetadatas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMetadatas", function() { return setMetadatas; });
var setMetadatas = function setMetadatas(post) {
  var _post$tags = post.tags,
      tags = _post$tags === void 0 ? 'salgum1114,blog,react,antd,webpack,css,javascript' : _post$tags,
      _post$path = post.path,
      path = _post$path === void 0 ? '' : _post$path,
      _post$cover = post.cover,
      cover = _post$cover === void 0 ? '/static/images/authors/salgum1114.png' : _post$cover,
      _post$title = post.title,
      title = _post$title === void 0 ? 'Dev.log' : _post$title,
      _post$preview = post.preview,
      preview = _post$preview === void 0 ? 'salgum1114 Dev.log' : _post$preview;
  var description = document.querySelector('meta[name="description"]');
  description.setAttribute('content', preview);
  var keywords = document.querySelector('meta[name="keywords"]');
  keywords.setAttribute('content', tags);
  var ogTitle = document.querySelector('meta[property="og:title"]');
  ogTitle.setAttribute('content', title);
  var ogDescription = document.querySelector('meta[property="og:description"]');
  ogDescription.setAttribute('content', preview);
  var ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl.setAttribute('content', "https://salgum1114.github.io".concat(path));
  var ogImage = document.querySelector('meta[property="og:image"]');
  ogImage.setAttribute('content', "https://salgum1114.github.io".concat(cover));
  var twitterTitle = document.querySelector('meta[name="twitter:title"]');
  twitterTitle.setAttribute('content', title);
  var twitterImage = document.querySelector('meta[name="twitter:image"]');
  twitterImage.setAttribute('content', "https://salgum1114.github.io".concat(cover));
};

/***/ })

})
//# sourceMappingURL=index.js.7e11d1c24b43e68bdf1f.hot-update.js.map