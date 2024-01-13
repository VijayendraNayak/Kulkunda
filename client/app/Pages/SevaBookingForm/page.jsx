"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Temple from "/app/assets/image/poster.jpg";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Loader from "../../Components/Loader";

const SevaBookingForm = () => {
  const { sevaName } = useSelector((state) => state.seva);
  const { currentUser } = useSelector((state) => state.user);
  const router=useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [loader, setLoader] = useState(false);

  
  useEffect(() => {
    setLoader(true)
    const isLoggedIn = !!localStorage.getItem('userToken');
    if(!isLoggedIn){router.replace("/Pages/login")}
    setLoader(false)
    const checkcookie=async()=>{
      setLoader(true)
      const res=await fetch("/api/user/checkcookies")
      const data=await res.json()
      if (data.success===false){
        console.log(data.message)
        router.replace("/Pages/login")
        setLoader(false)
        return
      }
      setLoader(false)
    }
    checkcookie()
  }, []);
  
  const [formData, setFormData] = useState(
    {sevaName: sevaName,
    username: "", 
    phonenumber: "",
    sevadate: "",
    userId: "",
});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);

      // Assuming you have an endpoint on your server to handle Seva booking
      const response = await fetch("/api/seva/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sevaName,
          userId: currentUser._id, 
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book Seva");
      }

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error("Error booking Seva:", error.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setFormData((prevData) => ({ ...prevData, userId: currentUser._id }));
    }
  }, [currentUser]);  

  return (
    <div className="flex flex-col md:flex-row">
      {loader && <Loader/>}
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
                  id="sevaName"
                  value={sevaName ? sevaName : " "}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phonenumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  value={formData.phonenumber}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:scale-105 hover:shadow-lg"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="sevadate"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Seva Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="sevadate"
                  id="sevadate"
                  value={formData.sevadate}
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
