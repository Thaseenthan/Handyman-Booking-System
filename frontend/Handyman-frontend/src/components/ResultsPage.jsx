import React from "react";
import { useLocation } from "react-router-dom";
import ServiceProviderCard from "./ServiceProviderCard";

const ResultsPage = () => {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div className="flex flex-col items-center bg-[#f8ebd1] ">
      <h2
        className="text-2xl  text-gray-800 mb-4 text-center font-bold"
        style={{ marginTop: "30px" }}
      >
        Search Results:
      </h2>

      {searchResults.length > 0 ? (
     <ul className="flex flex-wrap -mx-2">
     {searchResults.map((result) => (
       <li 
         key={result.id} 
         className="w-full  md:w-1/2 lg:w-1/3 p-2 mb-4" // Added margin-bottom for spacing between rows
       >
         <div className="bg-white  rounded-lg "> {/* Added card container styles */}
           <ServiceProviderCard provider={result} />
         </div>
       </li>
     ))}
   </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsPage;