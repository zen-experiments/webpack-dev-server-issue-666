const PATH = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = '.';

const SRC_DIR = PATH.resolve(__dirname, ROOT, 'src/client/');
const INDEX_JS_FILE = PATH.resolve(SRC_DIR, 'index.js');
const INDEX_HTML_FILE = PATH.resolve(SRC_DIR, 'index.html');

const PUBLIC_DIR = PATH.resolve(__dirname, ROOT, 'dist/public/');
const PUBLIC_PATH = '/';

const CACHE_DIR = PATH.resolve(__dirname, ROOT, '.cache/');

const config = {
    entry: {
        app: INDEX_JS_FILE
    },
    output: {
        filename: '[name].js',
        path: PUBLIC_DIR,
        publicPath: PUBLIC_PATH
    },
    devServer: {
        contentBase: PUBLIC_DIR,
        publicPath: PUBLIC_PATH,
        watchOptions: {
            ignored: /node_modules/
        },
        inline: true,
        port: 3000,
        proxy: {
            '/': 'http://localhost:4000',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            inject: true,
            template: INDEX_HTML_FILE,
        })
    ]
};

module.exports = config;
