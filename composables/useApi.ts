import { useRuntimeConfig, useFetch } from '#app'

export const useApi = (
	url: string,
	params: any = {},
	options: any = { method: 'GET', server: true } // Tambahkan opsi server dengan default true
) => {
	const runtimeConfig = useRuntimeConfig()

	// Menggunakan URLSearchParams untuk membentuk query string dari params
	const queryString = new URLSearchParams(params).toString()
	const fullUrl = queryString ? `${url}?${queryString}` : url

	// Set baseURL dan headers
	options.baseURL = options.baseURL || runtimeConfig.public.apiBaseUrl
	options.headers = {
		...options.headers,
		'api-key': runtimeConfig.public.apiKeyDev,
	}

	// Gunakan useFetch dengan opsi server
	return useFetch(fullUrl, {
		...options,
		server: options.server !== false, // Menggunakan server: true atau false sesuai opsi
	})
}
