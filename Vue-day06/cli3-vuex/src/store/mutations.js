import { INCREMENT, DECREMENT } from "./mutation-types";
export default {
  // 定义方法
  // 1.mutations基本用法
  // 默认有一个参数state，即上面的state
  [INCREMENT](state) {
    state.counter++
  },
  [DECREMENT](state) {
    state.counter--
  },
  // 2.传递一个参数
  // 1 mutation普通的提交封装，传递的参数count是字符串
  /* incrementCount(state, count) {
    state.counter += count
  }, */
  // 2 mutation特殊的提交封装，传递的参数count是对象
  incrementCount(state, payload) {
    console.log(payload);
    state.counter += payload.count
  },
  // 3.传递多个参数，用对象传递
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    state.info.name = 'why'  // 响应式
    // 添加属性
    // state.info['sex'] = '男' // 做不到响应式
    // Vue.set(state.info, 'sex', '男') // 响应式
    // 删除属性
    // delete state.info.age   // 做不到响应式
    // Vue.delete(state.info, 'age') // 响应式

    // 不要在mutation里进行异步操作,devtools无法监听状态
    /*  setTimeout(() => {
       console.log('异步操作');
       state.info.name = 'why'
     }, 1000); */
  }
}