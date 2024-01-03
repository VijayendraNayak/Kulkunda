"use client";

import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FindUser = () => {
  const [sevaid, setSevaid] = useState();
  const [formdata, setFormdata] = useState();
  const [found, setFound] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleclick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/seva/admin/singleseva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sevaid),
    });
    const data = await res.json();
    if (data.success === false) {
      console.log(data.message);
      setFound(false);
      return;
    }
    setFormdata(data.seva);
    setFound(true);
  };

  const handledeleteclick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/seva/admin/deleteseva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sevaid),
    });
    const data = await res.json();
    if (data.success === false) {
      console.log(data.message);
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
            placeholder="Enter the Id of the seva"
            className="bg-transparent focus:outline-none w-full text-center"
            id="id"
            onChange={(e) => {
              setSevaid({ ...sevaid, [e.target.id]: e.target.value });
            }}
          />
          <button onClick={handleclick}>
            <FaSearch className="text-orange-600 "></FaSearch>
          </button>
        </form>
        <div className="pt-4">
          {remove && (
            <p className="text-red-500 font-semibold text-5xl text-center">
              Seva deleted Successfully!!!!
            </p>
          )}
          {found && formdata && (
            <div className="text-center flex flex-col gap-4">
              <p className="text-green-500 text-2xl font-semibold">
                Seva Found Successfully!!!!!!!!
              </p>
              <p className="text-orange-500 text-5xl font-semibold underline">
                Seva Details
              </p>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center p-8 bg-orange-100 mx-auto rounded-lg">
                <div className=" flex flex-col gap-4">
                  <div className="flex flex-col gap-4 w-80">
                    <div>Name: {formdata ? formdata.name : "username"}</div>
                    <div>
                      SevaName: {formdata ? formdata.sevaName : "useremail"}
                    </div>
                    <div>
                      Date: {formdata ? formdata.dateOfSeva : "useremail"}
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
                      Delete Seva
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
