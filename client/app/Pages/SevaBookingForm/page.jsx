"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Temple from "/app/assets/image/poster.jpg";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const SevaBookingForm = () => {
  const { sevaName } = useSelector((state) => state.seva);
  const { currentUser } = useSelector((state) => state.user);
  const router=useRouter();
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem('userToken');
    if(!isLoggedIn){router.replace("/Pages/login")}
    const checkcookie=async()=>{
      const res=await fetch("/api/user/checkcookies")
      const data=await res.json()
      if (data.success===false){
        console.log(data.message)
        router.replace("/Pages/login")
        return
      }
    }
    checkcookie()
  }, []);
  
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can send the form data to your server or perform other actions

    // For demonstration purposes, we'll just show an alert
    setShowAlert(true);
    // You can also hide the alert after a certain time using setTimeout
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
   useEffect(() => {
    if (currentUser) {
      setFormData((prevData) => ({ ...prevData, userid: currentUser._id }));
    }
  }, [currentUser]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-8 min-h-screen ">
        <h2 className="text-3xl font-bold tracking-tight mb-6 mt-10 text-center">
          Seva Booking Form
        </h2>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-orange-100 rounded-lg shadow-lg "
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="sevaName"
                className="block mt-5 text-sm font-semibold leading-6 text-gray-900"
              >
                Seva Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="sevaName"
                  id="sevaname"
                  value={sevaName ? sevaName : " "}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="userName"
                  id="username"
                  value={formData.userName}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phonenumber"
                  value={formData.phoneNumber}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="sevaDate"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Seva Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="sevaDate"
                  id="sevadate"
                  value={formData.sevaDate}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 hover:scale-105 hover:shadow-lg"
            >
              Book Seva
            </button>
          </div>
        </form>
        {showAlert && (
          <div className="mt-4 p-2 text-white bg-green-500 rounded-md">
            <p className="text-center">Form submitted successfully!</p>
          </div>
        )}
      </div>
      <div className="hidden md:block md:w-2/3 bg-cover bg-center relative">
        <Image
          src={Temple}
          alt="right side"
          className="mt-3 p-20 "
          objectFit="cover"
          // width={1000}
          // height={1000}
          layout="fill"
          objectPosition="right"
          priority
        />
      </div>
    </div>
  );
};

export default SevaBookingForm;
