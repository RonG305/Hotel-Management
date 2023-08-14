import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'
import './App.css'
import Booking from './components/Booking'
import Room from './components/Room'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './components/Payment'
import BookingForm from './components/BookingForm'
import RoomDetail from './components/RoomDetail'
import BookingDetail from './components/BookingDetail'
import RoomForm from './components/RoomForm'
import BookingEditForm from './components/BookingEditForm'

function App() {
  

  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
        <div className=' ml-24 md:ml-72 font-open-sans font-medium'>
        <Routes>
        
          <Route path='bookings/' element={<Booking />} />
          <Route path='bookings/:id/' element={<BookingDetail />} />
          <Route path='bookingsEdit/:id' element={<BookingEditForm />} />
          <Route path='rooms/' element={<Room />} />
          <Route path='rooms/:id/' element={<RoomDetail />} />  
          <Route path='rooms/addRoom/' element={<RoomForm />} />
          <Route path='customers/' element={<Customers />} />
          <Route path='payment/' element={<Payment />} />  
          <Route path='bookings/addBooking/' element={<BookingForm />} />  
          </Routes>
        </div>
      </Router>
     
      
       
     

   
    </>
  )
}

export default App
