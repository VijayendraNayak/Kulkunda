"use client";
import React, { useEffect, useState } from 'react';

const AdminContactPage = () => {
  const [contactForms, setContactForms] = useState([]);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/contact/forms', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch contact forms');
      }
      const data = await response.json();
      setContactForms(data.contactForms);
    } catch (error) {
      console.error('Error fetching contact forms:', error);
      setError('Failed to fetch contact forms. Please try again.'); // Set error state
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      const response = await fetch(`/api/contact/delete/${contactId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact form');
      }

      // If deletion is successful, refetch the updated contact forms
      fetchData();
      setAlert('Contact deleted successfully');
      setTimeout(() => {
        setAlert(null);
      }, 3000); // Clear the alert after 3 seconds
    } catch (error) {
      console.error('Error deleting contact form:', error);
      setAlert('Failed to delete contact form. Please try again.');
      setTimeout(() => {
        setAlert(null);
      }, 3000); // Clear the alert after 3 seconds
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Form Submissions (Admin Panel)</h1>
      {alert && (
        <p className={`text-lg ${error ? 'text-red-600' : 'text-green-600'} mb-4`}>{alert}</p>
      )}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {contactForms && contactForms.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactForms.map((form) => (
            <div
              key={form._id}
              className={`bg-white rounded-lg shadow-md p-6 transition-transform transform-gpu ${
                expandedId === form._id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setExpandedId(form._id)}
              onMouseLeave={() => setExpandedId(null)}
            >
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
