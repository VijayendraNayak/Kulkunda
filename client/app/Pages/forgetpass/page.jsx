"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";


const Changepass = () => {
  const [loader, setLoader] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showpassword1, setShowpassword1] = useState(false);
  const { phoneNumber } = useSelector((state) => state.phone);
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
  useEffect(() => {
    // Set phonenumber in formdata if phoneNumber exists
    if (phoneNumber) {
      setFormdata((prevData) => ({ ...prevData, phonenumber: phoneNumber }));
    }
  }, [phoneNumber]);

  const handleforgetpass = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setLoader(true);
      setError(null);
      const res = await fetch("/api/user/forgetpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        setLoader(false);
        return;
      }
      setError(false);
      setLoading(false);
      setLoader(false);
      setFormdata(data.user);
      if (data.role === "admin") {
        router.replace("/Pages/Admin/dashboard");
        const userToken = "someToken"; // Replace with the actual token received from the server
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userRole", "admin"); // or 'user'
      } else {
        router.replace("/Pages/login");
        const userToken = "someToken"; // Replace with the actual token received from the server
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userRole", "user"); // or 'user'
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="py-28 px-10 md:py-16 md:px-8 lg:py-20 lg:px-16 xl:py-28 xl:px-20 mt-5">
      {loader &&<Loader/>}
      <p className="pb-10 text-center text-5xl font-semibold text-orange-500">
        Forget Password
      </p>
      <div className="flex flex-col justify-center border-2 border-orange-500 max-w-lg mx-auto rounded-lg bg-orange-50 hover:scale-105 hover:shadow-lg">
        <form className="flex flex-col gap-4 p-6">
          <input
            type="text"
            placeholder="Phone number"
            className="border p-3 rounded-lg bg-white hover:shadow-lg hover:scale-105"
            id="phonenumber"
            value={phoneNumber ? `+${phoneNumber}` : " "}
            disabled
          />
          <div className="relative ">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter your new password here"
              id="password"
              className=" p-3 border rounded-lg w-full hover:scale-105 hover:shadow-lg"
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
              placeholder="Confirm new password"
              id="confirmpassword"
              className="p-3 border rounded-lg w-full hover:scale-105 hover:shadow-lg"
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
            className="bg-orange-500 text-center font-semibold p-3 text-white text-xl rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            onClick={handleforgetpass}
          >
            {loading ? "Loading..." : "Set Password"}
          </button>
        </form>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Changepass;
