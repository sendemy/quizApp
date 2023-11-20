<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import quizesData from '../data/quizes.json'

const router = useRouter()

const quizes = ref(quizesData)
const search = ref('')

watch([search], () => {
	quizes.value = quizesData.filter((quiz) =>
		quiz.name.toLowerCase().includes(search.value.toLowerCase())
	)
})
</script>

<template>
	<div>
		<header>
			<h1>Quizes</h1>
			<input v-model.trim="search" type="text" placeholder="Find..." />
		</header>
		<div class="options-container">
			<Card
				@click="router.push(`/quiz/${quiz.id}`)"
				v-for="quiz in quizes"
				:key="quiz.id"
				:quiz="quiz"
			/>
		</div>
	</div>
</template>

<style scoped>
header {
	margin-bottom: 10px;
	margin-top: 30px;
	display: flex;
	align-items: center;
}

header h1 {
	font-weight: bold;
	margin-right: 30px;
}

header input {
	border: none;
	background-color: rgba(128, 128, 128, 0.1);
	padding: 10px;
	border-radius: 5px;
}

.options-container {
	display: flex;
	flex-wrap: wrap;
	margin-top: 40px;
}
</style>
