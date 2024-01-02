"use client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const [searchParams, setSearchParams] = useState({});
  const [formdata, setFormdata] = useState();
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const [searchCategory, setSearchCategory] = useState("id");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSearchParams({ ...searchParams, [id]: value });
  };

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        [searchCategory]: searchParams.id,
        name: searchCategory === "name" ? searchParams.id : undefined,
        email: searchCategory === "email" ? searchParams.id : undefined,
        phoneNumber:
          searchCategory === "phoneNumber" ? searchParams.id : undefined,
      };

      const res = await fetch("/api/contact/admin/singlecontact", {
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
        setFormdata(null); // Clear previous data if not found
        return;
      }

      setFormdata(data.contact);
      setFound(true);
      setRemove(false); // Reset remove state
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handledeleteclick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactid),
    });
    const data = await res.json();
    if (data.success === false) {
      return;
    }
    setFound(false);
    setRemove(true);
  };

  const handleClearSearch = () => {
    setSearchParams({});
    setFound(false);
    setFormdata(null);
    setRemove(false);
  };

  useEffect(() => {
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
        console.log("The user should be admin to access this page");
      }
    };
    auth();
  });
  return (
    <div className="pt-28 h-screen">
      <form className="flex items-center justify-between max-w-lg mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-full">
        <select
          value={searchCategory}
          onChange={handleCategoryChange}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
        >
          <option value="id" className="text-black">
            ID
          </option>
          <option value="name" className="text-black">
            Name
          </option>
          <option value="email" className="text-black">
            Email
          </option>
          <option value="phoneNumber" className="text-black">
            Phone Number
          </option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${searchCategory}`}
          className="bg-transparent focus:outline-none text-white max-w-lg mx-auto"
          id="id"
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="ml-2 focus:outline-none">
          <FaSearch className="text-white"></FaSearch>
        </button>
      </form>

      <div className="pt-4">
        {remove && !found && (
          <p className="text-red-500 font-semibold text-5xl text-center">
            Contact Querry deleted Successfully!!!!
          </p>
        )}
        {found && formdata && (
          <div className="text-center flex flex-col gap-4">
            <p className="text-green-500 text-2xl font-semibold">
              Querry Found Successfully!!!!!!!!
            </p>
            <p className="text-orange-500 text-5xl font-semibold pb-5">
              Querry Details
            </p>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center p-8 bg-orange-100 mx-auto rounded-lg">
              <img
                src={formdata?.avatar}
                alt="profile image"
                className="w-44 h-60 rounded-lg no-repeat center object-cover"
              />
              <div className=" flex flex-col gap-4">
                <div className="flex flex-col gap-4 w-80 font-semibold">
                  <div>Name: {formdata ? formdata.name : "username"}</div>
                  <div>Email: {formdata ? formdata.email : "useremail"}</div>
                  <div>
                    Phone Number: {formdata ? formdata.phoneNumber : "userrole"}
                  </div>
                  <div>
                    Description: {formdata ? formdata.message : "userdesc"}
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    className={`p-3 bg-red-500 rounded-lg text-white text-xl font-semibold hover:opacity-90 ${
                      formdata.role === "admin" ? "hidden" : "flex"
                    }`}
                    type="button"
                    onClick={handledeleteclick}
                  >
                    Delete Querry
                  </button>
                  <button
                    onClick={handleClearSearch}
                    className="p-3 bg-gray-500 rounded-lg text-white text-xl font-semibold hover:opacity-90"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
