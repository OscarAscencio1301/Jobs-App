import { useEffect } from "react"
import { useComponents } from "../../hooks/components/useComponents"
import { useJobs } from "../../hooks/jobs/useJobs"



export const ModalJob = () => {

    const { jobSelect, selectJobAction } = useJobs()
    const { isOpenModal, changeViewModal, changeViewAlert } = useComponents()

    const addBTN = () => {
        if (!jobSelect) return
        selectJobAction(jobSelect)
        changeViewAlert()
    }

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpenModal])


    return (
        <div className={`bg-black bg-opacity-80 p-20 z-50 fixed overflow-hidden w-full h-full top-0 left-0 flex justify-center items-center ${isOpenModal ? 'flex overflow-hidden' : 'hidden'}`} onClick={changeViewModal}>
            <div className="bg-white p-4 sm:p-10 lg:p-26  rounded-lg flex flex-col gap-4 max-w-50">
                <h1 className="text-3xl lg:text-5xl">{jobSelect?.name}</h1>
                <h3 className="text-xl lg:text-3xl">{jobSelect?.type}</h3>
                <hr />
                <h4 className="text-md">{jobSelect?.date}<br />{jobSelect?.professionaldegree ? 'Título Profesional Necesario' : 'Título Profesional No Necesario'}</h4>
                <p className="text-sm md:text-xl">{jobSelect?.description}</p>
                <div className="flex justify-end items-center gap-4">
                    <button className="bg-red-600 text-white py-2 px-10 rounded-md flex-1">Cancelar</button>
                    <button className="bg-green-600 text-white py-2 px-10 rounded-md flex-1" onClick={addBTN}>Aplicar</button>

                </div>
            </div>

        </div>
    )
}
