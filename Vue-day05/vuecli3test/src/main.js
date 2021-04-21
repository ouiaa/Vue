import Vue from 'vue'
import App from './App.vue'
// 可以省略index，这样默认引入文件夹下的index文件
import router from './router'
// 是否显示提示信息，开发阶段一般为false，发布时为true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// .$mount('#app') mount与之前的el:'#app'本质一样，意思一样
