
<template>
		<TabBar>
    <tabbarItem path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
      <img slot="item-icon_selected" src="@/assets/img/tabbar/homeselect.png" alt="">
      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/shopping">
      <img slot="item-icon" src="@/assets/img/tabbar/shopping.png" alt="">
      <img slot="item-icon_selected" src="@/assets/img/tabbar/shoppingselect.png" alt="">
      <div slot="item-text">商城</div>
    </tabbarItem>
    <tabbarItem path="/wecht">
      <img slot="item-icon" src="@/assets/img/tabbar/wecht.png" alt="">
      <img slot="item-icon_selected" src="@/assets/img/tabbar/wechtselect.png" alt="">
      <div slot="item-text">入场码</div>
    </tabbarItem>
    <tabbarItem path="/car">
      <img slot="item-icon" src="@/assets/img/tabbar/car.png" alt="">
      <img slot="item-icon_selected" src="@/assets/img/tabbar/carselect.png" alt="">
      <div slot="item-text">购物车</div>
    </tabbarItem>
		<tabbarItem path="/user">
      <img slot="item-icon" src="@/assets/img/tabbar/user.png" alt="">
      <img slot="item-icon_selected" src="@/assets/img/tabbar/userselect.png" alt="">
      <div slot="item-text">我的</div>
    </tabbarItem>
  </TabBar>
</template>
<script>
import TabBar from './TabBar/TabBar'
import tabbarItem from './tabbarItem/tabbarItem'
export default {
	name: 'MainTab',
	components: {TabBar,tabbarItem},
	props: {},
	data () {
		return {
		}
	},
	watch: {},
	computed: {},
	created () {},
	mounted () {},
	methods: {},
}
</script>
<style scoped lang="less">

</style>
