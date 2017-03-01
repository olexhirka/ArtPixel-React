var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: [
    './src/index.jsx',
    'whatwg-fetch'
  ],
  plugins: [
    new CopyWebpackPlugin([
        { from: 'src/assets/favicon.ico', to: 'favicon.ico' },
        { from: 'src/assets/apple-touch-icon.png', to: 'apple-touch-icon.png' },
        { from: 'src/assets/regular-icon.png', to: 'regular-icon.png' }
    ]),
    new ExtractTextPlugin({
      filename: "css/main.css"
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
  ],
  target: "web",
  stats: false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test:   /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?v=[\d.]+)?(\?[a-z0-9#-]+)?$/,
        loader: 'url-loader?limit=100000&name=./css/[hash].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/deploy',
    publicPath: '/',
    filename: 'bundle.js'
  }
};

module.exports = config;
