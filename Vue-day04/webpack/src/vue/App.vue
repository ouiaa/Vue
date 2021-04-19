<template>
  <!-- 模板 -->
  <div>
    <h3 class="title">{{message}}</h3>
    <button>按钮</button>
    <p>{{name}}</p>
  </div>
</template>

<script>
  // js
  export default {
    name: "App",
    data() {
      return {
        message: 'hello webpack',
        name: 'template'
      }
    }
  }
</script>

<style scoped>
  /* 样式 */
  .title {
    color: #333
  }
</style>