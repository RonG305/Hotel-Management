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
import RoomEditForm from './components/RoomEditForm'
import Dashboard from './pages/Dashboard'

function App() {


  

  return (
    <div className=''>
      <Router>
        <Sidebar/>
        <Navbar />
        <div className='ml-32 font-medium font-open-sans'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='bookings/' element={<Booking />} />
          <Route path='bookings/view/:id/' element={<BookingDetail />} />
          <Route path='bookings/edit/:id' element={<BookingEditForm />} />
          <Route path='rooms/' element={<Room />} />
          <Route path='rooms/:id/' element={<RoomDetail />} />  
          <Route path='rooms/edit/:id' element={<RoomEditForm />} />  
          <Route path='rooms/addRoom/' element={<RoomForm />} />
          <Route path='customers/' element={<Customers />} />
          <Route path='payment/' element={<Payment />} />  
          <Route path='bookings/addBooking/' element={<BookingForm />} /> 
            <Route path='rooms/addBooking/' element={<BookingForm />} /> 
          </Routes>
        </div>
      </Router>
     
      
       
     

   
    </div>
  )
}

export default App
