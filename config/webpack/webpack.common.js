const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: 'client',
    vendor: [
      'history',
      'immutable',
      'path',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'prop-types',
      'redux',
      'redux-immutable',
      'redux-saga',
      'react-apollo',
      'purecss',
      'classnames',
      'universal-cookie'
    ]
  },
  resolve: {
    modules: ['node_modules', 'src', 'services', 'components'],
    extensions: [
      '.js',
      '.jsx',
      '.graphql'
    ]
  },
  output: {
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'graphql-tag/loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['commons', 'vendor', 'manifest'],
      minChunks: 2
    })
  ]
}
