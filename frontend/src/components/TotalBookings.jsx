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
      
        <div className="h-64 p-2 border rounded-md md:w-1/3 relative leading-10 bg-orange-500 text-white">
              <h3 className="font-bold text-xl md:text-2xl ">Total Bookings</h3>
              <div className="flex">
                  <div className="w-1/2 ">
                    <p>In the last 30 days Bookings</p>
                    <p className="pt-4  text-2xl md:text-4xl font-poppins font-extrabold ">{totalBooking}</p>
                  </div>    
      </div>
      <div className=' absolute top-2 right-2 bg-green-300 text-bold text-white px-4 py-1 rounded-md'>
        <BsGraphUpArrow size={25} className=" " />
      </div>
        </div>


  )
}

export default TotalBookings
