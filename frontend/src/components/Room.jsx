import { FiEdit, FiEye, FiSettings } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState, useEffect } from 'react'


const Room = () => {
    const [rooms, setRooms] = useState([])
    const [roomCount, setRoomCount] = useState(0)

    const fetchRooms = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/rooms/')
            const data = await response.json()
            setRooms(data.rooms)
            setRoomCount(data.room_count)
            console.log(data.rooms)
          
        } catch (error) {
            console.log('an error occured while fetching data', error)
        }
    }

    useEffect(() => {
        fetchRooms()
    }, [])
  return (
      <div>
          <div className="overflow-x-auto ">
              <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
                  <div>
                  <h2 className='text-2xl font-bold '>Room List</h2>
                  <p>You have {roomCount} various rooms</p>
                  </div>
             
              <FiSettings size={25} />
          </div>
          <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-400 ">
              
              <thead className="uppercase bg-blue-100 ">
                  <tr>
                  <th className='px-6 py-6 '>Room Number</th>    
                  <th className="px-6 py-6 ">Room Type</th>
                  <th className="px-6 py-6 ">Account Number</th>
                  <th className="px-6 py-6 ">Meal</th>
                  <th className="px-6 py-6 ">Bed Capacity</th>
                  <th className="px-6 py-6 ">Rent</th>
                  <th className="px-6 py-6 ">Status</th>
                  <th className='px-6 py-6 '>action</th>
                
              </tr>
              </thead>

                <tbody>
                      {rooms.map((room, index) => (
                        <tr key={index} className='duration-300 ease-in border'>
                        <td className="px-6 py-6 ">{room.room_number}</td>
                          <td className="px-6 py-6 ">{room.room_type}</td>
                          <td className='px-6 py-6 text-green-400 '>ACC</td>
                          <td className='px-6 py-6'>{room.meal}</td>
                            <td className="px-6 py-6 ">{ room.bed_capacity}</td>
                          <td className="px-6 py-6 ">{room.rent} USD</td>
                          <td className="px-6 py-6 font-bold text-pink-800 ">{room.status}</td>
                         
                          <td className="px-6 py-6 ">
                          <tr>
                                  <td className='px-2'>< FiEdit size={18}/></td>
                                  <td className='px-2'>< FiEye size={18}/></td>
                                  <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                              </tr>
                          </td>
                      </tr>
                   ))}  
                 
              </tbody>
              

              </table>
              </div>
     </div>
  )
}

export default Room
