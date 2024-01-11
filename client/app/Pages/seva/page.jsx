"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { setSevaName } from '../../Redux/Features/counter/sevaslice';


const SevaPage = () => {
  const [language, setLanguage] = useState("english");
  const [formdata, setFormdata] = useState(null);
  const [sevaname,setSevaname]=useState(null)
  const router = useRouter();
  const dispatch=useDispatch()

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("/api/sevalist/getdata");
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setFormdata(data.sevas);
      } catch (error) {
        console.error("Error fetching Seva data:", error);
      }
    };
    getdata();
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  
  const handleBookSeva = () => {
    router.replace('/Pages/SevaBookingForm');
    setSevaname("mangalarathi")
    dispatch(setSevaName(sevaname))
  };
  console.log(sevaname)
  

  return (
    <div className="pt-20">
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
      <p className="text-orange-500 text-6xl text-center font-semibold">
        Sevas
      </p>
      <div className="flex flex-row">
        <div className="flex-1 p-2 px-8">
          {formdata &&
            formdata.map((seva) => (
              <div
                key={seva._id}
                className="flex w-full h-28 border-2 border-orange-400 mb-8 rounded-lg bg-orange-100 cursor-pointer relative" // Updated this line
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
                  onClick={handleBookSeva}
                >
                  Book
                </button>
              </div>
            ))}
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default SevaPage;
