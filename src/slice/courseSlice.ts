import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CourseState = {
	enrolledCourseIds: string | number | null;
	progress: Record<string, number>;
};

type ProgressPayload = {
	courseId: string | number;
	progress: number;
};

const initialState: CourseState = {
	enrolledCourseIds: null,
	progress: {},
};

const courseSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		setCourseId: (state, action: PayloadAction<string | number | null>) => {
			state.enrolledCourseIds = action.payload;
		},
		clearCourses: (state) => {
			state.enrolledCourseIds = null;
			state.progress = {};
		},
		updateProgress: (state, action: PayloadAction<ProgressPayload>) => {
			const { courseId, progress } = action.payload;
			state.progress[String(courseId)] = progress;
		},
	},
});

export const { setCourseId, clearCourses, updateProgress } = courseSlice.actions;
export default courseSlice.reducer;
