<template>
	<div>
		<swiper :list="demolist" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
		<cell title="" value=""></cell>
		<cell title="精品书籍" value="more" is-link></cell>
		<cell title="" value=""></cell>
		<div class="bookContent">
			<div class="bookItem" v-for="item in bookList" :key="item.id">
				<div class="bookImg">
					<img :src="item.src" alt="">
				</div>
				<span class="bookName">{{item.lable}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import { Swiper,Cell } from 'vux'
	export default{
		components: {
		    Swiper,
		    Cell,
		},
		data(){
			return{
				demolist:[{
				  url: 'javascript:',
				  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
				  title: '送你一朵fua'
				}, {
				  url: 'javascript:',
				  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
				  title: '送你一辆车'
				}, {
				  url: 'javascript:',
				  // img: 'https://static.vux.li/demo/5.jpg', // 404
				  title: '送你一次旅行',
				  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
				}],
				bookList:[{
					lable:'this is all books',
					id:1,
					src:'../../../static/image/logo.png'
				},{
					lable:'this is all books',
					id:2,
					src:'../../../static/image/logo.png'
				},{
					lable:'this is all books',
					id:3,
					src:'../../../static/image/logo.png'
				}]
			}
		},
		methods:{
			onItemClick(){},
		}
	}
</script>
<style lang="less" scoped>
	@itemWidth:50%;
	.bookContent{
		width:100%;
		height:auto;
		box-sizing:border-box;
		display:flex;
		flex-wrap: wrap;
		padding-bottom:60px;
		.bookItem{
			width:(@itemWidth);
			padding:10px;
			box-sizing:border-box;
			.bookImg{
				width:100%;
				height:150px;
				img{
					width:100%;
					height:100%;
				}
			}
			.bookName{
				display:block;
				text-align:center;
			}
		}
	}
	
</style>