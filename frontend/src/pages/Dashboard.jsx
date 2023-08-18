import Graph from "../components/Graph"
import TotalBookings from "../components/TotalBookings"
import TotalCustomers from "../components/TotalCustomers"
import TotalRooms from "../components/TotalRooms"


const Dashboard = () => {
  return (
      <div>
          <div className=" my-4 mx-5">
              <h1 className=" text-gray-600 font-extrabold md:text-2xl py-4 ">HOTEL MANAGEMENT SYSTEM DASHBOARD</h1>
              <p>Welcome to HMS Dashboard</p>
          </div>
         
          <div className=" md:flex mx-3 gap-3 text-gray-700 my-4">
              <TotalBookings />
              <TotalRooms />
              <TotalCustomers />
          </div>
          <Graph />
    </div>
  )
}

export default Dashboard
