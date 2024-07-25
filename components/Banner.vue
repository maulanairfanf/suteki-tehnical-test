<template>
	<div class="container">
		<div class="carousel">
			<div class="carousel-container" :style="carouselStyle">
				<div
					v-for="(item, index) in collegeStore.banner"
					:key="index"
					class="carousel-item"
				>
					<img
						v-if="index === currentIndex"
						class="w-full radius-8 carousel-image"
						:src="getFullImageUrl(item.image)"
						:alt="item.title"
					/>
				</div>
			</div>
			<div class="flex items-center justify-center mt-medium">
				<div
					v-for="index in collegeStore.banner.length"
					class="mx-xsmall cursor-pointer"
					:class="
						currentIndex === index - 1
							? 'bg-primary pointer-carousel-active radius-8'
							: 'bg-gray pointer-carousel radius-rounded'
					"
					:key="index"
					@click="currentIndex = index - 1"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useImageUrl } from '@/composables/useImageUrl'
import { useCollegeStore } from '@/stores/collegeStore'

const collegeStore = useCollegeStore()

const { getFullImageUrl } = useImageUrl()
const currentIndex = ref(0)

const carouselStyle = computed(() => ({
	transform: `translateX(-${currentIndex.value * 100}%)`,
}))

await collegeStore.fetchBanner()
</script>
