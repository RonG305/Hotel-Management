import AvailableRooms from "../components/AvailableRooms"
import BookingAnalysis from "../components/BookingAnalysis"
import Graph from "../components/Graph"
import RecentBookings from "../components/RecentBookings"
import TotalBookings from "../components/TotalBookings"
import TotalCustomers from "../components/TotalCustomers"
import TotalRooms from "../components/TotalRooms"


const Dashboard = () => {
  return (
      <div className="my-4 ">
          <div className="mx-5 my-4 ">
              <h1 className="py-4 font-extrabold text-gray-600  md:text-2xl">HOTEL MANAGEMENT SYSTEM DASHBOARD</h1>
              <p>Welcome to HMS Dashboard</p>
          </div>
         
          <div className="gap-3 mx-3 my-4 text-gray-700  md:flex">
              <TotalBookings />
              <TotalRooms />
              <AvailableRooms />
              <TotalCustomers />
          </div>


          <div className="gap-4  md:flex">
          <div className="p-4 border rounded-md  md:w-7/12 bg-slate-100">
            <Graph />
              </div>    
              <div className=" md:w-5/12">
                  <BookingAnalysis />
              </div>
          </div>
         
          
            <RecentBookings />
    </div>
  )
}

export default Dashboard
