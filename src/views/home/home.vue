<template>
  <div class="wrap">
			<!-- 头部组件 -->
			<headertop :title="title" :imgs='imgs'></headertop>
			<navBar>
				<div class="searchFixedWrap">
					<searchFixed></searchFixed>
				</div>
			</navBar>
			<swiperScroll :imgList="imgList">
				<tabbNav :navList="navList"></tabbNav>
			</swiperScroll>
  </div>
</template>
<script>
import headertop from '@/components/headerTop/headertop'
import navBar from '@/components/navBar/navBar'
import searchFixed from '@/components/searchFixed/searchFixed'
import swiperScroll from '../../components/swiperScroll/swiperScroll'
import tabbNav from '../../components/tabbNav/tabbNav'
import maoImg from '../../assets/img/home/mao.png'
import moreImg from '../../assets/img/home/more.png'
import banner from '../../assets/img/home/banner1.png'
import tabbarnav1 from '../../assets/img/home/tabbarnav1.png'
import tabbarnav2 from '../../assets/img/home/tabbarnav2.png'
import tabbarnav3 from '../../assets/img/home/tabbarnav3.png'
import tabbarnav4 from '../../assets/img/home/tabbarnav4.png'

export default {
		name:'Home',
		components: {
			headertop,navBar,searchFixed,swiperScroll,tabbNav
		},
		data () {
			return {
				title:'首页',
				imgs:{
					more:moreImg,
					mao:maoImg
				},
				imgList:[banner,"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
				navList:[
					{
						image:tabbarnav1,
						title:'精品团课'
					},
					{
						image:tabbarnav2,
						title:'优惠券'
					},
					{
						image:tabbarnav3,
						title:'积分中心'
					},
					{
						image:tabbarnav4,
						title:'扫码上课'
					}
				]
			}
		},
		methods: {
		}
}
</script>
<style scoped lang="less">
.searchFixedWrap{
	position: absolute;
	bottom: -22px;
	width: 100%;
	padding: 0 15px;
	box-sizing: border-box;
	height: 44px;
	z-index: 100;
}

</style>
