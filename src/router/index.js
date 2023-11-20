import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import QuizView from '../views/QuizView.vue'
import QuizesView from '../views/QuizesView.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home Page',
			component: QuizesView,
		},
		{
			path: '/home',
			redirect: '/',
		},
		{
			path: '/quiz/:id',
			name: 'quiz',
			component: QuizView,
		},
		{
			path: '/:catchAll(.*)*',
			name: 'Page Not Found',
			component: PageNotFound,
		},
	],
})

export default router
