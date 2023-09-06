import { useState, useEffect } from "react"
import { BsGraphDown } from "react-icons/bs"

const AvailableRooms = () => {

    const [totalRooms, setTotalRooms] = useState(0)
    const [totalBooking, setTotalBooking] = useState(0)

    const getTotalRooms = async() => {
        try {
            const response = await fetch('http://localhost:8000/api/rooms/')
            const data = await response.json()
            setTotalRooms(data.room_count)
        } catch (error) {
            console.log('Error while fetching the number of rooms')
        }
    }

    useEffect(() => {
        getTotalRooms()
    })

   

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

    const availableRooms = totalRooms - totalBooking

  return (
    <div className="relative h-64 p-2 leading-10 text-white bg-orange-500 border rounded-md md:w-1/4">
    <div>
       <h3 className="text-xl font-bold md:text-2xl ">Available Rooms</h3>
       <div>
           <p>Available Rooms in the hotel</p>
           <p className="pt-4 text-2xl font-extrabold md:text-4xl ">{availableRooms}</p>
       </div>
   </div>
   <div className='absolute px-4 py-1 text-white bg-red-500 rounded-md top-2 right-2 text-bold'>
 <BsGraphDown size={25} />
</div>
</div>
  )
}

export default AvailableRooms
