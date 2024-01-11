"use client";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/navigation";

const Page = () => {
  const [length, setLength] = useState(0);
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

    const fetchData = async () => {
      try {
        const res = await fetch("/api/seva/admin/noofsevas");
        const data = await res.json();
        const len = data.length;
        setLength(len);
      } catch (error) {
        console.error("Error fetching Seva data:", error);
      }
    };

    auth();
    fetchData();
  }, []);

  const numberAnimation = useSpring({
    from: { number: 0 },
    to: { number: length },
    config: { duration: 1000 },
  });

  const handleFindSevaClick = () => {
    router.replace("/Pages/Admin/findseva");
  };

  const handleAddSevaClick = () => {
    router.replace("/Pages/Admin/addseva");
  };

  const handleDeleteSevaClick = () => {
    router.replace("/Pages/Admin/deleteseva");
  };

  const handleUserSevaClick = () => {
    router.replace("/Pages/Admin/userseva");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="flex flex-col">
        <div className="flex justify-center items-center py-16 gap-4">
          <animated.span className="text-8xl text-white bg-orange-500 rounded-full p-8">
            {numberAnimation.number.to((val) => Math.floor(val))}
          </animated.span>
          <p className="text-6xl font-bold text-orange-500">Number of Sevas</p>
        </div>
        <div className="text-orange-500 text-5xl font-semibold flex justify-center underline pb-20">
          Functions
        </div>
        <div className="flex gap-4 justify-around px-12">
          <button
            type="button"
            className="bg-orange-500 text-2xl font-semibold text-white p-4 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handleFindSevaClick}
          >
            Find a pending seva
          </button>
          <button
            type="button"
            className="bg-orange-500 text-2xl font-semibold text-white p-4 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handleAddSevaClick}
          >
            Add new seva
          </button>
          <button
            type="button"
            className="bg-orange-500 text-2xl font-semibold text-white p-4 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handleDeleteSevaClick}
          >
            Delete a seva
          </button>
          <button
            type="button"
            className="bg-orange-500 text-2xl font-semibold text-white p-4 rounded-lg hover:opacity-75 hover:scale-105"
            onClick={handleUserSevaClick}
          >
            Display user seva
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
