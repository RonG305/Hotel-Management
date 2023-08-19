import { FiSettings, FiEdit, FiEye, FiPlus } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import { useState, useEffect } from 'react'

const itemsPerPage = 10


const Payment = () => {
  const [payments, setPayments] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


    const fetchPayments = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/payment/')
        const data = await response.json()
        setPayments(data)
        console.log(data)
          
          
      } catch (error) {
        console.log('error, occured while fetching the data', error)
      }
    }
  
    useEffect(() => {
        fetchPayments()
      }, [])
  
  
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToShow = payments.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
      <div className="overflow-x-auto ">
              <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
                  <div>
                  <h2 className='text-2xl font-bold '>Payment List</h2>
                  <p>You have 3 Payment methods</p>
                  </div>
             
             
          </div>
          <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-600">
              <thead className="uppercase bg-blue-100 ">
              <tr className='border '>
                  <th className="px-6 py-6 ">Id</th>
                  <th className="px-6 py-6 ">payment Name</th>
                  <th className="px-6 py-6 ">Email</th>
                  <th className="px-6 py-6 ">Currency setting</th>
                  <th className="px-6 py-6 ">status</th>
                
              </tr>
              </thead>

              <tbody>
                  {itemsToShow.map((payment, index) => (
                      
                    <tr key={index} className='border '>
                          <td className="px-6 py-6 ">{ payment.id}</td>
                          <td className="px-6 py-6 ">{ payment.payment_name}</td>
                          <td className="px-6 py-6 ">{ payment.email}</td>
                          <td className="px-6 py-6 ">{ payment.currency_setting}</td>
                       <th className="px-6 py-6 "><span className="px-3 py-1 font-light text-white bg-green-300 rounded-lg">{payment.status}</span> </th>
                       <td className="px-6 py-6 ">
                       
                       </td>
                   </tr>
                  ))}
                 
              </tbody>
              

      </table>
      {/* Pagination controls */}
      <div className="flex justify-center my-5">
          <button
            className=' border rounded-md text-white p-2 cursor-pointer bg-purple-700'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {Math.ceil(payments.length / itemsPerPage)}
          </span>
          <button
            className=' border rounded-md text-white p-2 cursor-pointer bg-purple-700'
            disabled={currentPage === Math.ceil(payments.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
      </div>
    </div>

  )
}

export default Payment
