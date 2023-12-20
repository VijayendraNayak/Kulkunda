"use client"

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const UserHeader = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchstate, setSearchstate] = useState(" ");
  const [navbar, setNavbar] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

      setIsNavVisible(
        currentScrollPos < prevScrollPos || currentScrollPos < 100
      );
  
    setPrevScrollPos(currentScrollPos);
  };

 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const togglenavbar = () => {
    setNavbar(!navbar);
    console.log(navbar);
  };

  return (
    <header
      className={`bg-orange-100 fixed top-0 left-0 w-full z-10 transition-transform duration-300 transform ${
        isNavVisible ? "translateY(0)" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between p-3 max-w-6xl w-full mx-auto items-center">
        <Link href="/">
          <div
            className={`font-bold text-sm sm:text-xl sm:flex ${
              navbar ? "hidden" : "flex"
            }`}
          >
            <span className="text-orange-300 text-3xl">Kulkunda</span>
            <span className="text-orange-500 text-3xl">Basaweshwara</span>
          </div>
        </Link>
        <ul className={`lg:flex md:flex gap-6 lg:items-center `}>
          {/* ... (rest of the code) ... */}
        </ul>
        <Link href="/">
          <li className="hover:underline text-orange-700 hidden sm:flex">
            Home
          </li>
        </Link>
        <Link href="/search">
          <li className="hover:underline text-orange-700 hidden sm:flex">
            Products
          </li>
        </Link>
        <Link href="/about">
          <li className="hover:underline text-orange-700 hidden sm:flex">
            About
          </li>
        </Link>
        <Link href="/contact">
          <li className="hover:underline text-orange-700 hidden sm:flex">
            Contact
          </li>
        </Link>
        {/* {currentUser ? ( */}
        {/* <Link href="/profile">
              <img
                className=" rounded-full w-10 h-10 hidden sm:flex"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link> */}
        {/* ) : ( */}
        <Link href="/login">
          <li className="hover:underline text-orange-700 hidden sm:flex">
            Sign in
          </li>
        </Link>
        <form className="bg-orange-200 rounded-lg items-center p-3 hidden sm:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-20 sm:w-48"
            onChange={(e) => {
              setSearchstate(e.target.value);
            }}
          />
          <FaSearch className="text-orange-600"></FaSearch>
        </form>
        <button
          className=" sm:hidden text-orange-700 focus:outline-none"
          onClick={togglenavbar}
        >
          {navbar ? " " : "☰"}
        </button>
        {navbar && (
          <div className="w-full flex flex-col gap-6">
            <Link href="/">
              <h1 className="font-bold text-sm sm:text-xl sm:hidden">
                <span className="text-orange-300">Kulkunda</span>
                <span className="text-orange-500">Basaweshwara</span>
              </h1>
            </Link>
            <ul className={`flex-col items-center gap-6 `}>
              <Link href="/">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Home
                </li>
              </Link>
              <Link href="/product">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Products
                </li>
              </Link>
              <Link href="/about">
                <li className="hover:underline text-orange-700 sm:hidden">
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Contact
                </li>
              </Link>
              <Link href="/login">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Sign in
                </li>
              </Link>
            </ul>
            <form
              className=" flex px-3 bg-orange-200 rounded-lg items-center justify-between sm:hidden"
              // onSubmit={searchsubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-24 sm:w-64 "
                onChange={(e) => {
                  setSearchstate(e.target.value);
                }}
                value={searchstate}
              />
              <FaSearch className="text-orange-600 "></FaSearch>
            </form>{" "}
          </div>
        )}
      </div>
    </header>
  );
};

export default UserHeader;
