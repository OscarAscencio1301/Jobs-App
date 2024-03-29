
import { SingleJob } from "../../interfaces/jobs/jobs"

export const JobCardActive = ({ date, name, type }: SingleJob) => {


  return (
    <div className="card border rounded-lg flex">
      <div className="bg-hire relative flex items-center justify-center text-white bg-center w-full h-64 bg-cover bg-no-repeat z-10">
        <div className="bg-opacity-70 rounded-lg bg-black absolute top-0 w-full h-64"></div>
        <h2 className="text-xl z-10 text-center">¡Aplicado!</h2>
      </div>
      <div className="p-6 flex flex-col gap-6 it text-center">
        <h1 className="text-xl">{name}</h1>
        <h1 className="text-lg">{type}</h1>
        <h1 className="text-lg">{date}</h1>
      </div>
    </div>
  )
}
