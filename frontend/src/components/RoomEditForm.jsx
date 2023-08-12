import { useState } from "react";

const RoomEditForm = () => {
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
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
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
            // Reset form data if needed
            setFormData({
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

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text" name="gender"
                      value={formData.gender}
                      placeholder="Gender"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="phone_number"
                      value={formData.phone_number}
                      placeholder="phone Number"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="room_number"
                      value={formData.room_number}
                      placeholder="Room Number"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="room_type"
                      value={formData.room_type}
                      placeholder="Room Type"
                  />

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

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="payment"
                      value={formData.payment}
                      placeholder="payment"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="status"
                      value={formData.status}
                      placeholder="status"
                  />

                  <input
                      onChange={handleChange}
                      className={formStyles}
                      type="text"
                      name="description"
                      value={formData.description}
                      placeholder="description"
                  />

                  <button className="px-10 py-2 bg-blue-400 rounded-md outline-none " type="submit">Submit</button>
                  
              </form>
          </div>
    </div>
  )
}

export default RoomEditForm


