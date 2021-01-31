<template>
	<div class="container flex flex-column-start align-items-center">
		<div class="operate flex flex-row-between align-items-center my-2">
			<Search class="search" v-bind:type="$route.params.type" @search="search" @init="init"/>
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
	export default {
		name: 'OfficialAll',
		data () {
			return {
				content: [],
				copyContent: []
			}
		},
		created() {
			let _this = this
			getMaterial('news', 0, 6).then(function (response) {
				_this.$data.content = response.data.item
			})
		},
		components: {
			Search,
			Card,
			Loading
		},
		methods: {
			// 正常执行搜索功能触发的js
			search (content) {
				// 临时保存content用于内容复原
				if (this.$data.copyContent.length === 0) {
					this.$data.copyContent = this.$data.content
				}
				// 临时保存防止循环出错
				var tempContent = []
				this.$data.content.forEach((item) => {
					if (item.content.news_item[0].title.indexOf(content) !== -1) {
						tempContent.push(item)
					}
				})
				tempContent.length === 0 ? alert('牛奶箱没有相关内容🧐') : this.$data.content = tempContent
			},
			
			// 失去焦点时判断输入框是否为空 => 为空则重新恢复全部内容
			init (content) {
				if (this.$data.copyContent.length !== 0 && content === ''){
					this.$data.content = this.$data.copyContent
					this.$data.copyContent = []
				}
			}
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
