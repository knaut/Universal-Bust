'use strict'

require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: {
    server: './server'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '../'
  },
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    // wrap our .env file into globals we can use in webpack-built code
    new Dotenv(),
    new CleanWebpackPlugin(),
    // https://github.com/felixge/node-gently/issues/22
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
