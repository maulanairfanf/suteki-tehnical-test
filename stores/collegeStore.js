import { defineStore } from 'pinia'

export const useCollegeStore = defineStore('collegeStore', {
	state: () => ({
		colleges: [],
		banner: [],
		studyPrograms: [],
		paginationCollege: {
			page: 1,
			perPage: 0,
			total: 10,
		},
		paginationStudyProgram: {
			page: 1,
			perPage: 0,
			total: 10,
		},
	}),

	actions: {
		async fetchAllColleges() {
			const params = {
				perPage: this.paginationCollege.perPage,
				page: this.paginationCollege.page,
			}

			try {
				const data = await $fetch('/api/open/college/all', {
					param: params,
				})
				console.log('data fetchAllColleges', data)
				if (data) {
					if (this.paginationCollege.page === 1) {
						this.colleges = data.data
					} else {
						this.colleges = [...this.colleges, ...data.data]
					}
					this.paginationCollege.page = data.meta.currentPage
					this.paginationCollege.perPage = data.meta.collegePerPage
					this.paginationCollege.total = data.meta.totalItems
				}
			} catch (error) {
				console.error('An error occurred while fetching colleges:', error)
			}
		},

		async fetchBanner() {
			try {
				const data = await $fetch('/api/open/banner/all', {
					params: { position: 'home-banner' },
				})
				console.log('data fetchBanner', data.data)

				if (data) {
					this.banner = data.data
				}
			} catch (error) {
				console.error('An error occurred while fetching banner:', error)
			}
		},

		async fetchStudyPrograms() {
			const params = {
				perPage: this.paginationCollege.perPage,
				page: this.paginationCollege.page,
			}
			try {
				const data = await $fetch('/api/open/studyprogram/all', {
					params: params,
				})
				console.log('data fetchStudyPrograms', data)

				if (data) {
					if (this.paginationStudyProgram.page === 1) {
						this.studyPrograms = data.data
					} else {
						this.studyPrograms = [...this.colleges, ...data.data]
					}
					this.paginationStudyProgram.page = data.meta.currentPage
					this.paginationStudyProgram.perPage = data.meta.collegePerPage
					this.paginationStudyProgram.total = data.meta.totalItems
				}
			} catch (error) {
				console.error('An error occurred while fetching study programs:', error)
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
