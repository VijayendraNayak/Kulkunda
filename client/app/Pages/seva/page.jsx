"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterImage from "/app/assets/image/temple.jpg";
const SevaPage = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [selectedSeva, setSelectedSeva] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCardClick = (seva) => {
    setSelectedSeva(seva);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const renderLanguageDropdown = () => {
    return (
      <div className="flex items-center ml-auto">
        <span className="mr-2">Language:</span>
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-orange-100 px-4 py-2 rounded"
        >
          <option value="english">English</option>
          <option value="Kannada">Kannada</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    );
  };

  const renderSevaList = () => {
    const languageKey = `name${selectedLanguage
      .charAt(0)
      .toUpperCase()}${selectedLanguage.slice(1)}`;
    const title =
      selectedLanguage === "english"
        ? "Seva's offered here"
        : selectedLanguage === "Kannada"
        ? "ಇಲ್ಲಿ ಸೇವೆಗಳು ನೀಡಲಾಗುತ್ತವೆ"
        : selectedLanguage === "hindi"
        ? "यहाँ सेवाएं प्रदान की जा रही हैं"
        : "Seva's offered here";

    return (
      <div
        className={`md:w-1/2 p-4 overflow-y-auto ${
          isDrawerOpen ? "hidden" : ""
        }`}
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center underline">
          {title}
        </h2>
        <ul className="space-y-4">
          {sevaList.map((seva) => (
            <li
              key={seva.id}
              className={`p-5 rounded-md shadow-md cursor-pointer hover:scale-105 bg-orange-100 border-2 ${
                selectedSeva?.id === seva.id
                  ? "bg-blue-100 "
                  : "hover:bg-orange-200"
              }`}
              onClick={() => handleCardClick(seva)}
            >
              <h3 className="text-xl font-semibold mb-2">
                {seva[languageKey]}
              </h3>
              <p className="text-green-700 font-semibold mb-2">
                Price: Rs. {seva.price}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-end p-4 md:hidden">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleToggleDrawer}
          >
            {isDrawerOpen ? "Close" : "Open"} Seva List
          </button>
        </div>
      </div>
    );
  };

  const renderSelectedSevaModal = () => {
    if (!selectedSeva) return null;

    const languageKey = `name${selectedLanguage
      .charAt(0)
      .toUpperCase()}${selectedLanguage.slice(1)}`;

    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center overflow-y-auto">
        <div className="p-8 rounded-md shadow-md md:w-1/2 bg-orange-100 border-2 border-orange-500">
          {/* Mobile view */}
          <div className="md:hidden p-4 overflow-y-auto bg-orange-100">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {selectedSeva[languageKey]}
            </h2>
            <p className="text-gray-700 mb-4">{selectedSeva.content}</p>
            <p className="text-green-600 font-bold">
              Price: Rs. {selectedSeva.price}
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setSelectedSeva(null)}
              >
                Close
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2 ">
                <Link href="/Pages/sevaform">
                  <span>Book</span>
                </Link>
              </button>
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:block p-4 overflow-y-auto bg-orange-100">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {selectedSeva[languageKey]}
            </h2>
            <p className="text-gray-700 mb-4">{selectedSeva.content}</p>
            <p className="text-green-600 font-bold">
              Price: Rs. {selectedSeva.price}
            </p>
            <div className="flex justify-center mt-4 ">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setSelectedSeva(null)}
              >
                Close
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2 ">
                <Link href="/Pages/sevaform">
                  <span>Book</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-5 md:p-10">
      <h1
        className="text-3xl font-bold mb-4 text-center underline"
        style={{ marginTop: "50px" }}
      >
        {selectedLanguage === "english"
          ? "Shree Basaveshwara Temple"
          : selectedLanguage === "Kannada"
          ? "ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ"
          : selectedLanguage === "hindi"
          ? "श्री बसवेश्वर मंदिर"
          : "Shree Basaveshwara Temple"}
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        {renderLanguageDropdown()}
      </div>

      <div className="md:flex flex-wrap">
        {renderSevaList()}
        <div className="p-5 w-full md:w-1/2 overflow-hidden">
          <Image
            src={RegisterImage}
            alt="Temple Image"
            layout="responsive"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={`w-full md:w-1/2 ${isDrawerOpen ? "" : "hidden"}`}>
          <div className="flex justify-end p-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleToggleDrawer}
            >
              {isDrawerOpen ? "Close" : "Open"} Seva List
            </button>
          </div>
        </div>
        {renderSelectedSevaModal()}
      </div>
    </div>
  );
};

export default SevaPage;
