import './assets/main.scss'

import { createApp } from 'vue'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(vue3GoogleLogin, {
	clientId:
		'1022382885094-sr68t0rdkh78j1392lnd9gtogcnhr903.apps.googleusercontent.com',
})

app.mount('#app')
