<template>
  <div id="tab-bar">
    <!-- TabBar只管自己，里面item的不管 -->
    <!-- 组件内只放自己的标签和样式 -->
    <!-- 放一个插槽给item -->
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "TabBar",
};
</script>
<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  height: 49px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>