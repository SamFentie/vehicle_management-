'use client'
import React, { useState,useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Import useRouter from next/router


const DynamicTable = ({ path,}) => {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();  // Initialize the router
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to store any errors

  // Fetch data from API when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/vehicles");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result.formattedData); // Set the fetched data
        setFilteredData(result.formattedData)
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchData();
  }, []);

  const handleClick = (row) => {
    
    if (path) {
      const url =`${path}/${row.id}&&${row.vehicle_name}&&${row.Status}`;
      router.push(url);  // Navigate to the URL
    }
  };

  // Dynamically generate table headers based on the first data entry
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  // Filter data based on filter criteria
  const handleFilterChange = (column, event) => {
    const value = event.target.value.toLowerCase();
    const updatedFilters = { ...filters, [column]: value };
    setFilters(updatedFilters);

    // Filter the data based on the filters
    const newFilteredData = data.filter((row) => {
      return Object.keys(updatedFilters).every((key) => {
        if (!updatedFilters[key]) return true;
        const cellValue = row[key]?.toString().toLowerCase();
        return cellValue.includes(updatedFilters[key]);
      });
    });

    setFilteredData(newFilteredData);
  };

  if (loading) return <div className="p-4 w-[100%] flex text-gray-500 justify-center items-center h-[80vh] "><span className="loading loading-ring loading-lg"></span></div>;
  if (error) return <div>Error: {error}</div>;
  return (
      <div className="p-4 w-full text-gray-500">
      {/* Search Inputs */}
      <div className="mb-4 grid grid-cols-4 gap-2 w-[90%]">
        {columns.map((column,index) => (
          
            <label key={index} className="input flex items-center gap-2 m-2 outline-none focus:border-0 ">
                    {column}
                    <input  placeholder="..." onChange={(event) => handleFilterChange(column, event)} type="text" className="grow" />
            </label>        
        ))}
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse border border-gray-200 overflow-x-auto w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="border border-gray-200 px-4 py-2 bg-gray-100"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column}
                  className="border border-white px-4 py-2"
                >
                  {row[column]}
                </td>
              ))}
              <td className="border border-gray-200 justify-center items-center flex">
                {path && (
                   <div className="tooltip" data-tip="Edit">
                  <button
                    onClick={() => handleClick(row)}
                    className="  px-2 py-1 rounded"
                  >
                    <FaEdit  className="w-5 h-5" alt="" />
                  </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
