import { FaBars } from 'react-icons/fa'
import { Mobile } from '../mobile-menu/Mobile'
import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  const [viewMobile, setviewMobile] = useState(false)

  const changeView = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setviewMobile(!viewMobile)
  }

  return (
    <>
      <div className="bg-green-900 overflow-hidden max-w-full py-4 px-11 flex justify-between items-center">
        <Link to={'/'}><h1 className="text-white text-5xl">Jobs</h1></Link>
        <div className="block lg:hidden" onClick={changeView}>
          <FaBars color="white" size="25px" />
        </div>
        <div className="hidden lg:flex gap-20" onClick={changeView}>
          <Link to={'/'} className='text-2xl text-white hover:scale-125'>Jobs</Link>
          <Link to={'/favorites'} className='text-2xl text-white hover:scale-125'>Favorites</Link>
          <Link to={'/selected'} className='text-2xl text-white hover:scale-125'>Selected</Link>
        </div>
      </div>
      <Mobile viewMobile={viewMobile} changeView={changeView} />
    </>
  )
}
