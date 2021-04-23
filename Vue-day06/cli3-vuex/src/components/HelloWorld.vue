<template>
  <div>
    <h2>HelloWorld</h2>
    <p>{{ $store.getters.more20 }}</p>
    <p>{{ $store.getters.more20num }}</p>
    <p>{{ $store.getters.moreAge(25) }}</p>
    <ul>
      <li>{{ count }}</li>
      <li>{{ countAdd }}</li>
      <li>{{ countFive }}</li>
      <!-- <li>{{ info }}</li> -->
    </ul>
    <button @click="incrementCount({ count: 8 })">点击</button>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "auue",
    };
  },
  computed: {
    // mapState的使用 注意需要写...，对象展开符的扩展
    // 1.普通引入store里state 以数组形式
    // ...mapState(["counter", "info"]),
    ...mapState({
      // 2.普通引入store里state 以对象形式，可以进行属性重命名，也可以操作返回值
      count: (state) => state.counter,
      countAdd: (state) => state.counter + 5,
      // 3.操作mapState函数的返回值,注意如果操作中使用了该组件内的数据如this.name，则不能使用箭头函数，this的指向问题
      countFive: function (state) {
        return this.name + state.counter + "five";
      },
    }),
  },
  methods: {
    ...mapMutations(["updateInfo", "incrementCount"]),
  },
};
</script>
<style>
</style>