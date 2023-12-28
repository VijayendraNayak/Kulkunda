"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import RegisterImage from "/app/assets/image/temple2.webp";

const SevaForm = () => {
  // State variables to hold form data
  const [seva, setSeva] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Process or submit form data as needed
    console.log('Form submitted:', { seva, name, date });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-orange-300 ">
      <form className="max-w-md w-full p-6 m-4 md:mx-auto  rounded-xl bg-white md:w-96 lg:w-1/3  hover:scale-105 shadow-xl" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6 text-black text-center underline ">Seva Form</h1>
        <div className="mb-4">
          <label htmlFor="seva" className="block text-black-700 text-sm font-bold mb-2 text-lg">
            Seva Name
          </label>
          <input
            type="text"
            id="seva"
            name="seva"
            value={seva}
            onChange={(e) => setSeva(e.target.value)}
            className="w-full px-3 py-2 border rounded-xl  hover:scale-105"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-xl  hover:scale-105"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-black-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-xl  hover:scale-105"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-300 to-orange-300 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-md "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SevaForm;
