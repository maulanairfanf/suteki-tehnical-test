<template>
	<div class="container">
		<div class="flex flex-column items-center">
			<h1 class="font-size-30 font-weight-bold my-medium">
				Rekomendasi Kampus
			</h1>
			<h2 class="font-size-14 font-weight-light mb-large">
				Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan
				Banten
			</h2>
		</div>
		<div class="grid-4-20px">
			<div
				class="grid-item-1 position-relative card"
				v-for="index in 12"
				:key="index"
			>
				<div class="position-relative">
					<img
						src="@/assets/images/background.jpg"
						class="w-full radius-8 position-absolute background-image"
						alt="alt"
					/>
					<div class="card-header">
						<Badge color="blue" />
						<Badge color="red" akreditasi="A" class="mt-small" />
						<div
							class="mt-medium bg-white radius-8 p-small"
							style="width: min-content"
						>
							<img
								src="@/assets/images/dummy-uni.png"
								class="radius-8"
								style="object-fit: cover"
								alt=""
							/>
						</div>
					</div>
					<div class="card-body shadow bg-white">
						<h1 class="font-size-14">Politeknik Elektronika Negeri Surabaya</h1>
						<div class="font-size-12 text-blue flex items-center my-small">
							<svg
								width="12"
								height="16"
								viewBox="0 0 12 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.00016 0C2.805 0 0.205566 2.59944 0.205566 5.79456C0.205566 9.75981 5.39116 15.581 5.61194 15.8269C5.81932 16.0579 6.18138 16.0575 6.38838 15.8269C6.60916 15.581 11.7948 9.75981 11.7948 5.79456C11.7947 2.59944 9.19529 0 6.00016 0ZM6.00016 8.70997C4.3926 8.70997 3.08479 7.40212 3.08479 5.79456C3.08479 4.187 4.39263 2.87919 6.00016 2.87919C7.60769 2.87919 8.91551 4.18703 8.91551 5.79459C8.91551 7.40216 7.60769 8.70997 6.00016 8.70997Z"
									fill="#3A5AE3"
								/>
							</svg>
							<span class="ml-small"> Jakarta Selatan, DKI Jakarta </span>
						</div>
						<div class="flex items-center my-small">
							<div class="bg-primary" style="width: 20px; height: 2px"></div>
							<div class="ml-small text-primary">Negeri</div>
						</div>
						<div>
							<span class="font-size-12 font-weight-light"
								>Uang masuk dari</span
							>
							<br />
							<span class="font-size-14 font-weight-bold">Rp 350.000</span>
						</div>
						<button class="button radius-40 mt-small flex p-small">
							<img src="@/assets/images/globe-icon.svg" class="mr-small" />
							Pendaftaran Online
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center my-medium pb-medium">
			<hr class="hide-on-mobile horizontal-line" />
			<button class="button-outline w-full mx-small">
				Kampus Lainnya (+32)
			</button>
			<hr class="hide-on-mobile horizontal-line" />
		</div>
	</div>
</template>
<script setup>
import Badge from './reusable/Badge.vue'
</script>

<style scoped></style>
