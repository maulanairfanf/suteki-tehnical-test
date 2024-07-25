// composables/useApiFetch.ts
import { useRuntimeConfig } from '#app'

interface UseApiFetchOptions {
	method?:
		| 'GET'
		| 'POST'
		| 'PUT'
		| 'DELETE'
		| 'HEAD'
		| 'PATCH'
		| 'CONNECT'
		| 'OPTIONS'
		| 'TRACE'
	params?: Record<string, any>
	body?: Record<string, any>
	headers?: Record<string, string>
}

export const useApiFetch = async (
	endpoint: string,
	{ method = 'GET', params, body, headers }: UseApiFetchOptions = {}
) => {
	const runtimeConfig = useRuntimeConfig()

	const queryString = params ? new URLSearchParams(params).toString() : ''
	const fullUrl = queryString ? `${endpoint}?${queryString}` : endpoint

	const defaultHeaders = {
		'api-key': runtimeConfig.public.apiKeyDev,
		...headers,
	}

	const fetchOptions = {
		method,
		headers: defaultHeaders,
		body: method !== 'GET' && body ? JSON.stringify(body) : null,
	}

	try {
		const response = await $fetch(fullUrl, fetchOptions)
		return { data: response, error: null }
	} catch (error) {
		return { data: null, error }
	}
}
