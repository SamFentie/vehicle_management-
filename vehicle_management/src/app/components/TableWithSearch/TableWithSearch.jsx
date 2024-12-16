'use client'
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

const DynamicTable = ({ data, path,}) => {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();  // Initialize the router

  const handleClick = (row) => {
    
    if (path) {
      const url =`${path}/${row.ID}&&${row.Name}&&${row.Status}`;
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

  return (
    <div className="p-4 w-full text-gray-500">
      {/* Search Inputs */}
      <div className="mb-4 grid grid-cols-4 gap-2 w-[90%]">
        {columns.map((column) => (
          
            <label className="input flex items-center gap-2 m-2 outline-none focus:border-0 ">
                    {column}
                    <input  placeholder={`By ${column}`} onChange={(event) => handleFilterChange(column, event)} type="text" className="grow" />
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
                  <button
                    onClick={() => handleClick(row)}
                    className="  px-2 py-1 rounded"
                  >
                    <FaEdit  className="w-5 h-5" alt="" />
                  </button>
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
