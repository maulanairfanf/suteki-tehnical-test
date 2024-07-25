<template>
	<div class="container">
		<Header
			title="Rekomendasi Kampus"
			description="Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten"
		/>

		<div
			class="grid-4-20px"
			v-if="!isLoading && collegeStore.colleges.length > 0"
		>
			<Card
				v-for="(item, index) in collegeStore.colleges"
				:item="item"
				:key="index"
			/>
		</div>
		<div class="flex items-center justify-center my-medium pb-medium">
			<hr class="hide-on-mobile horizontal-line" />
			<button
				:disabled="isLoading"
				class="button-outline w-full mx-small"
				@click="handleLoadMore()"
			>
				Kampus Lainnya + {{ otherCampus }}
			</button>
			<hr class="hide-on-mobile horizontal-line" />
		</div>
	</div>
</template>
<script setup>
import Header from './reusable/Header.vue'
import Card from './reusable/Card.vue'
import { useCollegeStore } from '@/stores/collegeStore'

const isLoading = ref(true)
const collegeStore = useCollegeStore()

async function handleLoadMore() {
	isLoading.value = true
	await collegeStore.loadMoreColleges()
	isLoading.value = false
}

const otherCampus = computed(() => {
	return (
		collegeStore.paginationCollege.total -
		collegeStore.paginationCollege.perPage * collegeStore.paginationCollege.page
	)
})

onMounted(async () => {
	collegeStore.fetchAllColleges()
	isLoading.value = false
})
</script>
