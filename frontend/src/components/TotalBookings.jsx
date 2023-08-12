

const TotalBookings = () => {
  return (
      <div  className="gap-3 mx-3 mt-4 md:flex">
        <div className="h-64 p-2 border rounded-md md:w-1/3">
              <h3 className="font-bold text-gray-500 ">Total Bookings</h3>
              <div className="flex">
                  <div className="w-1/2 mt-6 ">
                    <p>In the last 30 days Bookings</p>
                    <p className="pt-4 text-2xl ">31, 285</p>
                  </div>
                 
                  <div className="w-1/2 ">
                      <img src="../../public/graph2.jpg" alt="" />
                  </div>
              </div>
        </div>

        <div className="h-64 p-2 border rounded-md md:w-1/3">
              <h3 className="font-bold text-gray-500 ">Available Rooms</h3>
              <div>
                  <p>Available Rooms in the hotel</p>
                  <p className="pt-4 text-2xl ">285</p>
              </div>
        </div>

        <div className="h-64 p-2 border rounded-md md:w-1/3">
              <h3 className="font-bold text-gray-500 ">Customers</h3>
              <div>
                  <p>Total customers</p>
                  <p className="pt-4 text-2xl ">285</p>
              </div>
        </div>
    </div>
  )
}

export default TotalBookings
