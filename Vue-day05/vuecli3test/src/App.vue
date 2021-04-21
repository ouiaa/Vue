<template>
  <div id="app">
    <!-- router-link/view是两个组件，最终渲染成a标签 -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <button @click="aboutClick">关于</button> -->
    <!-- 注意user前后都有/ -->
    <!-- <router-link :to="'/user/' + userID">用户</router-link> -->
    <!-- <router-link :to="{ path: '/profile', query: { name: 'auue', age: 18 } }" -->
    <!-- >档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- view决定渲染出来的Home/About组件放在什么地方 -->
    <!-- 相当于渲染出来组件占位的东西 -->
    <!-- 使用keep-alive组件，保留组件的声明周期，切换页面（组件）时不让组件频繁被销毁 -->

    <!-- Profile即组件的name，多个组件用,分隔，注意不要随便添加空格 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
    <!-- <button>button</button> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userID: "zhangsan",
    };
  },
  methods: {
    aboutClick() {
      // 通过代码的方式修改路由 vue-router
      // $router是我们在index.js里创建的路由对象
      // push=>pushState
      // replace=>replaceState
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
    userClick() {
      // console.log(this.$router);
      // console.log(this.$route);
      // 代码实现params参数传递
      this.$router.push("/user/" + this.userID);
    },
    profileClick() {
      // 代码实现query参数传递
      // 对象中使用query，query参数也是对象形式
      this.$router.push({
        path: "/profile",
        query: {
          name: "auue",
          age: 18,
        },
      });
    },
  },
};
</script>

<style>
</style>
