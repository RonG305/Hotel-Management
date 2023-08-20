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
      <div className="relative h-64 p-2 leading-10 text-white bg-purple-700 border rounded-md md:w-1/4">
           <div>
              <h3 className="text-xl font-bold md:text-2xl ">Total Rooms</h3>
              <div>
                  <p>Total Rooms in the hotel</p>
                  <p className="pt-4 text-2xl font-extrabold md:text-4xl font-poppins ">{totalRooms}</p>
              </div>
          </div>
          <div className='absolute px-4 py-1 text-white bg-red-500 rounded-md  top-2 right-2 text-bold'>
        <BsGraphDown size={25} />
      </div>
    </div>
  )
}

export default TotalRooms
