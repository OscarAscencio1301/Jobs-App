import { JobList } from "../../components/job/JobList"
import { useJobs } from "../../hooks/jobs/useJobs"


export const JobsView = () => {
    const { jobs } = useJobs()
    return (
        <div className="container mx-auto p-6">
            <JobList jobs={jobs} />
        </div>
    )
}
