"use client"
import {useEffect} from "react";
import {useRouter} from "next/navigation"
import { useSelector } from "react-redux";

const page = () => {
  const router=useRouter()
  const {currentUser}=useSelector((state)=>state.user)
  useEffect(() => {
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
  }, []);
  return (
    <div className="grid xl:grid-cols-[17.5rem_1fr] lg:grid-cols-[15rem_1fr] h-[calc(100vh-5rem)] overflow-y-scroll pt-16">
      {/* Profile image column */}
      <div className="lg:flex hidden flex-col gap-5 py-4 px-5 bg-orange-200">
        <header className="text-[1.5em] text-center font-bold">ADMIN</header>
        <div className="xl:h-[11rem] lg:h-[9.7rem] xl:w-[11rem] lg:w-[9.7rem] mx-auto relative object-cover">
          <img
            src={currentUser.avatar}
            alt="no profile"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <div className="grid gap-5 mt-5">
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
          <div className="flex flex-col items-center w-44 bg-blue-500 hover:bg-blue-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
            <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
              Number of
              <br />
              Users
            </span>
            {/* <span className="text-[4em] font-bold">{statusColl.length}</span> */}
            {/* {console.log(statusFrequency)} */}
          </div>
          <div className="flex flex-col items-center w-44 bg-red-500 hover:bg-red-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
            <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
              Number of
              <br />
              Sevas
            </span>
            <span className="text-[4em] font-bold">
              {/* {statusFrequency?.poor ? statusFrequency.poor : 0} */}
            </span>
          </div>
          <div className="flex flex-col items-center w-44 bg-green-500 hover:bg-green-700 text-white xl:p-4 lg:p-3 p-2 rounded-lg cursor-pointer">
            <span className="text-center text-slate-100 xl:text-[1em] lg:text-[0.74em] sm:text-[0.75em] text-[0.9rem]">
              Number of
              <br />
              Contact querries
            </span>
            <span className="text-[4em] font-bold">
              {/* {statusFrequency?.pending ? statusFrequency.pending : 0} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
