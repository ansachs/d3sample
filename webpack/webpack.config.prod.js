const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|__tests__)/,
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            }
        ]
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimize: true
    },
    performance: { hints: false }
};

module.exports = merge(base, config);