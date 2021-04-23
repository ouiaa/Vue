export default {
  // 1.getters的基本使用
  // 类似计算属性,会默认传入state参数
  // 获取学生年龄20以上的
  more20(state) {
    return state.students.filter(s => s.age > 20)
  },
  // 2.getters作为参数
  // 第二个参数默认为getters
  more20num(state, getters) {
    return getters.more20.length
  },
  // 3.希望getters传递参数，必须通过返回一个函数（有参数）实现
  moreAge(state) {
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}