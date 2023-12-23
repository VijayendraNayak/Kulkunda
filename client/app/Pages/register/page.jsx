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
      <div className="flex-1 relative">
      <Image
          src={RegisterImage}
          alt="regester background image"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          
          priority
        />
      {/* image here */}
      </div>
      <div className="flex flex-col w-[700px] p-6 mx-auto justify-center border-2 p-6 border-orange-500 gap-4 bg-orange-100 rounded-lg ml-5 ">
      <p className="text-4xl px-12 font-semibold text-center text-orange-500 ">
        Register
      </p>
      <div className="flex flex-col ml-10 gap-4 justify-center bg-orange-100">
        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg hover:shadow-lg hover:scale-105 "
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
            id="mobile"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
            id="email"
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={password ? "password" : "text"}
              placeholder="Password"
              className="border p-3 rounded-lg pr-10 w-[245px] sm:w-[350px] hover:shadow-lg hover:scale-105"
              id="password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglepassword}
              className="absolute top-1/2 left-80 transform -translate-y-1/2 hover:shadow-lg hover:scale-105"
            >
              {password ? "👁️" : "🙈"}
            </button>
          </div>
          <div className="relative">
            <input
              type={password ? "password" : "text"}
              placeholder="Confirm Password"
              className="border p-3 rounded-lg pr-10 w-[245px] sm:w-[350px] hover:shadow-lg hover:scale-105"
              id="confirm-password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglepassword}
              className="absolute top-1/2 left-80 transform -translate-y-1/2 hover:shadow-lg hover:scale-105"
            >
              {password ? "👁️" : "🙈"}
            </button>
          </div>
        </form>
        <button
          className="bg-gradient-to-r from-yellow-500  to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg hover:scale-105"
>
          Register
        </button>
        <div className="flex justify-end">
          <Link href="/Pages/login">
            <span className="text-green-500 font-bold cursor-pointer">
              Have an Account?
            </span>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;