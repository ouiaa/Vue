// 项目入口文件
// 1.使用es6的模块化规范
import Vue from "vue";
import { name, age, sex } from "./js/info"
console.log(name);
console.log(age);
console.log(sex);

// 2.通过 CommonJS 规范导入 CSS 模块 依赖css文件
require("./css/normal.css")

// 3.通过 CommonJS 规范导入 less 模块 依赖less文件
require("./css/special.less")
// 在DOM内写内容，ln帮助自动换行
document.writeln('<h2>hello</h2>')

// 4.使用Vue进行开发
// import Vue from 'vue'
// 不需要导入Vue,直接使用即可

// 5.将子组件App抽离到其他文件中,导入该文件
// import App from './vue/App'

// 6.导入组件三分离后的vue文件
import App from './vue/App.vue'


// 实际开发中用不到app,因此可以不用给Vue对象实例赋值
new Vue({
  el: '#app',
  template: `<App></App>`,
  data: {
  },
  components: {
    App
  }
})