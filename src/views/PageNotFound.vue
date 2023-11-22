<script setup>
import { useRouter } from 'vue-router'

const { textMessage } = defineProps(['textMessage'])

const router = useRouter()
</script>

<template>
	<div class="page-not-found-wrapper">
		<h1 v-if="textMessage">{{ textMessage }}</h1>
		<h1 v-else="">404 Page Not Found</h1>
		<button @click="router.push(`/`)">Go Home</button>
	</div>
</template>

<style lang="scss" scoped>
.page-not-found-wrapper {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 20dvh;
}

h1 {
	font-size: 3rem;
	font-weight: bold;
}

button {
	font-size: 2rem;
}
</style>
