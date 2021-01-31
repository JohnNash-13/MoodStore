<template>
	<div class="loading flex flex-column-center align-items-center" v-if="status === 0">
		<img src="../../public/icons/loading.png" class="icon"/>
		<p class="text-grave p-1">加载中</p>
	</div>
</template>

<script>
	export default {
		name: 'Loading',
		props: ['status']
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style lang="scss" scoped="scoped">
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	.loading{
		width: 100px;
		height: 100px;
		.icon{
			animation:rotate 1s infinite;
			animation-timing-function: linear;
		}
	}
</style>
