// Import necessary libraries
"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const FindNewsUpdates = () => {
  // State for search parameters, news data, search result status, and selected search category
  const [searchTerm, setSearchTerm] = useState("");
  const [newsUpdatesList, setNewsUpdatesList] = useState([]);
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const [searchCategory, setSearchCategory] = useState("headline");

  // Fetch all news updates when the component mounts and when search category changes
  useEffect(() => {
    const fetchNewsUpdates = async () => {
      try {
        const res = await fetch("/api/newsupdate/allnews", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        if (data.success) {
          setNewsUpdatesList(data.news);
          setFound(true);

          // Automatically trigger the search with the default parameters
          handleSearchDefault();
        }
      } catch (error) {
        console.error(
          "Error during fetching news updates:",
          error.message || "Unknown error"
        );
      }
    };

    fetchNewsUpdates();
  }, [searchCategory]);  // Added searchCategory as a dependency to re-run when it changes

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

  // Handle the search functionality with default parameters
  const handleSearchDefault = async () => {
    try {
      // Fetch news updates based on the default search criteria
      const res = await fetch("/api/newsupdate/singlenews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [searchCategory]: "" }),
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

  return (
    <div className="pt-28" style={{ maxHeight: "calc(100vh - 100px)" }}>
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
                
                {/* Display avatar if available */}
                {newsUpdate.avatar && newsUpdate.avatar.length > 0 && (
                  <div className="mb-2">
                    Avatar: <img src={newsUpdate.avatar[0]} alt="Avatar" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindNewsUpdates;
