
import { useEffect, useState } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import { useJobs } from "../../hooks/jobs/useJobs"

export const Search = () => {

    const [search, setsearch] = useState('')
    const { searchJobAction, orderJobAction } = useJobs()

    useEffect(() => {
        searchJobAction(search)
    }, [search])



    return (
        <div className="py-6 sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">Buscar empleo por nombre</label>
            <div className="mt-2 flex gap-4">
                <input placeholder="Programador..." type="search" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 pr-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setsearch(e.target.value)}
                />
                <button className="bg-green-800 text-white p-2 rounded-full flex-1" onClick={orderJobAction}>  <FaArrowUp color="white" size="10px" />  <FaArrowDown color="white" size="10px" /></button>
            </div>
        </div>
    )
}
