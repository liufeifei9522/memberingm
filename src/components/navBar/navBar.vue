
<template>
	<div class='navBar'>
		<div class="navBarItem">
			<div class="positionWrap">
				<img class="positioningIcon" src="../../assets/img/home/positioningIcon.png" alt="">
				<p class="positioningName">苏州市第二工人文化馆</p>
			</div>
			<div class="navRt">
				<p>查看当前场馆</p>
				<img src="../../assets/img/home/navIcon.png" alt="">
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'navBar',
	props: {},
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
@import '../../style/index.less';
.navBar{
	position: relative;
}
.navBarItem{
	padding: @paddlr;
	background: @headerg;
	color: @fontColorF;
	box-sizing: @boxZing;
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: space-between;
	img{
		margin-top: 2px;
	}
	.positionWrap{
		height: 22px;
		display: flex;
		align-items: center;
		justify-content:start;
		.positioningIcon{
			width: 12px;
			height: 15px;
			margin-right: 5px;
		}
		.positioningName{
			width:176px;
			font-size:16px;
			font-weight:500;
			line-height:22px;
		}
	}
	.navRt{
		height: 22px;
		display:flex;
		align-items: center;
		justify-content: end;
		img{
			margin-left: 5px;
			width:5px;
			height: 9px;
		}
	}
};
</style>
