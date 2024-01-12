"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import RegisterBackground from "/app/assets/image/temple.jpg";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../Redux/Features/counter/counterslice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import dynamic from "next/dynamic";

const Login = () => {
  const [formdata, setFormdata] = useState();
  const [password, showPassword] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const { phoneNumber } = useSelector((state) => state.phone);
  const { loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    // Set phonenumber in formdata if phoneNumber exists
    if (phoneNumber) {
      setFormdata((prevData) => ({ ...prevData, phonenumber: phoneNumber }));
    }
  }, [phoneNumber]);

  const togglepassword = () => {
    showPassword(!password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      if (data.role === "admin") {
        router.replace("/Pages/Admin/dashboard");
        const userToken = "someToken"; // Replace with the actual token received from the server
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userRole", "admin"); // or 'user'
      } else {
        router.replace("/");
        const userToken = "someToken"; // Replace with the actual token received from the server
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userRole", "user"); // or 'user'
      }
    } catch (error) {
      console.log({ error });
      dispatch(signInFailure(error));
    }
  };
  const handlegoogleSubmit = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    try {
      dispatch(signInStart());
      const res = await fetch("/api/user/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      if (data.role === "admin") {
        router.replace("/Pages/Admin/dashboard");
        const userToken = "someToken"; // Replace with the actual token received from the server
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userRole", "admin"); // or 'user'
      } else {
        router.replace("/");
        const userToken = "someToken"; // Replace with the actual token received from the server
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userRole", "user"); // or 'user'
      }
    } catch (error) {
      console.log({ error });
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="pt-20 p-10 flex ">
      {loading && <Loader />}
      <div className="flex-1 relative">
        <Image
          src={RegisterBackground}
          alt="regester background image"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          priority
        />
      </div>
      <div className="flex flex-col p-6 mx-auto justify-center border-2  border-orange-500 gap-4 bg-orange-100 rounded-lg w-full md:w-1/2 order-2 md:order-1 md:ml-10">
        <div className="text-4xl px-12 md:items-center font-semibold text-center text-orange-500 ">
          {loading ? "loading..." : "Login"}
        </div>
        <div className="flex flex-col gap-4 justify-center bg-orange-100">
          <form className="flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Phone number"
              className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
              id="phonenumber"
              defaultValue={91}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                type={password ? "password" : "text"}
                placeholder="Password"
                className="border p-3 rounded-lg pr-10 w-full md:w-[70%] lg:w-full xl:w-full hover:shadow-lg hover:scale-105"
                id="password"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglepassword} 
                className="absolute top-1/2 right-5 transform -translate-y-1/2 hover:shadow-lg hover:scale-105"
              >
                {password ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
          </form>
          <button
            className="bg-gradient-to-r from-yellow-500  to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg hover:scale-105"
            onClick={handleSubmit}
          >
            Login
          </button>
          <button
            className=" flex bg-white text-black p-3 hover:scale-105 rounded-lg font-semibold text-xl items-center justify-center gap-2"
            onClick={handlegoogleSubmit}
          >
            <FcGoogle /> Login with Google
          </button>
          <div className="flex justify-around">
            <Link href="/Pages/passwordotp">
              <p className="text-red-500 font-bold cursor-pointer hover:scale-110 hover:underline">
                forgot password?
              </p>
            </Link>
            <Link href="/Pages/verifyotp">
              <p className="text-green-500 font-bold cursor-pointer hover:scale-110 hover:underline">
                New User?
              </p>
            </Link>
          </div>
          {!error && (
            <div className="text-yellow-500 font-semibold text-center">
              Warning:The user should be registerd to use the Login with google
              option
            </div>
          )}
          {error && (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
