<template>
	<Banner />
	<StepRegistration />
	<AboutUs />
	<CampusRecommendations />
	<ProdiRecommendation />
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
</script>
