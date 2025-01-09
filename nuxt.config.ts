export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: [
		'@/assets/css/global.scss',
		'@/assets/css/utility.scss',
		'@/assets/css/variable.scss',
	],
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.API_BASE_URL,
			apiKeyDev: process.env.API_KEY_DEV,
		},
	},
	ssr: true,
	modules: ['@pinia/nuxt'],
	vite: {
		server: {
			proxy: {
				'/api': {
					target: process.env.API_BASE_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ''),
				},
			},
		},
	},
})
