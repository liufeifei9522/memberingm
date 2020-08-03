
<template>
	<div class='searchFixed'>
		<img src="../../assets/img/home/searchIcon.png" alt="">
		<input type="text" v-model="nam" placeholder="INGYM单馆周卡体验券" name="name">
		<button>搜索</button>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'searchFixed',
	props: {
		nam:String
	},
	data () {
		return {
		}
	},
	components: {},
	watch: {},
	computed: {},
	created () {},
	mounted () {},
	methods: {},
}
</script>
<style scoped lang="less">
.searchFixed{
	width: 100%;
	height:44px;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 8px rgba(0,0,0,0.3);
	border-radius:22px;
	padding: 0 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	img{
		width: 16px;
		height: 16px;
	}
	input{
		height: 100%;
		padding: 0 5px;
		box-sizing: border-box;
		flex: 1;
		font-size:14px ;
	}
	button{
		width: 34px;
		font-size: 17px;
	}
}
</style>
