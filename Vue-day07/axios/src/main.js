import Vue from 'vue'
import App from './App.vue'
import { request1, request2 } from './network/request'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// 使用封装的axios实例对象
request1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


// axios返回的结果是一个Promise对象，因此可以使用then/catch方法
/* axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  // 未设置method请求方式，默认是get请求
  // method: 'post'
}).then(res => {
  console.log(res);
}) */

// get请求有参数的url
// 方法1：直接写在url后面 ?参数之间用&分隔
/* axios.get('http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1').then(res => {
  console.log(res);
}) */

// 方法2:在config配置的params参数中
/* axios.get('http://152.136.185.210:7878/api/m5/home/data', {
  // 专门针对get请求的参数拼接
  // 对象形式存放参数
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
}) */

// 全局配置
// axios.defaults.timeout = 5000

// axios并发请求，使用all方法
/* axios.all([axios({
  url: 'http://152.136.185.210:7878/api/m5/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}), axios({
  url: 'http://123.207.32.32:8000/home/multidata'
})]).then(res => {
  console.log(res);
}) */

// 创建对应的axios实例
/* const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
}) */