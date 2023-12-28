"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const AdminContactPage = () => {
  const [contactForms, setContactForms] = useState([]);
  const [error, setError] = useState(null);
  const router=useRouter();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("/api/contact/forms");
        if (!response.ok) {
          throw new Error("Failed to fetch contact forms");
        }
        const data = await response.json();
        setContactForms(data.contactForms);
      } catch (error) {
        console.error("Error fetching contact forms:", error);
        setError("Failed to fetch contact forms. Please try again."); // Set error state
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("userToken");
    const userRole = localStorage.getItem('userRole');
    const isAdmin = userRole === 'admin' && userRole !== null && userRole !== undefined;
    if (!isLoggedIn) {
      router.replace("/Pages/login");
    }
    if(!isAdmin){
      router.replace("/Pages/login");
      console.log("The user should be admin to access this page")
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Contact Form Submissions (Admin Panel)
      </h1>
      {error && <p className="text-red-600">{error}</p>}{" "}
      {/* Display error message if error exists */}
      {contactForms.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contactForms.map((form) => (
            <div key={form._id} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-lg font-semibold mb-2">Name: {form.name}</p>
              <p className="text-gray-600 mb-2">Email: {form.email}</p>
              <p className="text-gray-600 mb-2">Phone Number: {form.phoneNumber}</p>
              <p className="text-gray-600 mb-4">Message: {form.message}</p>
              <button
                onClick={() => handleDelete(form._id)}
                className="text-white bg-red-600 border-0 py-2 px-4 rounded-md transition duration-300 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No contact forms available</p>
      )}
    </div>
  );
};

export default AdminContactPage;
