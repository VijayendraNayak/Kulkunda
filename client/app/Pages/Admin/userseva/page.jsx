"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const res = await fetch("/api/admin/getBookingDetails"); // Replace this with your API endpoint
        const data = await res.json();
        if (data.success) {
          setBookingDetails(data.bookingDetails);
        } else {
          console.error("Failed to fetch booking details");
        }
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };

    fetchBookingDetails();
  }, []);

  return (
    <div>
      <h1>User Booked Seva Details</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Seva ID</th>
            <th>Seva Name</th>
            {/* Add other relevant columns */}
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.userId}</td>
              <td>{booking.userName}</td>
              <td>{booking.sevaId}</td>
              <td>{booking.sevaName}</td>
              {/* Render other booking details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
