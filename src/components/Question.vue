<script setup>
const { question } = defineProps(['question'])

const emit = defineEmits(['sendResult'])

const sendResult = (isCorrect) => {
	emit('sendResult', isCorrect)
}
</script>

<template>
	<div class="question-wrapper">
		<p>{{ question.text }}</p>
		<div class="options-wrapper">
			<div
				class="option"
				v-for="option in question.options"
				:key="option.id"
				@click="sendResult(option.isCorrect)"
			>
				{{ option.label }}: {{ option.text }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.question-wrapper {
	margin-top: 1.5rem;
}
.options-wrapper {
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	margin-top: 1rem;
}
.option {
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	width: fit-content;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	margin: 0 auto;
	transition: 0.4s all;
}
.option:hover {
	cursor: pointer;
	transform: scale(1.1);
}

p {
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	font-size: 3rem;
}
</style>
