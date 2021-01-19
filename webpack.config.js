const webpack = require('webpack');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  // output: {
  //   path: path.resolve(__dirname, '../server/dist'),
  //   filename: './dist/bundle.js'
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../server/dist'),
    // path: path.join(__dirname, '../dist'),
    publicPath: '/',
    // libraryTarget: 'commonjs2'
},

  // externals:['react','react-dom','prop-types','tinper-bee'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist',
    port: '3005',
    //热更新
    disableHostCheck: true,
    hot: true,
  },
  optimization: {
    // runtimeChunk: {
    //   name: 'manifest'
    // },
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // }),
      // new OptimizeCSSAssetsPlugin({})  // use OptimizeCSSAssetsPlugin
    ], // [new UglifyJsPlugin({...})] 
  },
  plugins: [
    // new CopyPlugin([
    //   { from: 'src/index.html' }
    // ]),
    new HtmlWebpackPlugin({ // 打包输出HTML
      title: 'Hello World app',
      // minify: { // 压缩HTML文件
      //   removeComments: true, // 移除HTML中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true// 压缩内联css
      // },
      filename: 'index.html',
      template: 'index.html'
    }),
    // new HtmlWebPackPlugin({
    //   template: path.join(__dirname, '../index.html')
    // }),
    new MiniCssExtractPlugin(),
    // new CleanWebpackPlugin()
  ]
};

module.exports = config;