<template>
  <div>
    <h4>用户界面</h4>
    <h3>{{ userID }}</h3>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userID() {
      // $router拿到活跃的路由对象，即当前使用的路由对象，来获取当前用户名字
      // params 参数
      return this.$route.params.userID; // userID是在index.js中自定义的名字
    },
  },
};
</script>

<style>
</style>
