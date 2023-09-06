import { FiEdit, FiEye, FiSettings } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Search from "./Search";


const itemsPerPage = 10;

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [roomCount, setRoomCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  const handleRoomSearch = (searchTerm) => {
    if (!searchTerm) {
      setRooms(rooms.data)
    } else {
      const filteredRooms = rooms.filter((room) => room.status.toLowerCase().includes(searchTerm.toLowerCase())
      || room.room_type.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setRooms(filteredRooms)
    }
  }

  const styles = {
    headerStyles: "px-6 py-6 ",
    bookingBotton: " bg-purple-700 font-bold text-white rounded-md px-3 py-1 hover:bg-purple-500 duration-300"
  }

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/rooms/");
      const data = await response.json();
      setRooms(data.rooms);
      setRoomCount(data.room_count);
      console.log(data.rooms);
    } catch (error) {
      console.log("an error occured while fetching data", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = rooms.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDelete = async (roomId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/rooms/${roomId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchRooms();
      } else {
        console.log("failed to delete room");
      }
    } catch (error) {
      console.log("an error ocurred while deleting room", error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto ">
        <div className="flex justify-between px-3 py-5 mx-3 my-5 border rounded-md ">
          <div>
            <h2 className="text-2xl font-bold ">Room List</h2>
            <p>
              You have{" "}
              <span className="text-xl font-extrabold text-blue-700 ">
                [{roomCount}]{" "}
              </span>
              various rooms
            </p>
          </div>

          
          {/* Search Bar */}
          
          <Search onSearch={handleRoomSearch} />

          {/* Search Bar */}

          <Link
            to="addRoom/"
            className="flex items-center justify-center w-10 h-10 text-white bg-purple-700 rounded "
          >
            <FiPlus size={25} />
          </Link>
        </div>
        <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-400 ">
          <thead className="uppercase bg-blue-100 ">
            <tr>
              <th className={styles.headerStyles}>Room Number</th>
              <th className={styles.headerStyles}>Room Type</th>
              <th className={styles.headerStyles}>Air condition</th>
              <th className={styles.headerStyles}>Meal</th>
              <th className={styles.headerStyles}>Bed Capacity</th>
              <th className={styles.headerStyles}>Rent</th>
              <th className={styles.headerStyles}>Status</th>
              <th className={styles.headerStyles}>action</th>
            </tr>
          </thead>

          <tbody>
            {itemsToShow.map((room, index) => (
              <tr key={index} className="duration-300 ease-in border">
                <td className={styles.headerStyles}>{room.room_number}</td>
                <td className={styles.headerStyles}>{room.room_type}</td>
                <td className="px-6 py-6 text-green-400 ">
                  {room.air_condition}
                </td>
                <td className="px-6 py-6">{room.meal}</td>
                <td className={styles.headerStyles}>{room.bed_capacity}</td>
                <td className={styles.headerStyles}>{room.rent} USD</td>
                <td 
                >
                  <tr >
                    <td className={`px-6 py-6 font-bold ${
                    room.status === "open"
                      ? "text-green-500"
                      : "text-orange-500"
                      }`}>{room.status}</td>
                    {room.status === 'open' &&  <td className="px-6 py-6 " ><Link to='addBooking/'><span className={styles.bookingBotton}>book</span> </Link> </td>}
                   
                  </tr>
                </td>

                <td className={styles.headerStyles}>
                  <tr>
                  <Link to={`edit/${room.id}`}><td className='px-2'>< FiEdit size={18}/></td></Link>
                            <Link to={`${room.id}`}><td className='px-2'>< FiEye size={18}/></td></Link>
                            <td onClick={() => handleDelete(room.id)} className='px-2 text-red-500 hover:cursor-pointer'><RiDeleteBin6Line size={18}/></td>
                  </tr>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       
     

        {/* Pagination controls */}
        <div className="flex justify-center my-5">
          <button
            className="p-2 text-white bg-purple-700 border rounded-md cursor-pointer "
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          <span className="mx-4">
            Page {currentPage} of {Math.ceil(rooms.length / itemsPerPage)}
          </span>
          <button
            className="p-2 text-white bg-purple-700 border rounded-md cursor-pointer "
            disabled={currentPage === Math.ceil(rooms.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
    </div>
  );
};

export default Room;
