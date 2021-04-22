<template>
  <div>
    <!-- 使用tab-bar组件 -->
    <tab-bar>
      <!-- 使用tab-bar-item组件 -->
      <!-- 动态绑定item选中时的颜色 -->
      <tab-bar-item path="/home">
        <!-- <tab-bar-item path="/home" activeColor="blue"> -->
        <!-- 给对应具名插槽添加内容 -->
        <template #item-icon><span class="item-icon"></span></template>
        <template #item-text><span>首页</span></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <!-- <tab-bar-item path="/category" activeColor="green"> -->
        <template #item-icon><span class="item-icon"></span></template>
        <template #item-text><span>分类</span></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <!-- <tab-bar-item path="/cart" activeColor="pink"> -->
        <template #item-icon><span class="item-icon"></span></template>
        <template #item-text><span>购物车</span></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-icon><span class="item-icon"></span></template>
        <template #item-text><span>我的</span></template>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>


<script>
import TabBar from "components/tabber/TabBar";
import TabBarItem from "components/tabber/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
</style>