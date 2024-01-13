"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../firebase";

const addimage = () => {
  const [formdata, setFormdata] = useState({
    avatar: [],
  });
  const [files, setFiles] = useState([]);
  const [create, setCreate] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageuploaderror, setImageuploaderror] = useState(false);
  const router=useRouter();
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
    const checkcookie = async () => {
      const res = await fetch("/api/user/checkcookies");
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        router.replace("/Pages/login");
        return;
      }
    };
    verifyuser();
    checkcookie();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const imagePromises = formdata.avatar.map(async (image) => {
        const res = await fetch("/api/gallery/admin/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ avatar: [image] }), // Send only the current image in the array
        });
  
        const data = await res.json();
  
        if (data.success === false) {
          return Promise.reject(data);
        }
  
        return data;
      });
  
      const imageDataArray = await Promise.all(imagePromises);
  
      // Process the imageDataArray if needed
  
      setCreate(true);
      router.replace("/Pages/Admin/dashboard");
    } catch (error) {
      console.error("Error uploading images:", error);
      // Handle error as needed
    }
  };
  


  const handleimagesubmit = () => {
    setUploading(true);
    if (files.length > 0 && files.length + formdata.avatar.length < 7) {
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storefiles(files[i]));
      }
      Promise.all(promises)
        .then((Urls) => {
          setFormdata({
            ...formdata,
            avatar: formdata.avatar.concat(Urls),
          });
          setUploading(false);
          setImageuploaderror(false);
        })
        .catch((error) => {
          setImageuploaderror(
            "Image upload error each file should be less than 2mb"
          );
          setUploading(false);
        });
    } else {
      setImageuploaderror("Only six images can be uploaded");
      setUploading(false);
    }
  };


  const storefiles = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const filename = new Date().getTime() + file.name;
      const storageref = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageref, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload is ${progress} done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((Downloadurl) => {
            resolve(Downloadurl);
          });
        }
      );
    });
  };
  const handledeleteimage = (index) => {
    setFormdata({
      ...formdata,
      avatar: formdata.avatar.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="pt-28 pb-10">
      <div className="">
        <div className="flex justify-center gap-4 flex-col">
          <p
            className={`${
              create ? "flex" : "hidden"
            } text-3xl font-semibold text-green-500 flex justify-center`}
          >
            Images uploaded successfully
          </p>
        </div>
        <p
          className={`flex justify-center text-6xl font-semibold text-orange-500 pb-6 ${
            create ? "hidden" : "flex"
          }`}
        >
          Upload Images
        </p>
        <div
          className={`p-6 mx-auto justify-center border-2  border-orange-500 gap-4 bg-orange-100 rounded-lg max-w-3xl  ${
            create ? "hidden" : "flex"
          }`}
        >
          <div className="flex flex-col gap-4 justify-center bg-orange-100 w-full">
            <form className="flex flex-col gap-4 ">
              <div className="flex gap-4">
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  multiple
                  className="border border-orange-300 p-3"
                  onChange={(e) => setFiles(e.target.files)}
                />
                <button
                  type="button"
                  onClick={handleimagesubmit}
                  disabled={uploading}
                  className="bg-green-500 px-8 text-white uppercase rounded-lg hover:opacity-70"
                >
                  {uploading ? "UPLOADING..." : "UPLOAD"}
                </button>
              </div>
              <p className="text-red-500 text-sm">
                {imageuploaderror && imageuploaderror}
              </p>
              {formdata.avatar &&
                formdata.avatar.map((url, index) => (
                  <div
                    key={url}
                    className="flex justify-between border border-orange-300 p-3 gap-4"
                  >
                    <img
                      src={url}
                      alt="listing image"
                      className=" w-24 h-20 rounded-lg"
                    />
                    <button
                      type="button"
                      className=" text-red-500 uppercase hover:opacity-75 p-3"
                      onClick={() => handledeleteimage(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </form>
            <button
              className="bg-gradient-to-r from-yellow-500  to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg hover:scale-105"
              onClick={handleSubmit}
            >
              Upload Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(addimage), { ssr: false });
