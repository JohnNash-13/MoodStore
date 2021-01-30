<template>
	<a class="view flex flex-row-center text-grave" v-bind:href="content.content.news_item[0].url">
		<div class="card bg-white flex flex-column-start rounded shadow-default">
			<div class="card-header flex flex-row-between align-items-center p-1">
				<p class="time text-normal">{{ dateFormat(content.update_time) }}</p>
				<div class="operate">
					<img src="../../public/icons/operate.png" class="icon"/>
				</div>
			</div>
			<div class="card-body flex flex-row-between align-items-center px-1">
				<h1 class="title text-dark text-normal">{{ content.content.news_item[0].title }}</h1>
				<div class="pic">
					<img v-bind:src="content.content.news_item[0].thumb_url" class="cover"/>
				</div>
			</div>
			
		</div>
	</a>
</template>


<script>
	export default {
		name: 'Card',
		props: ['content'],
		created() {
		},
		methods: {
			dateFormat(time){
				let date = new Date(time * 1000)
				return date.getFullYear() + '-' +(date.getMonth()+1) + '-' + date.getDate()
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
