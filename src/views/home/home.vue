<template>
  <div class="wrap">
		<div class="header">
			<headertop>
				<div slot="title">首页</div>
				<div slot="bt">
					<div class="btborder"></div>
				</div>
			</headertop>
		</div>
      
  </div>
</template>
<script>
import headertop from '@/components/headerTop/headertop'
export default {
		name:'Home',
		components: {
			headertop
		}
}
</script>
<style scoped lang="less">
@import '../../style/index.less';
.header{
	background:@headerg;
	color: @fontColorF;
}
.btborder{
	width: 70px;
	height: 23px;
	border:@borderW;
	border-radius: 50px;
}
</style>
