<template>
  <div class="wrap">
			<!-- 头部组件 -->
			<headertop :title="title" :imgs='imgs'></headertop>
  </div>
</template>
<script>
import headertop from '@/components/headerTop/headertop'
import maoImg from '../../assets/img/home/mao.png'
import moreImg from '../../assets/img/home/more.png'
export default {
		name:'Home',
		components: {
			headertop
		},
		data () {
			return {
				title:'首页',
				imgs:{
					more:moreImg,
					mao:maoImg
				}
			}
		},
		methods: {
		}
}
</script>
<style scoped lang="less">
// .header{
// 	background:@headerg;
// 	color: @fontColorF;
// }
// .btborder{
// 	width: 70px;
// 	height: 23px;
// 	border:@borderW;
// 	border-radius: 50px;
// 	display: flex;
// 	justify-content: space-around;
// 	align-items: center;
// }
// .btborder p {
// 	border: 0.5px solid #ffffff;
// 	height: 10px;
// 	background-color: #fff;
// }
// .btborder div{
// 	display: flex;
// 	// justify-content: space-around;
// 	align-items: center;
// }
// .btborder div img{
// 	width: 20px;
// 	height: 20px;
// }
</style>
