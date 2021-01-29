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
