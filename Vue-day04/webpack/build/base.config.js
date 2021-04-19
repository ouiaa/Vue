const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UgifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // JavaScript 执行入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下 path动态获取路径：第一个参数获取当前文件所在路径，将两个参数进行拼接成地址
    path: path.resolve(__dirname, '../dist'),
    // publicPath: './dist/'
  },
  module: {
    rules: [
      {
        // 正则表达式，匹配所有以.css结尾的文件
        test: /\.css$/i,
        // css-loader只负责将css文件加载，不负责解析
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，从右向左调用
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
          /*           { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" } */
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式.
              // 当加载的图片，大于limit时，需要使用file-loader模块进行加载.
              limit: 8100,
              // 加上[],让name是个变量名而不是固定的名字  .用来连接字符串
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        // 排除以下内容
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    // 起别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UgifyJsPlugin()
  ],
  // devServer: {
  //   contentBase: './dist',
  //   inline: true
  // }
};