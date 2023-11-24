<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { decodeCredential } from 'vue3-google-login'

const router = useRouter()
const user = ref(null)

function callback(response) {
	user.value = decodeCredential(response.credential)
	console.log(decodeCredential(response.credential))
}
</script>

<template>
	<header>
		<div class="logo-container">
			<svg
				width="29"
				height="32"
				viewBox="0 0 29 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1="17.6175"
					y1="19.8237"
					x2="25.6175"
					y2="30.8237"
					stroke="#252422"
					stroke-width="4"
				/>
				<path
					d="M29 14.4658C29 22.455 22.5081 28.9316 14.5 28.9316C6.49187 28.9316 0 22.455 0 14.4658C0 6.47655 6.49187 0 14.5 0C22.5081 0 29 6.47655 29 14.4658ZM2.9 14.4658C2.9 20.8572 8.0935 26.0384 14.5 26.0384C20.9065 26.0384 26.1 20.8572 26.1 14.4658C26.1 8.07439 20.9065 2.89316 14.5 2.89316C8.0935 2.89316 2.9 8.07439 2.9 14.4658Z"
					fill="#EB5E28"
				/>
				<line
					y1="-6"
					x2="2"
					y2="-6"
					transform="matrix(0.814359 -0.580362 0.582181 0.81306 24 31.1606)"
					stroke="#252422"
					stroke-width="12"
				/>
				<ellipse
					cx="12.625"
					cy="9.61644"
					rx="3.625"
					ry="3.61644"
					fill="#252422"
				/>
				<ellipse
					cx="12.3984"
					cy="8.4861"
					rx="1.13281"
					ry="1.13014"
					fill="white"
				/>
			</svg>
		</div>
		<div class="links-container">
			<div @click="router.push('/')">Quizes</div>
			<div v-if="user" @click="router.push('/create-quiz')">Create Quiz</div>
		</div>
		<div class="profile-container">
			<div v-if="user" class="user-logged-in" @click="router.push('profile')">
				<span>{{ user.given_name }}</span>
				<img :src="user.picture" alt="Profile Picture" width="32" height="32" />
			</div>
			<GoogleLogin v-else :callback="callback" />
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: 1.2rem;
	border-bottom: 0.15rem solid #eb5e28;
	padding: 0.2rem;
}

.logo-container {
	margin-left: 0.5rem;
}

.links-container {
	display: flex;
	flex-shrink: 0;
	flex-direction: row;
	gap: 1.25rem;

	&:hover {
		cursor: pointer;
	}

	div {
		transition: 0.4s all ease-out;

		&:hover {
			color: #eb5e28;
		}
	}
}

.profile-container {
	transition: 0.4s all ease-out;

	&:hover {
		cursor: pointer;
		color: #eb5e28;
	}

	div {
		display: flex;
		gap: 0.6rem;
		margin-right: 1rem;
		line-height: 2rem;

		img {
			border-radius: 100%;
		}
	}
}
</style>
