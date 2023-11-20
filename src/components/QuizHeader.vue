<script setup>
const { quiz, questionsAnswered } = defineProps(['quiz', 'questionsAnswered'])
</script>

<template>
	<div>
		<h1>Quiz Header</h1>
		<h2>{{ quiz.name }}</h2>
		<h2>{{ questionsAnswered }} / {{ quiz.questions.length }}</h2>
	</div>
</template>
