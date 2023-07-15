import { createSlice } from "@reduxjs/toolkit";
import { Jobs } from "../../interfaces/jobs/jobs";

const initialState: Jobs = {
    jobs: [],
    jobsLike: [],
    jobsSelected: [],
    jobsFilter: [],
    jobSelect: null
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        viewJob: (state, action) => {
            state.jobs = action.payload
        },
        selectJob: (state, action) => {
            state.jobsSelected.push(action.payload)
        },
        likeJob: (state, action) => {
            state.jobsLike.push(action.payload)
        }
    }

})

export const { viewJob, selectJob, likeJob } = jobSlice.actions;