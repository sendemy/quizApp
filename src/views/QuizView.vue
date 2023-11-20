<script setup>
import { useRoute } from 'vue-router'
import Card from '../components/Card.vue'
import quizes from '../data/quizes.json'
import PageNotFound from './PageNotFound.vue'

const route = useRoute()

const quizId = parseInt(route.params.id)
const quiz = quizes.find((q) => q.id === quizId)
</script>

<template>
	<div class="quiz-wrapper">
		<Card v-if="quiz" :quiz="quiz" />
		<PageNotFound v-else :text-message="`Quiz Not Found`" />
	</div>
</template>

<style scoped>
.quiz-wrapper {
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	margin-top: 5rem;
}
</style>
