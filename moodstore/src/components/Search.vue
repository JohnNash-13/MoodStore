<template>
	<div class="search flex flex-row-around align-items-center rounded" v-bind:class="bgColor">
		<input type="text" class="input text-grave text-large shadow-default" placeholder="搜索">
		<div class="icon-group flex flex-row-center align-items-center">
			<img src="../../public/icons/search.png" class="icon">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Search',
		props: ['type'],
		data () {
			return {
				bgColor: ''
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
