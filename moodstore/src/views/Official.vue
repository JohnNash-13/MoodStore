<template>
	<div class="container flex flex-column-start align-items-center bg-default">
		<div class="type-group bg-white m-2 rounded flex flex-column-around">
			<div class="type-row flex flex-row-around align-items-center">
				<router-link to="/" class="type bg-pink rounded flex flex-row-start align-items-center">
					<img src="../../public/icons/news.png" class="icon m-2"/>
					<p class="text-large text-grave">图文</p>
				</router-link>
				<router-link to="/" class="type bg-blue rounded flex flex-row-start align-items-center">
					<img src="../../public/icons/video.png" class="icon m-2"/>
					<p class="text-large text-grave">视频</p>
				</router-link>
			</div>
			<div class="type-row flex flex-row-around align-items-center">
				<router-link to="/" class="type bg-purple rounded flex flex-row-start align-items-center">
					<img src="../../public/icons/image.png" class="icon m-2"/>
					<p class="text-large text-grave">图片</p>
				</router-link>
				<router-link to="/" class="type bg-yellow rounded flex flex-row-start align-items-center">
					<img src="../../public/icons/voice.png" class="icon m-2"/>
					<p class="text-large text-grave">语音</p>
				</router-link>
			</div>
		</div>
		<div class="card-operate flex flex-row-between align-items-center">
			<p class="text-dark text-normal">最新图文</p>
			<router-link to="/" class="text-grave flex flex-row-between align-items-center">查看全部</router-link>
		</div>
		<Card class="m-1" v-for="(item, index) in content" :key="index" v-bind:content="item"/>
		<div class="loading flex flex-column-center align-items-center" v-if="content.length === 0">
			<img src="../../public/icons/loading.png" class="icon" />
			<p class="text-grave p-1">加载中</p>
		</div>
	</div>
</template>

<script>
	import Card from '../components/Card.vue'
	import { getMaterial } from '../api/Material.js'
	import { getAccessToken } from '../api/AccessToken.js'
	export default {
		name: 'Official',
		components: {
			Card
		},
		data () {
			return {
				content: []
			}
		},
		created () {
			let _this = this
			console.log(1)
			getAccessToken().then(function (response) {
				if (response.data.access_token !== undefined){
					getMaterial('news', 1, 6, response.data.access_token).then(function (response) {
						_this.$data.content = response.data.item
					})
				}
			})
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style scoped="scoped" lang="scss">
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	.container{
		padding-bottom: 58px;
		.type-group{
			width: 94%;
			height: 160px;
			.type-row{
				width: 100%;
				height: 42%;
				.type{
					width: 46%;
					height: 100%;
				}
			}
		}
		.card-operate{
			width: 92%;
		}
		.loading{
			width: 100px;
			height: 100px;
			.icon{
				animation: rotate 1s infinite;
				animation-timing-function: linear;
			}
		}
	}
</style>