import {configureStore} from "@reduxjs/toolkit";
import courseReducer from "../slice/courseSlice.js";

export const store = configureStore({
    reducer: {
        courses: courseReducer,
    },
})

export default store;