import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomForm = () => {

  const navigate = useNavigate()

  const formStyles = " md:w-1/3 outline-none rounded-md  border-gray-300 mx-3 my-4";

  
  const [formData, setFormData] = useState({
    room_number: "",
    room_type: "",
    meal: "",
    bed_capacity: "",
    air_condition: "",
    rent: "",
    description: "",
    // status: "",
  });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:8000/api/rooms/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log("Successfully submitted data");
  //       return navigate('../rooms', {replace:true})

  //     } else {
  //       console.log("Failed to create room");
  //     }
  //   } catch (error) {
  //     console.log("An error occured while submitting form data", error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const repsonse = await fetch("http://localhost:8000/api/rooms/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })


      if (repsonse.ok) {

        console.log('form submitted succesifully')
        return navigate('../rooms', {replace:true})
      } else {
        console.log('Failed to submit the room')
      }

    } catch (error) {
      
      console.log('An error occured while submitting data ', error)

    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="px-4 py-3 mx-5 my-6 text-2xl font-extrabold border rounded-md ">
        <h2>Create New Room</h2>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <input
          className={formStyles}
          type="text"
          placeholder="Room Number"
          name="room_number"
          value={formData.room_number}
          onChange={handleInputChange}
        />

        <input
          className={formStyles}
          type="number"
          placeholder="Bed Capacity"
          name="bed_capacity"
          value={formData.bed_capacity}
          onChange={handleInputChange}
        />

        <input
          className={formStyles}
          type="number"
          placeholder="Rent"
          name="rent"
          value={formData.rent}
          onChange={handleInputChange}
        />

        <input
          className={formStyles}
          type="text"
          placeholder=" Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />

        {/* <input
          className={formStyles}
          type="text"
          placeholder="status"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        /> */}

        <select
          className={formStyles}
          name="room_type"
          value={formData.room_type}
          onChange={handleInputChange}
        >
          <option value="">Select Room Type</option>
          <option value="delux">Delux</option>
          <option value="super delux">Super Delux</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
        </select>

        <select
          className={formStyles}
          name="air_condition"
          value={formData.air_condition}
          onChange={handleInputChange}
        >
          <option value="">Select Air Condition</option>
          <option value="AC">AC</option>
          <option value="No AC">No AC</option>
        </select>

        <select
          className={formStyles}
          name="meal"
          value={formData.meal}
          onChange={handleInputChange}
        >
          <option value="">Select Meal </option>
          <option value="breakfast">breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="two">Two</option>
          <option value="all">Option</option>
        </select>

        <button
          className="px-4 py-2 mt-5 text-white bg-blue-500 rounded-md animate-pulse text-bold"
          type="submit"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default RoomForm;


