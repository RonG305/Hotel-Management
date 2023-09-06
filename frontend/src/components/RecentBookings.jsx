
import { useState, useEffect } from "react"

const RecentBookings = () => {
    const [recentBookings, setReceentBookings] = useState([])

    const fetchBookings = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/booking/')
          const data = await response.json()
          const fastFiveBookings = data.bookings.slice(0, 5)  
          setReceentBookings(fastFiveBookings)
          console.log(data)
        } catch (error) {
          console.log('error, occured while fetching the data', error)
        }
      }
    
    
      useEffect(() => {
        fetchBookings()
      }, [])
  return (
      <div>
          <div className="mx-4 font-bold  font-poppins">
              <p>Recent Customer Bookings</p>
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
                     
                    </tr>
                    </thead>
      
              <tbody>
          {recentBookings.map((booking, index) => (
                  
                <tr key={index} className='border '>
                    <td className="px-6 py-6 ">{ booking.id}</td>
                    <td className="px-6 py-6 ">{booking.first_name} {booking.last_name}</td>
                    <td className="px-6 py-6 ">{ booking.room_number}</td>
                    <td className='px-6 py-6'>{ booking.room_type}</td>
                    <td className="px-6 py-6 ">{ booking.phone_number}</td> 
                    <td className="px-6 py-6 ">{booking.checkin }</td>
                    <td className="px-6 py-6 ">{ booking.checkout}</td>
                    <td className="px-6 py-6"><span className={`${booking.payment === 'paid'? 'text-green-400' : 'text-orange-400'}`}>{booking.payment}</span></td>
              <th className="px-6 py-6 "><span className={`px-3 py-1 font-light text-white ${booking.payment=='paid' ? 'bg-green-300' : 'bg-red-500'} rounded-md`}>{booking.payment == 'paid' ? 'checked' : 'not checked'}</span> </th>
                
              </tr>
                  
                  ))}
                    </tbody>
                    
      
      </table>
    </div>
  )
}

export default RecentBookings
