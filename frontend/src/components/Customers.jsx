import { FiSettings, FiEdit, FiEye, FiPlus } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import { useState, useEffect } from 'react'

const itemsPerPage = 10


const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/booking/')
        const data = await response.json()
        setCustomers(data.bookings)
        console.log(data)
      } catch (error) {
        console.log('error, occured while fetching the data', error)
      }
    }
  
  
    useEffect(() => {
      fetchCustomers()
    }, [])
  
  
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const itemsToShow = customers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDelete = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/booking/${customerId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchCustomers()
      }

      else {
        console.log('Failed to delete customer')
      }
    } catch (error) {
      console.log('An error occured while deleting customer', error)
    }
  }


  return (
      <div className="overflow-x-auto ">
              <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
                  <div>
                  <h2 className='text-2xl font-bold '>Customer List</h2>
                  <p>You have 368 customers</p>
                  </div>
              <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded ">
                  <FiPlus size={25}  />
             </div>
             
          </div>
          <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-600">
              <thead className="uppercase bg-blue-100 ">
              <tr className='border '>
                  <th className="px-6 py-6 ">Name</th>
                  <th className="px-6 py-6 ">Phone Number</th>
                  <th className="px-6 py-6 ">Room Number</th>
                  <th className="px-6 py-6 ">Check in </th>
                  <th className="px-6 py-6 ">Checkout</th>
                  <th className="px-6 py-6 ">status</th>
                  <th className="px-6 py-6 ">Actions</th>
              </tr>
              </thead>

              <tbody>
                  {itemsToShow.map((customer, index) => (
                    <tr key={index} className='border '>
                          <td className="px-6 py-6 ">{customer.first_name} { customer.last_name}</td>
                          <td className="px-6 py-6 ">{ customer.phone_number}</td>
                          <td className="px-6 py-6 ">{ customer.room_number}</td>
                          <td className="px-6 py-6 ">{ customer.checkin}</td>
                          <td className="px-6 py-6 ">{ customer.checkout}</td>
                          <th className="px-6 py-6 "><span className={`px-3 py-1 font-light text-white ${customer.status=='inside' ? 'bg-green-300' : 'bg-red-500'} rounded-md`}>{customer.status}</span> </th>
                       <td className="px-6 py-6 ">
                       <tr>
                               <td className='px-2'>< FiEdit size={18}/></td>
                               <td className='px-2'>< FiEye size={18}/></td>
                               <td onClick={() => handleDelete(customer.id)} className='px-2 hover:cursor-pointer text-red-500'><RiDeleteBin6Line size={18}/></td>
                           </tr>
                       </td>
                   </tr>
                  ))}
                 
              </tbody>
              

      </table>
      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
          <button
            className=' border rounded-lg p-2 cursor-pointer bg-blue-300'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {Math.ceil(customers.length / itemsPerPage)}
          </span>
          <button
            className=' border rounded-lg p-2 cursor-pointer bg-blue-300'
            disabled={currentPage === Math.ceil(customers.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
      </div>
    </div>

  )
}

export default Customers
