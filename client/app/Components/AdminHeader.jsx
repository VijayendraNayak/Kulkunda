"use client"

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

// import { useNavigate } from "react-router-dom";

const UserHeader = ({ loading }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchstate, setSearchstate] = useState(" ");
  const [navbar, setNavbar] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  // {console.log(currentUser)}
  // const navigate = useNavigate();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (!loading) {
      setIsNavVisible(
        currentScrollPos < prevScrollPos || currentScrollPos < 100
      );
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setNavbar(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, loading]);

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const searchTermFromUrl = urlParams.get("name");
  //   // console.log(searchTermFromUrl)
  //   if (searchTermFromUrl) {
  //     setSearchstate(searchTermFromUrl);
  //   }
  // }, [location.search]);

  // const searchsubmit = (e) => {
  //   e.preventDefault();
  //   const urlParams = new URLSearchParams(window.location.search);
  //   urlParams.set("name", searchstate);
  //   const searchQuery = urlParams.toString();
  //   navigate(`/search?${searchQuery}`);
  // };

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
        <Link href="/Pages/Admin/dashboard">
          <div
            className={`font-bold gap-1 text-sm sm:text-xl sm:flex ${
              navbar ? "hidden" : "flex"
            }`}
          >
            <span className="text-orange-300 text-2xl">Kulkunda</span>
            <span className="text-orange-500 text-2xl">Basaweshwara</span>
          </div>
        </Link>
        <ul className={`lg:flex md:flex gap-6 lg:items-center `}>
          <Link href="/Pages/Admin/dashboard">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              Dashboard
            </li>
          </Link>
          <Link href="/Pages/Admin/users">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              Users
            </li>
          </Link>
          <Link href="/Pages/Admin/sevas">
          <li className="hover:underline text-orange-700 hidden sm:flex">
            Sevas
          </li>
          </Link>
          <Link href="/Pages/Admin/contact">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              Contact Querries
            </li>
          </Link>
            <Link href="/Pages/profile">
              <img
                className=" rounded-full w-10 h-10 hidden sm:flex"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
        </ul>
        {/* Search form */}
        <form
          className="bg-orange-200 rounded-lg items-center p-3 hidden sm:flex"
          // onSubmit={searchsubmit}
        >
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
            <Link href="/Pages/Admin/dashboard">
              <h1 className="font-bold text-sm sm:text-xl sm:hidden gap-1">
                <span className="text-orange-300">Kulkunda</span>
                <span className="text-orange-500">Basaweshwara</span>
              </h1>
            </Link>
            <ul className={`flex-col items-center gap-6 `}>
              <Link href="/Pages/Admin/dashboard">
                <li className="hover:underline text-orange-700 sm:hidden">Dashboard</li>
              </Link>
              <Link href="/Pages/Admin/users">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Users
                </li>
              </Link>
              <Link href="/Pages/Admin/sevas">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Sevas
                </li>
              </Link>
              <Link href="//Pages/Admin/contact">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Contact Querries
                </li>
              </Link>
            <Link href="/Pages/profile">
              <img
                className=" rounded-full w-10 h-10 hidden sm:flex"
                src={currentUser.avatar}
                alt="profile"
              />
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
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default dynamic (() => Promise.resolve(UserHeader), {ssr: false})
