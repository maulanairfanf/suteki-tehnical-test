<template>
	<div class="container">
		<Header
			title="Rekomendasi Jurusan/Prodi"
			description="Memberikan sistem pelayanan untuk para calon mahasiswa Jawa Barat dan Banten"
		/>
		<div class="grid-4-20px" v-if="studyPrograms.length > 0">
			<div
				class="grid-item-1 p-large radius-8"
				v-for="(item, index) in studyPrograms"
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
			<button class="button-outline w-full mx-small" @click="handleLoadMore">
				Kampus Lainnya + {{ otherStudyProgram }}
			</button>
			<hr class="hide-on-mobile horizontal-line" />
		</div>
	</div>
</template>

<script setup>
import Header from './reusable/Header.vue'
import { ref, computed } from 'vue'
import { useApi } from '@/composables/useApi'

const isLoading = ref(true)
const studyPrograms = ref([])
const paginationStudyProgram = ref({
	page: 1,
	perPage: 8,
	total: 0,
})

const params = {
	perPage: paginationStudyProgram.value.perPage,
	page: paginationStudyProgram.value.page,
	full: true,
}

const { data, error, refresh, status } = await useApi(
	'/open/studyprogram/all',
	params
)
console.log('data', data)
if (data.value) {
	if (paginationStudyProgram.value.page === 1) {
		studyPrograms.value = data.value.data
	} else {
		studyPrograms.value = [...studyPrograms.value, ...data.value.data]
	}
	paginationStudyProgram.value.page = data.value.meta.currentPage
	paginationStudyProgram.value.total = data.value.meta.totalItems
} else {
	console.error('Error fetching study programs:', error.value)
}

async function loadMoreStudyPrograms() {
	paginationStudyProgram.value.page += 1
	refresh()
}

const otherStudyProgram = computed(() => {
	return (
		paginationStudyProgram.value.total -
		paginationStudyProgram.value.perPage * paginationStudyProgram.value.page
	)
})

async function handleLoadMore() {
	isLoading.value = true
	await loadMoreStudyPrograms()
	isLoading.value = false
}

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
</script>
