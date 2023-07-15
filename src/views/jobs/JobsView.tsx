import { FilterJobs } from "../../components/filter/FilterJobs";
import { JobList } from "../../components/job/JobList"
import { Search } from "../../components/search/Search";
import { useJobs } from "../../hooks/jobs/useJobs"


import { createServer } from 'miragejs';

createServer({
    routes() {
        this.get('/api/jobs', () => {
            return [
                {
                    id: '123',
                    name: 'Empacador',
                    date: '2023/12/07',
                    descrition: 'Empacar pollos y entregarlos',
                    professionaldegree: true,
                    type: 'Completo',
                    status: true
                },
                {
                    id: '123',
                    name: 'Empacador',
                    date: '2023/12/07',
                    descrition: 'Empacar pollos y entregarlos',
                    professionaldegree: true,
                    type: 'Completo',
                    status: true
                },
                {
                    id: '123',
                    name: 'Empacador',
                    date: '2023/12/07',
                    descrition: 'Empacar pollos y entregarlos',
                    professionaldegree: true,
                    type: 'Completo',
                    status: true
                }, {
                    id: '123',
                    name: 'Empacador',
                    date: '2023/12/07',
                    descrition: 'Empacar pollos y entregarlos',
                    professionaldegree: true,
                    type: 'Completo',
                    status: true
                },
            ];
        });
    },
});

export const JobsView = () => {
    const { jobs } = useJobs()
    return (
        <div className="container mx-auto p-6">
            <Search />
            <FilterJobs />
            <JobList jobs={jobs} />
        </div>
    )
}
