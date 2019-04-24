module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require("postcss-node-sass"),
        require("postcss-image-inliner")({
            assetPaths: ["../assets/"],
            b64Svg: true,
            maxFileSize: 0,
        }),
    ]
};
