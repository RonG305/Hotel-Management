import { FiSettings, FiBookOpen, FiUser, FiDollarSign, FiAlertOctagon } from 'react-icons/fi'
import { RxDashboard, RxHome } from 'react-icons/rx'

import { Link } from 'react-router-dom'



const Sidebar = () => {
    const sidebarLinkStyles = 'flex gap-3 hover:bg-blue-700 cursor-pointer rounded-sm px-4 py-2 ease-in duration-300' 
  return (
      <div className=" md:w-72 h-[100vh] bg-blue-950  px-5 fixed ">
          <div className="items-center gap-3 py-5  md:flex">
              <img className='w-16  md:w-20' src="../../public/logo.png" alt="" />
              
              <hr />
          </div>
          <div className='my-2'>
              <hr />
          </div>
          <div className="text-blue-300 ">
              <ul className="flex flex-col gap-5 font-bold ">
                  <Link to='/'><li className={sidebarLinkStyles} ><RxDashboard size={25} /><span className='hidden  md:flex'>Dashboard</span></li></Link>
                  <Link to='bookings/'><li className={sidebarLinkStyles}><FiBookOpen size={25} /><span className='hidden  md:flex'>Bookings</span> </li></Link>
                  <Link to='rooms/'><li className={sidebarLinkStyles}><RxHome size={25} /><span className='hidden  md:flex'>Rooms</span> </li></Link>
                  <Link to='customers/'> <li className={sidebarLinkStyles}><FiUser size={25} /> <span className='hidden  md:flex'>Customers</span></li></Link>
                  <Link to='payment/' > <li className={sidebarLinkStyles}><FiDollarSign size={25} /><span className='hidden  md:flex'>Payments</span></li></Link>
                 
                  <li className={sidebarLinkStyles}><FiAlertOctagon size={25}/><span className='hidden  md:flex'>Reports</span></li>
                  <li className={sidebarLinkStyles}><FiSettings size={25} /><span className='hidden  md:flex'>Settings</span></li>
                 

              </ul>
          </div>
    </div>
  )
}

export default Sidebar
