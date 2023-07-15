import { useComponents } from "../../hooks/components/useComponents"
import { useJobs } from "../../hooks/jobs/useJobs"



export const ModalJob = () => {

    const { jobSelect, selectJobAction } = useJobs()
    const { isOpenModal, changeViewModal } = useComponents()

    const addBTN = () => {
        if(!jobSelect) return
        selectJobAction(jobSelect)
    }


    return (
        <div className={`bg-black bg-opacity-80 p-20 z-50 overflow-hidden w-full h-full top-0 left-0 fixed flex justify-center items-center ${isOpenModal ? 'flex' : 'hidden'}`} onClick={changeViewModal}>
            <div className="bg-white p-10 lg:p-36  rounded-lg flex flex-col gap-4">
                <h1 className="text-5xl">{jobSelect?.name}</h1>
                <h3 className="text-3xl">{jobSelect?.type}</h3>
                <hr />
                <h4>{jobSelect?.date} {jobSelect?.professionaldegree ? 'Título Profesional Necesario' : 'Título Profesional No Necesario'}</h4>
                <p className="text-sm md:text-xl">{jobSelect?.description}</p>
                <div className="flex justify-end items-center gap-4">
                    <button className="bg-red-600 text-white py-2 px-10 rounded-md flex-1">Cancelar</button>
                    <button className="bg-green-600 text-white py-2 px-10 rounded-md flex-1" onClick={addBTN}>Aplicar</button>

                </div>
            </div>

        </div>
    )
}
