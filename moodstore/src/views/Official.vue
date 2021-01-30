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
		<Card class="m-2"/>
		<Card class="m-2"/>
	</div>
</template>

<script>
	import Card from '../components/Card.vue'
	export default {
		name: 'Official',
		components: {
			Card
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style scoped="scoped" lang="scss">
	.container{
		padding-bottom: 48px;
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
	}
</style>