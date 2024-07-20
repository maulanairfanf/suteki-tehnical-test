<template>
	<div class="container">
		<div class="step-box-background radius-12 p-small">
			<div class="grid-4-10px" id="box-step-registration">
				<div
					class="grid-item-1 flex justify-start items-center p-medium"
					v-for="(item, index) in data"
					:key="index"
				>
					<div>
						<div class="circle flex items-center justify-center font-size-16">
							{{ index + 1 }}
						</div>
					</div>
					<div class="text-white ml-medium">
						<div class="font-size-16">{{ item.title }}</div>
						<div class="font-size-12 font-weight-light mt-small hide-on-mobile">
							Consectetur adipiscing elit. Urna amet hac senectus in consequat
							orci duis pellentesque.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const data = [
	{
		title: 'Cari Kampus & Prodi',
	},
	{
		title: 'Bandingkan',
	},
	{
		title: 'Uji Potensi',
	},
	{
		title: 'Daftar',
	},
]
</script>
