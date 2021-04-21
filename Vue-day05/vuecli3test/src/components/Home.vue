<template>
  <div>
    <h2>我是首页</h2>
    <p>内容</p>
    <!-- 注意home前的/，表示当前路径 -->
    <router-link to="/home/news">新闻 </router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news",
    };
  },
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destoryed");
  },
  activated() {
    // 进入path路径
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    //has access to `this` component instance}
    // 记录前一个页面的路径
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>
