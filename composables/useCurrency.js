export function useCurrency() {
	const formatRupiah = amount => {
		if (isNaN(amount)) return ''

		return amount.toLocaleString('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
		})
	}

	return { formatRupiah }
}
