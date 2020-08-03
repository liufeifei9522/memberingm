
<template>
  <div class="tabbNav">
    <div class="wrap">
      <ul>
        <li v-for="(item,index) in navList">
          <img :src="item.image" alt />
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "tabbNav",
  props: {
    navList: Array,
  },
  data() {
    return {};
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="less">
@import "../../style/index.less";
.tabbNav {
  width: 100%;
  height: 102px;
  padding: 0 15px;
  box-sizing: border-box;
  position: absolute;
  bottom: -80px;
  z-index: 1000;
}
.wrap {
  width: 100%;
  height: 102px;
  background: @fontColorF;
  border-radius: 5px;
}
.wrap ul {
  padding: 18px 28px 12px 28px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
}
.wrap ul li {
  text-align: center;
  img {
    width: 45px;
    height: 45px;
  }
  p {
    font-size: 12px;
  }
}
</style>
