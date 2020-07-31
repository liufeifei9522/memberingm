
<template>
	<div class='header'>
		<div class="title">{{title}}</div>
			<div class="btborder">
				<div @click="more">
					<img :src="imgs.more" alt=""/>
				</div>
				<p></p>
				<div @click="mao">
					<img :src="imgs.mao" alt=""/>
				</div>
			</div>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'headertop',
	props: {
		title:String,
		imgs:Object
	},
	data () {
		return {
		}
	},
	components: {},
	watch: {},
	computed: {},
	created () {
		console.log(this.imgs)
	},
	mounted () {},
	methods: {
			more(){
				console.log(2222)
			},
			mao(){
				console.log(111)
			}
		}
}
</script>
<style scoped lang="less">
@import '../../style/index.less';
.header{
	width: 100%;
	height: 44px;
	padding:0 15px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background:@headerg;
	color: @fontColorF;
	.title{
		font-size:18px;
		font-weight:500;
	}
}
.btborder{
	width: 70px;
	height: 23px;
	border:@borderW;
	border-radius: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.btborder p {
	border: 0.5px solid #ffffff;
	height: 10px;
	background-color: #fff;
}
.btborder div{
	display: flex;
	// justify-content: space-around;
	align-items: center;
}
.btborder div img{
	width: 20px;
	height: 20px;
}
</style>
