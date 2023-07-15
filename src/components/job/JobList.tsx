
import { SingleJob } from "../../interfaces/jobs/jobs"
import { JobCard } from "./JobCard"


export const JobList = ({ jobs }: { jobs: SingleJob[] }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-full">
            {
                jobs?.map(job => <JobCard key={job.id} {...job} />)
            }
        </div>
    )
}
