import { FaHeart } from "react-icons/fa"
import { SingleJob } from "../../interfaces/jobs/jobs"
import { useJobs } from "../../hooks/jobs/useJobs"

export const JobCard = ({id, date, descrition, name, professionaldegree, type, status}:SingleJob) => {

    const {selectJobAction, likeJobAction} = useJobs()

    const addButton = () => {
        selectJobAction({id, date, descrition, name, professionaldegree, type, status})
    }

    const likeButton = () => {
        likeJobAction({id, date, descrition, name, professionaldegree, type, status})
    }

    return (
        <div className="card border rounded-lg">
            <div className="bg-hire relative flex items-center justify-center text-white bg-center w-full h-64 bg-cover bg-no-repeat z-10">
                <div className="bg-opacity-70 rounded-lg bg-black absolute top-0 w-full h-64"></div>
                <h2 className="text-5xl z-10 text-center">{name}</h2>
            </div>
            <div className="p-6 flex flex-col gap-6 it text-center">
                <h1 className="text-5xl">{type}</h1>
                <p>{descrition}</p>
                <div className="flex items-center gap-3">
                    <div className="" onClick={likeButton}>
                        <FaHeart color="green" size="35px"  />
                    </div>
                    <button className="bg-green-600 text-white py-2 px-10 rounded-md flex-1" onClick={addButton}>Solicitar</button>

                </div>
            </div>
        </div>
    )
}
