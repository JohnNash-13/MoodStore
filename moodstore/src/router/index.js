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
		meta: {
			keepAlive: true //设置页面是否需要使用缓存
		},
		component: () => import('../views/Official.vue')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
