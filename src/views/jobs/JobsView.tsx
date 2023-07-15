import { useEffect } from "react";
import { FilterJobs } from "../../components/filter/FilterJobs";
import { JobList } from "../../components/job/JobList"
import { Search } from "../../components/search/Search";
import { useJobs } from "../../hooks/jobs/useJobs"
import { createServer } from 'miragejs';
import { data } from "../../data/data";
import { ModalJob } from "../../components/modal/ModalJob";

createServer({
    routes() {
        this.get('/api/jobs', () => {
            return data;
        });
    },
});

export const JobsView = () => {
    const { jobs, getJobs } = useJobs()

    useEffect(() => {
        getJobs()
        console.log(jobs)
    }, [])


    return (
        <>
            <div className="container mx-auto p-6">
                <ModalJob />
                <Search />
                <FilterJobs />
                <JobList jobs={jobs} />
            </div>
        </>
    )
}
