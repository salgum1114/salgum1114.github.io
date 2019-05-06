webpackHotUpdate(3,{

/***/ "./_metadata/posts.json":
/*!******************************!*\
  !*** ./_metadata/posts.json ***!
  \******************************/
/*! exports provided: /nextjs/2019-05-06-nextjs-static-website-1, /reactjs/2019-05-03-medium-zoom, /css/2019-04-30-overscroll-behavior-contain, /css/2019-04-28-scroll-behavior-smooth, /reactjs/2019-04-25-back-top-component, /webpack/2019-04-22-uglifyjs-to-terser, default */
/***/ (function(module) {

module.exports = {"/nextjs/2019-05-06-nextjs-static-website-1":{"path":"/nextjs/2019-05-06-nextjs-static-website-1","content":"<p><a href=\"https://nextjs.org/\">Next.js</a>는 현재 가장 유명한 <a href=\"https://reactjs.org/\">React</a>용 서버 사이드 렌더링 프레임워크이다.</p>\n<p>프레임워크로써 이해하기 쉬운 구조와 <a href=\"https://github.com/zeit/next.js/tree/canary/examples\">수많은 예제</a>들, 그리고 다양한 플러그인들을 지원하고 있어 많은 사람들에게 사랑받고 있다.</p>\n<p>또한, <a href=\"https://nextjs.org/\">Next.js</a>는 <code>next export</code>라는 명령어로 <code>routing 경로</code>로 하여금 정적 웹사이트를 만들 수 있는 기능도 제공하고 있다.</p>\n<blockquote>\n  <p><a href=\"https://nextjs.org/\">Next.js</a>의 최신 버전은 8.x.x인데, 현재 <code>next export</code> 기능은 7.x.x 버전에서 에러없이 잘 동작한다. <a href=\"https://github.com/zeit/next.js/issues/6251\">[Static export failed when upgraded to v8.0.0 #6251]</a></p>\n</blockquote>\n<p>나 또한 이 블로그를 만드는데 <a href=\"https://nextjs.org/\">Next.js</a>를 사용하여 만들었으며, <a href=\"https://nextjs.org/\">Next.js</a>를 사용하여 정적 웹사이트를 만드는 것에 대해서 설명하려고 한다.</p>\n<blockquote>\n  <p>이 글은 서버 사이드 렌더링이 아닌 정적 웹사이트를 만드는 것을 중점으로 설명한다.</p>\n</blockquote>\n<h3 id=\"1nextjs\">1. Next.js 구조</h3>\n<p>Next.js의 기본적인 구조는 다음처럼 구성된다.</p>\n<pre><code class=\"hljs properties language-properties\"><span class=\"hljs-meta\">+</span> <span class=\"hljs-string\">pages/ HTML Document, Application Container, 라우팅 시작점 등을 작성한다.</span>\n    <span class=\"hljs-meta\">-</span> <span class=\"hljs-string\">_document.js</span>\n    <span class=\"hljs-meta\">-</span> <span class=\"hljs-string\">_app.js</span>\n    <span class=\"hljs-meta\">-</span> <span class=\"hljs-string\">_error.js</span>\n    <span class=\"hljs-meta\">-</span> <span class=\"hljs-string\">index.js</span>\n<span class=\"hljs-meta\">+</span> <span class=\"hljs-string\">static/ 정적 파일 (이미지, 파일 등등)을 업로드 한다.</span>\n<span class=\"hljs-meta\">+</span> <span class=\"hljs-string\">next.config.js Next.js의 환경 설정 파일이다. 라우팅 설정, typescript, less 등의 webpack 플러그인을 설정한다.</span>\n</code></pre>\n<hr />","preview":"Next.js는 현재 가장 유명한 React용 서버 사이드 렌더링 프레임워크이다.\n\n프레임워크로써 이해하기 쉬운 구조와 수많은 예제들, 그리고 다양한 플러그인들을 지원하고 있어 많은 사람들에게 사랑받고 있다.\n\n또한, Next.js는 next export라는 명령어로 routing 경로로 하여금 정적 웹사이트를 만들 수 있는 기능도 제공하고 있다.\n\n>  ...","title":"Next.js로 정적 웹사이트 만들기 1편 - 프로젝트 구성하기","author":"salgum1114","date":"2019-05-06 19:50","tags":"react, nextjs, website","cover":"/static/images/covers/nextjs.png","next":"/reactjs/2019-05-03-medium-zoom","prev":null},"/reactjs/2019-05-03-medium-zoom":{"path":"/reactjs/2019-05-03-medium-zoom","content":"<p>평소 <a href=\"https://medium.com/\">Medium</a>에서 개발 포스팅을 찾아보는 편인데, 글에서 이미지를 클릭했을 때, 줌이 되는 기능이 이뻐보여서 내 개발 블로그에도 적용하고 싶어 비슷한 라이브러리들이 있나 찾아보게 되었다.</p>\n<p>우선 이 블로그가 React로 개발했으니 React에서 사용할 수 있는 라이브러리를 찾아보니 <a href=\"https://github.com/rpearce/react-medium-image-zoom\">react-medium-image-zoom</a>이 있었다. 하지만 React로 작성해야 하기 때문에, 마크다운이 HTML로 번역된 상태에서는 사용이 불가능해 보인다.</p>\n<p>이와는 다르게 querySelector로 <code>&lt;img&gt;</code>요소들을 파라미터로 전달하기만 하면 사용할 수 있는 <a href=\"https://github.com/francoischalifour/medium-zoom\">medium-zoom</a> 라이브러리가 있었다.</p>\n<blockquote>\n  <p><a href=\"https://github.com/francoischalifour/medium-zoom\">medium-zoom</a>에 대한 사용 방법은 github에 잘 나와있고 playground로 데모를 확인할 수 있다.</p>\n</blockquote>\n<h4 id=\"mediumzoom\">medium-zoom 사용 방법</h4>\n<pre><code class=\"hljs javascript language-javascript\"><span class=\"hljs-comment\">// CSS selector</span>\nmediumZoom(<span class=\"hljs-string\">'[data-zoomable]'</span>);\n\n<span class=\"hljs-comment\">// HTMLElement</span>\nmediumZoom(<span class=\"hljs-built_in\">document</span>.querySelector(<span class=\"hljs-string\">'#cover'</span>));\n\n<span class=\"hljs-comment\">// NodeList</span>\nmediumZoom(<span class=\"hljs-built_in\">document</span>.querySelectorAll(<span class=\"hljs-string\">'[data-zoomable]'</span>));\n\n<span class=\"hljs-comment\">// Array</span>\n<span class=\"hljs-keyword\">const</span> images = [\n  <span class=\"hljs-built_in\">document</span>.querySelector(<span class=\"hljs-string\">'#cover'</span>),\n  ...document.querySelectorAll(<span class=\"hljs-string\">'[data-zoomable]'</span>),\n];\n\nmediumZoom(images);\n</code></pre>\n<blockquote>\n  <p>추가적인 옵션이 있는데 <a href=\"https://github.com/francoischalifour/medium-zoom\">medium-zoom github</a>에서 확인하자.</p>\n</blockquote>\n<p>React에서 사용할 때는 다음 처럼 사용하면 된다.</p>\n<h4 id=\"reactmediumzoom\">React에서 medium-zoom 사용 방법</h4>\n<pre><code class=\"hljs javascript language-javascript\"><span class=\"hljs-keyword\">import</span> React <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n<span class=\"hljs-keyword\">import</span> mediumZoom <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'medium-zoom'</span>;\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MediumZoomExample</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    componentDidMount() {\n        <span class=\"hljs-keyword\">const</span> images = <span class=\"hljs-built_in\">document</span>.querySelectorAll(<span class=\"hljs-string\">'.example-container img'</span>);\n        mediumZoom(images);\n    }\n\n    render() {\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div className=\"example-container\"&gt;\n                &lt;img src=\"/test.png\" /&gt;\n                &lt;img src=\"/test2.png\" /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<p>블로그에 적용된 결과.</p>\n<p><img src=\"/static/images/reactjs/medium-zoom.gif\" alt=\"medium-zoom-apply\" /></p>","preview":"평소 Medium에서 개발 포스팅을 찾아보는 편인데, 글에서 이미지를 클릭했을 때, 줌이 되는 기능이 이뻐보여서 내 개발 블로그에도 적용하고\n싶어 비슷한 라이브러리들이 있나 찾아보게 되었다.\n\n우선 이 블로그가 React로 개발했으니 React에서 사용할 수 있는 라이브러리를 찾아보니 react-medium-image-zoom이\n있었다. 하지만 React로...","title":"medium-zoom 적용하기","author":"salgum1114","date":"2019-05-03 12:46","tags":"react, medium-zoom","cover":"/static/images/covers/medium-zoom.gif","next":"/css/2019-04-30-overscroll-behavior-contain","prev":"/nextjs/2019-05-06-nextjs-static-website-1"},"/css/2019-04-30-overscroll-behavior-contain":{"path":"/css/2019-04-30-overscroll-behavior-contain","content":"<p>웹에서 스크롤을 다루다보면 항상 마주치는 문제 중 하나가 <strong>스크롤 체이닝</strong>이다.</p>\n<p>다음 예제를 보자.</p>\n<iframe height=\"465\" style=\"width: 100%;\" scrolling=\"no\" title=\"overscroll-behavior: cotain before\" src=\"//codepen.io/salgum1114/embed/MRMaWX/?height=265&theme-id=0&default-tab=css,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">\n  See the Pen <a href='https://codepen.io/salgum1114/pen/MRMaWX/'>overscroll-behavior: cotain before</a> by Sung Gyun Oh\n  (<a href='https://codepen.io/salgum1114'>@salgum1114</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<p>위 예제에서 Box-1의 스크롤이 끝에 도달하게 되면 상위 요소인 App의 스크롤이 시작이된다.</p>\n<p>심지어 App의 스크롤이 끝에 도달하게 되면 이 포스팅의 본문까지 스크롤이 시작되게 된다.</p>\n<p>이러한 현상을 <strong>스크롤 체이닝</strong>이라고 불리며, 구글 개발자 사이트의 <a href=\"https://developers.google.com/web/updates/2017/11/overscroll-behavior\">Take control of your scroll: customizing pull-to-refresh and overflow effects</a>에 설명이 잘 되어있다.</p>\n<p>여기서 설명하길 CSS의 <strong>overscroll-behavior</strong>속성을 사용하여 스크롤로 일어날 수 있는 다양한 현상을 조절할 수 있다고 한다.</p>\n<blockquote>\n  <p>단, 이 속성은 본문의 첫번째 단락에 주의로 크롬 63버전 이상부터 지원하며, 다른 브라우저는 고려 중이라고 작성되어있다.</p>\n</blockquote>\n<h4 id=\"\">브라우저 호환성 참고</h4>\n<p><img src=\"/static/images/css/overscroll-behavior-support.png\" alt=\"overscroll-behavior-support\" /></p>\n<p>이제 예제에 <strong>overscroll-behavior</strong> 속성을 적용하여 스크롤 체이닝 현상을 피해보자.</p>\n<blockquote>\n  <p>overscroll-behavior 속성은 x, y도 따로 다룰 수 있다.</p>\n</blockquote>\n<iframe height=\"465\" style=\"width: 100%;\" scrolling=\"no\" title=\"overscroll-behavior: cotain after\" src=\"//codepen.io/salgum1114/embed/EJBVvq/?height=265&theme-id=0&default-tab=css,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">\n  See the Pen <a href='https://codepen.io/salgum1114/pen/EJBVvq/'>overscroll-behavior: cotain after</a> by Sung Gyun Oh\n  (<a href='https://codepen.io/salgum1114'>@salgum1114</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<p>Box-1에서 스크롤을 끝까지 도달시켜보면 이전과 다르게 상위 요소인 App의 스크롤이 시작되지 않으면서 스크롤 체이닝을 피하게 된다.</p>\n<h4 id=\"-1\">참고 사이트</h4>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior\">MDN: overscroll-behavior</a></li>\n<li><a href=\"https://developers.google.com/web/updates/2017/11/overscroll-behavior\">Google Developers - Take control of your scroll: customizing pull-to-refresh and overflow effects</a></li>\n</ul>","preview":"웹에서 스크롤을 다루다보면 항상 마주치는 문제 중 하나가 스크롤 체이닝이다.\n\n다음 예제를 보자.\n\nSee the Pen overscroll-behavior: cotain before by Sung Gyun Oh (@salgum1114) on \nCodePen.위 예제에서 Box-1의 스크롤이 끝에 도달하게 되면 상위 요소인 App의 스크롤이 시작이된다.\n\n...","title":"overscroll-behavior: contain 속성 사용하기","author":"salgum1114","date":"2019-04-30 19:28","tags":"css, overscroll-behavior","cover":"/static/images/covers/css.png","next":"/css/2019-04-28-scroll-behavior-smooth","prev":"/reactjs/2019-05-03-medium-zoom"},"/css/2019-04-28-scroll-behavior-smooth":{"path":"/css/2019-04-28-scroll-behavior-smooth","content":"<p>블로그에 부드러운 스크롤링을 위해서 CSS의 <code>scroll-behavior</code>를 활용해본다.</p>\n<p>우선, <code>scroll-behavior</code>이 뭔지 알아보자.</p>\n<blockquote>\n  <p><a href=\"https://www.w3schools.com/cssref/pr_scroll-behavior.asp\">w3school: CSS scroll-behavior Property</a>에 아주 잘 나와있다.</p>\n</blockquote>\n<p>사용 방법은 아주 간단하다. 아래 코드를 확인해보자.</p>\n<h4 id=\"scrollbehaviorsmooth\">scroll-behavior: smooth 적용 전</h4>\n<iframe height=\"465\" style=\"width: 100%;\" scrolling=\"no\" title=\"scroll-behavior: smooth before\" src=\"//codepen.io/salgum1114/embed/ZZPBjZ/?height=265&theme-id=0&default-tab=html,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">\n  See the Pen <a href='https://codepen.io/salgum1114/pen/ZZPBjZ/'>scroll-behavior: smooth before</a> by Sung Gyun Oh\n  (<a href='https://codepen.io/salgum1114'>@salgum1114</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<h4 id=\"scrollbehaviorsmooth-1\">scroll-behavior: smooth 적용 후</h4>\n<iframe height=\"465\" style=\"width: 100%;\" scrolling=\"no\" title=\"scroll-behavior: smooth\" src=\"//codepen.io/salgum1114/embed/axMmrP/?height=265&theme-id=0&default-tab=html,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">\n  See the Pen <a href='https://codepen.io/salgum1114/pen/axMmrP/'>scroll-behavior: smooth</a> by Sung Gyun Oh\n  (<a href='https://codepen.io/salgum1114'>@salgum1114</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<blockquote>\n  <p>speed를 조절할 수 있는지는 모르겠다.</p>\n</blockquote>\n<p>이제 블로그에 적용된 것을 확인해보자.</p>\n<h4 id=\"bottom\">Bottom</h4>\n<p><a href=\"#top\">아래로 이동</a>\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br /></p>\n<h4 id=\"top\">Top</h4>\n<p><a href=\"#bottom\">위로 이동</a></p>","preview":"블로그에 부드러운 스크롤링을 위해서 CSS의 scroll-behavior를 활용해본다.\n\n우선, scroll-behavior이 뭔지 알아보자.\n\n>  w3school: CSS scroll-behavior Property에 아주 잘 나와있다.\n\n\n사용 방법은 아주 간단하다. 아래 코드를 확인해보자.\n\nSCROLL-BEHAVIOR: SMOOTH 적용 전\nSee...","title":"scroll-behavior: smooth 속성 사용하기","author":"salgum1114","date":"2019-04-28 16:28","tags":"css, scroll-behavior","cover":"/static/images/covers/css.png","next":"/reactjs/2019-04-25-back-top-component","prev":"/css/2019-04-30-overscroll-behavior-contain"},"/reactjs/2019-04-25-back-top-component":{"path":"/reactjs/2019-04-25-back-top-component","content":"<p>블로그 개발 중 스크롤이 되었을 때, 상위로 이동시키는 <code>BackTop</code>을 적용하기 위해 <a href=\"https://ant.design/components/back-top/\">Ant.Design의 BackTop 컴포넌트</a>를 사용하려고 했다.</p>\n<p>하지만 <a href=\"https://ant.design/components/back-top/\">Ant.Design의 BackTop 컴포넌트</a>를 적용해보니 잘 안된다. 따라서 직접 <code>BackTop</code> 컴포넌트를 구현하기로 결정했다.</p>\n<blockquote>\n  <p>Ant.Design 홈페이지에선 잘 동작한다.</p>\n</blockquote>\n<p>구현 코드는 다음과 같다.</p>\n<p><strong>BackTop.tsx</strong></p>\n<pre><code class=\"hljs javascript language-javascript\"><span class=\"hljs-keyword\">import</span> React, { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n<span class=\"hljs-keyword\">import</span> { Icon, Button } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'antd'</span>;\n<span class=\"hljs-keyword\">import</span> throttle <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'lodash/throttle'</span>;\n\ninterface IProps {\n    scrollStep?: number;\n    delayMs: number;\n    target: string;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">BackTop</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Component</span>&lt;<span class=\"hljs-title\">IProps</span>&gt; </span>{\n    private content: Element;\n    private timeoutId: NodeJS.Timeout;\n    private intervalId: NodeJS.Timeout;\n\n    <span class=\"hljs-keyword\">static</span> defaultProps = {\n        <span class=\"hljs-attr\">scrollStep</span>: <span class=\"hljs-number\">50</span>,\n        <span class=\"hljs-attr\">delayMs</span>: <span class=\"hljs-number\">16</span>,\n    }\n\n    componentDidMount() {\n        <span class=\"hljs-keyword\">const</span> { target } = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">if</span> (target) {\n            <span class=\"hljs-keyword\">this</span>.content = <span class=\"hljs-built_in\">document</span>.querySelector(target);\n            <span class=\"hljs-keyword\">this</span>.content.addEventListener(<span class=\"hljs-string\">'scroll'</span>, <span class=\"hljs-keyword\">this</span>.onScroll);\n        }\n    }\n\n    onScroll = throttle(<span class=\"hljs-function\">(<span class=\"hljs-params\">e</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (e.target.scrollTop &gt;= <span class=\"hljs-number\">64</span>) {\n            <span class=\"hljs-keyword\">const</span> backtop = <span class=\"hljs-built_in\">document</span>.querySelector(<span class=\"hljs-string\">'.backtop'</span>);\n            <span class=\"hljs-keyword\">if</span> (backtop) {\n                content.classList.add(<span class=\"hljs-string\">'visible'</span>);\n            }\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.timeoutId) {\n                clearTimeout(<span class=\"hljs-keyword\">this</span>.timeoutId);\n            }\n            <span class=\"hljs-keyword\">this</span>.timeoutId = setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n                <span class=\"hljs-keyword\">if</span> (backtop) {\n                    backtop.classList.remove(<span class=\"hljs-string\">'visible'</span>);\n                }\n            }, <span class=\"hljs-number\">1500</span>);\n        } <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-keyword\">const</span> backtop = <span class=\"hljs-built_in\">document</span>.querySelector(<span class=\"hljs-string\">'.backtop'</span>);\n            <span class=\"hljs-keyword\">if</span> (backtop) {\n                backtop.classList.remove(<span class=\"hljs-string\">'visible'</span>);\n            }\n        }\n    }, <span class=\"hljs-number\">200</span>);\n\n    scrollStep = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.content.scrollTop === <span class=\"hljs-number\">0</span>) {\n            clearInterval(<span class=\"hljs-keyword\">this</span>.intervalId);\n        }\n        <span class=\"hljs-keyword\">this</span>.content.scrollTo(<span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">this</span>.content.scrollTop - <span class=\"hljs-keyword\">this</span>.props.scrollStep);\n    }\n\n    scrollToTop = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.content &amp;&amp; <span class=\"hljs-keyword\">this</span>.props.target) {\n            <span class=\"hljs-keyword\">this</span>.intervalId = setInterval(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n                <span class=\"hljs-keyword\">this</span>.scrollStep();\n            }, <span class=\"hljs-keyword\">this</span>.props.delayMs);\n        }\n    }\n\n    render() {\n        <span class=\"hljs-keyword\">return</span> (\n            <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"backtop\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">shape</span>=<span class=\"hljs-string\">\"circle\"</span> <span class=\"hljs-attr\">onClick</span>=<span class=\"hljs-string\">{this.scrollToTop}</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Icon</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"to-top\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">fontSize:</span> '<span class=\"hljs-attr\">1.25rem</span>' }} /&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        );\n    }\n}\n\nexport default BackTop;\n</span></code></pre>\n<p><strong>backtop.less</strong></p>\n<pre><code class=\"hljs less language-less\"><span class=\"hljs-selector-class\">.backtop</span> {\n    <span class=\"hljs-attribute\">width</span>: <span class=\"hljs-number\">40px</span>;\n    <span class=\"hljs-attribute\">height</span>: <span class=\"hljs-number\">40px</span>;\n    <span class=\"hljs-attribute\">position</span>: fixed;\n    <span class=\"hljs-attribute\">bottom</span>: <span class=\"hljs-number\">16px</span>;\n    <span class=\"hljs-attribute\">right</span>: <span class=\"hljs-number\">16px</span>;\n    <span class=\"hljs-attribute\">transition</span>: all <span class=\"hljs-number\">0.25s</span> ease-in;\n    <span class=\"hljs-attribute\">transform</span>: translateY(<span class=\"hljs-number\">10px</span>);\n    <span class=\"hljs-attribute\">opacity</span>: <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-selector-tag\">&amp;</span><span class=\"hljs-selector-class\">.visible</span> {\n        <span class=\"hljs-attribute\">opacity</span>: <span class=\"hljs-number\">1</span>;\n        <span class=\"hljs-attribute\">transform</span>: translateY(<span class=\"hljs-number\">0</span>);\n    }\n}\n</code></pre>\n<p><strong>BackTop이 적용된 화면이다.</strong></p>\n<p><img src=\"/static/images/css/blog-backtop-apply.gif\" alt=\"blog-backtop-apply\" /></p>","preview":"블로그 개발 중 스크롤이 되었을 때, 상위로 이동시키는 BackTop을 적용하기 위해 Ant.Design의 BackTop 컴포넌트를 사용하려고\n했다.\n\n하지만 Ant.Design의 BackTop 컴포넌트를 적용해보니 잘 안된다. 따라서 직접 BackTop 컴포넌트를 구현하기로 결정했다.\n\n>  Ant.Design 홈페이지에선 잘 동작한다.\n\n\n구현 코드는 ...","title":"BackTop 컴포넌트 만들기","author":"salgum1114","date":"2019-04-25 18:23","tags":"react, component, backtop","cover":"/static/images/covers/react.png","next":"/webpack/2019-04-22-uglifyjs-to-terser","prev":"/css/2019-04-28-scroll-behavior-smooth"},"/webpack/2019-04-22-uglifyjs-to-terser":{"path":"/webpack/2019-04-22-uglifyjs-to-terser","content":"<p>최근 <a href=\"https://github.com/salgum1114/react-design-editor\">React Design Editor</a>에 빌드 실패 관련 이슈가 올라왔다.</p>\n<p>내용인 즉슨, <code>production</code>으로 빌드시 UglifyJsPlugin에서 <code>Unexpected token: keyword «const»</code>라는 오류가 발생하여 계속해서 빌드에 실패한다는 것이다.</p>\n<p><a href=\"https://github.com/salgum1114/react-design-editor/issues/101\">[Bug] Not able to create build for the application #101</a></p>\n<pre><code class=\"hljs shell language-shell\"><span class=\"hljs-meta\">react-design-editor&gt;</span><span class=\"bash\"> npm run build</span>\n\nreact-design-editor@0.0.1 build D:\\Projects\\VirtualTutor\\vt-bkp\\react-design-editor\nwebpack -p --config webpack.prod.js\n\nclean-webpack-plugin: D:\\Projects\\VirtualTutor\\vt-bkp\\react-design-editor\\public\\js has been removed.\nHash: 6f635a8eff2d04c3d630\nVersion: webpack 4.30.0\nTime: 28583ms\nBuilt at: 04/19/2019 4:12:58 PM\n129 assets\nEntrypoint app = js/1.784bfc366d4d89f7.js js/app.359b7dab68a97eb6.js\n[17] (webpack)/buildin/harmony-module.js 573 bytes {1} [built]\n[45] ./node_modules/rc-animate/es/Animate.js + 3 modules 17.1 KiB {1} [built]\n| 4 modules\n[65] (webpack)/buildin/global.js 472 bytes {1} [built]\n[193] (webpack)/buildin/module.js 497 bytes {1} [built]\n[557] jsdom (ignored) 15 bytes {0} {1} [built]\n[558] jsdom/lib/jsdom/living/generated/utils (ignored) 15 bytes {0} {1} [built]\n[559] jsdom/lib/jsdom/utils (ignored) 15 bytes {0} {1} [built]\n[560] xmldom (ignored) 15 bytes {0} {1} [built]\n[765] ./src/containers/App.js 3.46 KiB {0} [built]\n[845] ./src/registerServiceWorker.js 6.72 KiB {0} [built]\n[846] ./src/i18n/index.js 53 bytes {0} [built]\n[1134] multi @babel/polyfill ./src/index.js 40 bytes {0} [built]\n[1310] ./src/index.js 1.72 KiB {0} [built]\n[1705] ./node_modules/antd/es/index.js + 303 modules 1.55 MiB {1} [built]\n| 304 modules\n[1708] multi react react-dom lodash fabric antd 76 bytes {1} [built]\n+ 1694 hidden modules\n\nERROR in js/1.784bfc366d4d89f7.js from UglifyJs\nUnexpected token: keyword «const» [./node_modules/@babel/polyfill/lib/index.js:6,0][js/1.784bfc366d4d89f7.js:185555,2]\nChild html-webpack-plugin for \"index.html\":\n1 asset\nEntrypoint undefined = index.html\n[2] (webpack)/buildin/global.js 472 bytes {0} [built]\n[3] (webpack)/buildin/module.js 497 bytes {0} [built]\n+ 2 hidden modules\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 2\nnpm ERR! react-design-editor@0.0.1 build: webpack -p --config webpack.prod.js\nnpm ERR! Exit status 2\nnpm ERR!\nnpm ERR! Failed at the react-design-editor@0.0.1 build script.\nnpm ERR! This is probably not a problem with npm. There is likely additional logging output above.\n\nnpm ERR! A complete log of this run can be found in:\nnpm ERR! C:\\Users\\manish.kumar.GATEWAYGROUP\\AppData\\Roaming\\npm-cache_logs\\2019-04-19T10_42_59_421Z-debug.log\n</code></pre>\n<p><code>babel polyfill</code>시 뭔가 충돌나는 것 같아 나와 비슷한 사례를 찾기 위해 구글링을 해본다.</p>\n<p>최근 이슈는 아니지만, 비슷한 사례가 많이 나온다.</p>\n<p><img src=\"/static/images/webpack/uglifyjs-const-issue-search.png\" alt=\"uglify-js-issue\" /></p>\n<p><a href=\"https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/362\">첫번째 이슈</a> 사이트에서 내용을 읽어보니, UglifyJsPlugin 버전 2부터 uglify-es가 버려졌으니 es6를 사용하고 싶으면 terser-webpack-plugin을 사용하라는 내용인것 같다.</p>\n<p>실제로 확인해보니 <a href=\"https://github.com/webpack-contrib/uglifyjs-webpack-plugin/releases/tag/v2.0.0\">uglifyjs-webpack-plugin 릴리즈 태그 v2.0 Change Log</a>에 내용이 있었다.</p>\n<p><img src=\"/static/images/webpack/uglifyjs-v2-change-log.png\" alt=\"uglify-js-2.0\" /></p>\n<blockquote>\n  <p>근데 terser가 무슨 뜻이지? naver 사전에서는 간결한 이라고 나온다.</p>\n</blockquote>\n<p>아무튼 <a href=\"https://github.com/salgum1114/react-design-editor/issues/101\">이슈</a> 해결을 위해 <code>uglifyjs-webpack-plugin</code>에서 <code>terser-webpack-plugin</code>으로 변경을 시도해본다.</p>\n<p>우선 변경을 위해 <a href=\"https://github.com/webpack-contrib/terser-webpack-plugin\">terser-webpack-plugin</a> github에서 사용방법을 찾아봤다.</p>\n<p>찾아보니 terser-webpack-plugin과 uglifyjs-webpack-plugin의 사용법이 크게 다르지 않았다.</p>\n<h3 id=\"uglifyjswebpackplugin\">기존 uglifyjs-webpack-plugin 옵션</h3>\n<pre><code class=\"hljs javascript language-javascript\">optimization: {\n    <span class=\"hljs-attr\">minimizer</span>: [\n        <span class=\"hljs-keyword\">new</span> UglifyJsPlugin({\n            <span class=\"hljs-attr\">cache</span>: <span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">parallel</span>: <span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">uglifyOptions</span>: {\n                <span class=\"hljs-attr\">warnings</span>: <span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">compress</span>: {\n                    <span class=\"hljs-attr\">warnings</span>: <span class=\"hljs-literal\">false</span>,\n                    <span class=\"hljs-attr\">unused</span>: <span class=\"hljs-literal\">true</span>,\n                },\n                <span class=\"hljs-attr\">ecma</span>: <span class=\"hljs-number\">6</span>,\n                <span class=\"hljs-attr\">mangle</span>: <span class=\"hljs-literal\">true</span>,\n                <span class=\"hljs-attr\">unused</span>: <span class=\"hljs-literal\">true</span>,\n            },\n            <span class=\"hljs-attr\">sourceMap</span>: <span class=\"hljs-literal\">true</span>,\n        }),\n    ],\n},\n</code></pre>\n<h3 id=\"terserwebpackplugin\">변경할 terser-webpack-plugin 옵션</h3>\n<pre><code class=\"hljs javascript language-javascript\">optimization: {\n    <span class=\"hljs-attr\">minimizer</span>: [\n        <span class=\"hljs-keyword\">new</span> TerserPlugin({\n            <span class=\"hljs-attr\">cache</span>: <span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">parallel</span>: <span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">terserOptions</span>: {\n                <span class=\"hljs-attr\">warnings</span>: <span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">compress</span>: {\n                    <span class=\"hljs-attr\">warnings</span>: <span class=\"hljs-literal\">false</span>,\n                    <span class=\"hljs-attr\">unused</span>: <span class=\"hljs-literal\">true</span>,\n                },\n                <span class=\"hljs-attr\">ecma</span>: <span class=\"hljs-number\">6</span>,\n                <span class=\"hljs-attr\">mangle</span>: <span class=\"hljs-literal\">true</span>,\n                <span class=\"hljs-attr\">unused</span>: <span class=\"hljs-literal\">true</span>,\n            },\n            <span class=\"hljs-attr\">sourceMap</span>: <span class=\"hljs-literal\">true</span>,\n        }),\n    ],\n},\n</code></pre>\n<p>기본적인 옵션은 같고, <code>uglifyOptions</code>에서 <code>terserOptions</code>으로 변경하면 되는 것 같다.</p>\n<p>이제 변경된 옵션으로 <a href=\"https://github.com/salgum1114/react-design-editor\">React Design Editor</a>를 빌드해본다.</p>\n<p><img src=\"/static/images/webpack/terser-webpack-plugin-build.png\" alt=\"terser-webpack-plugin-build\" /></p>\n<h4 id=\"\">성공한것 같다.</h4>\n<p><em>마지막으로 요청자에게 이슈를 해결했다는 코멘트를 달아주는것으로 마무리한다.</em></p>","preview":"최근 React Design Editor에 빌드 실패 관련 이슈가 올라왔다.\n\n내용인 즉슨, production으로 빌드시 UglifyJsPlugin에서 Unexpected token: keyword «const»라는\n오류가 발생하여 계속해서 빌드에 실패한다는 것이다.\n\n[Bug] Not able to create build for the applicati...","title":"UglifyJsPlugin const 오류 해결 방법","author":"salgum1114","date":"2019-04-22 21:05","tags":"webpack, uglifyjs, terser-webpack-plugin","cover":"/static/images/covers/webpack.png","next":null,"prev":"/reactjs/2019-04-25-back-top-component"}};

/***/ })

})
//# sourceMappingURL=3.5ac102526c56453de349.hot-update.js.map