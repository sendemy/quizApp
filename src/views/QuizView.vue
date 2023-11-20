<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue'
import ResultsModal from '../components/ResultsModal.vue'
import quizes from '../data/quizes.json'
import PageNotFound from './PageNotFound.vue'

const route = useRoute()

const quizId = parseInt(route.params.id)
const quiz = quizes.find((q) => q.id === quizId)
const questionIndex = ref(0)
const correctAnswers = ref(0)
const showResultsModal = ref(false)
const results = ref([])

function sendResult(isCorrect) {
	if (isCorrect) {
		correctAnswers.value++
		results.value.push(1)
	} else {
		results.value.push(0)
	}

	if (questionIndex.value === quiz.questions.length - 1) {
		showResultsModal.value = true
	} else {
		questionIndex.value += 1
	}
}
</script>

<template>
	<div class="quiz-wrapper">
		<div v-if="quiz">
			<QuizHeader
				v-if="!showResultsModal"
				:quiz="quiz"
				:questionsAnswered="questionIndex"
			/>
			<Question
				v-if="!showResultsModal"
				:question="quiz.questions[questionIndex]"
				@sendResult="sendResult"
			/>
			<ResultsModal
				v-if="showResultsModal"
				:results="results"
				:quiz="quiz"
				:correctAnswers="correctAnswers"
			/>
		</div>
		<PageNotFound v-else :text-message="`Quiz Not Found`" />
	</div>
</template>

<style scoped>
.quiz-wrapper {
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	margin-top: 1rem;
	font-size: 2rem;
}
</style>
