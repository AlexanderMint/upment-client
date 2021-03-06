const Merge = require('webpack-merge')
const webpack = require('webpack')
const CommonConfig = require('./webpack.common.js')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = Merge(CommonConfig, {
  output: {
    filename: 'javascripts/[name].js',
    chunkFilename: 'javascripts/core/[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'stylesheets/[name].css'
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
})
