"use client";
import React, { useState, useEffect } from 'react';

const AdminSevaPage = () => {
  const [bookedSevas, setBookedSevas] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

    const fetchBookedSevas = async () => {
      try {
        setLoader(true);
        const response = await fetch('/api/seva/admin/allbookedsevas');
        if (!response.ok) {
          throw new Error('Failed to fetch booked sevas');
        }
        const data = await response.json();
        setLoader(false);
        setBookedSevas(data);
      } catch (error) {
        console.error('Error fetching booked sevas:', error);
        setError('Failed to fetch booked sevas. Please try again.');
        setLoader(false);
      }
    };

useEffect(() => {
    setLoader(true);
    fetchBookedSevas();
  }, []);

  
  const handleDelete = async (sevaId) => {
    try {
      setLoader(true);
      const response = await fetch(`/api/seva/admin/delete/${sevaId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete booked seva');
      }
      // If deletion is successful, refetch the updated booked sevas
      setLoader(false);
      fetchBookedSevas();
    } catch (error) {
      console.error('Error deleting booked seva:', error);
      setLoader(false);
    }
  };

  return (
    <div className="pt-24 pb-20 flex flex-col">
      {loader && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h1 className="text-3xl font-bold mb-8 mt-12">
        Booked Seva List (Admin Panel)
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookedSevas.map((seva) => (
          <div key={seva._id} className="bg-white rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold mb-2">Seva Name: {seva.sevaName}</p>
            <p className="text-gray-600 mb-2">User ID: {seva.userId}</p>
            <p className="text-gray-600 mb-2">User Name: {seva.userName}</p>
            <p className="text-gray-600 mb-2">Phone Number: {seva.phoneNumber}</p>
            <p className="text-gray-600 mb-2">Seva Date: {seva.sevaDate}</p>
            <button
              onClick={() => handleDelete(seva._id)}
              className="text-white bg-red-600 border-0 py-2 px-4 rounded-md mt-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSevaPage;
