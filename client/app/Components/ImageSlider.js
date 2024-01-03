// ImageSlider.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slide1 from "/app/assets/image/lake.jpg";
import Slide2 from "/app/assets/image/ship.jpg";
import Slide3 from "/app/assets/image/slider2.jpg";


const images = [Slide1, Slide2,Slide3];

const ImageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className='relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center'>
      <div className='relative w-full h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden'>
        {/* Image Slider */}
        <div className='relative w-full h-full'>
          <Image
            className='w-full h-full object-cover object-center'
            sizes='100vw'
            fill
            alt={`Image ${currentPage + 1}`}
            src={images[currentPage]}
          />
        </div>
      </div>

      {/* Left arrow */}
      <div onClick={handlePrevPage} className='z-10 absolute text-white bottom-1/2 left-4 text-2xl  md:left-8 font-semibold cursor-pointer hover:text-blue-500'>
        <span className='inline-block transition-transform duration-300 ease-in-out transform hover:-translate-x-1'>&lt;-</span>
      </div>

      {/* Right arrow */}
      <div onClick={handleNextPage} className='z-10 absolute bottom-1/2 text-white right-8 text-2xl  md:right-8 font-semibold cursor-pointer hover:text-blue-500'>
        <span className='inline-block transition-transform duration-300 ease-in-out transform hover:translate-x-1'>-&gt;</span>
      </div>
    </div>
  );
};

export default ImageSlider;
