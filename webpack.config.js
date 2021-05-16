const path = require('path');
const url = require('url');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = "development";
let target = 'web';
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = 'browserlistsrc';
}
module.exports = {
  mode: mode,
  target: target,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "images/[hash][ext][query]" // create images foler in dist
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset" 
        // 1. if image is using in files. create images foler in dist and append all images inside. 
        // 2. All images which are using in background css will merge with main.js
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
           loader: MiniCssExtractPlugin.loader,
           options: { publicPath: " "}
          },
          "css-loader", // add css in html
          "postcss-loader", // handle css fallback if older browser doesn't support
          "sass-loader" // compile scss to css
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // complie ES6/7 into ES5
        }
      }
    ] 
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack 5 Enviroment Set up + React ',
      append: true,
      prependExternals: true,
      jsExtensions: ['.js'],
      cssExtensions: ['.css'],
      useHash: false,
      tags: [],
      links: [],
      scripts: [],
      metas: undefined,
      inject: 'body'
    }) // copy src/index.html as template and paste in dist with append css and js
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3000
  }
}