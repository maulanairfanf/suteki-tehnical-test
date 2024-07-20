<template>
	<div class="container">
		<Header
			title="Rekomendasi Kampus"
			description="Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten"
		/>

		<div class="grid-4-20px">
			<Card v-for="index in 8" :key="index" />
		</div>
		<div class="flex items-center justify-center my-medium pb-medium">
			<hr class="hide-on-mobile horizontal-line" />
			<button class="button-outline w-full mx-small">
				Kampus Lainnya (+32)
			</button>
			<hr class="hide-on-mobile horizontal-line" />
		</div>
	</div>
</template>
<script setup>
import Header from './reusable/Header.vue'
import Card from './reusable/Card.vue'
</script>

<style scoped></style>
