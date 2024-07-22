// composables/useImageUrl.js

import { useRuntimeConfig } from '#app'

export const useImageUrl = () => {
	const config = useRuntimeConfig()
	const baseUrl = config.public.apiBaseUrl

	const getFullImageUrl = relativePath => {
		if (relativePath) {
			return `${baseUrl}${relativePath}`
		} else {
			return 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1721629369~exp=1721632969~hmac=96b25aef0622e49000353475b0c5c53a1ba3392d4fd8271aa735ee67a9e7e286&w=740'
		}
	}

	return {
		getFullImageUrl,
	}
}
