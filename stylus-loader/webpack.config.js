const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        publicPath: "./dist/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react"]
                    }
                }
            },
            {
                test: /\.json$/,
                use: "json-loader"
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000000,
                        name: "img/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000000,
                        name: "fonts/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000000,
                        name: "videos/[name].[hash].[ext]"
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
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"]
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"]
                    fallback: "style-loader",
                    use: [
                        "css-loader", 
                        {
                            loader: "stylus-loader",
                            options :{
                                use:[
                                    require("nib"),
                                    require("rupture")
                                ],
                                import:[
                                    "~nib/lib/nib/index.styl",
                                    "~rupture/rupture/index.styl",
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css")
    ]
}