import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CourseState = {
	enrolledCourseIds: string | number | null;
	progress: Record<string, number>;
};

type ProgressPayload = {
	progressKey: string | number;
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
			const { progressKey, progress } = action.payload;
			const key = String(progressKey);
			state.progress[key] = Math.max(state.progress[key] || 0, progress);
		},
	},
});

export const { setCourseId, clearCourses, updateProgress } = courseSlice.actions;
export default courseSlice.reducer;
