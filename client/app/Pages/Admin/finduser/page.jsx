"use client"

import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FindUser = () => {
  const [userid, setUserid] = useState();
  const [formdata, setFormdata] = useState();
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updatecom, setUpdatecom] = useState(false);

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

  const handleupdate = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/user/admin/updaterole", {
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
    setFormdata(data.user);
    setUpdatecom(true)
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
  return (
    <div className="pt-28 h-screen">
      <div className="">
        <form className=" flex p-3 bg-orange-200 rounded-full items-center justify-between max-w-lg mx-auto ">
          <input
            type="text"
            placeholder="Enter the Id of the user"
            className="bg-transparent focus:outline-none w-full text-center"
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
          {remove && (
            <p className="text-orange-500 font-semibold text-5xl text-center">
              User deleted Successfully!!!!
            </p>
          )}
          {updatecom && (
            <p className="text-green-500 font-semibold text-5xl text-center">
              User Updated Successfully!!!!
            </p>
          )}
          {found && formdata && (
            <div className="text-center flex flex-col gap-4">
              <p className="text-green-500 text-2xl font-semibold">
                User Found Successfully!!!!!!!!
              </p>
              <p className="text-orange-500 text-5xl font-semibold underline">
                User Details
              </p>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center p-8 bg-orange-100 mx-auto rounded-lg">
                <img
                  src={formdata?.avatar}
                  alt="profile image"
                  className="w-44 h-60 rounded-lg no-repeat center object-cover"
                />
                <div className=" flex flex-col gap-4">
                  <div className="flex flex-col gap-4 w-80">
                    <div>Name: {formdata ? formdata.name : "username"}</div>
                    <div>Email: {formdata ? formdata.email : "useremail"}</div>
                    <div>Role: {formdata ? formdata.role : "userrole"}</div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      className={`p-3 bg-green-500 rounded-lg text-white text-xl font-semibold hover:opacity-90 ${
                        formdata.role === "admin" || update ? "hidden" : "flex"
                      }`}
                      type="button"
                      onClick={() => setUpdate(true)}
                    >
                      Update Role
                    </button>
                    <button
                      className={`p-3 bg-orange-500 rounded-lg text-white text-xl font-semibold hover:opacity-90 ${
                        formdata.role === "admin" ? "hidden" : "flex"
                      }`}
                      type="button"
                      onClick={handledeleteclick}
                    >
                      Delete User
                    </button>
                  </div>
                  <div
                    className={`${
                      !update ? "hidden" : "flex"
                    } justify-center flex gap-5`}
                  >
                    <select
                      id="role"
                      className="border p-3 rounded-lg"
                      onChange={(e) => {
                        setUserid({ ...userid, [e.target.id]: e.target.value });
                      }}
                    >
                      <option>Select Role</option>
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                    <button
                      className={`p-3 bg-green-500 rounded-lg text-white text-xl font-semibold hover:opacity-90 
                      }`}
                      type="button"
                      onClick={handleupdate}
                    >
                      Update
                    </button>
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