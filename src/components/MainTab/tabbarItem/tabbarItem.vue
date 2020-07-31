
<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isSelected">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon_selected"></slot>
    </div>
    <div :style="selectedStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "tabbaritem",
  props: {
    path: String,
    selectedColor: {
      type: String,
      default: "#eb2309",
    },
    color: {
      type: String,
      default: "#181818",
    },
  },
  data() {
    return {};
  },
  computed: {
    isSelected() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    selectedStyle() {
      return this.isSelected ? { color: this.selectedColor } : { color: this.color };
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped lang="less">
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.selected {
  color: #eb2309;
}
</style>

