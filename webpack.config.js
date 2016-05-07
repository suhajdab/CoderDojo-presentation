var HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin("style.css")
    ]
};
