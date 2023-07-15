import { useJobs } from "../../hooks/jobs/useJobs"
import { SingleJob } from "../../interfaces/jobs/jobs"
import { JobCard } from "./JobCard"


export const JobList = ({ jobs }: { jobs: SingleJob[] }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                jobs?.map(job => <JobCard key={job.id} {...job} />)
            }
        </div>
    )
}
