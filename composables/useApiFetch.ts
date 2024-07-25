// composables/useApiFetch.ts
import { useRuntimeConfig } from '#app'

interface UseApiFetchOptions extends RequestInit {
	params?: Record<string, any>
}

export const useApiFetch = async (
	url: string,
	options: UseApiFetchOptions = { method: 'GET' }
) => {
	const runtimeConfig = useRuntimeConfig()

	// Extract params and method from options
	const { params, method = 'GET', ...fetchOptions } = options

	// Build query string from params
	const queryString = params ? new URLSearchParams(params).toString() : ''
	const fullUrl = queryString ? `${url}?${queryString}` : url

	// Configure default headers
	const headers = {
		'api-key': runtimeConfig.public.apiKeyDev,
		...fetchOptions.headers,
	}

	const fetchOptionsWithDefaults: RequestInit = {
		method,
		headers,
		...fetchOptions,
	}

	try {
		const response = await $fetch(fullUrl, fetchOptionsWithDefaults)
		return { data: response, error: null }
	} catch (error) {
		console.error('Error fetching data:', error)
		return { data: null, error }
	}
}
