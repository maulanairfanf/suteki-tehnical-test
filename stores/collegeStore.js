import { defineStore } from 'pinia'

export const useCollegeStore = defineStore('collegeStore', {
	state: () => ({
		colleges: [],
		banner: [],
		studyPrograms: [],
		paginationCollege: {
			page: 1,
			perPage: 8,
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

			const { data, error } = await useApiFetch('/api/open/college/all', {
				params: params,
			})

			if (data) {
				console.log('data fetchAllColleges', data)

				if (this.paginationCollege.page === 1) {
					this.colleges = data.data
				} else {
					this.colleges = [...this.colleges, ...data.data]
				}
				this.paginationCollege.page = data.meta.currentPage
				this.paginationCollege.total = data.meta.totalItems
				await this.fetchCollegeDetails(data.data)
			} else {
				console.error('Error fetching colleges:', error)
			}
		},

		async fetchCollegeDetails(colleges) {
			if (colleges.length === 0) return

			const detailsPromises = colleges.map(college =>
				useApiFetch(`/api/open/college/${college.id}`)
			)
			const detailsResponses = await Promise.all(detailsPromises)

			const updatedColleges = colleges.map((college, index) => ({
				...college,
				details: detailsResponses[index].data[0],
			}))

			this.colleges = this.colleges.map(college => {
				const updated = updatedColleges.find(c => c.id === college.id)
				return updated ? updated : college
			})
		},

		async fetchBanner() {
			const params = {
				position: 'home-banner',
			}
			const { data, error } = await useApiFetch('/api/open/banner/all', {
				params: params,
			})
			if (data) {
				console.log('data fetchBanner', data)
				this.banner = data.data
			} else {
				console.error('Error fetching banner:', error)
				this.banner = []
			}
		},

		async fetchStudyPrograms() {
			const params = {
				perPage: this.paginationStudyProgram.perPage,
				page: this.paginationStudyProgram.page,
				full: true,
			}

			const { data, error } = await useApiFetch('/api/open/studyprogram/all', {
				params: params,
			})
			console.log('data fetchStudyPrograms', data)
			if (data) {
				if (this.paginationStudyProgram.page === 1) {
					this.studyPrograms = data.data
				} else {
					this.studyPrograms = [...this.studyPrograms, ...data.data]
				}
				this.paginationStudyProgram.page = data.meta.currentPage
				this.paginationStudyProgram.total = data.meta.totalItems
			} else {
				console.error('Error fetching study programs:', error)
			}
		},

		async loadMoreColleges() {
			this.paginationCollege.page += 1
			await this.fetchAllColleges()
		},

		async loadMoreStudyPrograms() {
			this.paginationStudyProgram.page += 1
			await this.fetchStudyPrograms()
		},
	},
})
