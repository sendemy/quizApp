<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import quizesData from '../data/quizes.json'

const router = useRouter()

const quizes = ref(quizesData)
const search = ref('')
const filter = ref(0)

const nestedSort =
	(prop1, prop2 = null, direction = 'asc') =>
	(e1, e2) => {
		const a = prop2 ? e1[prop1][prop2] : e1[prop1],
			b = prop2 ? e2[prop1][prop2] : e2[prop1],
			sortOrder = direction === 'asc' ? 1 : -1
		return a < b ? -sortOrder : a > b ? sortOrder : 0
	}

function sortCards(option) {
	filter.value = option
}

watch([search, filter], () => {
	quizes.value = quizesData.filter((quiz) =>
		quiz.name.toLowerCase().includes(search.value.toLowerCase())
	)

	switch (filter.value) {
		case 0:
			break
		case 1:
			quizes.value = quizes.value.sort(nestedSort('difficulty', null, 'asc'))
			console.log(quizes.value)
			console.log('asc')
			break
		case 2:
			quizes.value = quizes.value.sort(nestedSort('difficulty', null, 'desc'))
			console.log(quizes.value)
			console.log('desc')
			break
	}
})

//
</script>

<template>
	<div>
		<div class="tools-container">
			<div class="seach-container">
				<label>Search</label>
				<input v-model.trim="search" type="text" placeholder="Find..." />
			</div>
			<div class="filter-container">
				<label>Sort</label>
				<div class="dropdown">
					<button class="dropbtn">
						<svg
							width="22"
							height="12"
							viewBox="0 0 22 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line y1="1" x2="22" y2="1" stroke="black" stroke-width="2" />
							<line
								x1="2.75"
								y1="6"
								x2="19.25"
								y2="6"
								stroke="black"
								stroke-width="2"
							/>
							<line
								x1="5.9231"
								y1="11"
								x2="16.9231"
								y2="11"
								stroke="black"
								stroke-width="2"
							/>
						</svg>
					</button>

					<div class="dropdown-content">
						<div @click="sortCards(0)">None</div>
						<div @click="sortCards(1)">Difficulty (Ascending)</div>
						<div @click="sortCards(2)">Difficulty (Descending)</div>
					</div>
				</div>
			</div>
		</div>
		<div class="options-container">
			<Card
				@click="router.push(`/quiz/${quiz.id}`)"
				v-for="(quiz, index) in quizes"
				:key="index"
				:quiz="quiz"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tools-container {
	margin-bottom: 0.6rem;
	margin-top: 1.9rem;
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 4rem;

	input {
		border: none;
		background-color: rgba(128, 128, 128, 0.1);
		padding: 0.6rem;
		border-radius: 0.4rem;
		font-size: 1rem;
		outline-color: white;
		transition: all 0.15s ease-out;

		&:focus {
			outline-color: #eb5e28;
		}
	}

	label {
		font-size: 1.3rem;
		margin-right: 0.8rem;
	}
}
.options-container {
	display: flex;
	flex-wrap: wrap;
	margin-top: 3.5rem;
}

.dropbtn {
	font-size: 1rem;
	border: none;
	cursor: pointer;
	background-color: white;
}

.dropdown {
	position: relative;
	display: inline-block;
	background-color: white;

	&:hover {
		.dropdown-content {
			display: block;
		}
	}
}

.dropdown-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 10rem;
	box-shadow: 0px 0.5rem 1rem 0px rgba(0, 0, 0, 0.2);
	z-index: 1;

	div {
		padding: 0.75rem 1rem;
		text-decoration: none;
		display: block;

		&:hover {
			cursor: pointer;
			background-color: #f1f1f1;
		}
	}
}
</style>
