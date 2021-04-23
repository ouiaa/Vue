export default {
  // store划分的模块,也有自己的state/mutations/getters/actions，甚至可以再划分子模块，用户与跟store类似
  state: {
    name: 'zhangsan',
  },
  mutations: {
    // 这里的state是当前模块里的state，不是根里面的state
    updateName(state, payload) {
      state.name = payload.name
    }
  },
  getters: {
    // 这里的state是当前模块里的state，不是根里面的state
    fullName(state) {
      return state.name + '11'
    },
    // 第二个参数
    fullName2(state, getters) {
      return getters.fullName + '22'
    },
    // 第三个参数 根状态对象
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    /* aUpdateName(context) {
      setTimeout(() => {
        // 这里提交的是子模块内部mutations里面的方法
        context.commit('updateName', {
          name: 'wangwu'
        })
      }, 1000);
    } */

    // 对象解构context方式书写
    // aUpdateName({commit,state,rootState})
  }
}