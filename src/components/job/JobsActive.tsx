
import { SingleJob } from "../../interfaces/jobs/jobs"
import { JobCardActive } from "./JobCardActive"

interface JobListProps {
    jobs: SingleJob[],
}

export const JobActive = ({ jobs }:JobListProps ) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-full">
            {
                jobs?.map(job => <JobCardActive key={job.id} {...job} />)
            }
        </div>
    )
}
