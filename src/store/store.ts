import { configureStore } from "@reduxjs/toolkit";
import { jobSlice } from "./jobs/jobs.Slice";
import { componentsSlice } from "./components/components.Slice";

export const store = configureStore({
    reducer: {
        jobs: jobSlice.reducer,
        components: componentsSlice.reducer
    }
})