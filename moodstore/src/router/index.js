import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('../views/Index.vue')
	},
	{
		path: '/official',
		name: 'Official',
		// 目前页面缓存会导致不同类型content 传递给OfficialCard时返回值结构不一致的问题
		// meta: {
		// 	keepAlive: true //设置页面是否需要使用缓存
		// },
		component: () => import('../views/Official.vue')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/official/:type',
		name: 'OfficialAll',
		component: () => import('../views/OfficialAll.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
