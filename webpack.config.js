/*
 * @Author: hujianbo
 * @LastEditors: Hujianbo
 */
/*
 * @Author: hujianbo
 * @LastEditors: hujianbo
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html
const {VueLoaderPlugin} = require("vue-loader"); //必须导入此插件,它负责克隆您定义的任何其他规则，并将它们应用于.vue文件中的相应语言块
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //分离css
module.exports = {
  entry: {
    main:'./src/index.js',
  },
  output: {
    filename: '[name].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/ //不查找 'node_modules'目录
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss/,
        use: ["vue-style-loader","css-loader","sass-loader"],
      },
      {
        test: /\.md$/,
        use: [
          { loader:'html-loader',options: {
            esModule: true
          }},
          {loader:'markdown-loader'}
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html", //模板文件
      filename: "index.html", //文件名
      hash: true //避免缓存
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    fallback: {
        "fs": false
    },
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  }
};