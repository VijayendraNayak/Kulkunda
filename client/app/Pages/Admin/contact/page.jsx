"use client";
import React, { useEffect, useState } from 'react';

const AdminContactPage = () => {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/contact');
        if (!response.ok) {
          throw new Error('Failed to fetch contact forms');
        }
        const data = await response.json();
        setContactForms(data.contactForms);
      } catch (error) {
        console.error('Error fetching contact forms:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Form Submissions (Admin Panel)</h1>
      {contactForms.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contactForms.map((form) => (
            <div
              key={form._id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <p className="text-lg font-semibold mb-2">Name: {form.name}</p>
              <p className="text-gray-600 mb-2">Email: {form.email}</p>
              {/* Add other details you want to display */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No contact forms available</p>
      )}
    </div>
  );
};

export default AdminContactPage;
