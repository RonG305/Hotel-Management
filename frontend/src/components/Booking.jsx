import { FiDelete, FiEdit, FiEye, FiSettings } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const Booking = () => {

  const [bookings, setBookings] = useState([])

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/booking/')
      const data = await response.json()
      setBookings(data)
      console.log(data)
    } catch (error) {
      console.log('error, occured while fetching the data', error)
    }
  }


  useEffect(() => {
    fetchBookings()
  }, [])

  return (
      <div className="overflow-x-auto ">
      <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
            <div>
              <h2 className='text-2xl font-bold '>Booking List</h2>
              <p>You have 203 rooms booked</p>
            </div>
            
              <FiSettings size={25} />
          </div>
          <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-400 ">
              
              <thead className="uppercase bg-blue-100 ">
                  <tr>
                  <th className='px-6 py-6 '>ID</th>    
                  <th className="px-6 py-6 ">Customer</th>
                  <th className="px-6 py-6 ">Booking</th>
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
                  <tr className='border '>
                    <td className="px-6 py-6 ">A3664D</td>
                      <td className="px-6 py-6 ">Ronald Mutia</td>
                      <td className='px-6 py-6 text-green-400 '>Active</td>
                      <td className='px-6 py-6'>Single</td>
                      <td className="px-6 py-6 ">0790021016</td>
                      <td className="px-6 py-6 ">A3 2020</td>
                      <td className="px-6 py-6 ">17 May 2021</td>
                      <td className="px-6 py-6 text-green-400 ">paid</td>
                      <th className="px-6 py-6 "><span className="px-3 py-1 font-light text-white bg-green-400 rounded-2xl">inside</span> </th>
                      <td className="px-6 py-6 ">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                 
          

              </tbody>
              

          </table>
    </div>
  )
}

export default Booking
