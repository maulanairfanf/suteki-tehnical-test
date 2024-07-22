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

			try {
				const data = await $fetch('/api/open/college/all', {
					params: params,
				})
				if (data) {
					if (this.paginationCollege.page === 1) {
						this.colleges = data.data
					} else {
						this.colleges = [...this.colleges, ...data.data]
					}
					this.paginationCollege.page = data.meta.currentPage
					this.paginationCollege.total = data.meta.totalItems
					await this.fetchCollegeDetails(data.data)
				}
			} catch (error) {
				console.error('An error occurred while fetching colleges:', error)
			}
		},

		async fetchCollegeDetails(colleges) {
			if (colleges.length === 0) return

			try {
				const detailsPromises = colleges.map(college =>
					$fetch(`/api/open/college/${college.id}`)
				)
				const detailsResponses = await Promise.all(detailsPromises)
				const updatedColleges = colleges.map((college, index) => ({
					...college,
					details: detailsResponses[index][0],
				}))
				this.colleges = this.colleges.map(college => {
					const updated = updatedColleges.find(c => c.id === college.id)
					return updated ? updated : college
				})
				console.log('data fetchAllColleges', this.colleges)
			} catch (error) {
				console.error(
					'An error occurred while fetching college details:',
					error
				)
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
				perPage: this.paginationStudyProgram.perPage,
				page: this.paginationStudyProgram.page,
				full: true,
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
						this.studyPrograms = [...this.studyPrograms, ...data.data]
					}
					this.paginationStudyProgram.page = data.meta.currentPage
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
