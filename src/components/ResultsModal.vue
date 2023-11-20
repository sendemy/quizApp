<script setup>
import { useRouter } from 'vue-router'
const { results, quiz, correctAnswers } = defineProps([
	'results',
	'quiz',
	'correctAnswers',
])

const wrongAnswers = quiz.questions.filter(
	(question) => !results[question.id - 1]
)

const router = useRouter()
</script>

<template>
	<div>
		<div class="hero-wrapper">
			<h1>You have completed {{ quiz.name }} Quiz!</h1>
			<h2>Correct Answers: {{ correctAnswers }}</h2>
		</div>
		<div>
			<button @click="router.push(`/`)">Go Home</button>
		</div>
		<h2>Wrong Answers:</h2>
		<p v-for="(wrongAnswer, index) in wrongAnswers" :key="index">
			{{
				quiz.questions.find((question) =>
					question.text.includes(wrongAnswer.text)
				).id
			}}. {{ wrongAnswer.text }}
		</p>
		<div></div>
	</div>
</template>

<style scoped>
.hero-wrapper {
	font-size: 2rem;
}
</style>
