<template>
	<div
		:class="getColorBackground"
		class="radius-40 flex justify-between items-center p-xsmall"
		style="width: min-content"
	>
		<span class="font-size-12 text-white" style="white-space: nowrap">{{
			getTitle
		}}</span>
		<div
			:class="getColorBackgroundCirle"
			class="ml-small radius-rounded flex items-center justify-center"
			style="width: 20px; height: 20px"
		>
			<svg
				v-if="color === 'blue'"
				width="10"
				height="7"
				viewBox="0 0 10 7"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 3.5L3.5 6L9 1"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span else class="text-white">{{ akreditasi }}</span>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	akreditasi: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: 'blue',
	},
})

const getColorBackground = computed(() => {
	if (props.color === 'blue') {
		return 'bg-blue'
	} else {
		return 'bg-red'
	}
})

const getColorBackgroundCirle = computed(() => {
	if (props.color === 'blue') {
		return 'bg-blue-dop'
	} else {
		return 'bg-red-dop'
	}
})

const getTitle = computed(() => {
	if (props.color === 'blue') {
		return 'Kampus Partner'
	} else {
		return 'Terakreditasi'
	}
})
</script>
