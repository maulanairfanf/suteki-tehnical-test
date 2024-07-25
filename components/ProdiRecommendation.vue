<template>
	<div class="container">
		<Header
			title="Rekomendasi Jurusan/Prodi"
			description="Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten"
		/>
		<div
			class="grid-4-20px"
			v-if="!isLoading && collegeStore.studyPrograms.length > 0"
		>
			<div
				class="grid-item-1 p-large radius-8"
				v-for="(item, index) in collegeStore.studyPrograms"
				:key="index"
				:class="getBoxColor(item.field)"
			>
				<div class="font-size-12 flex items-center">
					<div>
						<div
							class="mr-small radius-2"
							:class="getBgColor(item.field)"
							style="width: 10px; height: 10px"
						></div>
					</div>
					<span>{{ item.field }}</span>
				</div>
				<div class="font-size-14 mt-medium font-weight-bold">
					{{ item.name }}
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center my-medium pb-medium">
			<hr class="hide-on-mobile horizontal-line" />
			<button class="button-outline w-full mx-small" @click="handleLoadMore()">
				Kampus Lainnya + {{ otherStudyProgram }}
			</button>
			<hr class="hide-on-mobile horizontal-line" />
		</div>
	</div>
</template>
<script setup>
import Header from './reusable/Header.vue'
import { useCollegeStore } from '@/stores/collegeStore'

const isLoading = ref(true)
const collegeStore = useCollegeStore()

function getBgColor(payload) {
	const lowerPayload = payload.toLowerCase()
	switch (true) {
		case lowerPayload.includes('agama') || lowerPayload.includes('filsafat'):
			return 'bg-blue'
		case lowerPayload.includes('pendidikan'):
			return 'bg-orange'
		case lowerPayload.includes('ekonomi'):
			return 'bg-primary'
		case lowerPayload.includes('sosial') ||
			lowerPayload.includes('politik') ||
			lowerPayload.includes('teknik'):
			return 'bg-red'
		default:
			return 'bg-purple'
	}
}

function getBoxColor(payload) {
	const lowerPayload = payload.toLowerCase()
	switch (true) {
		case lowerPayload.includes('agama') || lowerPayload.includes('filsafat'):
			return 'bg-blue-smooth'
		case lowerPayload.includes('pendidikan'):
			return 'bg-orange-smooth'
		case lowerPayload.includes('ekonomi'):
			return 'bg-primary-smooth'
		case lowerPayload.includes('sosial') ||
			lowerPayload.includes('politik') ||
			lowerPayload.includes('teknik'):
			return 'bg-red-smooth'
		default:
			return 'bg-purple-smooth'
	}
}

const otherStudyProgram = computed(() => {
	return (
		collegeStore.paginationStudyProgram.total -
		collegeStore.paginationStudyProgram.perPage *
			collegeStore.paginationStudyProgram.page
	)
})

async function handleLoadMore() {
	isLoading.value = true
	await collegeStore.loadMoreStudyPrograms()
	isLoading.value = false
}

onMounted(async () => {
	await collegeStore.fetchStudyPrograms()
	isLoading.value = false
})
</script>
