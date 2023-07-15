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
            state.jobsFilter = action.payload
        },
        selectJob: (state, action) => {
            state.jobsSelected.push(action.payload)
        },
        likeJob: (state, action) => {
            state.jobsLike.push(action.payload)
        },
        searchJob: (state, action) => {
            state.jobs = state.jobsFilter.filter(job => job.name.toLowerCase().includes(action.payload.toLowerCase()))
        },
        filterJob: (state, action) => {
            state.jobs = state.jobsFilter.filter(job => job.type.toLowerCase().includes(action.payload.toLowerCase()))
        },
        orderJob: (state) => {
            state.jobs.sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return dateA - dateB;
            })
        },
    }

})

export const { searchJob, filterJob, viewJob, selectJob, likeJob, orderJob } = jobSlice.actions;