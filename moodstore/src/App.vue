<template>
	<TabBar v-bind:tab="tab"/>
	<router-view></router-view>
</template>

<script>
	import TabBar from './components/TabBar.vue'
	export default {
		name: 'App',
		components: { TabBar },
		watch: {
			$route(to, from) {
				this.$data.tab.tabList.forEach((item, index) => {
					if (to.href === item.router) {
						this.$data.tab.tabList[index].active = !this.$data.tab.tabList[index].active
					}
					if (from.href === item.router) {
						this.$data.tab.tabList[index].active = !this.$data.tab.tabList[index].active
					}
				})
			}
		},
		data () {
			return {
				tab: {
					color: 'text-grave',
					colorSelected: 'text-blue',
					tabList: [
						{
							icon: '/icons/index.png',
							iconSelected: '/icons/index-selected.png',
							content: '首页',
							router: '/',
							active: false
						},
						{
							icon: '/icons/official.png',
							iconSelected: '/icons/official-selected.png',
							content: '牛奶箱',
							router: '/official',
							active: false
						},
						{
							icon: '/icons/user.png',
							iconSelected: '/icons/user-selected.png',
							content: '个人',
							router: '/home',
							active: false
						}
					]
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">

</style>
