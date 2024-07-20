<template>
	<div class="container">
		<Header
			title="Rekomendasi Jurusan/Prodi"
			description="Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten"
		/>
		<div class="grid-4-20px">
			<div
				class="grid-item-1 bg-blue-smooth p-large radius-8"
				v-for="index in 8"
				:key="index"
			>
				<div class="font-size-12 flex items-center">
					<div>
						<div
							class="bg-blue mr-small radius-2"
							style="width: 10px; height: 10px"
						></div>
					</div>
					<span> Seni, Desain & Musik</span>
				</div>
				<div class="font-size-14 mt-medium font-weight-bold">
					Desain Komunikasi Visual
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center my-medium pb-medium">
			<hr class="hide-on-mobile horizontal-line" />
			<button class="button-outline w-full mx-small">
				Jurusan Lainnya (+32)
			</button>
			<hr class="hide-on-mobile horizontal-line" />
		</div>
	</div>
</template>
<script setup>
import Header from './reusable/Header.vue'
</script>
