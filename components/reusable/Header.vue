<template lang="">
	<div class="flex flex-column items-center">
		<h1 class="font-size-30 font-weight-bold my-medium">{{ title }}</h1>
		<h2 class="font-size-14 font-weight-light mb-large">
			{{ description }}
		</h2>
	</div>
</template>
<script setup>
defineProps({
	title: {
		type: String,
		default: '',
		required: true,
	},
	description: {
		type: String,
		default: '',
		required: true,
	},
})
</script>
