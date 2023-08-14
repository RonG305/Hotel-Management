import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const RoomDetail = () => {

    const [room, setRoom] = useState({})
    const params = useParams()

   

    const fetchRoom = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/rooms/${params.id}`)
            const data = await response.json()
            setRoom(data)
        
            console.log(data)
          
        } catch (error) {
            console.log('an error occured while fetching data', error)
        }
    }

    useEffect(() => {
        fetchRoom()
    }, [])


  return (
      <div>
          <div className=" text-center border rounded-md p-6 font-bold text-gray-600 mx-6 mt-8 text-xl">
              <h1>Explore Room Details</h1>
          </div>

          <div className=" border rounded-md mx-6 mt-8 flex flex-col p-8  gap-8 ">
              <p className=" border rounded-md p-4">ROOM NUMBER: {room.room_number}</p>
              <p className=" border rounded-md p-4">ROOM TYPE: {room.room_type}</p>
              <p className=" border rounded-md p-4">MEAL: {room.meal}</p>
              <p className=" border rounded-md p-4">AIR CONDITION: { room.air_condition}</p>
              <p className=" border rounded-md p-4">BED CAPACITY : { room.bed_capacity}</p>
              <div className=" bg-blue-50 rounded-md ">
                  <h3 className=" text-xl font-bold text-gray-500 mb-4">DESCRIPTION</h3>
                  <p className=" font-normal">{ room.description}</p>
              </div>
          </div>
    </div>
  )
}

export default RoomDetail
