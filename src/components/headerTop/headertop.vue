
<template>
	<div class='header'>
		<div class="title">
			<slot name="title"></slot>
		</div>
		<div class="bt">
			<slot name="bt"></slot>
		</div>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'headertop',
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
.header{
	width: 100%;
	height: 44px;
	padding:0 15px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.title{
		font-size:18px;
		font-weight:500;
	}
}
</style>
