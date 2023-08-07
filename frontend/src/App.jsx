import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'
import './App.css'
import Booking from './components/Booking'
import Room from './components/Room'

function App() {
  

  return (
    <>
      <Sidebar />
      <div className=' ml-24 md:ml-72'>
        <Navbar />
        {/* <Customers /> */}
        {/* <Booking /> */}
        <Room />

      </div>
    </>
  )
}

export default App
