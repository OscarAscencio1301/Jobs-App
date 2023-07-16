import { JobActive } from "../../components/job/JobsActive"
import { useJobs } from "../../hooks/jobs/useJobs"

export const SelectedJobsView = () => {
  const { jobsSelected } = useJobs()
  return (
    <div className="container mx-auto p-6">
      <JobActive jobs={jobsSelected} />
    </div>
  )
}
