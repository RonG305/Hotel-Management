import { FiSettings, FiBookOpen, FiUser, FiDollarSign, FiAlertOctagon, } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import {Button} from 'flowbite-react'



const Sidebar = () => {
    const sidebarLinkStyles = 'flex gap-3 hover:bg-blue-700 cursor-pointer rounded-sm px-4 py-2 ease-in duration-300' 
  return (
      <div className=" md:w-72 h-[100vh] bg-blue-950  px-5 absolute ">
          <div className=" md:flex gap-3 items-center py-5">
              <img className=' w-16 md:w-20' src="../../public/logo.png" alt="" />
              
              <hr />
          </div>
          <div className='my-2'>
              <hr />
          </div>
          <div className=" text-blue-300">
              <ul className=" font-bold flex flex-col gap-5">
                  <li className={sidebarLinkStyles} ><RxDashboard  size={25}/><span className=' md:flex hidden'>Dashboard</span></li>
                  <li className={sidebarLinkStyles}><FiBookOpen size={25} /><span className=' md:flex hidden'>Bookings</span> </li>
                  <li className={sidebarLinkStyles}><FiUser size={25} /> <span className=' md:flex hidden'>Customers</span></li>
                  <li className={sidebarLinkStyles}><FiDollarSign size={25} /><span className=' md:flex hidden'>Payments</span></li>
                  <li className={sidebarLinkStyles}><FiAlertOctagon size={25}/><span className=' md:flex hidden'>Reports</span></li>
                  <li className={sidebarLinkStyles}><FiSettings size={25} /><span className=' md:flex hidden'>Settings</span></li>
                 

              </ul>
          </div>
    </div>
  )
}

export default Sidebar
