"use client"
import React from 'react';
import Link from 'next/link.js';
import ImageSlider from './Components/ImageSlider.js';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";

const Page = () => {
  return (
    <div>
      {/* Image Slider */}
      <ImageSlider />

      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        {/* Image Section */}
        <div className='w-full md:w-1/2'>
          <Image
            src={Temple}
            className='ml-20 shadow-lg mt-3'
            alt="register background image"
            // objectFit="cover"
            width={500}
            height={500}
            objectPosition="left"
            priority
          />
        </div>

        {/* Data Section */}
        <div className='flex-1 bg-ora p-5 hover:scale-105 mr-10'>
          <div className='bg-white border-2 border-black p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-ora p-5 hover:scale-105 mr-10'>
        <div className='bg-white border-2 border-black p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
          <p className='text-gray-700'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
          <Link href="/Pages/About">
            <p className='text-red-500'>Read more......</p>
          </Link>
        </div>
      </div>

      <div className='relative flex items-center justify-center'>
          <Image
            src={Temple}
            className='ml-20 shadow-lg mt-3'
            alt="register background image"
            objectFit="cover"
            width={500}
            height={500}
            priority
          />
        </div>


      <h1 className='text-center bold text-5xl text-black-400 mt-10 underline'>ABOUT THE OWNERS</h1>
      <div className='flex flex-col md:flex-row p-5 md:p-10'>
        {/* Image Section */}
        <div className='flex-1 bg-ora p-10 hover:scale-105 mr-10'>
          <div className='bg-white border-2 border-black p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
          </div>
        </div>

        <div className='flex-1 bg-ora p-10 hover:scale-105 mr-10'>
          <div className='bg-white border-2 border-black p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
          </div>
        </div>

        {/* Data Section */}
        <div className='flex-1 bg-ora p-10 hover:scale-105 mr-10'>
          <div className='bg-white border-2 border-black p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700'>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
