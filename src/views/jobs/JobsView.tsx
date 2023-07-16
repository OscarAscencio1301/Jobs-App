import { useEffect } from "react";
import { FilterJobs } from "../../components/filter/FilterJobs";
import { JobList } from "../../components/job/JobList"
import { Search } from "../../components/search/Search";
import { useJobs } from "../../hooks/jobs/useJobs"
import { createServer } from 'miragejs';
import { data } from "../../data/data";
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
    }, [])


    return (
        <>
            <div className="container mx-auto p-6">
                <Search />
                <FilterJobs />
                <JobList jobs={jobs} />
            </div>
        </>
    )
}
