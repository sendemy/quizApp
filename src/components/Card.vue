<script setup>
const props = defineProps(['quiz'])
</script>

<template>
	<div class="card">
		<img :src="quiz.img" :alt="quiz.name" />
		<div class="card-text">
			<h2>{{ quiz.name }}</h2>
			<p>{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>

<style scoped>
.card {
	width: 310px;
	overflow: hidden;
	border-radius: 2%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 35px;
	margin-right: 20px;
	cursor: pointer;
	transition: 0.4s all;
}

.card img {
	width: 100%;
	height: 190px;
	margin: 0;
}

.card .card-text {
	padding: 0 5px;
}

.card .card-text h2 {
	font-weight: bold;
}

.card:hover {
	transform: scale(1.05);
}
</style>
