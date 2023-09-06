import { FiUser, } from 'react-icons/fi'

import { useState } from 'react'


const Navbar = () => {
  
  return (
    <div>
      <nav className="flex items-center justify-between h-16 px-6 shadow-md ">
    
        <div className="flex gap-3 ">
          <FiUser size={25} className="text-white bg-blue-600 rounded-full " />
          <p className="font-bold ">Ronald</p>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
