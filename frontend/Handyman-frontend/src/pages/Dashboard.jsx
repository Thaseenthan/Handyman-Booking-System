// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearUser } from "../components/Redux/userSlice";
// import axios from "axios";
// //import EditUser from "../components/EditUser";
// //import EditProvider from "../components/EditProvider";



// export default function Dashboard() {
//   window.addEventListener('beforeunload', function (e) {
//     // Prompt a confirmation message to prevent page refresh
//     e.preventDefault();
//     e.returnValue = '';  
//   });
//   //const [providerData, setProviderData] = useState({});

//   //const [isEditMode, setIsEditMode] = useState(false);

//   const user = useSelector((state) => state.user.user);

//   const [newRequests, setNewRequests] = useState([]);
//   const [acceptedRequests, setAcceptedRequests] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const openEditProfileModal = () => {
//   //   setIsEditMode(true);
//   // };
//   // const closeEditProfileModal = () => {
//   //   setIsEditMode(false);
//   // };

//   console.log(user);

//   //get current user
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/v1/sp/${user.username}`)
//       .then((res) => setCurrentUser(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // get requats from backend
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/v1/request/sp/${user.username}`)
//       .then((res) => {
//         setNewRequests(res.data.filter((request) => request.status === "new"));
//         setAcceptedRequests(
//           res.data.filter((request) => request.status === "accepted")
//         );
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

//   const handleDeleteAccount = () => {
//     setDeleteModalOpen(true);
//   };

//   const confirmDeleteAccount = () => {
//     axios
//       .delete(`http://localhost:8080/api/v1/sp/${user.username}`)
//       .then((res) => {
//         console.log(res);
//         dispatch(clearUser());
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//     setDeleteModalOpen(false); // Close the modal after confirming
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Service Provider Dashboard
//       </h2>

//       {/* Edit and Delete Account Buttons */}

//       <div className="mb-4">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"  >
//         {/* onClick={openEditProfileModal}          
//            */}
//           Edit Account
//         </button>
    
//         <button
//           onClick={handleDeleteAccount}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Delete Account
//         </button>
//       </div>
//       {/* {isEditMode && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg relative">
//             <EditProvider user={user.data} />
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//             <button
//               onClick={closeEditProfileModal}
//                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//              >
//           Cancel
//         </button>
//       </div>
//     </div>
//         </div>
//       )} */}
//       {isDeleteModalOpen && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-md shadow-md">
//             <p>Are you sure you want to delete your account?</p>
//             <div className="flex justify-end mt-4">
//               <button
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full"
//                 onClick={() => setDeleteModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//                 onClick={confirmDeleteAccount}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* New Requests Section */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">New Requests</h3>
//         <ul>
//           {newRequests.map((request) => (
//             <li key={request.id} className="mb-2">
//               <strong>Customer:</strong> {request.customerName}
//               <br />
//               <strong>Details:</strong> {request.requestDetails}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Accepted Requests Section */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Accepted Requests</h3>
//         <ul>
//           {acceptedRequests.map((request) => (
//             <li key={request.id} className="mb-2">
//               <strong>Customer:</strong> {request.customerName}
//               <br />
//               <strong>Details:</strong> {request.requestDetails}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearUser } from "../components/Redux/userSlice";
// import axios from "axios";

// export default function Dashboard() {
//   window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = '';  
//   });

//   const user = useSelector((state) => state.user.user);
//   const [newRequests, setNewRequests] = useState([]);
//   const [acceptedRequests, setAcceptedRequests] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   console.log("User data:", user);

//   // Fetch current user details
//   useEffect(() => {
//     if (user?.username) {
//       axios
//         .get("http://localhost:8080/api/v1/sp/"+user.username)
//         .then((res) => {
//           console.log("User details response:", res.data);
//           setCurrentUser(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user?.username]);

//   // Fetch requests from backend
//   useEffect(() => {
//     if (user?.username) {
//       axios
//         .get("http://localhost:8080/api/v1/request/sp/"+user.username)
//         .then((res) => {
//           console.log("Requests response:", res.data);
//           setNewRequests(res.data.filter((request) => request.status === "Pending"));
//           setAcceptedRequests(res.data.filter((request) => request.status === "accepted"));
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user?.username]);

//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

//   const handleDeleteAccount = () => {
//     setDeleteModalOpen(true);
//   };

//   const confirmDeleteAccount = () => {
//     axios
//       .delete("http://localhost:8080/api/v1/sp/"+user.username)
//       .then((res) => {
//         console.log(res);
//         dispatch(clearUser());
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//     setDeleteModalOpen(false); // Close the modal after confirming
//   };

//   const handleEditAccount = () => {
//     console.log("Navigating to /edit/" + user.username); 
//     navigate("/edit/" + user.username);  // Navigate to the edit page
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">
//         Your Profile
//       </h2>

//       {/* Edit and Delete Account Buttons */}
//       <div className="mb-4">
//         <button
//           onClick={handleEditAccount}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
//         >
//           Edit Account
//         </button>
    
//         <button
//           onClick={handleDeleteAccount}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Delete Account
//         </button>
//       </div>

//       {isDeleteModalOpen && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-md shadow-md">
//             <p>Are you sure you want to delete your account?</p>
//             <div className="flex justify-end mt-4">
//               <button
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full"
//                 onClick={() => setDeleteModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
//                 onClick={confirmDeleteAccount}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}


//       <div className="flex flex-wrap ">
//         {/* New Requests Section */}
//         <div className="mb-4 w-full md:w-1/2 p-2">
//         <div className="bg-[#431261] p-6 rounded-lg shadow-md">
        
//           <h3 className="text-lg font-semibold mb-2 text-white">New Requests</h3>
//           <ul>
//             {newRequests.length > 0 ? (
//               newRequests.map((request) => (
//                 <li key={request.id} className="mb-2 mt-4 bg-yellow-50 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  
//                   {/* <h3 className="text-lg font-semibold">Booking ID: {request.reqId}</h3>
//                       <p className="text-gray-600">ProviderID: {request.serviceProvider}</p> */}
//                       <p className="text-gray-600">Customer Name: {request.reqUserName}</p>
//                       <p className="text-gray-600">Service: {request.serviceType}</p>
//                       <p className="text-gray-600">Contact Number: {request.userContactNo}</p>
//                       <p className="text-gray-600">Customer Description: {request.serviceDescription}</p>
//                       <p className="text-gray-600">Date: {new Date(request.date).toLocaleDateString()}</p>
//                       <p className={`text-sm ${request.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
//                         Status: {request.status}
//                       </p>

//                       <button
//                         className="bg-green-700 hover:bg-blue-800 text-white py-2 px-4 rounded mt-4"
//                         //onClick={() => openBookingDeleteModal(request.reqId)}
//                       >
//                         Accept Booking
//                       </button>
                    
                  
                  
//                 </li>
//               ))
//             ) : (
//               <p className="text-white">No new requests available.</p>
//             )}


                  
//           </ul>
//           </div>
//         </div>

//         {/* Accepted Requests Section */}
//         <div className="w-full md:w-1/2 p-2">
//         <div className="bg-[#431261] p-6 rounded-lg shadow-md">  
//             <h3 className="text-lg font-semibold mb-2 text-white">Accepted Requests</h3>
//             <ul>
//               {acceptedRequests.length > 0 ? (
//                 acceptedRequests.map((request) => (
//                   // <li key={request.id} className="mb-2">
//                   //   <strong>Customer:</strong> {request.customerName}
//                   //   <br />
//                   //   <strong>Details:</strong> {request.requestDetails}
//                   // </li>
//                   <li key={request.id} className="mb-2 mt-4 bg-green-100 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    
//                   {/* <h3 className="text-lg font-semibold">Booking ID: {request.reqId}</h3>
//                       <p className="text-gray-600">ProviderID: {request.serviceProvider}</p> */}
//                       <p className="text-gray-600">Customer Name: {request.reqUserName}</p>
//                       <p className="text-gray-600">Service: {request.serviceType}</p>
//                       <p className="text-gray-600">Contact Number: {request.userContactNo}</p>
//                       <p className="text-gray-600">Customer Description: {request.serviceDescription}</p>
//                       <p className="text-gray-600">Date: {new Date(request.date).toLocaleDateString()}</p>
//                       <p className={`text-sm ${request.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
//                         Status: {request.status}
//                       </p>

                    
                    
                  
                  
//                 </li>
//                 ))
//               ) : (
//                 <p>No accepted requests available.</p>
//               )}
//             </ul>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../components/Redux/userSlice";
import axios from "axios";

export default function Dashboard() {
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';  
  });

  const user = useSelector((state) => state.user.user);
  const [newRequests, setNewRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("User data:", user);

  // Fetch current user details
  useEffect(() => {
    if (user?.username) {
      axios
        .get("http://localhost:8080/api/v1/sp/" + user.username)
        .then((res) => {
          console.log("User details response:", res.data);
          setCurrentUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user?.username]);

  // Fetch requests from backend
  useEffect(() => {
    if (user?.username) {
      axios
        .get("http://localhost:8080/api/v1/request/sp/" + user.username)
        .then((res) => {
          console.log("Requests response:", res.data);
          setNewRequests(res.data.filter((request) => request.status === "Pending"));
          setAcceptedRequests(res.data.filter((request) => request.status === "accepted"));
        })
        .catch((err) => console.log(err));
    }
  }, [user?.username]);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    axios
      .delete("http://localhost:8080/api/v1/sp/" + user.username)
      .then((res) => {
        console.log(res);
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => console.log(err));
    setDeleteModalOpen(false); // Close the modal after confirming
  };

  const handleEditAccount = () => {
    console.log("Navigating to /edit/" + user.username); 
    navigate("/edit/" + user.username);  // Navigate to the edit page
  };

  const handleAcceptRequest = async (reqId) => {
    try {
      await axios.put("http://localhost:8080/api/v1/request/"+reqId, {
        status: "accepted"
      });
      
      setNewRequests((prevRequests) =>
        prevRequests.filter((request) => request.reqId !== reqId)
      );
      setAcceptedRequests((prevRequests) => [
        ...prevRequests,
        newRequests.find((request) => request.reqId === reqId),
      ]);
  
      // Show alert message for successful acceptance
      alert("Booking accepted successfully!");
    } catch (err) {
      console.log(err);
      // Show alert message for error
      alert("Failed to accept the booking. Please try again.");
    }
  };
  
  const handleRejectRequest = async (reqId) => {
    try {
      await axios.put("http://localhost:8080/api/v1/request/"+reqId, {
        status: "rejected"
      });
  
      setNewRequests((prevRequests) =>
        prevRequests.filter((request) => request.reqId !== reqId)
      );
  
      // Show alert message for successful rejection
      alert("Booking rejected successfully!");
    } catch (err) {
      console.log(err);
      // Show alert message for error
      alert("Failed to reject the booking. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Your Profile
      </h2>

      {/* Edit and Delete Account Buttons */}
      <div className="mb-4">
        <button
          onClick={handleEditAccount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
        >
          Edit Account
        </button>
    
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete Account
        </button>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
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


      <div className="flex flex-wrap ">
        {/* New Requests Section */}
        <div className="mb-4 w-full md:w-1/2 p-2">
          <div className="bg-[#431261] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-white">New Requests</h3>
            
            <ul>
              {newRequests.length > 0 ? (
                newRequests.map((request) => (
                  <li key={request.reqId} className="mb-2 mt-4 bg-yellow-50 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <div className="grid grid-cols-10 gap-x-0 gap-y-1 w-full">

                      <p className="text-gray-600 font-semibold  col-span-2 ">Customer Name </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600   col-span-6">{request.reqUserName} </p>

                      <p className="text-gray-600 font-semibold col-span-2">Service </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{request.serviceType}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Contact Number</p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{request.userContactNo}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Customer Description </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{request.serviceDescription}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Date </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{new Date(request.date).toLocaleDateString()}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Status </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className={`col-span-2 text-sm ${
                          request.status === 'Pending' ? 'text-yellow-500' :
                          request.status === 'accepted' ? 'text-green-500' :
                          request.status === 'rejected' ? 'text-red-500' : ''
                        }`}>
                          {request.status}
                      </p>
                      
  
                    </div>

                    <button
                      className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded mt-4 mr-2 "
                      onClick={() => handleAcceptRequest(request.reqId)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded mt-4"
                      onClick={() => handleRejectRequest(request.reqId)}
                    >
                      Reject 
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-white">No new requests available.</p>
              )}
            </ul>
          </div>
        </div>

        {/* Accepted Requests Section */}
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-[#431261] p-6 rounded-lg shadow-md">  
            <h3 className="text-lg font-semibold mb-2 text-white">Accepted Requests</h3>
            
            <ul>
              {acceptedRequests.length > 0 ? (
                acceptedRequests.map((request) => (
                  <li key={request.reqId} className="mb-2 mt-4 bg-green-100 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                   <div className="grid grid-cols-10 gap-x-0 gap-y-1 w-full">
                    <p className="text-gray-600 col-span-2">Customer Name</p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.reqUserName}</p>

                    <p className="text-gray-600 col-span-2 ">Service </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.serviceType}</p>

                    <p className="text-gray-600 col-span-2">Contact Number </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.userContactNo}</p>

                    <p className="text-gray-600 col-span-2">Customer Description</p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.serviceDescription}</p>

                    <p className="text-gray-600 col-span-2">Date </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{new Date(request.date).toLocaleDateString()}</p>

                    <p className="text-gray-600 font-semibold col-span-2">Status </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    {/* <p className={`col-span-6 text-sm ${request.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                     {request.status}
                    </p> */}
                    <p className={`col-span-2 text-sm ${
                          request.status === 'Pending' ? 'text-yellow-500' :
                          request.status === 'accepted' ? 'text-green-500' :
                          request.status === 'rejected' ? 'text-red-500' : ''
                        }`}>
                          {request.status}
                      </p>
                    </div>
                  </li>
                 
                  
                ))
              ) : (
                <p className="text-white">No accepted requests available.</p>
              )}
              
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}