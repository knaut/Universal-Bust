'use strict'

require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './app/index'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    // wrap our .env file into globals we can use in webpack-built code
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$|.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
