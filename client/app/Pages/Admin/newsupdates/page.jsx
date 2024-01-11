"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../firebase";

const Newsupdates = () => {
  const [formdata, setFormdata] = useState();
  const [create, setCreate] = useState(false);
  useEffect(() => {
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
    };
    verifyuser()
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsupdate/admin/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormdata(data);
      setCreate(true);
    } catch (error) {
      console.log({ error });
    }
  };
  const handlefileupload = async (file) => {
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageref = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageref, file);

    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((DownloadURL) => {
        setFormdata({ ...formdata, avatar: DownloadURL });
      });
    });
  };

  return (
    <div className="pt-28 pb-10">
      <div className="h-screen">
        <div className="flex justify-center gap-4 flex-col">
          <p
            className={`${
              create ? "flex" : "hidden"
            } text-3xl font-semibold text-green-500 flex justify-center`}
          >
            News Updated successfully
          </p>
        </div>
        <p
          className={`flex justify-center text-6xl font-semibold text-orange-500 pb-6 ${
            create ? "hidden" : "flex"
          }`}
        >
          Upload News
        </p>
        <div
          className={`p-6 mx-auto justify-center border-2  border-orange-500 gap-4 bg-orange-100 rounded-lg max-w-3xl  ${
            create ? "hidden" : "flex"
          }`}
        >
          <div className="flex flex-col gap-4 justify-center bg-orange-100 w-full">
            <form className="flex flex-col gap-4 ">
              <input
                type="text"
                placeholder="Headline"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
                id="headline"
                onChange={handleChange}
              />
              <textarea
                placeholder="Description/News"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105 resize-none"
                id="description"
                rows={5} // Set the number of rows
                cols={50} // Set the number of columns
                onChange={handleChange}
                style={{ width: "100%", height: "200px" }} // Set the width and height using inline style
              />
              <input
                type="file"
                className=" p-3 "
                id="avatar"
                onChange={handlefileupload}
              />
              <input
                type="string"
                placeholder="refferences"
                className="border p-3 rounded-lg hover:shadow-lg hover:scale-105"
                id="refferences"
                onChange={handleChange}
              />
            </form>
            <button
              className="bg-gradient-to-r from-yellow-500  to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg hover:scale-105"
              onClick={handleSubmit}
            >
              Upload News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Newsupdates), { ssr: false });
