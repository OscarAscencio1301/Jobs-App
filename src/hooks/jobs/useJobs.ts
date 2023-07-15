import { useDispatch, useSelector } from "react-redux"
import { GlobalSlice } from "../../interfaces/global/global"
import { Jobs, SingleJob } from "../../interfaces/jobs/jobs"
import { likeJob, selectJob } from "../../store/jobs/jobs.Slice"


export const useJobs = () => {

    const { jobs, jobSelect, jobsFilter, jobsLike, jobsSelected } = useSelector<GlobalSlice, Jobs>(state => state.jobs)
    const dispatch = useDispatch()

    const selectJobAction = (job: SingleJob) => {
        dispatch(selectJob(job))
    }

    const likeJobAction = (job: SingleJob) => {
        dispatch(likeJob(job))
    }

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
