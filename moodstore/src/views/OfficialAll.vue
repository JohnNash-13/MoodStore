<template>
	<div class="container flex flex-column-start align-items-center">
		<div class="operate flex flex-row-between align-items-center my-2">
			<Search class="search" v-bind:type="$route.params.type"/>
		</div>
		<Card class="my-1" v-for="(item, index) in content" :key="index" v-bind:content="item"/>
		<Loading v-bind:status="content.length"/>
	</div>
</template>

<script>
	import Search from '../components/Search.vue'
	import Card from '../components/Card.vue'
	import Loading from '../components/Loading.vue'
	import { getMaterial } from '../api/Material.js'
	import { getAccessToken } from '../api/AccessToken.js'
	export default {
		name: 'OfficialAll',
		data () {
			return {
				content: []
			}
		},
		created() {
			let _this = this
			getAccessToken().then(function (response) {
				if (response.data.access_token !== undefined){
					getMaterial(_this.$route.params.type, 0, 10, response.data.access_token).then(function (response) {
						_this.$data.content = response.data.item
					})
				}
			})
		},
		components: {
			Search,
			Card,
			Loading
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style lang="scss" scoped="scoped">
	.container{
		padding-bottom: 58px;
		.operate{
			width: 92%;
			.search{
				width: 100%;
			}
		}
	}
</style>
