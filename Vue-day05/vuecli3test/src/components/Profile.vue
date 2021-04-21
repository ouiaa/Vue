<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>{{ $route.query }}</p>
    <p>{{ $route.query.name }}</p>
    <p>{{ $route.query.age }}</p>
  </div>
</template>


<script>
export default {
  name: "Profile",
};
</script>
<style>
</style>