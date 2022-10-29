import React from 'react'

const Navbar = () => {
  return (
      <div className=' bg-gray-600 flex justify-between items-center p-3 gap-5' >
          <div><h1 className='text-white font-bold text-xl '>Bella's Recipes</h1></div>
          <div>
              <ul className='flex list-style-none gap-2'>
                  <li className='p-3 text-xl font-bold'>About</li>
                  <li className='p-3 text-xl font-bold'>Github</li>
                  <li className='p-3 text-xl font-bold'>Log Out</li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar