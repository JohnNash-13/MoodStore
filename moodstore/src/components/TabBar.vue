<template>
	<ul class="width-100 flex flex-row-between fixed fixed-botton bg-white border-top">
		<!-- 假设三个tab -->
		<li class="col p-1" v-for="(item, index) in tab.tabList" :key="index">
			<router-link class="flex flex-column-start align-items-center" :to="item.router" v-bind:class="tab.color">
				<!-- 选中状态 -->
				<img v-show="item.active" class="icon" v-bind:src="item.iconSelected"/>
				<!-- 未选中状态 -->
				<img v-show="!item.active" class="icon" v-bind:src="item.icon"/>
				<p>{{ item.content }}</p>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'TabBar',
		props: ['tab'],
		setup(props) {
			return {
				props
			}
		},
		data () {
			return {
				history: 0
			}
		},
		methods: {
		},
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style lang="scss" scoped="scoped">
</style>
