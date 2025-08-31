import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Inicio google tag
if (typeof window !== 'undefined') {
	window.dataLayer = window.dataLayer || []
	window.gtag = function () { window.dataLayer.push(arguments) }

	window.dataLayer.push({
		event: 'page_view',
		page_path: window.location.pathname + window.location.search,
		page_title: document.title || document.location.pathname,
	})
	router.afterEach((to) => {
		window.dataLayer.push({
			event: 'page_view',
			page_path: to.fullPath,
			page_title: to.name || document.title || to.fullPath,
		})
	})
}

app.mount('#app')
