"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import RegisterImage from "/app/assets/image/temple.jpg"

const Register = () => {
  const [formdata, setFormdata] = useState({});
  const [password, showPassword] = useState(true);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const togglepassword = () => {
    showPassword(!password);
  };

  return (
    <div className="pt-20 p-10 flex ">
      {/* {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-orange-500"></div>
        </div>
      )} */}
      <div className="flex-1 relative">
      <Image
          src={RegisterImage}
          alt="regester background image"
          layout="fill"
          objectFit="cover"
          priority
        />
      {/* image here */}
      </div>
      <div className="flex-1 ">
      <p className="text-4xl px-12 font-semibold text-center text-orange-500 ">
        Register
      </p>
      <div className="flex flex-col w-[400px] mx-auto justify-center border-2 p-6 border-orange-500 gap-4 bg-orange-100 rounded-lg mt-12">
        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg"
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border p-3 rounded-lg"
            id="mobile"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="OTP"
            className="border p-3 rounded-lg"
            id="otp"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={password ? "password" : "text"}
              placeholder="Password"
              className="border p-3 rounded-lg pr-10 w-[245px] sm:w-[350px]"
              id="password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglepassword}
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
            >
              {password ? "👁️" : "🙈"}
            </button>
          </div>
          <div className="relative">
            <input
              type={password ? "password" : "text"}
              placeholder="Confirm Password"
              className="border p-3 rounded-lg pr-10 w-[245px] sm:w-[350px]"
              id="confirm-password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglepassword}
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
            >
              {password ? "👁️" : "🙈"}
            </button>
          </div>
        </form>
        <button
          className="bg-orange-500 text-white p-3 rounded-lg font-semibold text-xl"
        >
          Register
        </button>
        <div className="flex justify-end">
          <Link href="/Pages/login">
            <span className="text-green-500 font-bold cursor-pointer">
              Already Signed In?
            </span>
          </Link>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Register;
