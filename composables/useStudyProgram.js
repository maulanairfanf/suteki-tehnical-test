import { useFetch } from 'nuxt/app'

export const useStudyProgram = params => {
	const {
		data: studyProgramList,
		error: StudyProgramError,
		pending: studyProgramPending,
		execute: fetchStudyProgram,
	} = useFetch('/api/open/studyprogram/all', {
		params: params,
	})

	return {
		studyProgramList,
		StudyProgramError,
		studyProgramPending,
		fetchStudyProgram,
	}
}
