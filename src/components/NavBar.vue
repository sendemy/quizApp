<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
	<header>
		<div class="logo-container">
			<svg
				width="37"
				height="40"
				viewBox="0 0 37 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					y1="-5"
					x2="18.842"
					y2="-5"
					transform="matrix(0.580486 0.81427 -0.813195 0.581991 17.5 24.6575)"
					stroke="#252422"
					stroke-width="10"
				/>
				<path
					d="M35 17.5342C35 27.2181 27.165 35.0685 17.5 35.0685C7.83502 35.0685 0 27.2181 0 17.5342C0 7.85035 7.83502 0 17.5 0C27.165 0 35 7.85035 35 17.5342ZM3.5 17.5342C3.5 25.2814 9.76801 31.5616 17.5 31.5616C25.232 31.5616 31.5 25.2814 31.5 17.5342C31.5 9.78713 25.232 3.50685 17.5 3.50685C9.76801 3.50685 3.5 9.78713 3.5 17.5342Z"
					fill="#EB5E28"
				/>
				<line
					y1="-6"
					x2="2.2668"
					y2="-6"
					transform="matrix(0.813172 -0.582024 0.580519 0.814247 26.25 34.196)"
					stroke="#252422"
					stroke-width="12"
				/>
				<ellipse
					cx="18.0469"
					cy="10.959"
					rx="4.375"
					ry="4.38356"
					fill="#252422"
				/>
				<ellipse
					cx="17.7734"
					cy="9.5891"
					rx="1.36719"
					ry="1.36986"
					fill="white"
				/>
			</svg>
		</div>
		<div class="btns-container">
			<div @click="router.push('/')">Quizes</div>
			<div>Something</div>
		</div>
		<div class="profile-container">
			<span>Profile</span>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="16" cy="16" r="16" fill="#D9D9D9" />
			</svg>
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
	margin-top: 0.4rem;

	border-bottom: 0.15rem solid #eb5e28;

	.logo-container {
		margin-left: 1rem;
	}

	.btns-container {
		display: flex;
		flex-direction: row;
		gap: 1rem;

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
		display: flex;
		gap: 0.6rem;
		margin-right: 1rem;
		line-height: 2rem;

		span {
			transition: 0.4s all ease-out;

			&:hover {
				cursor: pointer;
				color: #eb5e28;
			}
		}
	}
}
</style>
