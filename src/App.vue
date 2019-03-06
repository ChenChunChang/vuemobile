<template>
  <div id="app" style="width:100%;height:100%">
    <router-view style="width:100%;height:100%"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html, body {
	  height: 100%;
	  width: 100%;
	  overflow-x: hidden;
	}
</style>
