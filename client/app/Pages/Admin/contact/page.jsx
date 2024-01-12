"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSpring, animated } from "react-spring";
import Loader from "../../../Components/Loader";

const AdminContactPage = () => {
  const [contactForms, setContactForms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [length, setLength] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setLoader(true)
    const verifyuser = () => {
      const isLoggedIn = !!localStorage.getItem("userToken");
      const userRole = localStorage.getItem("userRole");
      const isAdmin =
        userRole === "admin" && userRole !== null && userRole !== undefined;
      if (!isLoggedIn) {
        router.replace("/Pages/login");
      }
      if (!isAdmin) {
        router.replace("/Pages/login");
        console.log("The user should be admin to access this page");
      }
      setLoader(false)
    };

    const fetchData = async () => {
      try {
        setLoader(true)
        const response = await fetch("/api/contact/forms");
        if (!response.ok) {
          throw new Error("Failed to fetch contact forms");
          setLoader(false)
        }
        const data = await response.json();
        setLoader(false)
        setContactForms(data.contactForms);
      } catch (error) {
        console.error("Error fetching contact forms:", error);
        setError("Failed to fetch contact forms. Please try again."); // Set error state
        setLoader(false)
      }
    };
    const fetchnumdata = async () => {
      const res = await fetch("/api/contact/admin/noofcontacts");
      const data = await res.json();
      const len = data.length;
      setLength(len);
    };
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
    verifyuser();
    fetchData();
    fetchnumdata();
    checkcookie();
  }, []);

  const numberAnimation = useSpring({
    from: { number: 0 },
    to: { number: length },
    config: { duration: 1000 },
  });

  const handleclick = () => {
    router.replace("/Pages/Admin/findcontact");
  };

  const handleDelete = async (contactId) => {
    try {
      setLoader(true)
      const response = await fetch(`/api/contact/delete/${contactId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete contact form");
        setLoader(false)
      }
      // If deletion is successful, refetch the updated contact forms
      setLoader(false)
      fetchData();
      setAlert("Contact deleted successfully");
      setTimeout(() => {
        setAlert(null);
      }, 3000); // Clear the alert after 3 seconds
    } catch (error) {
      console.error("Error deleting contact form:", error);
      setAlert("Failed to delete contact form. Please try again.");
      setLoader(false)
      setTimeout(() => {
        setAlert(null);
      }, 3000); // Clear the alert after 3 seconds
    }
  };

  return (
    <div className="pt-24 pb-20 flex flex-col">
      <div>
        {loader && <Loader/>}
        <div className="flex flex-col">
          <div className="flex justify-center items-center py-16 gap-4">
            <animated.span className="text-8xl text-white bg-orange-500 rounded-full p-8">
              {numberAnimation.number.to((val) => Math.floor(val))}
            </animated.span>
            <p className="text-6xl font-bold text-orange-500">
              Number of Querries
            </p>
          </div>
          <div className="flex gap-4 justify-around px-12">
            <button
              type="button"
              className="bg-orange-500 text-2xl font-semibold text-white p-4 rounded-lg hover:opacity-75 hover:scale-105"
              onClick={handleclick}
            >
              Find a Querry
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-8 mt-12">
          Contact Form Submissions (Admin Panel)
        </h1>
        {alert && (
          <p
            className={`text-lg ${
              error ? "text-red-600" : "text-green-600"
            } mb-4`}
          >
            {alert}
          </p>
        )}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {contactForms && contactForms.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contactForms.map((form) => (
              <div
                key={form._id}
                className={`bg-white rounded-lg shadow-md p-4 transition-transform transform-gpu ${
                  expandedId === form._id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setExpandedId(form._id)}
                onMouseLeave={() => setExpandedId(null)}
              >
                <p className="text-lg font-semibold mb-2">Name: {form.name}</p>
                <p className="text-gray-600 mb-2">User ID: {form._id}</p>
                <p className="text-gray-600 mb-2">Email: {form.email}</p>
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
        ;
      </div>
    </div>
  );
};

export default AdminContactPage;
