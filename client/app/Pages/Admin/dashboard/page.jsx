"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import Link from "next/link";
import Loader from "../../../Components/Loader";

const page = () => {
  const router = useRouter();
  const [userlength, setuserLength] = useState(0);
  const [loader, setLoader] = useState(false);
  const [contactlength, setcontactLength] = useState(0);
  const [sevalength, setsevaLength] = useState(0);
  const [sevalistlength, setsevalistLength] = useState(0);
  const [newslength, setnewsLength] = useState(0);
  const [gallerylength, setgalleryLength] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    setLoader(true);
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
      const res = await fetch("/api/user/admin/noofuser");
      const data = await res.json();
      const len = data.length;
      setuserLength(len);
    };
    const fetchcontactdata = async () => {
      const res = await fetch("/api/contact/admin/noofcontacts");
      const data = await res.json();
      const len = data.length;
      setcontactLength(len);
    };
    const fetchsevadata = async () => {
      const res = await fetch("/api/seva/admin/noofsevas");
      const data = await res.json();
      const len = data.length;
      setsevaLength(len);
    };
    const fetchsevalistdata = async () => {
      const res = await fetch("/api/sevalist/admin/noofsevalists");
      const data = await res.json();
      const len = data.length;
      setsevalistLength(len);
    };
    const fetchnewsdata = async () => {
      const res = await fetch("/api/newsupdate/admin/noofnews");
      const data = await res.json();
      const len = data.length;
      setnewsLength(len);
    };
    const fetchimagesdata = async () => {
      const res = await fetch("/api/gallery/admin/noofimg");
      const data = await res.json();
      const len = data.length;
      setgalleryLength(len);
    };
    auth();
    checkcookie();
    fetchdata();
    fetchcontactdata();
    fetchsevadata();
    fetchsevalistdata();
    fetchnewsdata();
    fetchimagesdata();
    setLoader(false);
  }, []);

  const usernumberAnimation = useSpring({
    from: { number: 0 },
    to: { number: userlength },
    config: { duration: 1000 },
  });
  const contactnumberAnimation = useSpring({
    from: { number: 0 },
    to: { number: contactlength },
    config: { duration: 1000 },
  });
  const sevanumberAnimation = useSpring({
    from: { number: 0 },
    to: { number: sevalength },
    config: { duration: 1000 },
  });
  const sevalistnumberAnimation = useSpring({
    from: { number: 0 },
    to: { number: sevalistlength },
    config: { duration: 1000 },
  });
  const newsnumberAnimation = useSpring({
    from: { number: 0 },
    to: { number: newslength },
    config: { duration: 1000 },
  });
  const imagenumberAnimation = useSpring({
    from: { number: 0 },
    to: { number: gallerylength },
    config: { duration: 1000 },
  });
  return (
    <div className="grid xl:grid-cols-[17.5rem_1fr] lg:grid-cols-[15rem_1fr] h-[calc(100vh-5rem)] overflow-y-scroll pt-16">
      {loader && <Loader />}
      <div className="flex flex-col gap-5 py-4 px-5 bg-orange-200">
        <header className="text-[1.5em] text-center font-bold">ADMIN</header>
        <div className="xl:h-[11rem] lg:h-[9.7rem] xl:w-[11rem] lg:w-[9.7rem] mx-auto relative object-cover">
          {currentUser.avatar && (
            <img
              src={currentUser.avatar}
              alt="no profile"
              layout="fill"
              objectfit="contain"
              className="rounded-full"
            />
          )}
        </div>
        <div className="grid gap-3 mt-3">
          <div className="grid">
            <span className="font-bold">Admin Name:</span>
            <span>{currentUser.name}</span>
          </div>
          <div className="grid">
            <span className="font-bold">Email ID:</span>
            <span>{currentUser.email}</span>
          </div>
        </div>
      </div>

      {/* Status and counts column */}
      <div className="w-[100%] p-4 ">
        <header className="text-[1.5em] font-bold mb-5">Dashboard</header>
        <div className="flex flex-wrap justify-around gap-5">
          <Link href="/Pages/Admin/users">
            <div className="flex flex-col items-center w-44 bg-blue-500 hover:bg-blue-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
              <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
                Number of
                <br />
                Users
              </span>
              <span className="text-[4em] font-bold">
                <animated.span className="text-6xl text-white bg-transparent rounded-full p-4">
                  {usernumberAnimation.number.to((val) => Math.floor(val))}
                </animated.span>
              </span>
            </div>
          </Link>
          <Link href="/Pages/Admin/sevas">
            <div className="flex flex-col items-center w-44 bg-red-500 hover:bg-red-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
              <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
                Number of booked
                <br />
                Sevas
              </span>
              <span className="text-[4em] font-bold">
                <animated.span className="text-6xl text-white bg-transparent rounded-full p-4">
                  {sevanumberAnimation.number.to((val) => Math.floor(val))}
                </animated.span>
              </span>
            </div>
          </Link>
          <Link href="/Pages/Admin/sevas">
            <div className="flex flex-col items-center w-44 bg-yellow-500 hover:bg-yellow-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
              <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
                Number of offered
                <br />
                Sevas
              </span>
              <span className="text-[4em] font-bold">
                <animated.span className="text-6xl text-white bg-transparent rounded-full p-4">
                  {sevalistnumberAnimation.number.to((val) => Math.floor(val))}
                </animated.span>
              </span>
            </div>
          </Link>
          <Link href="/Pages/Admin/contact">
            <div className="flex flex-col items-center w-44 bg-green-500 hover:bg-green-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
              <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
                Number of
                <br />
                Contact querries
              </span>
              <span className="text-[4em] font-bold">
                <animated.span className="text-6xl text-white bg-transparent rounded-full p-4">
                  {contactnumberAnimation.number.to((val) => Math.floor(val))}
                </animated.span>
              </span>
            </div>
          </Link>
          <Link href="/Pages/Admin/newsupdates">
            <div className="flex flex-col items-center w-44 bg-purple-500 hover:bg-purple-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
              <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
                Number of
                <br />
                News & Updates
              </span>
              <span className="text-[4em] font-bold">
                <animated.span className="text-6xl text-white bg-transparent rounded-full p-4">
                  {newsnumberAnimation.number.to((val) => Math.floor(val))}
                </animated.span>
              </span>
            </div>
          </Link>
          <Link href="/Pages/Admin/gallery">
            <div className="flex flex-col items-center w-44 bg-pink-500 hover:bg-pink-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
              <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
                Number of
                <br />
                Images
              </span>
              <span className="text-[4em] font-bold">
                <animated.span className="text-6xl text-white bg-transparent rounded-full p-4">
                  {imagenumberAnimation.number.to((val) => Math.floor(val))}
                </animated.span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
