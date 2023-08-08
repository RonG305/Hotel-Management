import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'
import './App.css'
import Booking from './components/Booking'
import Room from './components/Room'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
        <div className=' ml-24 md:ml-72 font-open-sans font-medium'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='bookings/' element={<Booking />} />
          <Route path='rooms/' element={<Room />} />
          <Route path='customers/' element={<Customers />} />
          </Routes>
        </div>
      </Router>
     
      
       
     

   
    </>
  )
}

export default App
