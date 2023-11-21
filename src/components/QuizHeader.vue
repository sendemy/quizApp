<script setup>
const { quiz, questionsAnswered } = defineProps(['quiz', 'questionsAnswered'])
</script>

<template>
	<div>
		<h1>{{ quiz.name }}</h1>
		<h3>{{ questionsAnswered }}/{{ quiz.questions.length }} questions</h3>
	</div>
</template>
