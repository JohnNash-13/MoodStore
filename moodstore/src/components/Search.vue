<template>
	<div class="search flex flex-row-around align-items-center rounded shadow-default" v-bind:class="bgColor">
		<input v-model="content" class="input text-grave text-large" placeholder="搜索" v-on:keyup.enter="search" @blur="init">
		<div class="icon-group flex flex-row-center align-items-center">
			<img src="../../public/icons/search.png" class="icon" @click="search">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Search',
		props: ['type'],
		data () {
			return {
				bgColor: '',
				content: ''
			}
		},
		created() {
			if (this.$props.type === 'news') {
				this.$data.bgColor = 'bg-pink'
			} else if (this.$props.type === 'video') {
				this.$data.bgColor = 'bg-blue'
			} else if (this.$props.type === 'image') {
				this.$data.bgColor = 'bg-purple'
			} else if (this.$props.type === 'voice') {
				this.$data.bgColor = 'bg-yellow'
			}
		},
		methods: {
			search () {
				this.$emit('search', this.$data.content)
			},
			
			init () {
				this.$emit('init', this.$data.content)
			}
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style lang="scss" scoped="scoped">
	.search{
		input{
			width: 85%;
			height: 36px;
		}
		.icon-group{
			width: 10%;
		}
	}
</style>
