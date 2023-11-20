<script setup>
import { useRoute } from 'vue-router'
import quizes from '../data/quizes.json'

const route = useRoute()

const quiz = quizes.filter((quiz) => quiz.id === parseInt(route.params.id))
</script>

<template>
	<div>{{ quiz.name }}</div>
</template>
