"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import {
  updateStart,
  updateFailure,
  updateSuccess,
  signoutStart,
  signoutSuccess,
  signoutFailure,
} from "../../Redux/Features/counter/counterslice";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Loader from "../../Components/Loader";
import dynamic from "next/dynamic";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formdata, setFormdata] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const fileref = useRef(null);
  const router = useRouter();
  useEffect(() => {
    setFormdata({
      name: currentUser?.name || "", // Use optional chaining here
      email: currentUser?.email || "",
      avatar: currentUser?.avatar || "",
    });
  }, [currentUser]);

  useEffect(() => {
    if (file) {
      handlefileupload(file);
    }
  }, [file]);

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem('userToken');
    if(!isLoggedIn){router.replace("/Pages/login")}
  }, []);
  

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
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

  const handleSubmit = async (e) => {
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateFailure(data.message));
        return;
      }
      dispatch(updateSuccess(data.user));
      console.log("here");
      router.replace("/");
    } catch (error) {
      dispatch(updateFailure(error));
    }
  };

  const handlelogout = async () => {
    try {
      dispatch(signoutStart());
      const res = await fetch("/api/user/logout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutFailure(data.message));
        return;
      }
      dispatch(signoutSuccess(data));
      router.replace("/Pages/login");
      localStorage.clear();
    } catch (error) {
      dispatch(signoutFailure(error));
    }
  };

  return (
    <div className=" flex sm:flex-row flex-col pt-28 ">
      {loading && <Loader/>}
      <div className="flex-1 p-10 ">
        <div className="flex flex-col lg:flex-row gap-4 items-center ">
          <div className="">
            <input
              className="hidden"
              accept="image/.*"
              type="file"
              ref={fileref}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <img
              src={formdata?.avatar} // Use optional chaining here
              alt="profile image"
              className="w-44 h-60 rounded-lg no-repeat center object-cover"
              onClick={() => fileref.current.click()}
            />
          </div>
          <div className=" flex flex-col gap-4">
            <form className="flex flex-col gap-4 w-80">
              <input
                type="text"
                placeholder="Username"
                className="border p-3 rounded-lg"
                id="name"
                value={formdata?.name || ""} // Use optional chaining here
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg"
                id="email"
                value={formdata?.email || ""} // Use optional chaining here
                onChange={handleChange}
              />
            </form>
            <button
              className="bg-green-500 text-white p-3 rounded-lg font-semibold text-xl"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Update Profile"}
            </button>
            <button
              className="bg-red-500 text-white flex flex-row p-3 justify-center items-center gap-2 rounded-lg font-semibold text-xl"
              onClick={handlelogout}
            >
              <IoLogOutOutline /> Logout
            </button>
            <Link
              className="text-blue-500 font-semibold ml-auto cursor-pointer hover:scale-110"
              href="/Pages/changepass"
            >
              <span>Change passoword?</span>
            </Link>
          </div>
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-center font-semibold">{error}</p>
      )}
      <div className="flex-1">My sevas</div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Profile), {ssr: false})
