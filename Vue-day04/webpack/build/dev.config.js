const webpackMerger = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerger(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
