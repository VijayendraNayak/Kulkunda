// Import necessary libraries
"use client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  // State variables
  const [sevaId, setSevaId] = useState();
  const [sevaData, setSevaData] = useState();
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);

  // Function to handle search button click
  const handleSearchClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/seva/${encodeURIComponent(sevaId)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        console.error(data.error);
        setFound(false);
      } else {
        setSevaData(data);
        setFound(true);
      }
    } catch (error) {
      console.error(error);
      setFound(false);
    }
  };

  // Function to handle delete button click
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/seva/${encodeURIComponent(sevaId)}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success === false) {
        return;
      }
      setFound(false);
      setRemove(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to format date without time
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    // Authentication logic
    const auth = () => {
      const isLoggedIn = !!localStorage.getItem("userToken");
      const userRole = localStorage.getItem("userRole");
      const isAdmin =
        userRole === "admin" && userRole !== null && userRole !== undefined;
      if (!isLoggedIn) {
        router.replace("/Pages/login");
      }
      if (!isAdmin) {
        router.replace("/Pages/login");
        console.log("The user should be an admin to access this page");
      }
    };
    auth();
  }, []);

  return (
    <div className="pt-28 h-screen">
      <form className="flex p-3 bg-orange-200 rounded-full items-center justify-between max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Enter the Id of the seva"
          className="bg-transparent focus:outline-none max-w-lg mx-auto border-b-2 border-orange-500 py-2 px-4"
          id="id"
          onChange={(e) => setSevaId(e.target.value)}
        />
        <button
          onClick={handleSearchClick}
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:opacity-90"
        >
          <FaSearch />
        </button>
      </form>
      <div className="pt-4">
        {remove && !found && (
          <p className="text-red-500 font-semibold text-5xl text-center">
            Seva deleted Successfully!!!!
          </p>
        )}
        {found && sevaData && (
          <div className="text-center flex flex-col gap-4">
            <p className="text-green-500 text-2xl font-semibold">
              Seva Found Successfully!!!!!!!!
            </p>
            <p className="text-orange-500 text-5xl font-semibold pb-5">
              Seva Details
            </p>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center p-8 bg-orange-100 mx-auto rounded-lg">
              <div className="text-lg font-semibold">
                Seva Name: {sevaData ? sevaData.sevaName : "seva name"}
              </div>
              <div className="text-lg font-semibold">
                Date of Seva: {sevaData ? formatDate(sevaData.dateOfSeva) : "date of seva"}
              </div>
              <div className="text-lg font-semibold">
                Name: {sevaData ? sevaData.name : "name"}
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className={`p-3 bg-red-500 rounded-lg text-white text-xl font-semibold hover:opacity-90`}
                  type="button"
                  onClick={handleDeleteClick}
                >
                  Delete Seva
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
