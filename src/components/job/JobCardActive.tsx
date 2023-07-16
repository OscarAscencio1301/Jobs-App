import { SingleJob } from "../../interfaces/jobs/jobs"

export const JobCardActive = ({ id, date, description, name, professionaldegree, type, status, selected, favorite }: SingleJob) => {
  return (
    <div className="card border rounded-lg flex">
      <div className="bg-hire relative flex items-center justify-center text-white bg-center w-full h-64 bg-cover bg-no-repeat z-10">
        <div className="bg-opacity-70 rounded-lg bg-black absolute top-0 w-full h-64"></div>
        <h2 className="text-xl z-10 text-center">¡Aplicado!</h2>
      </div>
      <div className="p-6 flex flex-col gap-6 it text-center">
        <h1 className="text-xl">{name}</h1>
        <h1 className="text-lg">{type}</h1>
        <button className="bg-red-600 text-white py-1 px-5 rounded-md flex-1">Cancelar</button>
      </div>
    </div>
  )
}
