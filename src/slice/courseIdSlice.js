import {createSlice,} from '@reduxjs/toolkit'

const initialState = {
    courseId: null,
}

const courseIdSlice = createSlice({
    name: 'courseId',
    initialState,
    reducers: {
        setCourseId: (state, action) => {
            state.courseId = action.payload
        },
    },
})

export const {setCourseId} = courseIdSlice.actions
export default courseIdSlice.reducer