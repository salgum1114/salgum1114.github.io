const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');

const routes = require('./_metadata/routes.json');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
}

module.exports = withTypescript(withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    exportPathMap: () => routes,
}));