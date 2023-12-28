"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Changepass = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [showpassword1, setShowpassword1] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({});
  const router = useRouter();

  const togglepass = () => {
    setShowpassword(!showpassword);
  };
  const togglepass1 = () => {
    setShowpassword1(!showpassword1);
  };
  const handleonchange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handlechangepass = async (e) => {
    e.preventDefault();
    try {
      console.log("here");
      setLoading(true);
      setError(null);
      const res = await fetch("/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(false);
      setLoading(false);
      setFormdata(data.user);
      router.replace("/Pages/profile");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="py-28 px-10">
      <p className="pb-10 text-center text-5xl font-semibold text-orange-500">
        Change Password
      </p>
      <div className="flex flex-col justify-center border-2 border-orange-500 max-w-lg mx-auto rounded-lg bg-orange-50">
        <form className="flex flex-col gap-4 p-6">
          <div className="relative ">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter your old password here"
              id="oldpass"
              className=" p-3 border rounded-lg w-full"
              onChange={handleonchange}
            />
            <button
              type="button"
              onClick={togglepass}
              className="absolute top-1/4 right-2"
            >
              {!showpassword ? <IoIosEye /> : <IoIosEyeOff />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showpassword1 ? "text" : "password"}
              placeholder="Enter your new password here"
              id="newpass"
              className="p-3 border rounded-lg w-full"
              onChange={handleonchange}
            />
            <button
              type="button"
              onClick={togglepass1}
              className="absolute top-1/4 right-2"
            >
              {!showpassword1 ? <IoIosEye /> : <IoIosEyeOff />}
            </button>
          </div>
          <button
            className="bg-orange-500 text-center font-semibold p-3 text-white text-xl rounded-lg hover:bg-orange-600"
            onClick={handlechangepass}
          >
            {loading ? "Loading..." : "Update password"}
          </button>
        </form>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Changepass;