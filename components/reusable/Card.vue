<template>
	<div class="grid-item-1 position-relative card">
		<div class="position-relative w-full">
			<img
				:src="getFullImageUrl(item.details?.thumbnail)"
				class="w-full radius-8 position-absolute background-image font-size-8"
				:alt="'background ' + item.name"
			/>
			<div class="card-header">
				<Badge
					color="blue"
					v-if="item.details && item.details.partnerships !== null"
					class="mb-small"
				/>
				<Badge
					color="red"
					v-if="item.details && item.details.accreditation"
					:akreditasi="getAccreditation"
				/>
				<div
					class="mt-xlarge bg-white radius-8 p-small"
					style="width: min-content"
				>
					<img
						:src="getFullImageUrl(item.details?.logo)"
						class="radius-8"
						style="object-fit: cover; width: 40px; height: 40px"
						:alt="'logo ' + item.name"
					/>
				</div>
			</div>
			<div class="card-body shadow bg-white">
				<h1 class="font-size-14">{{ item.name }}</h1>
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
					<span class="ml-small">{{ getLocationn }}</span>
				</div>
				<div class="flex items-center my-small">
					<div
						:class="getBgEducationType"
						style="width: 20px; height: 2px"
					></div>
					<div class="ml-small" :class="getColorEducationType">
						{{ item.details?.education_type }}
					</div>
				</div>
				<div>
					<span class="font-size-12 font-weight-light">Uang masuk dari</span>
					<br />
					<span class="font-size-14 font-weight-bold">{{
						formatRupiah(item.details?.min_registration_fee)
					}}</span>
				</div>
				<button class="button radius-40 mt-small flex p-small">
					<img src="@/assets/images/globe-icon.svg" class="mr-small" />
					Pendaftaran Online
				</button>
			</div>
		</div>
	</div>
</template>
<script setup>
import Badge from './Badge.vue'

const props = defineProps({
	item: {
		type: Object,
		default: () => {},
		required: true,
	},
})

const { getFullImageUrl } = useImageUrl()
const { formatRupiah } = useCurrency()

const getColorEducationType = computed(() => {
	return props.item.details?.education_type === 'Negeri'
		? 'text-orange'
		: 'text-primary'
})

const getBgEducationType = computed(() => {
	return props.item.details?.education_type === 'Negeri'
		? 'bg-orange'
		: 'bg-primary'
})

const getAccreditation = computed(() => {
	if (props.item.details?.accreditation.length === 1) {
		return props.item.details?.accreditation
	} else {
		switch (props.item.details?.accreditation) {
			case 'Unggul':
				return 'A+'
			case 'Baik Sekali':
				return 'B+'
			case 'Baik':
				return 'B'
			default:
				return ''
		}
	}
})

const getLocationn = computed(() => {
	const city = props.item.details?.campuses[0].city
	const province = props.item.details?.campuses[0].province
	if (city === '' && province === '') {
		return ''
	} else {
		return city + ', ' + province
	}
})
</script>
