"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSevaName } from "../../Redux/Features/counter/sevaslice";
import Image from "next/image";
import Entrance from "/app/assets/image/entrance.jpg";
import Loader from "../../Components/Loader";

const SevaPage = () => {
  const [language, setLanguage] = useState("english");
  const [formdata, setFormdata] = useState(null);
  const [sevaname, setSevaname] = useState(null);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const getdata = async () => {
      try {
        setLoader(true);
        const res = await fetch("/api/sevalist/getdata");
        const data = await res.json();
        if (data.success === false) {
          setLoader(false);
          return;
        }
        setFormdata(data.sevas);
        setLoader(false)
      } catch (error) {
        console.error("Error fetching Seva data:", error);
        setLoader(false)
      }
    };
    getdata();
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleBookSeva = (name) => {
    router.replace("/Pages/SevaBookingForm");
    setSevaname(name);
    dispatch(setSevaName(name));
  };

  return (
    <div className="pt-20">
      {
        loader && <Loader/>
      }
      <p className="text-orange-500 text-6xl text-center font-semibold underline">
        Seva Served Here
      </p>
      <div className="flex justify-end pr-8 mb-4">
        <label className="text-lg mr-2">Select Language:</label>
        <select
          className="border p-1"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="english">English</option>
          <option value="kannada">ಕನ್ನಡ</option>
          <option value="hindi">हिंदी</option>
        </select>
      </div>

      <div className="flex flex-row">
        <div
          className="flex-1 p-2 px-8 overflow-y-auto"
          style={{ maxHeight: "500px" }}
        >
          {formdata &&
            formdata.map((seva) => (
              <div
                key={seva._id}
                className="flex w-full h-28 border-2 border-orange-400 mb-8 rounded-lg bg-orange-100 cursor-pointer relative  hover:scale-105" // Updated this line
              >
                <div className="flex flex-col">
                  <div className="font-semibold text-xl p-4">
                    {language === "english"
                      ? seva.sevanamee
                      : language === "kannada"
                      ? seva.sevanamek
                      : seva.sevanameh}
                  </div>
                  <div className="font-semibold text-xl px-4 text-green-500">
                    ₹{seva.price}/-
                  </div>
                </div>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg opacity-100 absolute top-0 right-0" // Updated this line
                  onClick={() => handleBookSeva(seva.sevanamee)}
                >
                  Book
                </button>
              </div>
            ))}
        </div>
        <div className="flex-1 relative hidden md:block">
          <Image
            src={Entrance}
            alt="entrance"
            layout="fill"
            className="p-5"
            objectFit="cover"
            objectPosition="right"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SevaPage;
