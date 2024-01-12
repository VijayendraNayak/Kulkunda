"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSevaName } from "../../../Redux/Features/counter/sevaslice";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Loader from "../../../Components/Loader";

const Addseva = () => {
  const [formdata, setFormdata] = useState();
  const [loader, setLoader] = useState(false);
  const [create, setCreate] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    setLoader(true)
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
    const checkcookie=async()=>{
      const res=await fetch("/api/user/checkcookies")
      const data=await res.json()
      if (data.success===false){
        console.log(data.message)
        router.replace("/Pages/login")
        return
      }
    }
    auth();
    checkcookie();
    setLoader(false)
  });
  const handleonclick = () => {
    router.replace("/Pages/Admin/addseva");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await fetch("/api/sevalist/admin/addseva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoader(false);
        return;
      }
      setFormdata(data);
      dispatch(setSevaName(data.sevanamee));
      setCreate(true);
      setLoader(false);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="pt-28 pb-10">
      <div className="h-screen">
        {loader && <Loader/>}
        <div className="flex justify-center gap-4 flex-col">
          <p
            className={`${
              create ? "flex" : "hidden"
            } text-3xl font-semibold text-green-500 flex justify-center`}
          >
            Seva created successfully
          </p>
          <button
            type="button"
            className={`${
              create ? "flex" : "hidden"
            } p-3 rounded-lg text-white bg-orange-500 text-2xl font-semibold flex justify-center max-w-s mx-auto`}
            onClick={handleonclick}
          >
            Add More Sevas
          </button>
        </div>
        <p
          className={`flex justify-center text-6xl font-semibold text-orange-500 pb-6 ${
            create ? "hidden" : "flex"
          }`}
        >
          Create Seva
        </p>
        <div
          className={`p-6 mx-auto justify-center border-2  border-orange-500 gap-4 bg-orange-100 rounded-lg max-w-lg  ${
            create ? "hidden" : "flex"
          }`}
        >
          <div className="flex flex-col gap-4 justify-center bg-orange-100 w-full">
            <form className="flex flex-col gap-4 ">
              <input
                type="text"
                placeholder="Seva name in English"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
                id="sevanamee"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Seva name in Kannada"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
                id="sevanamek"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Seva name in Hindi"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
                id="sevanameh"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Price"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
                id="price"
                onChange={handleChange}
              />
            </form>
            <button
              className="bg-gradient-to-r from-yellow-500  to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg hover:scale-105"
              onClick={handleSubmit}
            >
              Create Seva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Addseva), { ssr: false });
