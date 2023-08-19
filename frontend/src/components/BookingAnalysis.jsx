
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';




const BookingAnalysis = () => {
  

    const [roomCount, setRoomCount] = useState(0);
    const [totalBooking, setTotalBooking] = useState(0)
  
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/rooms/");
        const data = await response.json();
        setRoomCount(data.room_count);
        console.log(data.rooms);
      } catch (error) {
        console.log("an error occured while fetching data", error);
      }
    };
  
    useEffect(() => {
      fetchRooms();
    }, []);

    const getTotalBookings = async() => {
        try {
          const response = await fetch('http://localhost:8000/api/booking/')
          const data = await response.json()
          setTotalBooking(data.booking_count)
          console.log(data)
        } catch (error) {
          console.log('Failed to get booking count', error)
        }
      }
    
      useEffect(() => {
        getTotalBookings()
      })


const data = [
    { name: 'Group A', value: roomCount },
    { name: 'Group B', value: totalBooking },
    
];
  
  const percentageBookings = totalBooking / roomCount * 100
 

    return (
        <div  className='border rounded-md p-5 text-center font-poppins' >
            <h3 className=' my-4'>Booking Analysis</h3>
            <div className=' relative'>
            <p className=' text-purple-500 md:absolute top-[40%] left-9'>Total Rooms ({roomCount})</p>
                    <ResponsiveContainer width="100%" aspect={3} >
                    <PieChart width={800} height={800}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill='#0088FE' 
                        
                        label='labels'
                    />
                    </PieChart>
                </ResponsiveContainer>
                
                <p className=' text-orange-500 md:absolute top-[50%] right-9'>Total bookings ({totalBooking})</p>
                <p>Percentage Bookings</p>
                <p className={`font-extrabold text-2xl md:4xl ${percentageBookings > 70 ? 'text-green-500' : 'text-orange-700'}`} >{percentageBookings.toFixed(3) } %</p>
            </div>
            
            
        </div>
      
    );

}

export default BookingAnalysis
