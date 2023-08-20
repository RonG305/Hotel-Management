import { BsGraphUpArrow } from "react-icons/bs"
import { useState, useEffect } from "react"

const TotalCustomers = () => {
    
    const [totalCustomers, setTotalCustomers] = useState(0)

    const getTotalCustomers = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/booking/')
            const data = await response.json()
            setTotalCustomers(data.booking_count)
        } catch (error) {
            console.log('Error while fetching the number of customers', error)
        }
    }

    useEffect(() => {
        getTotalCustomers()
    })
  return (
      <div className="relative h-64 p-2 leading-10 text-white bg-blue-500 border rounded-md md:w-1/4">
           <div >
              <h3 className="text-xl font-bold md:text-2xl ">Customers</h3>
              <div>
                  <p>Total customers</p>
                  <p className="pt-4 text-2xl font-extrabold md:text-4xl font-poppins ">{totalCustomers}</p>
              </div>
          </div>
          <div className='absolute px-4 py-1 text-white bg-green-300 rounded-md  top-2 right-2 text-bold'>
        <BsGraphUpArrow size={25} className="" />
      </div>
    </div>
  )
}

export default TotalCustomers
