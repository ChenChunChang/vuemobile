<template>
	<div class="content">
		<X-header :title="headerTitle" :right-options="{showMore:true}" @on-click-more="clickMore"></X-header>
		<router-view/>
		<tabbar>
			<tabbar-item @on-item-click="itemClick('首页')">
				<i slot="icon" class="iconfont icon-shouye"></i>
        		<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item selected @on-item-click="itemClick('书架')">
		        <i slot="icon" class="iconfont icon-icon_shujianor"></i>
		        <span slot="label">书架</span>
	      </tabbar-item>
			<tabbar-item  @on-item-click="itemClick('我的')">
		        <i slot="icon" class="iconfont icon-wode"></i>
		        <span slot="label">我的</span>
	      </tabbar-item>
		</tabbar>
	</div>
</template>
<script>
	import { XHeader,Tabbar, TabbarItem,Icon } from 'vux'
	export default{
		components: {
    		XHeader,
    		Tabbar, 
    		TabbarItem,
    		Icon
  		},
		data(){
			return{
				headerTitle:'咿呀呦',
				rightOptions:{
					showMore:true
				},
			}
		},
		methods:{
			clickMore(){
				alert(111111)
			},
			itemchange(index){
				// alert(111111,index)
			},
			itemClick(title){
				this.headerTitle = title
				if(title == '首页'){
					this.$router.push({path:'/home'})
				}else if (title == '书架') {
					this.$router.push({path:'/bookcase'})
				}else{
					this.$router.push({path:'/me'})
				}
			}
		},
		mounted(){
			this.$router.push({path:'/bookCase'})
		}
	}
</script>
<style scoped lang="less">
	.content{
		width:100%;
		height:100%;
	}
</style>