import { FiPlus, FiEdit, FiEye, FiSettings } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const itemsPerPage = 10

const Booking = () => {

  const {bookingId} = useParams()

  const [bookings, setBookings] = useState([])
  const [bookingCount, setBookingCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/booking/')
      const data = await response.json()
      setBookings(data.bookings)
      setBookingCount(data.booking_count)
      console.log(data)
    } catch (error) {
      console.log('error, occured while fetching the data', error)
    }
  }


  useEffect(() => {
    fetchBookings()
  }, [])

    // Calculate the range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = bookings.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
  
  const handleDelete = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/booking/${bookingId}`, {
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
                    <td className="px-6 py-6 ">{booking.first_name} {booking.last_name}</td>
                    <td className="px-6 py-6 ">{ booking.room_number}</td>
                    <td className='px-6 py-6'>{ booking.room_type}</td>
                    <td className="px-6 py-6 ">{ booking.phone_number}</td> 
                    <td className="px-6 py-6 ">{booking.checkin }</td>
                    <td className="px-6 py-6 ">{ booking.checkout}</td>
                    <td className="px-6 py-6"><span className={`${booking.payment === 'paid'? 'text-green-400' : 'text-orange-400'}`}>{booking.payment}</span></td>
              <th className="px-6 py-6 font-poppins font-bold "><span className={`px-3 py-1 font-light text-white ${booking.status=='inside' ? 'bg-green-300' : 'bg-red-500'} rounded-md`}>{booking.status}</span> </th>
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
            className=' border rounded-lg p-2 cursor-pointer bg-blue-300'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {Math.ceil(bookings.length / itemsPerPage)}
          </span>
          <button
            className=' border rounded-lg p-2 cursor-pointer bg-blue-300'
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
