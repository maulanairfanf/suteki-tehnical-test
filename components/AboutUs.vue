<template>
	<div class="container">
		<div class="grid-2-20px">
			<div class="grid-item-1">
				<h1 class="font-size-30">Tentang Kami</h1>
				<p class="font-size-16" style="line-height: 32px">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
					suspendisse turpis sed convallis diam id. Vestibulum at eget
					pellentesque ullamcorper cras scelerisque arcu. Vel ornare bibendum
					porta faucibus. Eu semper eget rhoncus aenean eu eget purus. Euismod
					tincidunt posuere vulputate nec cras facilisis ac. Ultrices vulputate
					non ut adipiscing viverra.
				</p>
			</div>
			<div class="grid-item-1 grid-2-10px-no-responsive">
				<div
					class="grid-item-1 radius-8 p-medium"
					v-for="(item, index) in data"
					:key="index"
					:class="item.bgColor"
				>
					<div class="flex flex-wrap items-center justify-evenly w-full h-full">
						<div
							class="radius-12 flex justify-center items-center grid-1"
							style="width: 40px; height: 40px"
							:class="item.bgColorInside"
						>
							<img v-if="item.image !== ''" :src="item.image" />
						</div>
						<div class="flex items-center justiy-between grid-1">
							<h1 class="font-size-16 mr-small mt-small">{{ item.title }}</h1>
							<div :class="item.color">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M3 12h14l-4 4m0 0l4-4-4-4" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import kampus from '../assets/images/kampus.png'
import ujiPotensi from '../assets/images/uji-potensi.png'
const data = [
	{
		title: 'Kampus',
		image: kampus,
		bgColor: 'bg-orange-smooth',
		bgColorInside: 'bg-orange',
		color: 'text-orange',
	},
	{
		title: 'Jurusan',
		image: '',
		bgColor: 'bg-cyan-smooth',
		bgColorInside: 'bg-cyan',
		color: 'text-cyan',
	},
	{
		title: 'Pendaftaran',
		image: '',
		bgColor: 'bg-red-smooth',
		bgColorInside: 'bg-red',
		color: 'text-red',
	},
	{
		title: 'Uji Potensi',
		image: ujiPotensi,
		bgColor: 'bg-blue-smooth',
		bgColorInside: 'bg-blue',
		color: 'text-blue',
	},
]
</script>
