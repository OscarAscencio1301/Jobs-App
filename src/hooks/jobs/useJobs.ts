import { useDispatch, useSelector } from "react-redux"
import { GlobalSlice } from "../../interfaces/global/global"
import { Jobs, SingleJob } from "../../interfaces/jobs/jobs"
import { activateJob, filterJob, likeJob, orderJob, searchJob, selectJob, viewJob } from "../../store/jobs/jobs.Slice"


export const useJobs = () => {


    const { jobs, jobSelect, jobsFilter, jobsLike, jobsSelected } = useSelector<GlobalSlice, Jobs>(state => state.jobs)
    const dispatch = useDispatch()

    const selectJobAction = (job: SingleJob) => {
        dispatch(selectJob(job))
    }
    const activateJobAction = (job: SingleJob) => {
        dispatch(activateJob(job))
    }

    const likeJobAction = (job: SingleJob) => {
        dispatch(likeJob(job))
    }

    const searchJobAction = (search: string) => {
        dispatch(searchJob(search))
    }
    const filterJobAction = (filter: string) => {
        dispatch(filterJob(filter))
    }

    const orderJobAction = () => {
        dispatch(orderJob())
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



    return {
        // Properties
        jobs,
        jobSelect,
        jobsFilter,
        jobsLike,
        jobsSelected,

        // Actions
        getJobs,
        activateJobAction,
        selectJobAction,
        likeJobAction,
        searchJobAction,
        filterJobAction,
        orderJobAction
    }
}
