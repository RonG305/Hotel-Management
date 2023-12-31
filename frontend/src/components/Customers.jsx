
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




  return (
      <div className="overflow-x-auto ">
              <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
                  <div>
                  <h2 className='text-2xl font-bold '>Customer List</h2>
                  <p>You have 368 customers</p>
                  </div>
             
             
          </div>
          <table className="w-full mt-5 mb-10 text-sm text-left text-gray-500 border rounded-md dark:text-gray-600">
              <thead className="uppercase bg-blue-100 ">
          <tr className='border '>
                  <th className="px-6 py-6 ">ID</th>
                  <th className="px-6 py-6 ">Name</th>
                  <th className="px-6 py-6 ">Phone Number</th>
                  <th className="px-6 py-6 ">Room Number</th>
                  <th className="px-6 py-6 ">Check in </th>
                  <th className="px-6 py-6 ">Checkout</th>
                  <th className="px-6 py-6 ">status</th>
                  
              </tr>
              </thead>

              <tbody>
                  {itemsToShow.map((customer, index) => (
                    <tr key={index} className='border '>
                          <td className="px-6 py-6 ">{customer.id}</td>
                          <td className="px-6 py-6 ">{customer.first_name} { customer.last_name}</td>
                          <td className="px-6 py-6 ">{ customer.phone_number}</td>
                          <td className="px-6 py-6 ">{ customer.room_number}</td>
                          <td className="px-6 py-6 ">{ customer.checkin}</td>
                          <td className="px-6 py-6 ">{ customer.checkout}</td>
                          <th className="px-6 py-6 "><span className={`px-3 py-1 font-light text-white ${customer.payment=='paid' ? 'bg-green-300' : 'bg-red-500'} rounded-md`}>{customer.payment == 'paid' ? 'checked' : 'not checked'}</span> </th>
                    
                   </tr>
                  ))}
                 
              </tbody>
              

      </table>
      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
          <button
            className='p-2 text-white bg-purple-700 border rounded-md cursor-pointer '
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {Math.ceil(customers.length / itemsPerPage)}
          </span>
          <button
            className='p-2 text-white bg-purple-700 border rounded-md cursor-pointer '
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
