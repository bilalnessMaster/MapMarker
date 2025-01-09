import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <header className='w-full px-3 py-2 border-b flex  items-center gap-2 uppercase font-medium text-indigo-500'>
            <Link to='/create'>
               Ajouter
            </Link>
            <Link to='/'>
               afficher
            </Link>
        </header>
        <Outlet />
    </>

  )
}

export default NavBar