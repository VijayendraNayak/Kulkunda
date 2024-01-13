"use client";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/navigation";

const page = () => {
  const [sevalength, setsevaLength] = useState(0);
  const [sevalistlength, setsevalistLength] = useState(0);
  const router = useRouter();
  useEffect(() => {
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
    const fetchdata = async () => {
      const res = await fetch("/api/seva/admin/noofsevas");
      const data = await res.json();
      const len = data.length;
      console.log(length);
      setsevaLength(len);
    };
    const fetchlistdata = async () => {
      const res = await fetch("/api/sevalist/admin/noofsevalists");
      const data = await res.json();
      const len = data.length;
      console.log(length);
      setsevalistLength(len);
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
    fetchdata();
    fetchlistdata();
    checkcookie()
  }, []);

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

  const handlesevaclick = () => {
    router.replace("/Pages/Admin/findseva");
  };
  const handleaddclick = () => {
    router.replace("/Pages/Admin/addseva");
  };
  const handlesevalistclick=()=>{
    router.replace("/Pages/Admin/findsevalist")
  };
  const handlebookedclick=()=>{
    router.replace("/Pages/Admin/findbsevalist")
  }

  return (
    <div className="pt-24 pb-20">
      <div className="flex flex-row">
        <div className="flex-1 border-r border-orange-500">
          <div className="flex flex-col">
            <div className="flex justify-center items-center py-16 gap-4">
              <animated.span className="text-6xl text-white bg-orange-500 rounded-full p-8">
                {sevanumberAnimation.number.to((val) => Math.floor(val))}
              </animated.span>
              <p className="text-3xl font-bold text-orange-500">
                Number of Booked Sevas
              </p>
            </div>
            <div className="text-orange-500 text-3xl font-semibold flex justify-center underline pb-20">
              Functions
            </div>
            <div className="flex gap-4 justify-around px-12">
              <button
                type="button"
                className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
                onClick={handlesevaclick}
              >
                Find a booked seva
              </button>
              <button
                type="button"
                className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
                onClick={handlesevaclick}
              >
                Delete a booked seva
              </button>
              <button
                type="button"
                className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
                onClick={handlebookedclick}
              >All Booked Sevas
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
        <div className="flex flex-col">
        <div className="flex justify-center items-center py-16 gap-4">
          <animated.span className="text-6xl text-white bg-orange-500 rounded-full p-8">
            {sevalistnumberAnimation.number.to((val) => Math.floor(val))}
          </animated.span>
          <p className="text-3xl font-bold text-orange-500">Number of Offered Sevas</p>
        </div>
        <div className="text-orange-500 text-3xl font-semibold flex justify-center underline pb-20">
          Functions
        </div>
        <div className="flex gap-4 justify-around px-12">
          <button
            type="button"
            className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handlesevalistclick}
          >
            Find a seva
          </button>
          <button
            type="button"
            className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handleaddclick}
          >
            Add new seva
          </button>
          <button
            type="button"
            className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handlesevalistclick}
          >
            Delete a seva
          </button>
          <button
            type="button"
            className="bg-orange-500 text-xl font-semibold text-white p-3 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handlesevalistclick}
          >
            Update a seva
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default page;