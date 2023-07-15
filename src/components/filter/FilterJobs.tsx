import { useJobs } from "../../hooks/jobs/useJobs"

const filters = [
    {
        id: 1,
        label: 'Tiempo Completo'
    },
    {
        id: 2,
        label: 'Medio Tiempo'
    },
    {
        id: 3,
        label: 'Home Office'
    }
]


export const FilterJobs = () => {

    const { filterJobAction } = useJobs()



    return (
        <>
            <h3>Filtrar empleos de:</h3>
            <div className="flex justify-center flex-wrap gap-10 mt-2 mb-8">
                {
                    filters.map(filter => <button key={filter.id} className="bg-green-800 text-white py-2 px-10 rounded-md flex-1" onClick={() => filterJobAction(filter.label)}>{filter.label}</button>)
                }

            </div>
        </>
    )
}
