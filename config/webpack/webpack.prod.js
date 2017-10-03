const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssNano = require('cssnano')

module.exports = Merge(CommonConfig, {
  output: {
    filename: 'javascripts/[chunkhash].js',
    chunkFilename: 'javascripts/core/[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'stylesheets/[chunkhash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: CssNano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new UglifyJSPlugin({
      beautify: false,
      comments: false
    })
  ]
})
