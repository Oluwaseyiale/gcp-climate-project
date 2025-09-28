// slice/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledCourseIds: null,
  progress: {},
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourseId: (state, action) => {
      state.enrolledCourseIds = action.payload;
    },
    clearCourses: (state) => {
      state.courseId = null;
    },
    updateProgress: (state, action) => {
      const { courseId, progress } = action.payload;
      state.progress[courseId] = progress; // overwrite or update
    },
  },
});

export const { setCourseId, addCourseId, clearCourses, updateProgress } = courseSlice.actions;
export default courseSlice.reducer;
