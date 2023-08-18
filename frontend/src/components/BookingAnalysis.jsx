import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  
];

const BookingAnalysis = () => {
 

    return (
        <div  className='border rounded-md p-5 text-center font-poppins' >
            <h3 className=' my-4'>Booking Analysis</h3>
            <div className=' flex'>
                <p>Bookings</p>
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
                        fill="#8884d9"
                        label
                    />
                    </PieChart>
                </ResponsiveContainer>
                <p>Total Rooms</p>
            </div>
            
            
        </div>
      
    );

}

export default BookingAnalysis
