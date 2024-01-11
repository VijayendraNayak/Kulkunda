"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FindUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sevaList, setSevaList] = useState([]);
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const [searchCategory, setSearchCategory] = useState("sevanamee");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const requestBody = {
        [searchCategory]: searchTerm,
        sevanamek: searchCategory === "sevanamek" ? searchTerm : undefined,
        sevanameh: searchCategory === "sevanameh" ? searchTerm : undefined,
        price: searchCategory === "price" ? searchTerm : undefined,
      };

      const res = await fetch("/api/sevalist/singleseva/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (data.success === false) {
        console.log(data.message);
        setFound(false);
        setSevaList([]);
        return;
      }

      setSevaList(data.seva);
      setFound(true);
      setRemove(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFound(false);
    setSevaList([]);
    setRemove(false);
  };

  const handleUpdate = (sevaId) => {
    // Implement update logic, for example, redirect to the update page with sevaId
    console.log(`Update clicked for Seva ID: ${sevaId}`);
  };

  const handleDelete = async (sevaId) => {
    try {
      const res = await fetch(`/api/sevalist/admin/deleteseva/${sevaId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        // Successfully deleted
        console.log(`Seva ID ${sevaId} deleted successfully`);
        // You may also update the UI to reflect the deletion
        setSevaList(sevaList.filter(seva => seva._id !== sevaId));
      } else {
        console.error("Deletion failed:", data.message);
        // Handle deletion failure
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      // Handle error
    }
  };

  return (
    <div className="pt-28 h-screen">
      <form className="flex items-center justify-between max-w-lg mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-full">
        <select
          value={searchCategory}
          onChange={handleCategoryChange}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
        >
          <option value="sevanamee" className="text-black">
            Name (English)
          </option>
          <option value="sevanamek" className="text-black">
            Name (Kannada)
          </option>
          <option value="sevanameh" className="text-black">
            Name (Hindi)
          </option>
          <option value="price" className="text-black">
            Price
          </option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${searchCategory}`}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="ml-2 focus:outline-none">
          <FaSearch className="text-white"></FaSearch>
        </button>
      </form>

      <div className="pt-4">
        {remove && !found && (
          <p className="text-red-500 font-semibold text-5xl text-center">
            Query deleted Successfully!!!!
          </p>
        )}
        {found && sevaList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sevaList.map((seva, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md shadow-md"
              >
                {/* Display Seva Attributes */}
                <div className="font-bold mb-2">Name (Hindi): {seva.sevanameh}</div>
                <div className="mb-2">Name (Kannada): {seva.sevanamek}</div>
                <div className="mb-2">Name (English): {seva.sevanamee}</div>
                <div>Price: {seva.price}</div>
                {/* Add more attributes as needed */}
                <div className="mt-4 flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleUpdate(seva._id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleDelete(seva._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindUser;
