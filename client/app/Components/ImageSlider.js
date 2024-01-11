// ImageSlider.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slide1 from "/app/assets/image/lake.jpg";
import Slide2 from "/app/assets/image/ship.jpg";
import Slide3 from "/app/assets/image/slider2.jpg";
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
      <div onClick={handlePrevPage} className='z-10 absolute text-white bottom-1/2 left-4 text-2xl  md:left-8 font-semibold cursor-pointer hover:text-orange-500'>
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </div>

      {/* Right arrow */}
      <div onClick={handleNextPage} className='z-10 absolute bottom-1/2 text-white right-8 text-2xl  md:right-8 font-semibold cursor-pointer hover:text-orange-500'>
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </div>
    </div>
  );
};

export default ImageSlider;
