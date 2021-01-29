<template>
	<div class="container flex flex-column-start align-items-center bg-default">
		<Card/>
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
		
	}
</style>