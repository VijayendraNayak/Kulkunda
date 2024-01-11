"use client";
import React, { useState } from "react";
// import { useRouter } from 'next/navigation';
// import { useSelector } from "react-redux";

// const SevaBookingForm = () => {
//   const router = useRouter();
//   const { sevaName } = useSelector((state) => state.seva);

//   const { sevaId } = router.query;

//   if (typeof sevaId === 'undefined') {
//     // Handle the case where sevaId is not provided
//     return <p>Seva ID not found</p>;

  const SevaBookingForm = () => {
    const [formData, setFormData] = useState({
      sevaName: '',
      userName: '',
      phoneNumber: '',
      sevaDate: '',
    });
  
    const [showAlert, setShowAlert] = useState(false);
  
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
  
      // Reset the form after submission (optional)
      setFormData({
        sevaName: '',
        userName: '',
        phoneNumber: '',
        sevaDate: '',
      });
  
      // You can also hide the alert after a certain time using setTimeout
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    };
  
    return (
      <div className="w-full md:w-1/2 p-8 min-h-screen">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Seva Booking Form</h2>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-orange-100 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="sevaName" className="block mt-5 text-sm font-semibold leading-6 text-gray-900">
                Seva Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="sevaName"
                  id="sevaName"
                  value={formData.sevaName}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="userName" className="block text-sm font-semibold leading-6 text-gray-900">
                User Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formData.userName}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="sevaDate" className="block text-sm font-semibold leading-6 text-gray-900">
                Seva Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="sevaDate"
                  id="sevaDate"
                  value={formData.sevaDate}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
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
    );
  };
  
  export default SevaBookingForm;
  