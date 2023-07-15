

export const FilterJobs = () => {
    return (
        <>
            <h3>Filtrar empleos de:</h3>
            <div className="flex justify-center gap-10 mt-2 mb-8">
                <button className="bg-green-800 text-white py-2 px-10 rounded-md flex-1">Tiempo Completo</button>
                <button className="bg-green-800 text-white py-2 px-10 rounded-md flex-1">Medio Tiempo</button>
                <button className="bg-green-800 text-white py-2 px-10 rounded-md flex-1">Home Office</button>
                <button className="bg-green-800 text-white py-2 px-10 rounded-md flex-1">Titulo Profesional</button>
                <button className="bg-green-800 text-white py-2 px-10 rounded-md flex-1">Sin título</button>
            </div>
        </>
    )
}
