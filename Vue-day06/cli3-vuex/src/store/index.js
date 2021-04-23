import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'


// 1.安装插件
Vue.use(Vuex)

// state放外面，其他属性抽离到单独的文件
const state = {
  // 存储状态
  counter: 100,
  students: [
    { id: 100, name: 'john', age: 23 },
    { id: 101, name: 'haier', age: 15 },
    { id: 102, name: 'lili', age: 33 },
    { id: 103, name: 'lisa', age: 24 },
    { id: 104, name: 'kiki', age: 13 },
  ],
  info: {
    name: 'kko',
    age: 11
  }
}
// 2.创建对象 3.导出store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})
