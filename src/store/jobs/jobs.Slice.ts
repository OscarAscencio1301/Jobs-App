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
        activateJob: (state, action) => {
            state.jobSelect = action.payload
        },
        selectJob: (state, action) => {
            state.jobsSelected.push(action.payload)
        },
        likeJob: (state, action) => {
            state.jobsLike.push(action.payload)
            state.jobs = state.jobs.map(job => job.id === action.payload.id ? action.payload : job)
        },
       deleteJob: (state, action) => {
            state.jobsSelected = state.jobsSelected.filter(job => job.id !== action.payload.id)
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

export const { activateJob, searchJob, deleteJob, filterJob, viewJob, selectJob, likeJob, orderJob } = jobSlice.actions;