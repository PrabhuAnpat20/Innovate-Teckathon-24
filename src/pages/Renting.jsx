import React, { useState, useEffect } from "react";

export default function Renting() {
  const [data, setData] = useState([]);
  const[refresh,setRefresh]=useState(false);
  const [bookID, setBookID] = useState(); // Use a single state for bookID

  const handleStatusUpdate = async (id, status) => {
    try {
      setBookID(id); // Set bookID before the PUT request
      const response = await fetch(
        "http://192.168.137.1:8000/api/update-status/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            status, // Pass the status directly
            id,
          }),
        }
      );

      const responseData = await response.json();
      console.log("Response:", responseData);

      setData(responseData); // Update data if needed
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.137.1:8000/api/check-requests/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem('token'),
              // httpvinay: "localStorage.getItem('token')",
            },
          }
        );

        // Make a GET request using axios
        const responseData = await response.json();

        // Set the data in the state if it is an array
        if (Array.isArray(responseData)) {
          setData(responseData);
        } else {
          console.error("Invalid response data:", responseData);
        }
      } catch (error) {
        // Handle errors
        console.log(error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [handleStatusUpdate]);

  return (
    <>
      <div className=" m-4 rounded-md  bg-white p-6">
        <p className="text-lg font-bold text-center mt-4">Renting history</p>
        <table className="my-8 w-[1200px] bg-white border border-gray-300 mr-auto ml-auto">
          <thead className="text-center">
            <tr>
              <th className="border-b text-lg ">Booking ID</th>
              <th className="border-b text-lg ">Date</th>
              <th className="border-b text-lg ">Equipment Name</th>
              <th className="border-b text-lg ">Prices</th>
              <th className="border-b text-lg ">Action</th>
            </tr>
          </thead>
          <tbody>
      {Array.isArray(data) && data.map((currdata) => (
        <tr key={currdata.id} className="text-center">
                <td className="border-b text-lg">{currdata.id}</td>
                <td className="border-b text-lg">{currdata.when_date}</td>
                <td className="border-b text-lg">{currdata.equipement_type}</td>
                <td className="border-b text-lg">{currdata.price}</td>
                {/* <td className="border-b text-lg">{currdata.status}</td> */}
                <td className="border-b text-lg flex justify-center gap-1">
                  {currdata.status=="pending" ? <> <button
              onClick={() => handleStatusUpdate(currdata.id, "accepted")}
              className="bg-green-500 py-1 px-3 rounded text-white"
            >
              Accept
            </button>
            <button
              onClick={() => handleStatusUpdate(currdata.id, "rejected")}
              className="bg-red-500 py-1 px-3 rounded text-white"
            >
              Reject
            </button></>:currdata.status=="accepted"? <div className=" bg-green-500 p-1 w-40">Accepted</div>:<div className=" bg-red-500 p-1 w-40">Rejected</div> }
         
          </td>
        </tr>
      ))}
    </tbody>
        </table>
      </div>
    </>
  );
}