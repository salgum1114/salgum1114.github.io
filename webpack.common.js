const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader?cacheDirectory',
                include: path.resolve(__dirname, 'src'),
                options: {
                    presets: [
                        ['@babel/preset-env', { modules: false }],
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-syntax-dynamic-import',
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        '@babel/plugin-syntax-async-generators',
                        ['@babel/plugin-proposal-class-properties', { loose: false }],
                        '@babel/plugin-proposal-object-rest-spread',
                        'react-hot-loader/babel',
                        'dynamic-import-webpack',
                        ['import', { libraryName: 'antd', style: true }],
                    ],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    publicPath: './',
                    name: 'fonts/[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title: 'Dev.log',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    priority: 20,
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },

            },
        },
        noEmitOnErrors: true,
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    node: {
        net: 'empty',
        fs: 'empty',
        tls: 'empty',
    },
};
