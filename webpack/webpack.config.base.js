const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: ["./src/index"],
    output: {
        publicPath: "/",
        path: path.resolve("./dist"),
        filename: "[name].js",
        sourceMapFilename: "[file].map"
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                use: ['source-map-loader']
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: ['source-map-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            minify: {
                removeComments: true
            }
        })
    ]
};

module.exports = config;