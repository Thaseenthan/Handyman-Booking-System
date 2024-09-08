// import React, { useState, useEffect } from "react";
// import { setUser } from "../components/Redux/userSlice";
// import axios from "axios";
// import EditUser from "../components/EditUser";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearUser } from "../components/Redux/userSlice";

// function UserDashboard() {
//   const [userData, setUserData] = useState({});
//   const [bookings, setBookings] = useState([]);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const user = useSelector((state) => state.user.user);

//   useEffect(() => {
//     // Fetch user data and bookings when the component mounts
//     fetchUserData();
//     fetchBookings();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api/v1/user/${user.username}`
//       );
//       setUserData(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api/v1/request/user/${user.username}`
//       );
//       setBookings(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//     }
//   };

//               const handleUpdateProfile = async () => {
//                 console.log(userData);
//                 // Implement the update profile logic here
//                 try {
//                   await axios.put("http://localhost:8080/api/v1/user/", userData);
//                   setIsEditMode(false);
//                 } catch (error) {
//                   console.error("Error updating user data:", error);
//                 }
//               };

//   const openEditProfileModal = () => {
//     setIsEditMode(true);
//   };

//   const closeEditProfileModal = () => {
//     setIsEditMode(false);
//   };

//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

//   const handleDeleteAccount = () => {
//     setDeleteModalOpen(true);
//   };

  // const confirmDeleteAccount = () => {
  //   axios
  //     .delete(`http://localhost:8080/api/v1/user/${user.username}`)
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(clearUser());
  //       navigate("/");
  //     })
  //     .catch((err) => console.log(err));
  //   setDeleteModalOpen(false); // Close the modal after confirming
  // };

//   return (
//     <div className="h-screen flex items-center justify-center ">
//       <div className="flex flex-col items-center p-6 max-w-md w-full bg-[#eff6d3] rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
//         <button
//           onClick={openEditProfileModal}
//           className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg mb-4"
//         >
//           Edit Profile
//         </button>
//         {isEditMode && (
//           <>
//             <EditUser user={userData} />

//             <button
//               onClick={closeEditProfileModal}
//               className="justify-self-center bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Cancel
//             </button>
//           </>
//         )}
//         <button
//           onClick={handleDeleteAccount}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Delete Account
//         </button>

//         {isDeleteModalOpen && (
//           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p>Are you sure you want to delete your account?</p>
//               <div className="flex justify-end mt-4">
//                 <button
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full"
//                   onClick={() => setDeleteModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//                   onClick={confirmDeleteAccount}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <h3 className="text-xl font-semibold mt-8">Your Bookings</h3>
//         <ul className="list-disc pl-8 mt-2">
//           {bookings.map((booking) => (
//             <li
//               key={booking.reqId}
//               className="bg-white shadow-lg p-4 rounded-md"
//             >
//               <p className="text-lg font-semibold">
//                 Booking ID: {booking.reqId}
//               </p>
//               <p className="text-gray-700">Provider: {booking.serviceProvider}</p>
//               <p className="text-gray-700">Date: {booking.date}</p>
//               <p className="text-gray-700">Status: {booking.status}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditUser from "../components/EditUser";
import { clearUser } from "../components/Redux/userSlice";

function UserDashboard() {
  const [userData, setUserData] = useState({});
  const [bookings, setBookings] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchUserData();
    fetchBookings();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/user/" + user.username);
      setUserData(response.data);
    } catch (error) {
      setError("Failed to fetch user data.");
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/request/user/"+user.username);
      setBookings(response.data);
    } catch (error) {
      setError("Failed to fetch bookings.");
      console.error("Error fetching bookings:", error);
    }
  };

  const openEditProfileModal = () => {
    setIsEditMode(true);
  };

  const closeEditProfileModal = () => {
    setIsEditMode(false);
   
  };

  const handleDeleteAccount = () => {
    setDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    axios
      .delete("http://localhost:8080/api/v1/user/"+user.username)
      .then(() => {
        dispatch(clearUser());
        navigate("/");
      })
      .catch((error) => {
        setError("Failed to delete account.");
        console.error("Error deleting account:", error);
      });
    setDeleteModalOpen(false);
  };

  const deleteBooking = async (reqId) => {
    try {
      await axios.delete('http://localhost:8080/api/v1/request/'+reqId);
      setBookings(bookings.filter((booking) => booking.reqId !== reqId));
    } catch (error) {
      setError("Failed to delete booking.");
      console.error("Error deleting booking:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#431261] text-white py-4 shadow-md w-72 mt-2 flex justify-end ml-[1170px] rounded-2xl">
        <div className="container mx-auto flex justify-between ">
          <div className="flex-1">
            <div className="flex justify-end mr-0">
              <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg  mr-4 ml-3" onClick={openEditProfileModal}>
                Edit Profile
              </button>
              <button className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg ml-2 mr-3 " onClick={handleDeleteAccount}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-[#431261] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-white">Your Bookings</h2>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.reqId} className="bg-pink-100 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    {/* <h3 className="text-lg font-semibold">Booking ID: {booking.reqId}</h3> */}

                    {/* <p className="text-gray-600">Provider ID: {booking.serviceProvider}</p>
                    <p className="text-gray-600">Service: {booking.serviceType}</p>
                    <p className="text-gray-600">Discribtion: {booking.serviceDescription}</p>
                    <p className="text-gray-600">Contact Number: {booking.spContactNo}</p>
                    <p className="text-gray-600">Date: {new Date(booking.date).toLocaleDateString()}</p>
                    <p className={`text-sm ${
                          booking.status === 'Pending' ? 'text-yellow-500' :
                          booking.status === 'accepted' ? 'text-green-500' :
                          booking.status === 'rejected' ? 'text-red-500' : ''
                          }`}>
                        Status: {booking.status}
                    </p> */}
                     <div className="grid grid-cols-10 gap-x-[10] gap-y-1 w-full">
                      <p className="text-gray-600 font-semibold col-span-2 ">Provider ID</p>
                      <p className="text-gray-600 font-semibold ml-12 col-span-2 ">-</p>
                      <p className="text-gray-600 col-span-6   ">{booking.serviceProvider}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Service:</p>
                      <p className="text-gray-600 font-semibold ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{booking.serviceType}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Description:</p>
                      <p className="text-gray-600 font-semibold ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{booking.serviceDescription}</p>

                      <p className="text-gray-600 font-semibold w-32 col-span-2">Contact Number</p>
                      <p className="text-gray-600 font-semibold ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{booking.spContactNo}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Date:</p>
                      <p className="text-gray-600 font-semibold ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{new Date(booking.date).toLocaleDateString()}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Status:</p>
                      <p className="text-gray-600 font-semibold ml-12 col-span-2">-</p>
                      <p className={`text-sm ${
                        booking.status === 'Pending' ? 'text-yellow-500' :
                        booking.status === 'accepted' ? 'text-green-500' :
                        booking.status === 'rejected' ? 'text-red-500' : ''
                      } col-span-6`}>
                        {booking.status}
                      </p>
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 "
                      onClick={() => deleteBooking(booking.reqId)}
                    >
                      Delete Booking
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {isEditMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-purple-200 p-8 rounded-lg shadow-lg relative max-w-3xl w-full">
            <EditUser user={userData} />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button
              onClick={closeEditProfileModal}
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
             >
          Cancel
        </button>
      </div>
    </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p>Are you sure you want to delete your account?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={confirmDeleteAccount}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;