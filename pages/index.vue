<template>
	<StepRegistration />
	<AboutUs />
	<CampusRecommendations />
</template>
<script setup>
import StepRegistration from '@/components/StepRegistration.vue'
import AboutUs from '@/components/AboutUs.vue'
import CampusRecommendations from '@/components/CampusRecommendations.vue'

definePageMeta({
	title: 'My home page',
})
</script>
