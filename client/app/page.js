"use client"
import React from 'react';
import Link from 'next/link.js';
import ImageSlider from './Components/ImageSlider.js';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";
import Temple2 from "/app/assets/image/temple2.jpg";
import G1 from "/app/assets/image/entrance.jpg";
import MarqueeComponent from './Components/MarqueeComponent';
import Owner from './Components/OwnerSection.js'


const Page = () => {
  return (
    <div classname='container mx-auto'>
      {/* Image Slider */}
      <ImageSlider />

      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        {/* Image Section */}
        <div className='w-full lg:w-1/3 md:w-1/2 hidden lg:block'>
          <Image
            src={Temple}
            className='ml-20 mt-5'
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
          <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md mr-5'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:p-5'>
        <div className='w-full md:w-2/3 lg:ml-10'>
          


        </div>
        <div className='w-full md:w-1/3 lg:mr-10 mt-5 md:mt-0'>
          <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'>
            <h1 className='text-black-500 text-2xl font-semibold underline'>News and Updates</h1>
            <MarqueeComponent />
          </div>
        </div>
      </div>


      {/* slide news */}
      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        {/* Image Section */}
        
        {/* Data Section */}
        <div className='flex-1 bg-ora p-5 md:mr-10'>
          <div className='bg-orange-100 border-2 border-orange-500 p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>
        </div>
      </div>


      <h1 className='text-center bold text-5xl text-black-400 underline '>ABOUT THE OWNERS</h1>
      <div className='flex flex-col md:flex-row md:p-10'>
        <Owner/>
      </div>
    </div>
  );
};

export default Page;
