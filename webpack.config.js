const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(?:icon|gif|png|jpg|jpeg)$/i,
                type: "assets/image",
                use: 'file-loader',
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            Utilities: path.resolve(__dirname, 'src/utils/'),
        }
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ title: "MerhabaApp", template: path.resolve(__dirname, './src/index.html') })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
};
