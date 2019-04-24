const prod = require('./webpack/webpack.config.prod');
const dev  = require('./webpack/webpack.config.dev');

const isProduction = process.env.NODE_ENV === "production";

const config = isProduction ? prod : dev;

module.exports = config;
