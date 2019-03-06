<template>
	<div>
		<div class="personal">
			<div class="profilePhoto">
				<img :src="profilePhotoSrc" alt="头像" style="width:100%;height:100%">
			</div>
			<div class="personName">{{name}}</div>
			<div class="underwrite">
				<div class="undertitle">{{underwrite.title}}</div>
				<div class="undertext">{{underwrite.text}}</div>
			</div>
		</div>
		<group>
	      <cell v-for="item in personList" :key="item.key" :title="item.title" :is-link="item.link" @click.native="onClick"></cell>
	    </group>
	</div>
</template>
<script>
	import { Group,Cell } from 'vux'
	export default{
		components: {
		    Group,
		    Cell,
		},
		data(){
			return{
				profilePhotoSrc:'../../../static/image/logo.png',
				name:'ya yatou',
				underwrite:{
					title:'个性签名',
					text:'yayaya',
					key:1
				},
				personList:[{
					title:'个人信息',
					link:true,
					key:2,
				},{
					title:'我的书架',
					link:true,
					key:3,
				},{
					title:'收货地址',
					link:true,
					key:4,
				},{
					title:'设置',
					link:false,
					key:5,
				}]
			}
		},
		methods:{
			onClick(){
				alert(111111)
			},
		}
	}
</script>
<style lang="less" scoped>
	.personal{
		width:100%;
		height:200px;
		padding-top:15px;
		box-sizing:border-box;
		background-image:url('../../../static/image/logo.png');
		background-color:#efefef;
		background-repeat:no-repeat;
		background-size:100% 100%;/*cover*/
		text-align:center;
		.profilePhoto{
			width:80px;
			height:80px;
			border-radius:50%;
			background:#fefefe;
			margin:0 auto;
			overflow:hidden;
		}
		.personName{
			margin-top:10px;
			font-size:16px;
		}
		.underwrite{
			margin-top:10px;
			.undertitle{
				font-weight:bold;
			}
			.undertext{
				font-size:14px;
			}
		}
	}
</style>