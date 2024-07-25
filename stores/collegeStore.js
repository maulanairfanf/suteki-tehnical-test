import { defineStore } from 'pinia'

export const useCollegeStore = defineStore('collegeStore', {
	state: () => ({
		colleges: [],
		banner: [],
		studyPrograms: [],
		paginationCollege: {
			page: 1,
			perPage: 1,
			total: 0,
		},
		paginationStudyProgram: {
			page: 1,
			perPage: 8,
			total: 0,
		},
	}),

	actions: {
		async fetchAllColleges() {
			const params = {
				perPage: this.paginationCollege.perPage,
				page: this.paginationCollege.page,
			}

			const { data, error } = await useApi('/open/college/all', {
				...params,
			})

			if (data) {
				console.log('data fetchAllColleges', data)

				if (this.paginationCollege.page === 1) {
					this.colleges = data.value.data
				} else {
					this.colleges = [...this.colleges, ...data.value.data]
				}
				this.paginationCollege.page = data.value.meta.currentPage
				this.paginationCollege.total = data.value.meta.totalItems
				await this.fetchCollegeDetails(data.value.data)
			} else {
				console.error('Error fetching colleges:', error.value)
			}
		},

		async fetchCollegeDetails(colleges) {
			if (colleges.length === 0) return

			const detailsPromises = colleges.map(college =>
				useApi(`/open/college/${college.id}`)
			)
			const detailsResponses = await Promise.all(detailsPromises)

			const updatedColleges = colleges.map((college, index) => ({
				...college,
				details: detailsResponses[index].data.value,
			}))

			this.colleges = this.colleges.map(college => {
				const updated = updatedColleges.find(c => c.id === college.id)
				return updated ? updated : college
			})
			// console.log('data fetchAllColleges', this.colleges)
		},

		async fetchBanner() {
			const { data, error } = await useApi('/open/banner/all', {
				position: 'home-banner',
			})
			if (data) {
				console.log('data fetchBanner', data)
				this.banner = data.value.data
			} else {
				console.error('Error fetching banner:', error)
				this.banner = []
			}
		},

		async fetchStudyPrograms(payload) {
			const params = {
				perPage: this.paginationStudyProgram.perPage,
				page: this.paginationStudyProgram.page,
				full: true,
			}

			const { data, error, refresh } = await useApi(
				'/open/studyprogram/all',
				{
					...params,
				},
				{ server: payload ? payload : true }
			)

			this.refreshStudy = refresh()
			if (data) {
				if (this.paginationStudyProgram.page === 1) {
					this.studyPrograms = data.value.data
				} else {
					this.studyPrograms = [...this.studyPrograms, ...data.value.data]
				}
				this.paginationStudyProgram.page = data.value.meta.currentPage
				this.paginationStudyProgram.total = data.value.meta.totalItems
			} else {
				console.error('Error fetching study programs:', error.value)
			}
		},

		async loadMoreColleges() {
			this.paginationCollege.page += 1
		},

		async loadMoreStudyPrograms() {
			this.paginationStudyProgram.page += 1
			await this.fetchStudyPrograms(false)
		},
	},
})
