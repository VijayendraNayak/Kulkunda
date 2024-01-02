// Import statements
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import RegisterImage from "/app/assets/image/temple2.webp";

const SevaForm = () => {
  const [seva, setSeva] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!seva || !name || !date) {
      console.error('Please fill in all required fields');
      return;
    }

    const formData = { sevaName: seva, name, dateOfSeva: date };

    try {
      setIsLoading(true); // Set loading to true when submitting

      const response = await fetch('/api/seva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Seva created successfully:', formData);
        setShowSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error('Failed to create Seva:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating Seva:', error.message);
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
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
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-md">
            <p className="text-green-500 text-xl font-semibold mb-4">Seva created successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SevaForm;
