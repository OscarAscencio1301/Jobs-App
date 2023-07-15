import { configureStore } from "@reduxjs/toolkit";
import { jobSlice } from "./jobs/jobs.Slice";

export const store = configureStore({
    reducer: {
        jobs: jobSlice.reducer
    }
})