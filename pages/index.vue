<template>
	<ul>
		<li v-for="(item, index) in list" :key="index">
			{{ item.name }}
		</li>
	</ul>
	<button type="button" @click="handlePageChange()">nextPage</button>
	<!-- <Banner />
	<StepRegistration />
	<AboutUs />
	<CampusRecommendations />
	<ProdiRecommendation /> -->
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

const url = computed(() => {
	return `/api/open/studyprogram/all?page=${page.value}`
})

const { data, error, refresh } = await useFetch(url, {
	watch: [page],
})

list.value = data.value.data

const handlePageChange = () => {
	page.value++
}

watch(
	() => data.value,
	newValue => {
		if (newValue) {
			console.log('newaValue', newValue)
			list.value = [...list.value, ...newValue.data]
		}
	}
)
</script>
