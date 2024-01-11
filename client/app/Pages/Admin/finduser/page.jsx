"use client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const [userid, setUserid] = useState();
  const [formdata, setFormdata] = useState();
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const handleclick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/user/admin/singleuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userid),
    });
    const data = await res.json();
    if (data.success === false) {
      console.log(data.message);
      setFound(false);
      return;
    }
    setFormdata(data.user);
    setFound(true);
  };
  const handledeleteclick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/user/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userid),
    });
    const data = await res.json();
    if (data.success === false) {
      return;
    }
    setFound(false);
    setRemove(true);
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
      <form className=" flex p-3 bg-orange-200 rounded-full items-center justify-between max-w-lg mx-auto ">
        <input
          type="text"
          placeholder="Enter the Id of the user"
          className="bg-transparent focus:outline-none max-w-lg mx-auto"
          id="id"
          onChange={(e) => {
            setUserid({ ...userid, [e.target.id]: e.target.value });
          }}
        />
        <button onClick={handleclick}>
          <FaSearch className="text-orange-600 "></FaSearch>
        </button>
      </form>
      <div className="pt-4">
        {remove && !found &&(
          <p className="text-red-500 font-semibold text-5xl text-center">
            User deleted Successfully!!!!
          </p>
        )}
        {found && formdata && (
          <div className="text-center flex flex-col gap-4">
            <p className="text-green-500 text-2xl font-semibold">
              User Found Successfully!!!!!!!!
            </p>
            <p className="text-orange-500 text-5xl font-semibold pb-5">
              User Details
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
                  <div>Role: {formdata ? formdata.role : "userrole"}</div>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    className={`p-3 bg-red-500 rounded-lg text-white text-xl font-semibold hover:opacity-90 ${
                      formdata.role === "admin" ? "hidden" : "flex"
                    }`}
                    type="button"
                    onClick={handledeleteclick}
                  >
                    Delete User
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
