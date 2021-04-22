<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/* 将样式文件导入到App.vue而不是index.js,使用@import方法导入 */
@import "./assets/css/base.css";
</style>
