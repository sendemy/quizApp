import { createRouter, createWebHistory } from 'vue-router'
import CreateQuizView from '../views/CreateQuizView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ProfileView from '../views/ProfileView.vue'
import QuizView from '../views/QuizView.vue'
import QuizesView from '../views/QuizesView.vue'

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
			name: 'Quiz',
			component: QuizView,
		},
		{
			path: '/profile',
			name: 'Profile',
			component: ProfileView,
		},
		{
			path: '/create-quiz',
			name: 'Create Quiz',
			component: CreateQuizView,
		},
		{
			path: '/:catchAll(.*)*',
			name: 'Page Not Found',
			component: PageNotFound,
		},
	],
})

export default router
