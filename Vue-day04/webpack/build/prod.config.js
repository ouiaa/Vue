const UgifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerger = require('webpack-merge');
const baseConfig = require('./base.config');

// 使用webpackMerger插件将base和prod配置文件合并
module.exports = webpackMerger(baseConfig, {
  plugins: [
    new UgifyJsPlugin()
  ],
})
