<template>
	<div class="container flex flex-column-start align-items-center">
		<div class="type-group bg-white my-2 rounded flex flex-column-around">
			<div class="type-row flex flex-row-between align-items-center">
				<router-link to="/official/news" class="type bg-pink rounded flex flex-row-start align-items-center shadow-default">
					<img src="../../public/icons/news.png" class="icon m-2"/>
					<p class="text-large text-grave">图文</p>
				</router-link>
				<router-link to="/official/video" class="type bg-blue rounded flex flex-row-start align-items-center shadow-default">
					<img src="../../public/icons/video.png" class="icon m-2"/>
					<p class="text-large text-grave">视频</p>
				</router-link>
			</div>
			<div class="type-row flex flex-row-between align-items-center">
				<router-link to="/official/image" class="type bg-purple rounded flex flex-row-start align-items-center shadow-default">
					<img src="../../public/icons/image.png" class="icon m-2"/>
					<p class="text-large text-grave">图片</p>
				</router-link>
				<router-link to="/official/voice" class="type bg-yellow rounded flex flex-row-start align-items-center shadow-default">
					<img src="../../public/icons/voice.png" class="icon m-2"/>
					<p class="text-large text-grave">语音</p>
				</router-link>
			</div>
		</div>
		<div class="card-operate flex flex-row-between align-items-center">
			<p class="text-dark text-normal">最新图文</p>
			<router-link to="/official/news" class="text-grave flex flex-row-between align-items-center">查看全部</router-link>
		</div>
		<OfficialCard v-for="(item, index) in content" :key="index" v-bind:content="item"/>
		<Loading v-bind:status="content.length"/>
	</div>
</template>

<script>
	import OfficialCard from '../components/OfficialCard.vue'
	import Loading from '../components/Loading.vue'
	import { getMaterial } from '../api/Material.js'
	export default {
		name: 'Official',
		components: {
			OfficialCard,
			Loading
		},
		data () {
			return {
				content: []
			}
		},
		created () {
			let _this = this
			getMaterial('news', 0, 6).then(function (response) {
				_this.$data.content = response.data.item
			})
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style scoped="scoped" lang="scss">
	.container{
		padding-bottom: 58px;
		.type-group{
			width: 94%;
			height: 160px;
			.type-row{
				width: 100%;
				height: 42%;
				.type{
					width: 48%;
					height: 100%;
				}
			}
		}
		.card-operate{
			width: 92%;
		}
	}
</style>