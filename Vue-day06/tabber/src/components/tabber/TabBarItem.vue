<template>
  <!-- 监听组件 -->
  <!-- 动态绑定样式，可以自定义选中item时的颜色 -->
  <div
    class="tab-bar-item"
    @click="itemClick"
    :style="activeStyle"
    :color="actColor"
  >
    <!-- Item只放两个插槽，一个图片，一个文字 -->
    <!-- <div :class="{ active: isActive }"><slot name="item-icon"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div> -->

    <div><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>


<script>
export default {
  name: "TabBarItem",
  props: {
    // 父传子，传入路径，定义路径为String类型
    path: String,
    // 父传子，传入item选中时的颜色，默认为红色
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
      actColor: "green",
    };
  },
  computed: {
    // 通过计算属性判断是否处于选中状态
    // 判断添加/移除类
    // 当前路径等于活跃路由路径，则说明处于当前item处于点击状态，给当前item添加类
    isActive() {
      // 可以使用===或者es6的includes方法
      return this.$route.path.includes(this.path);
      // return this.$route.path === this.path;
    },
    // 计算属性动态绑定item选中时颜色的样式
    activeStyle() {
      // 仍需要通过isActive计算当前item是否选中
      // return this.isActive ? { color: this.activeColor } : {};
      return this.isActive ? { color: this.actColor } : {};
    },
  },
  methods: {
    itemClick() {
      // 不同item的路径不一样，通过父传子获得相应路径
      // 解决双击报错问题：添加一个判断，当前路径等于跳转后的路径，则不进行跳转
      if (this.$route.path != this.path) {
        this.$router.replace(this.path);
      }
    },
  },
};
</script>
<style>
.tab-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

@font-face {
  font-family: "icomoon";
  src: url("~assets/fonts/icomoon.eot?715sek");
  src: url("~assets/fonts/icomoon.eot?715sek#iefix") format("embedded-opentype"),
    url("~assets/fonts/icomoon.ttf?715sek") format("truetype"),
    url("~assets/fonts/icomoon.woff?715sek") format("woff"),
    url("~assets/fonts/icomoon.svg?715sek#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

span {
  font-family: "icomoon";
}

.item-icon {
  margin-top: 5px;
  width: 30px;
  height: 30px;
}

div:nth-child(n + 1) {
  flex: 1;
}

/* .active {
  flex: 1;
  color: red;
} */
</style>