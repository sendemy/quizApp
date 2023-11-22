<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
	<div class="container">
		<NavBar />
		<div class="hero">
			<RouterView />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	margin: 0 auto;
}

.hero {
	max-width: 1000px;
	margin: 0 auto;
}
</style>
