"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import RegisterImage from "/app/assets/image/temple.jpg";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const Register = () => {
  const [formdata, setFormdata] = useState({});
  const search = useSearchParams();
  const router = useRouter();
  const phone = search.get("phone");

  const [passwordType, setPasswordType] = useState('text');
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);

  const [confirmPasswordType, setConfirmPasswordType] = useState('text');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeOff);

  const [icon, setIcon] = useState(eyeOff);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        return;
      }
      router.replace("/Pages/login");
    } catch (error) {
      console.log("catcherr", error);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };


  const togglepassword = () => {
    // Toggle the password visibility (if needed)
  };

  const handlePasswordToggle = () => {
    if (passwordType === 'password') {
      setPasswordIcon(eye);
      setPasswordType('text');
    } else {
      setPasswordIcon(eyeOff);
      setPasswordType('password');
    }
  };

  const handleConfirmPasswordToggle = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordIcon(eye);
      setConfirmPasswordType('text');
    } else {
      setConfirmPasswordIcon(eyeOff);
      setConfirmPasswordType('password');
    }
}

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
              id="phonenumber"
              onChange={handleChange}
              defaultValue={phone}
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
                  type={passwordType}
                  id="password"
                  placeholder="Password"
                  className="border p-3 rounded-lg pr-10 w-[245px] sm:w-[350px] hover:shadow-lg hover:scale-105"
                  value={formdata.password}
                  onChange={(e) => setPasswordType(e.target.value)}
                  autoComplete="current-password"
              />
              <span className="flex justify-around items-center" onClick={handlePasswordToggle}>
                <Icon className="absolute top-1/2 left-80 transform -translate-y-1/2 hover:shadow-lg hover:scale-105" icon={passwordIcon} size={25}/>
              </span>
            </div>
            <div className="relative">
              <input
                  type={confirmPasswordType}
                  id="confirm-password"
                  placeholder="Confirm-Password"
                  className="border p-3 rounded-lg pr-10 w-[245px] sm:w-[350px] hover:shadow-lg hover:scale-105"
                  value={formdata.confirmpassword}
                  onChange={(e) => setConfirmPasswordType(e.target.value)}
                  autoComplete="current-password"
              />
              <span className="flex justify-around items-center" onClick={handleConfirmPasswordToggle}>
                <Icon className="absolute top-1/2 left-80 transform -translate-y-1/2 hover:shadow-lg hover:scale-105" icon={confirmPasswordIcon} size={25}/>
              </span>
            </div>
          </form>
          <button
            className="bg-gradient-to-r from-yellow-500  to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg hover:scale-105"
            onClick={handleSubmit}
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
