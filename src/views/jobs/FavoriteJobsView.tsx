import { JobList } from "../../components/job/JobList"
import { useJobs } from "../../hooks/jobs/useJobs"


export const FavoriteJobsView = () => {
    const { jobsLike } = useJobs()
    return (
        <div className="container mx-auto p-6">
            <JobList jobs={jobsLike}/>
        </div>
    )
}
