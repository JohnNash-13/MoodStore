<template>
	<!-- 图文模块卡片样式 -->
	<a class="view flex flex-row-center text-grave m-1" v-bind:href="content.content.news_item[0].url" v-if="$route.params.type === 'news' || $route.params.type === undefined">
		<div class="card bg-white flex flex-column-start rounded shadow-default">
			<div class="card-header flex flex-row-between align-items-center p-1">
				<p class="time text-normal">{{ dateFormat(content.update_time) }}</p>
				<p class="author">{{ content.content.news_item[0].author }}</p>
			</div>
			<div class="card-body flex flex-row-between align-items-center px-1">
				<h1 class="title text-dark text-normal">{{ content.content.news_item[0].title }}</h1>
				<div class="pic">
					<img v-bind:src="urlFormat(content.content.news_item[0].thumb_url)" class="cover rounded"/>
				</div>
			</div>
		</div>
	</a>
	<!-- 视频模块卡片样式 -->
	<a class="view flex flex-row-center text-grave m-1" href="javascript:void(0)" v-if="$route.params.type === 'video'" @click="queryVideo(content.media_id)">
		<p>{{ content.name }}</p>
	</a>
</template>


<script>
	import { queryVideo } from '../api/Material.js'
	export default {
		name: 'OfficialCard',
		props: ['content'],
		created() {
		},
		methods: {
			dateFormat (time) {
				let date = new Date(time * 1000)
				return date.getFullYear() + '-' +(date.getMonth()+1) + '-' + date.getDate()
			},
			
			urlFormat (url) {
				return url.replace('http://', 'https://')
			},
			
			// 查询对应video类型的素材的源文件
			queryVideo (mediaId) {
				queryVideo(mediaId).then(function (response) {
					window.location.href = response.data.down_url
				})
			}
		},
		data() {
			return {
			}
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style lang="scss" scoped>
	.view{
		width: 100%;
		.card{
			width: 94%;
			height: 90px;
			.card-header{
				height: 20%;
			}
			.card-body{
				height: 80%;
			}
			.card-footer{
				height: 20%;
			}
		}
	}
</style>
