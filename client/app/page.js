"use client"
import React from 'react';
import Link from 'next/link.js';
import ImageSlider from './Components/ImageSlider.js';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";
import Temple6 from "/app/assets/image/temple6.jpg";
import MarqueeComponent from './Components/MarqueeComponent';
import YoutubeVideo from './Components/VideoPage.js';

const Page = () => {
  return (
    <div classname='container mx-auto'>
      {/* Image Slider */}
      <ImageSlider />

      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        {/* Image Section */}
        <div className='w-full lg:w-1/3 md:w-1/2 hidden lg:block ml-20'>
          <Image
            src={Temple}
            className='ml-20 mt-5 rounded-lg'
            alt="register background image"
            objectFit="cover"
            width={250}
            height={150}
            objectPosition="left"
            priority
          />
        </div>
        {/* Data Section */}
        <div className='flex-1 bg-ora p-5 md:ml-5 lg:ml-10 hover:scale-105 md:mr-5'>
          <div className='bg-orange-100 border-2 border-orange-500 p-10 rounded-lg shadow-md mr-5'>
            <h3 className='text-xl font-semibold mb-2'>Welcome to Shree Kulkunda Basaveshwara Temple</h3>
            <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>According to 'Skanda Purana,' it is believed that Lord Sri Subrahmanya Swami performed penance on Lord Shiva at this site. The area witnessed a bustling 15-day cattle fair during Kartika masa (around November), gradually evolving into a place primarily dedicated to worship. </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:p-5'>
        <div className='flex-1 bg-ora p-5 md:ml-5 lg:ml-10 hover:scale-105 md:mr-5'>
          <div className='bg-orange-100 border-2 border-orange-500 p-10 mt-5 rounded-lg shadow-md'>
            <h1 className='text-black-500 text-2xl font-semibold underline'>News and Updates</h1>
            <MarqueeComponent />
          </div>
        </div>
        <div className='w-full lg:w-1/3 md:w-1/2 hidden lg:block'>
          <Image
              src={Temple6}
              className='p-10 rounded-lg'
              alt="home image 2"
              objectFit="cover"
              width={500}
              height={250}
              objectPosition="left"
              priority
          />
        </div>
      </div>

      <div classname='p-5'>
        {/*for youtube */}
        <YoutubeVideo/>
      </div>
    </div>
  );
};

export default Page;
