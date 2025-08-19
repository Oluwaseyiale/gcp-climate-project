// slice/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrolledCourseIds: null,  
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
    },
});

export const { setCourseId, addCourseId, clearCourses } = courseSlice.actions;
export default courseSlice.reducer;
