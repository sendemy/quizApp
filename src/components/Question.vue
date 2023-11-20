<script setup>
const { question } = defineProps(['question'])

const emit = defineEmits(['sendResult'])

const sendResult = (isCorrect) => {
	emit('sendResult', isCorrect)
}
</script>

<template>
	<p>{{ question.text }}</p>
	<div v-for="option in question.options" :key="option.id">
		<button @click="sendResult(option.isCorrect)">
			{{ option.label }}: {{ option.text }}
		</button>
	</div>
</template>
