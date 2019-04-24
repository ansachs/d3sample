const WriteFilePlugin = require("write-file-webpack-plugin");
const merge           = require('webpack-merge');
const path            = require("path");
const base            = require("./webpack.config.base");

const hotPort = 8080;

const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    /\.test\.tsx$/
                ],
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)(\?.+)?(#.+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ],
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: path.resolve("./dist"),
        port: hotPort,
        quiet: false,
        noInfo: false,
        historyApiFallback: true,
        hot: true,
        stats: {
            colors: true
        },
        host: '0.0.0.0',
        disableHostCheck: true
    },
    plugins: [
        new WriteFilePlugin({test: /\.html/})
    ]
};

module.exports = merge(base, config);