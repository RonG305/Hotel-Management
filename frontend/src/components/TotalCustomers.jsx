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
      <div className="h-64 p-2 border rounded-md md:w-1/3 relative leading-10 font-thin bg-slate-100">
           <div >
              <h3 className="font-bold text-gray-500 ">Customers</h3>
              <div>
                  <p>Total customers</p>
                  <p className="pt-4 text-2xl font-poppins font-bold ">{totalCustomers}</p>
              </div>
          </div>
          <div className=' absolute top-2 right-2 bg-green-300 text-bold text-white px-4 py-1 rounded-md'>
        <BsGraphUpArrow size={25} className=" " />
      </div>
    </div>
  )
}

export default TotalCustomers