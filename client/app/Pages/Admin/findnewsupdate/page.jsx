// Import necessary libraries
"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import NewsUpdatesForm from "../newsupdateform/page"; 
import { useRouter } from "next/navigation";// Adjust the path as per your actual file structure

const FindNewsUpdates = () => {
  // State for search parameters, news data, search result status, and selected search category
  const [searchTerm, setSearchTerm] = useState("");
  const [newsUpdatesList, setNewsUpdatesList] = useState([]);
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const [searchCategory, setSearchCategory] = useState("headline");
  const [selectedNewsUpdate, setSelectedNewsUpdate] = useState(null);

  const openEditForm = (newsUpdate) => {
    setSelectedNewsUpdate(newsUpdate);
  };

  const router = useRouter();

  // Handle input changes for search parameters
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle changes in the selected search category
  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  // Handle the search functionality
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Build the request body based on the selected search category
      const requestBody = {
        [searchCategory]: searchTerm,
        description:
          searchCategory === "description" ? searchTerm : undefined,
        reffernces:
          searchCategory === "reffernces" ? searchTerm : undefined,
      };

      // Fetch news updates based on the search criteria
      const res = await fetch("/api/newsupdate/singlenews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      // Handle search results
      if (data.success === false) {
        console.log(data.message);
        setFound(false);
        setNewsUpdatesList([]);
        return;
      }

      setNewsUpdatesList(data.news);
      setFound(true);
      setRemove(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle clearing search results
  const handleClearSearch = () => {
    setSearchTerm("");
    setFound(false);
    setNewsUpdatesList([]);
    setRemove(false);
  };

  // Handle deleting data
  const handleDelete = async (newsUpdateId) => {
    try {
      const res = await fetch(`/api/newsupdate/deletenews/${newsUpdateId}`, {
        method: "DELETE",
      });
  
      const data = await res.json();
  
      if (data.success) {
        console.log(`News Update ID ${newsUpdateId} deleted successfully`);
        setRemove(true);
        window.location.reload(); // Refresh the page
      } else {
        console.error("Deletion failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error during deletion:", error.message || "Unknown error");
    }
  };

  // Handle navigating to the update page
  const handleEdit = (newsId) => {
    router.push(`/Pages/Admin/updatenews/${newsId}`);
  };

  return (
    <div className="pt-28 h-screen">
      <form className="flex items-center justify-between max-w-lg mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-full">
        <select
          value={searchCategory}
          onChange={handleCategoryChange}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
        >
          <option value="headline" className="text-black">
            Headline
          </option>
          <option value="description" className="text-black">
            Description
          </option>
          <option value="reffernces" className="text-black">
            References
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
        {found && newsUpdatesList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newsUpdatesList.map((newsUpdate, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <div className="font-bold mb-2">
                  Headline: {newsUpdate.headline}
                </div>
                <div className="mb-2">Description: {newsUpdate.description}</div>
                <div className="mb-2">References: {newsUpdate.reffernces}</div>
                {newsUpdate.avatar && newsUpdate.avatar.length > 0 && (
                  <div className="mb-2">
                    Avatar: <img src={newsUpdate.avatar[0]} alt="Avatar" />
                  </div>
                )}
                <div className="mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleDelete(newsUpdate._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
                    onClick={() => handleEdit(newsUpdate._id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Pass the selected news update to the NewsUpdatesForm component */}
      {selectedNewsUpdate && (
        <NewsUpdatesForm
          selectedNewsUpdate={selectedNewsUpdate}
          onClose={() => setSelectedNewsUpdate(null)} // Close the form when needed
        />
      )}
    </div>
  );
};

export default FindNewsUpdates;
