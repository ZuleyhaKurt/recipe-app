import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className=' bg-orange-600 flex justify-between items-center p-3 gap-5' >
          <div><Link  to="/" ><h1 className='text-white font-bold text-xl '>Bella's Recipes</h1></Link></div>
          <div>
              <ul className='flex list-style-none gap-2'>
                  <Link  className='p-3 text-xl font-bold' to="/about">About</Link>
                  <a className='p-3 text-xl font-bold text-decoration-none' href="https://github.com/ZuleyhaKurt">Github</a> 
                  <Link className='p-3 text-xl font-bold' to="/login">Log Out</Link>
              </ul>
          </div>
    </div>
  )
}

export default Navbar