---
title: UglifyJsPlugin const 오류 해결 방법
author: salgum1114
date: 2019-04-22 21:05
tags: webpack, uglifyjs, terser-webpack-plugin
cover: /static/images/covers/webpack.png
---

최근 [React Design Editor][react-design-editor]에 빌드 실패 관련 이슈가 올라왔다.

내용인 즉슨, `production`으로 빌드시 UglifyJsPlugin에서 `Unexpected token: keyword «const»`라는 오류가 발생하여 계속해서 빌드에 실패한다는 것이다.

[[Bug] Not able to create build for the application #101][issue-101]

```shell
react-design-editor> npm run build

react-design-editor@0.0.1 build D:\Projects\VirtualTutor\vt-bkp\react-design-editor
webpack -p --config webpack.prod.js

clean-webpack-plugin: D:\Projects\VirtualTutor\vt-bkp\react-design-editor\public\js has been removed.
Hash: 6f635a8eff2d04c3d630
Version: webpack 4.30.0
Time: 28583ms
Built at: 04/19/2019 4:12:58 PM
129 assets
Entrypoint app = js/1.784bfc366d4d89f7.js js/app.359b7dab68a97eb6.js
[17] (webpack)/buildin/harmony-module.js 573 bytes {1} [built]
[45] ./node_modules/rc-animate/es/Animate.js + 3 modules 17.1 KiB {1} [built]
| 4 modules
[65] (webpack)/buildin/global.js 472 bytes {1} [built]
[193] (webpack)/buildin/module.js 497 bytes {1} [built]
[557] jsdom (ignored) 15 bytes {0} {1} [built]
[558] jsdom/lib/jsdom/living/generated/utils (ignored) 15 bytes {0} {1} [built]
[559] jsdom/lib/jsdom/utils (ignored) 15 bytes {0} {1} [built]
[560] xmldom (ignored) 15 bytes {0} {1} [built]
[765] ./src/containers/App.js 3.46 KiB {0} [built]
[845] ./src/registerServiceWorker.js 6.72 KiB {0} [built]
[846] ./src/i18n/index.js 53 bytes {0} [built]
[1134] multi @babel/polyfill ./src/index.js 40 bytes {0} [built]
[1310] ./src/index.js 1.72 KiB {0} [built]
[1705] ./node_modules/antd/es/index.js + 303 modules 1.55 MiB {1} [built]
| 304 modules
[1708] multi react react-dom lodash fabric antd 76 bytes {1} [built]
+ 1694 hidden modules

ERROR in js/1.784bfc366d4d89f7.js from UglifyJs
Unexpected token: keyword «const» [./node_modules/@babel/polyfill/lib/index.js:6,0][js/1.784bfc366d4d89f7.js:185555,2]
Child html-webpack-plugin for "index.html":
1 asset
Entrypoint undefined = index.html
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
+ 2 hidden modules
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! react-design-editor@0.0.1 build: webpack -p --config webpack.prod.js
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the react-design-editor@0.0.1 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR! C:\Users\manish.kumar.GATEWAYGROUP\AppData\Roaming\npm-cache_logs\2019-04-19T10_42_59_421Z-debug.log
```

`babel polyfill`시 뭔가 충돌나는 것 같아 나와 비슷한 사례를 찾기 위해 구글링을 해본다.

최근 이슈는 아니지만, 비슷한 사례가 많이 나온다.

![uglify-js-issue](/static/images/webpack/uglifyjs-const-issue-search.png)

[첫번째 이슈][uglify-js-issue] 사이트에서 내용을 읽어보니, UglifyJsPlugin 버전 2부터 uglify-es가 버려졌으니 es6를 사용하고 싶으면 terser-webpack-plugin을 사용하라는 내용인것 같다.

실제로 확인해보니 [uglifyjs-webpack-plugin 릴리즈 태그 v2.0 Change Log][uglify-js-2.0]에 내용이 있었다.

![uglify-js-2.0](/static/images/webpack/uglifyjs-v2-change-log.png)

> 근데 terser가 무슨 뜻이지? naver 사전에서는 간결한 이라고 나온다.

아무튼 [이슈][issue-101] 해결을 위해 `uglifyjs-webpack-plugin`에서 `terser-webpack-plugin`으로 변경을 시도해본다.

우선 변경을 위해 [terser-webpack-plugin][terser-webpack-plugin] github에서 사용방법을 찾아봤다.

찾아보니 terser-webpack-plugin과 uglifyjs-webpack-plugin의 사용법이 크게 다르지 않았다.

### 기존 uglifyjs-webpack-plugin 옵션
```javascript
optimization: {
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                warnings: false,
                compress: {
                    warnings: false,
                    unused: true,
                },
                ecma: 6,
                mangle: true,
                unused: true,
            },
            sourceMap: true,
        }),
    ],
},
```

### 변경할 terser-webpack-plugin 옵션
```javascript
optimization: {
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
            terserOptions: {
                warnings: false,
                compress: {
                    warnings: false,
                    unused: true,
                },
                ecma: 6,
                mangle: true,
                unused: true,
            },
            sourceMap: true,
        }),
    ],
},
```

기본적인 옵션은 같고, `uglifyOptions`에서 `terserOptions`으로 변경하면 되는 것 같다.

이제 변경된 옵션으로 [React Design Editor][react-design-editor]를 빌드해본다.

![terser-webpack-plugin-build](/static/images/webpack/terser-webpack-plugin-build.png)

#### 성공한것 같다.

*마지막으로 요청자에게 이슈를 해결했다는 코멘트를 달아주는것으로 마무리한다.*

[terser-webpack-plugin]: https://github.com/webpack-contrib/terser-webpack-plugin
[uglify-js-2.0]: https://github.com/webpack-contrib/uglifyjs-webpack-plugin/releases/tag/v2.0.0
[uglify-js-issue]: https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/362
[react-design-editor]: https://github.com/salgum1114/react-design-editor
[issue-101]: https://github.com/salgum1114/react-design-editor/issues/101