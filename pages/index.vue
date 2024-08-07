<template>
	<div>
		<div v-if="studyProgramPending">Loading..</div>
		<ul v-else>
			<li v-for="(item, index) in studyProgramList.data" :key="index">
				{{ item.name }}
			</li>
		</ul>
		<button type="button" @click="handlePageChange()">nextPage</button>
		<!-- <Banner />
		<StepRegistration />
		<AboutUs />
		<CampusRecommendations />
		<ProdiRecommendation /> -->
	</div>
</template>
<script setup>
import Banner from '@/components/Banner.vue'
import StepRegistration from '@/components/StepRegistration.vue'
import AboutUs from '@/components/AboutUs.vue'
import CampusRecommendations from '@/components/CampusRecommendations.vue'
import ProdiRecommendation from '@/components/ProdiRecommendation.vue'

definePageMeta({
	title: 'My home page',
})

const page = ref(1)
const perPage = ref(5)
const list = ref([])

// const url = computed(() => {
// 	return `/api/open/studyprogram/all?page=${page.value}`
// })

const {
	studyProgramList,
	StudyProgramError,
	studyProgramPending,
	fetchStudyProgram,
} = useStudyProgram({ page: page, perPage: perPage })

const handlePageChange = () => {
	page.value++
}
</script>
