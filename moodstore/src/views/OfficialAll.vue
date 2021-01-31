<template>
	<div class="container flex flex-column-start align-items-center">
		<div class="operate flex flex-row-between align-items-center my-2">
			<Search class="search" v-bind:type="$route.params.type" @search="search" @init="init"/>
		</div>
		<OfficialCard v-for="(item, index) in content" :key="index" v-bind:content="item"/>
		<Loading v-bind:status="content.length"/>
		<div class="flex flex-row-center align-items-center p-1" v-if="content.length !== 0" @click="load">
			<p class="text-grave">{{ info }}</p>
			<img src="../../public/icons/more.png" v-if="info === '加载更多内容'" class="icon">
		</div>
	</div>
</template>

<script>
	import Search from '../components/Search.vue'
	import OfficialCard from '../components/OfficialCard.vue'
	import Loading from '../components/Loading.vue'
	import { getMaterial } from '../api/Material.js'
	export default {
		name: 'OfficialAll',
		data () {
			return {
				content: [],
				copyContent: [],
				page: 1,
				info: '加载更多内容',
				// true 代表还有更多内容 false 代表没有更多内容
				flag: true
			}
		},
		created() {
			let _this = this
			getMaterial(this.$route.params.type, 0, 10).then(function (response) {
				_this.$data.content = response.data.item
				if (response.data.item.length < 10){
					_this.$data.info = '以上是全部内容'
					_this.$data.flag = false
				}
			})
		},
		components: {
			Search,
			OfficialCard,
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
				this.$data.copyContent.forEach((item) => {
					if (item.content.news_item[0].title.indexOf(content) !== -1) {
						tempContent.push(item)
					}
				})
				if (tempContent.length === 0) {
					alert('牛奶箱没有相关内容🧐')
				} else {
					this.$data.content = tempContent
					this.$data.info = '以上是全部内容'
				}
			},
			
			// 失去焦点时判断输入框是否为空 => 为空则重新恢复全部内容
			init (content) {
				this.$data.flag ? this.$data.info = '加载更多内容' : this.$data.info = '以上是全部内容'
				if (this.$data.copyContent.length !== 0 && content === ''){
					this.$data.content = this.$data.copyContent
					this.$data.copyContent = []
				}
			},
			
			load () {
				if (this.$data.info === '加载更多内容') {
					let _this = this
					_this.$data.page ++;
					getMaterial(this.$route.params.type, (_this.$data.page - 1) * 10, 10).then(function (response) {
						_this.$data.content = _this.$data.content.concat(response.data.item)
						if (response.data.item.length < 10){
							_this.$data.info = '以上是全部内容'
							_this.$data.flag = false
						}
					})
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
