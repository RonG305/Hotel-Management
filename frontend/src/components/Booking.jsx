import { FiPlus, FiEdit, FiEye } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Search from './Search'

import Skeleton from 'react-loading-skeleton'


const itemsPerPage = 10

const Booking = () => {

  const params = useParams()

  const [bookings, setBookings] = useState([])
  const [bookingCount, setBookingCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);



  const handleBookingSearch = (searchTerm) => {
    if (!searchTerm) {
        setBookings(bookings.data)
    } else {
      const filteredBookings = bookings.filter((booking) => booking.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
      setBookings(filteredBookings)
      }
  }

  
  const fetchBookings = async (delayInMilliseconds) => {
    try {
      setTimeout(async() => {
        const response = await fetch('http://localhost:8000/api/booking/')
        const data = await response.json()
        setBookings(data.bookings)
        setBookingCount(data.booking_count)
        console.log(data)
          
      }, delayInMilliseconds)
     
    } catch (error) {
      console.log('error, occured while fetching the data', error)
    }
  }


  useEffect(() => {
    fetchBookings(1000)
  }, [])

    // Calculate the range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = bookings.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
  
  const handleDelete = async (params) => {
    try {
      const response = await fetch(`http://localhost:8000/api/booking/${params}`, {
        method: 'DELETE'
      })
  
      if (response.ok) {
        fetchBookings()
      }
      else {
        console.log('failed to delete booking')
      }
    } catch (error) {
      console.log('An error occured while deleting booking', error)
    }
    

  }

  

  return (
    <div className="overflow-x-auto ">
      
      <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
            <div>
              <h2 className='text-2xl font-bold '>Booking List</h2>
              <p>You have {bookingCount} rooms booked</p>
            </div>
            
            {/* Search  */}
            <Search onSearch={handleBookingSearch}/>
            {/* End Search */}
            <Link to='addBooking/' className="flex items-center justify-center w-10 h-10 text-white bg-purple-700 rounded ">
                  <FiPlus size={25}  />
             </Link>
             
      </div>
     
      <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-400 ">
              
              <thead className="uppercase bg-blue-100 ">
                
                        <tr>
                        <th className='px-6 py-6 '>ID</th>    
                        <th className="px-6 py-6 ">Customer</th>
                        <th className="px-6 py-6 ">Room Number</th>
                        <th className="px-6 py-6 ">Room Type</th>
                        <th className="px-6 py-6 ">Mobile</th>
                        <th className="px-6 py-6 ">Arive</th>
                        <th className="px-6 py-6 ">Depart</th>
                        <th className="px-6 py-6 ">Payment</th>
                        <th className='px-6 py-6 '>status</th>   
                        <th>Actions</th>
                    </tr>
                    </thead>
      
              <tbody>
          {itemsToShow.map((booking, index) => (
                  
                <tr key={index} className='border '>
                    <td className="px-6 py-6 ">{ booking.id}</td>
                    <td className="px-6 py-6 ">
                      <tr className='flex flex-col '>
                        <td>{booking.first_name} {booking.last_name}</td>
                        <td className='font-light '>{booking.email_address}</td>
                      </tr>
                    </td>
                    <td className="px-6 py-6 ">{ booking.room_number}</td>
                    <td className='px-6 py-6'>{ booking.room_type}</td>
                    <td className="px-6 py-6 ">{ booking.phone_number}</td> 
                    <td className="px-6 py-6 ">{booking.checkin }</td>
                    <td className="px-6 py-6 ">{ booking.checkout}</td>
                    <td className="px-6 py-6"><span className={`${booking.payment === 'paid'? 'text-green-400' : 'text-orange-400'}`}>{booking.payment}</span></td>
              <th className="px-6 py-6 font-bold "><span className={`px-3 py-1 font-light text-white ${booking.payment === 'paid' ? 'bg-green-300' : 'bg-red-500'} rounded-md`}>{ booking.payment === 'paid' ? 'checked' : 'not checked'}</span> </th>
                    <td className="px-6 py-6 ">
                    <tr>
                            <Link to={`edit/${booking.id}`}><td className='px-2'>< FiEdit size={18}/></td></Link>
                            <Link to={`view/${booking.id}`}><td className='px-2'>< FiEye size={18}/></td></Link>
                            <td onClick={() => handleDelete(booking.id)} className='px-2 text-red-500 hover:cursor-pointer'><RiDeleteBin6Line size={18}/></td>
                    </tr>
                  </td>
              </tr>
                  
                  ))}
                    </tbody>
                    
      
      </table>
        {/* Pagination controls */}
        <div className="flex justify-center my-8">
          <button
            className='p-2 text-white bg-purple-700 border rounded-md cursor-pointer '
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {Math.ceil(bookings.length / itemsPerPage)}
            
          </span>
          <button
            className='p-2 text-white bg-purple-700 border rounded-md cursor-pointer '
            disabled={currentPage === Math.ceil(bookings.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
      </div>
      </div>
       
  
  )
}

export default Booking
