
<template>
  <div class="swiperScroll banner">
    <div class="imgItem">
      <img :src="imgList[currentIndex]" alt />
    </div>
    <div class="page" v-if="this.imgList.length > 1">
      <ul>
        <li
          v-for="(item,index) in imgList"
          @click="gotoPage(index)"
					class="yuan"
          :class="{'current':currentIndex == index}"
        ></li>
      </ul>
    </div>
		<slot></slot>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "swiperScroll",
  props: {
    imgList: Array,
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  components: {},
  watch: {},
  computed: {
		prevIndex() {
    if(this.currentIndex == 0) {
      return this.imgList.length - 1;
    }else{
      return this.currentIndex - 1;
    }
  },
  //下一张
  nextIndex() {
    if(this.currentIndex == this.imgList.length - 1) {
      return 0;
    }else {
      return this.currentIndex + 1;
    }
  }
	},
  created() {
		console.log(this.imgList)
		this.runInv()
	},
  mounted() {},
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 2000);
    },
  },
};
</script>
<style scoped lang="less">
.swiperScroll{
	position: relative;
}
.imgItem {
  img {
    width: 100%;
    height: 355px;
  }
}
ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.banner .page {
  position: absolute;
  right: 0;
  bottom: 40px;
	width: 100%;
	display: flex;
	justify-content: space-around;
}
.banner .page ul {
	display: flex;
	align-items: center;
}
.yuan{
	width: 6px;
	height: 6px;
	border-radius: 50%;
	margin: 0 5px;
	background-color: #000000;
}
.current {
	width:25px ;
	background-color: #fff;
	border-radius: 25px;
}
</style>
