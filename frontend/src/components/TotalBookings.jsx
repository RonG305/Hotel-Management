import { BsGraphUpArrow } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const TotalBookings = () => {
  
  const [totalBooking, setTotalBooking] = useState(0)

  const getTotalBookings = async() => {
    try {
      const response = await fetch('http://localhost:8000/api/booking/')
      const data = await response.json()
      setTotalBooking(data.booking_count)
      console.log(data)
    } catch (error) {
      console.log('Failed to get booking count', error)
    }
  }

  useEffect(() => {
    getTotalBookings()
  })

  return (
      
        <div className="relative h-64 p-2 leading-10 text-white bg-orange-500 border rounded-md md:w-1/4">
              <h3 className="text-xl font-bold md:text-2xl ">Total Bookings</h3>
              <div className="flex">
                  <div className="w-1/2 ">
                    <p>In the last 30 days Bookings</p>
                    <p className="pt-4 text-2xl font-extrabold md:text-4xl ">{totalBooking}</p>
                  </div>    
      </div>
      <div className='absolute px-4 py-1 text-white bg-green-300 rounded-md  top-2 right-2 text-bold'>
        <BsGraphUpArrow size={25} className="" />
      </div>
        </div>


  )
}

export default TotalBookings
