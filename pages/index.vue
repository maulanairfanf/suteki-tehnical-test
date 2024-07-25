<template>
	<!-- <Banner /> -->
	<!-- <StepRegistration />
	<AboutUs /> -->
	<!-- <CampusRecommendations /> -->
	<!-- <ProdiRecommendation /> -->

	<!-- <div>
		<h2>Companies</h2>
		<ul>
			<li
				v-for="company in companies"
				:key="company.id"
				v-text="company.name"
			></li>
		</ul>
	</div>
	<button @click="loadMore()">Load more</button> -->
	<ul>
		<li v-for="(item, index) in data" :key="index">{{ item.name }}</li>
	</ul>
	<button @click="loadMore()">Load more</button>
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

// const page = ref(1)
// const lastPage = ref(1)
// const companies = ref([])
// const pending = ref(false)

// onMounted(() => {
// 	loadCompanies()
// })

// const loadMore = () => {
// 	if (page.value + 1 <= lastPage.value) {
// 		page.value = page.value + 1

// 		loadCompanies()
// 	}
// }

// const loadCompanies = () => {
// 	pending.value = true

// 	$fetch(`/api/v1/companies`, {
// 		method: 'GET',
// 		baseURL: 'https://api.roastandbrew.coffee',
// 		params: {
// 			page: page.value,
// 		},
// 	}).then(function (companies) {
// 		appendCompanies(companies.data)
// 		pending.value = false
// 		lastPage.value = companies.last_page
// 	})
// }

// const appendCompanies = newCompanies => {
// 	newCompanies.forEach(company => {
// 		companies.value.push(company)
// 	})
// }

const isLoading = ref(true)
const data = ref([])
const pagination = ref({
	page: 1,
	perPage: 8,
	total: 0,
})

function loadStudy() {
	isLoading.value = true
	$fetch(`/open/studyprogram/all`, {
		method: 'GET',
		params: {
			page: pagination.value.page,
			per_page: pagination.value.perPage,
			full: true,
		},
	})
		.then(function (response) {
			if (data.value.length === 0) {
				data.value = response.data.data
			} else {
				data.value = data.value.concat(response.data.data)
			}
		})
		.catch(error => {
			console.log('error', error)
		})
	isLoading.value = false
}

function loadMore() {
	pagination.value.page += 1
	loadStudy()
}

onMounted(() => {
	loadStudy()
})
</script>
