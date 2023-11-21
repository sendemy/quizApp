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
console.log(wrongAnswers[0].options[0].label)
// wrongAnswer.option.label

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
		<div
			class="wrong-question-wrapper"
			v-for="(wrongAnswer, index) in wrongAnswers"
			:key="index"
		>
			<h3>
				{{
					quiz.questions.find((question) =>
						question.text.includes(wrongAnswer.text)
					).id
				}}. {{ wrongAnswer.text }}
			</h3>
			<p
				:class="{ 'correct-option': option.isCorrect }"
				v-for="(option, index) in wrongAnswer.options"
				:key="index"
			>
				{{ option.label }}: {{ option.text }}
			</p>
		</div>
	</div>
</template>

<style scoped>
.hero-wrapper {
	font-size: 2rem;
}

.correct-option {
	color: green;
}
</style>
