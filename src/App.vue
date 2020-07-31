<template>
  <div id="app">
    <router-view/>
		<mainTab></mainTab>
  </div>
</template>
<script>
	import MainTab from './components/MainTab/MainTab'
	export default {
		components: {
			MainTab
		}
	}
</script>
<style lang="less">

</style>
