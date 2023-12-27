"use client"
import React, { useState } from 'react';

const Sevaform = () => {
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

    <form className="max-w-md mx-auto p-6 m-40 border-2" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="seva" className="block text-gray-700 text-sm font-bold mb-2">
          Seva
        </label>
        <input
          type="text"
          id="seva"
          name="seva"
          value={seva}
          onChange={(e) => setSeva(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sevaform;
