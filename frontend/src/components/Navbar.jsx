import {FiUser} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div>
      <nav className=" h-16 shadow-md flex items-center justify-between px-6">
        <h1>Dashboard</h1>
        <div className=" flex gap-3">
          <FiUser size={25} className=" bg-blue-600 rounded-full text-white" />
          <p className=" font-bold">Ronald</p>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
