import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const BookingDetail = () => {

    const styles = "border rounded-md p-3"

    const [booking, setBooking] = useState({})
    const params = useParams()

   

    const fetchBooking = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/booking/${params.id}`)
            const data = await response.json()
            setBooking(data)
            console.log(data)
          
        } catch (error) {
            console.log('an error occured while fetching data', error)
        }
    }

    useEffect(() => {
        fetchBooking()
    }, [])


  return (
      <div>
          <div className=" text-center border rounded-md p-6 font-bold text-gray-600 mx-6 mt-8 text-xl">
              <h1>Explore Customer Booking Details</h1>
          </div>

          <div className=" border rounded-md mx-6 mt-8 flex flex-col p-8  gap-8 md:grid grid-cols-3 text-gray-500 ">
              <p className={styles}>FIRST NAME: <span className=" text-blue-600 font-bold">{booking.first_name}</span></p>
              <p className={styles}>LAST NAME: <span className=" text-blue-600 font-bold">{booking.last_name}</span></p>
              <p className={styles}>GENDER: <span className=" text-blue-600 font-bold">{ booking.gender}</span></p>
              <p className={styles}>ROOM NUMBER: <span className=" text-blue-600 font-bold">{booking.room_number}</span></p>
              <p className={styles}>PHONE NUMBER: <span className=" text-blue-600 font-bold">{booking.phone_number}</span></p>
              <p className={styles}>ROOM TYPE: <span className=" text-blue-600 font-bold">{booking.room_type}</span></p>
              <p className={styles}>EMAIL ADRESS: <span className=" text-blue-600 font-bold">{booking.email_address}</span></p>
              <p className={styles}>ADDRESS: <span className=" text-blue-600 font-bold">{booking.address}</span></p>
              <p className={styles}>CHECK IN: <span className=" text-blue-600 font-bold">{booking.checkin}</span></p>
              <p className={styles}>CHECK OUT: <span className=" text-blue-600 font-bold"> {booking.checkout}</span></p>
              <p className={styles}>PAYMENT: <span className=" text-blue-600 font-bold">{booking.payment}</span></p>
              <p className={styles}>STATUS: <span className=" text-blue-600 font-bold">{ booking.status}</span></p>
              <div className=" bg-blue-50 rounded-md ">
                  <h3 className=" text-xl font-bold text-gray-500 mb-4">DESCRIPTION</h3>
                  <p className=" font-normal">{ booking.description}</p>
              </div>
          </div>
    </div>
  )
}

export default BookingDetail
