import { MouseEvent } from "react"
import { Link } from "react-router-dom"

interface MobileProps {
    viewMobile: boolean
    changeView: (e: MouseEvent<HTMLDivElement>) => void
}

export const Mobile = ({ viewMobile, changeView }: MobileProps) => {
    return (
        <div className={`bg-black bg-opacity-50 z-50 fixed top-0 w-full h-screen transition-all duration-300 ${viewMobile ? 'translate-x-0 lg:hidden' : 'hidden translate-x-full'}`} onClick={changeView}>
            <div className="bg-green-900 bg-opacity-100 absolute w-10/12 opacity-100 top-0 h-screen z-30 p-20 right-0">
                <h1 className="text-white text-center text-5xl">Jobs</h1>
                <div className="mt-10 flex flex-col justify-center gap-10 text-center" onClick={changeView}>
                    <Link to={'/'} className='text-2xl border-b-2 pb-2 mt-10 text-white hover:scale-125'>Jobs</Link>
                    <Link to={'/favorites'} className='text-2xl border-b-2 pb-2 text-white hover:scale-125'>Favorites</Link>
                    <Link to={'/selected'} className='text-2xl border-b-2 pb-2 text-white hover:scale-125'>Selected</Link>
                </div>
            </div>
        </div>
    )
}
