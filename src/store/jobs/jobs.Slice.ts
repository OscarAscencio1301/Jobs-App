import { createSlice } from "@reduxjs/toolkit";
import { Jobs } from "../../interfaces/jobs/jobs";

const initialState: Jobs = {
    jobs: [
        {
            id: '123',
            name: 'Empacador',
            date: '2023/12/07',
            descrition: 'Empacar pollos y entregarlos',
            professionaldegree: true,
            type: 'Completo',
            status: true
        },

    ],
    jobsLike: [],
    jobsSelected: [],
    jobsFilter: [
        {
            id: '123',
            name: 'Empacador',
            date: '2023/12/07',
            descrition: 'Empacar pollos y entregarlos',
            professionaldegree: true,
            type: 'Completo',
            status: true
        },

    ],
    jobSelect: null
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        selectJob: (state, action) => {
            state.jobsSelected.push(action.payload)
        },
        likeJob: (state, action) => {
            state.jobsLike.push(action.payload)
        }
    }

})

export const { selectJob, likeJob } = jobSlice.actions;