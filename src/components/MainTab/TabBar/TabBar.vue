
<template>
	<div class='TabBar'>
		<slot></slot>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'tabbar',
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
.TabBar{
	display: flex;
	background-color: #ffffff;
	// box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>

