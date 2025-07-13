import courseIdReducer from '../slice/courseIdSlice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        courseId: courseIdReducer,
    },
})

export default store;