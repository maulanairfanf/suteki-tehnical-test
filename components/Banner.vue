<template>
	<div class="container">
		<div class="carousel">
			<div class="carousel-container" :style="carouselStyle">
				<div v-for="(item, index) in items" :key="index" class="carousel-item">
					<img
						v-if="index === currentIndex"
						class="w-full h-full radius-8"
						style="object-fit: cover"
						:src="item.image"
						:alt="item.title"
					/>
				</div>
			</div>
			<div class="flex items-center justify-center mt-medium">
				<div
					v-for="index in items.length"
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
import banner from '@/assets/images/banner.png'
import banner2 from '@/assets/images/banner-2.png'
import banner3 from '@/assets/images/banner-3.png'

const items = [
	{ image: banner, title: 'Slide 1' },
	{ image: banner2, title: 'Slide 2' },
	{ image: banner3, title: 'Slide 3' },
]

const currentIndex = ref(0)

const carouselStyle = computed(() => ({
	transform: `translateX(-${currentIndex.value * 100}%)`,
}))
</script>
