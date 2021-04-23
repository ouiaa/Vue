<template>
  <div id="app">
    <h1>modules模块内容</h1>
    <button @click="asyncClick">异步操作</button>
    <!-- 使用模块内的内容 -->
    <ul>
      <!-- 需要增加一个模块名a -->
      <li>{{ $store.state.a.name }}</li>
      <!-- 模块内getters方法的使用，不关心定义在子模块还是大模块内，直接使用 -->
      <li>{{ $store.getters.fullName }}</li>
      <li>{{ $store.getters.fullName2 }}</li>
      <li>{{ $store.getters.fullName3 }}</li>
    </ul>
    <button @click="updateName">修改名字</button>
    <h3>app组件内容</h3>
    <h4>{{ $store.state.info }}</h4>
    <button @click="updateInfo">修改信息</button>
    <p>{{ $store.state.counter }}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h3>HelloWorld组件内容</h3>
    <hello-world></hello-world>
    <p>{{ more20 }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { INCREMENT, DECREMENT } from "./store/mutation-types";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "我是App组件",
    };
  },
  computed: {
    ...mapGetters(["more20", "more20num"]),
  },
  methods: {
    add() {
      // 需要通过commit提交
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit(DECREMENT);
    },
    // 2.mutation传递一个参数
    addCount(count) {
      // 1 mutation普通的提交封装，传递的参数是字符串
      // this.$store.commit("incrementCount", count);
      // 2 mutation特殊的提交封装，传递的参数是对象
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    // 3.mutation传递多个参数，通过对象传递
    addStudent() {
      let stu = { id: "111", name: "lulo", age: 29 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo");
      // 1.actions的基本使用
      // this.$store.dispatch("aUpdateInfo",);
      // 2.actions传递参数
      // 1)传递一个参数
      // this.$store.dispatch("aUpdateInfo", "传递参数");
      // 2)传递多个参数，即用对象传递
      /*  this.$store.dispatch("aUpdateInfo", {
        message: "携带的参数",
        age: 18,
      }); */
      // 3.组合Action
      // store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise
      this.$store.dispatch("aUpdateInfo", "携带的信息").then((res) => {
        console.log("action已结束");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", {
        name: "lisi",
      });
    },
    asyncClick() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>
<style>
</style>
