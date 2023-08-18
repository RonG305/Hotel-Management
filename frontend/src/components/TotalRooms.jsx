import { BsGraphDown } from "react-icons/bs"
import { useState, useEffect } from "react"

const TotalRooms = () => {

    const [totalRooms, setTotalRooms] = useState(0)

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
  return (
      <div className="h-64 p-2 border rounded-md md:w-1/3 relative leading-10 text-white bg-purple-700">
           <div>
              <h3 className="font-bold text-xl md:text-2xl ">Total Rooms</h3>
              <div>
                  <p>Total Rooms in the hotel</p>
                  <p className="pt-4 text-2xl md:text-4xl font-poppins font-extrabold ">{totalRooms}</p>
              </div>
          </div>
          <div className=' absolute top-2 right-2 bg-red-500 text-bold text-white px-4 py-1 rounded-md'>
        <BsGraphDown size={25} />
      </div>
    </div>
  )
}

export default TotalRooms
