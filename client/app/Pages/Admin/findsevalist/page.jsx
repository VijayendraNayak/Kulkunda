"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// ... (import statements remain unchanged)

// ... (import statements remain unchanged)

const FindUser = () => {
  const [sevaId, setSevaId] = useState("");
  const [seva, setSeva] = useState(null);
  const [found, setFound] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/sevalist/sevalist/${sevaId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.success === false) {
      console.log(data.message);
      setFound(false);
      return;
    }

    setSeva(data.seva);
    setFound(true);
  };

  return (
    <div className="pt-28 h-screen">
      <div className="">
        <form className="flex p-3 bg-orange-200 rounded-full items-center justify-between max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Enter the ID of the Seva"
            className="bg-transparent focus:outline-none w-full text-center"
            onChange={(e) => setSevaId(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch className="text-orange-600"></FaSearch>
          </button>
        </form>
        <div className="pt-4">
          {found && seva && (
            <div className="text-center flex flex-col gap-4">
              <p className="text-green-500 text-2xl font-semibold">
                Seva Found Successfully!!!!!!!!
              </p>
              <p className="text-orange-500 text-5xl font-semibold underline">
                Seva Details
              </p>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center p-8 bg-orange-100 mx-auto rounded-lg">
              
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 w-80">
                    {/* Display Seva Attributes */}
                    <div>Name (Hindi): {seva.sevanameh}</div>
                    <div>Name (Kannada): {seva.sevanamek}</div>
                    <div>Name (English): {seva.sevanamee}</div>
                    <div>Price: {seva.price}</div>
                    {/* Add more attributes as needed */}
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindUser;


