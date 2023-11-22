<script setup>
const props = defineProps(['quiz'])
</script>

<template>
	<div class="card">
		<img :src="quiz.img" :alt="quiz.name" />
		<div class="card-text">
			<h2>{{ quiz.name }}</h2>
			<p>{{ quiz.questions.length }} questions</p>
			<div class="difficulty-container">
				<span v-for="(n, index) in quiz.difficulty" :key="index">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="8"
							cy="8"
							r="7"
							fill="#EB5E28"
							stroke="#EB5E28"
							stroke-width="2"
						/>
					</svg>
				</span>
				<span
					v-for="(n, index) in 5 - quiz.difficulty"
					:key="quiz.difficulty + index"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="8" cy="8" r="7" stroke="#252422" stroke-width="2" />
					</svg>
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	width: 310px;
	overflow: hidden;
	border-radius: 0.6rem;
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
	margin-bottom: 35px;
	margin-right: 20px;
	cursor: pointer;
	transition: 0.4s all;

	&:hover {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		height: 190px;
		margin: 0;
	}

	.card-text {
		padding: 0 5px;
		h2 {
			font-weight: bold;
		}
	}
}

.difficulty-container {
	display: flex;
	flex-direction: row;
	gap: 0.2rem;
	margin-top: 0.4rem;
}
</style>
