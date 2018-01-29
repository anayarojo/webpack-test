const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000000,
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"]
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css")
    ]
}