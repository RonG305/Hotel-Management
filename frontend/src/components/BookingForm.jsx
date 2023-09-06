import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const BookingForm = () => {

    const navigate = useNavigate()

    const [availableRooms, setAvailableRooms] = useState([]);

    useEffect(() => {
        const fetchAvailableRooms = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/rooms/');
                const data = await response.json();
                setAvailableRooms(data.rooms);
            } catch (error) {
                console.log('An error occurred while fetching available rooms', error);
            }
        };

        fetchAvailableRooms();
    }, []);
    
    const formStyles = " w-full outline-none border border-gray-300 rounded-md mx-3 mb-6 md:w-1/4  placeholder:font-bold text-sm" 

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        phone_number: '',
        room_number: '',
        room_type: '',
        email_address: '',
        address: '',
        checkin: '',
        checkout: '',
        payment: '',
        status: '',
        description: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch( 'http://localhost:8000/api/booking/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle successful submission
              console.log('Booking created successfully');
              return navigate('../bookings/', {replace: true})
          
          } else {
            // Handle error
            console.error('Error creating booking');
          }
        } catch (error) {
          // Handle error
          console.error('Error creating booking', error);
        }
      };
    
  return (
      <div className="p-8 mx-4 my-6 border rounded-xl">
          <div>
              <h2 className="mb-6 text-2xl font-extrabold text-gray-600 ">Add Booking</h2>
              <form action="" onSubmit={handleSubmit}>
                  
                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      placeholder="First Name"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      placeholder="Last Name"
                  />

                  <select
                      className={formStyles}
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                  >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="other">Other</option>
                  </select>

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="phone_number"
                      value={formData.phone_number}
                      placeholder="phone Number"
                  />

                  <select
                      className={formStyles}
                        name="room_number"
                        value={formData.room_number}
                        onChange={handleChange}
                    >
                        <option value="">Select a Room</option>
                        {availableRooms.map((room) => (
                            <option key={room.id} value={room.id}>
                                {room.status === 'open' && room.room_number}
                            </option>
                        ))}
                    </select>


                  <select
                      className={formStyles}
                 name="room_type"
                 value={formData.room_type}
                 onChange={handleChange}
                >
                <option value="">Select Room Type</option>
                <option value="delux">Delux</option>
                <option value="super delux">Super Delux</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                
              </select>

                  <input
                      
                      onChange={handleChange}
                      className={formStyles}
                      type="email"
                      name="email_address"
                      value={formData.email_address}
                      placeholder="Email Address"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="address"
                      value={formData.address}
                      placeholder="Address"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="date"
                      name="checkin"
                      value={formData.checkin}
                      placeholder="checkin"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="date"
                      name="checkout"
                      value={formData.checkout}
                      placeholder="checkout"
                  />

                  <select
                    className={formStyles}
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                >
                    <option value="">Select Payment status</option>
                    <option value="paid">paid</option>
                    <option value="pending">pending</option>
                 
                
              </select>

                  <select
                    className={formStyles}
                    name="status"
                    value={formData.status }
                    onChange={handleChange}
                        >
                    <option value="">Select Status</option>
                    <option value="inside">inside</option>
                    <option value="checked">checked</option>
                 
                
              </select>

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="description"
                      value={formData.description}
                      placeholder="description"
                  />

                  <button className="px-10 py-2 font-extrabold text-white bg-purple-700 rounded-md outline-none " type="submit">Submit</button>
                  
              </form>
          </div>
    </div>
  )
}

export default BookingForm


