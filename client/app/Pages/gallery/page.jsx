"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

const page = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState([]);
  useEffect(() => {
    const auth = () => {
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
    };
    const checkcookie = async () => {
      const res = await fetch("/api/user/checkcookies");
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        router.replace("/Pages/login");
        return;
      }
    };
    const fetchdata = async () => {
      const res = await fetch("/api/gallery/admin/noofimg");
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormdata(data.gallery);
    };
    auth();
    fetchdata();
    checkcookie();
  }, []);
  return (
    <div className="container mx-auto py-20 px-10">
      <div className="font-semibold text-6xl text-orange-500 text-center pb-10">
        Gallery
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {formdata.map((image) => (
          <div
            key={image._id}
            className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 hover:opacity-80"
          >
            <img
              src={image.avatar}
              alt={image.title}
              className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
