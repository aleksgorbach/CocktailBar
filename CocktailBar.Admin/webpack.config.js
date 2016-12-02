const webpack = require('webpack');

module.exports = {
    entry: {
        ingredients: "./src/ingredients/index",
        recipes: "./src/recipes/index"
    },
    output: {
        path: __dirname + "/wwwroot/js/",
        filename: "[name].js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}