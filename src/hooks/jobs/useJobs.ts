import { useDispatch, useSelector } from "react-redux"
import { GlobalSlice } from "../../interfaces/global/global"
import { Jobs, SingleJob } from "../../interfaces/jobs/jobs"
import { likeJob, selectJob, viewJob } from "../../store/jobs/jobs.Slice"
import axios from "axios"
import { useEffect, useState } from "react"


export const useJobs = () => {

    const [jobss, setjobs] = useState<SingleJob[]>([])

    const { jobs, jobSelect, jobsFilter, jobsLike, jobsSelected } = useSelector<GlobalSlice, Jobs>(state => state.jobs)
    const dispatch = useDispatch()

    const selectJobAction = (job: SingleJob) => {
        dispatch(selectJob(job))
    }

    const likeJobAction = (job: SingleJob) => {
        dispatch(likeJob(job))
    }

    const getJobs = async () => {
        try {
            const response = await fetch('/api/jobs');
            const data = await response.json();

            dispatch(viewJob(data))
           
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getJobs()
    }, [])


    return {
        // Properties
        jobs,
        jobSelect,
        jobsFilter,
        jobsLike,
        jobsSelected,

        // Actions
        selectJobAction,
        likeJobAction
    }
}
