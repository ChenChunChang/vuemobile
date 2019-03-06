<template>
	<div>
		<view-box>
			<panel :list="list" :footer="footer"></panel>
		</view-box>
	</div>
</template>
<script>
	import { ViewBox,Panel } from 'vux'
	export default{
		components: {
	   		ViewBox,
	   		Panel,
		},
		data(){
			return{
				list: [{
			        src: '../../../static/image/logo.png',
			        title: '标题一',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
			        url: '/home/detail'
			      }, {
			        src: '../../../static/image/logo.png',
			        title: '标题二',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
			    }],
			    footer: {
			        title: '没有更多了',
			    }
			}
		}
	}
</script>
<style lang="less" scoped></style>
<style>
	.weui-cell_link {
	    color: #000!important;
	    font-size: 14px;
	    text-align: center;
	}
</style>