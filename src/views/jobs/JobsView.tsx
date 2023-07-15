import { useEffect } from "react";
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
                    type: 'Tiempo Completo',
                    status: true
                },
                {
                    id: '12r3',
                    name: 'Tortero',
                    date: '2023/12/08',
                    descrition: 'Empacar pollos y entregarlos',
                    professionaldegree: true,
                    type: 'Medio Tiempo',
                    status: true
                },
                {
                    id: '123er',
                    name: 'Tamalero',
                    date: '2023/12/09',
                    descrition: 'Empacar pollos y entregarlos',
                    professionaldegree: true,
                    type: 'Home Office',
                    status: true
                }, {
                    id: '1235',
                    name: 'Dictadir',
                    date: '2023/12/03',
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
    const { jobs, getJobs } = useJobs()

    useEffect(() => {
        getJobs()
    }, [])


    return (
        <div className="container mx-auto p-6">
            <Search />
            <FilterJobs />
            <JobList jobs={jobs} />
        </div>
    )
}
