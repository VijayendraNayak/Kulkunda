"use client"

import React, { useState } from 'react';
import Link from 'next/link.js';
import ImageSlider from './Components/ImageSlider.js';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";
import MarqueeComponent from './Components/MarqueeComponent';
import Owner from './Components/OwnerSection.js';

const Page = () => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const content  = {
    english: {
      title: 'Shri Basaveshwara Temple',
      text: 'According to Skanda Purana, it is believed that Lord SriSubrahmanya Swami performed penance on Lord Shiva at this site...',
      readMore: 'Read more.........',
    },
    kannada: {
      title: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ',
      text: 'ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ...',
      readMore: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ.........',
    },
    title1: 'Shri Basaveshwara Temple',
    text1: 'It is believed that visiting Lord Kukke Subrahmanya and thenseeking darshan of Lord Sri Basaveshwara (Nandishwara) while offering prayers brings complete fulfillment for devotees wishes...',
    readMore1: 'Read more.........',
    kannada1: {
      title1: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ',
      text1: 'ಇತಿಹಾಸ ಪ್ರಸಿದ್ಧ ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ಸಮೀಪದ ಹಸಿರು ಸಿರಿಯಕುಮಾರ ಪರ್ವತದ ತಪ್ಪಲಿನ ಕುಮಾರಧಾರ ನದಿಯ ತಟದ ಪೌರಾಣಿಕ ಹಾಗೂ ಐತಿಹಾಸಿಕಹಿನ್ನಲೆ ಇರುವ ಕುಲ್ಕುಂದ ಬಸವನ ಮೂಲ ಎಂಬ ಸ್ಥಳವು ಅನೇಕ ವರ್ಷಗಳಿಂದ ಸಾವಿರಾರುಜನರ ಶ್ರದ್ಧಾ ಕೇಂದ್ರವಾಗಿ ಜಾನುವಾರು ಜಾತ್ರೆಯ ರೂಪದಲ್ಲಿ ವಿನಿಮಯಮಾರಾಟವಾಗುತ್ತಿದ್ದುದನ್ನು ಕಂಡು ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ಶಿವನಕುರಿತು ತಪಸ್ಸು ಮಾಡಿದ ಅವಾಗ, ಸಾಕ್ಷಾತ್ ಶ್ರೀ ಮಹಾದೇವನೇ ನಂದೀ ಸ್ವರೂಪದಲ್ಲಿಪ್ರತ್ಯಕ್ಷನಾಗಿ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಗೆ ನಂದಿ ವಿದ್ಯೆಯೇ ಮೊದಲಾಗಿಶಸ್ತ್ರ ವಿದ್ಯೆಯನ್ನು ಬೋಧಿಸಿದರು ಎಂದು ಪುರಾಣದಲ್ಲಿ ತಿಳಿಯಪಡುತ್ತದೆ...',
      readMore1: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ.........',
    },
  };

  const currentContent = content[language];

  return (
    <div className='container mx-auto'>
      <ImageSlider />

      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        <div className='w-full lg:w-1/3 md:w-1/2 hidden lg:block'>
          <Image
            src={Temple}
            className='ml-20 mt-5'
            alt="register background image"
            width={250}
            height={150}
          />
        </div>
        <div className='flex-1 bg-ora p-5 md:ml-5 lg:ml-10 hover:scale-105 md:mr-5'>
          <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md mr-5'>
            <h3 className='text-xl font-semibold mb-2'>{currentContent.title}</h3>
            <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>{currentContent.text}</p>
            <Link href="/Pages/About">
              <p className='text-red-500'>{currentContent.readMore}</p>
            </Link>
          </div>
        </div>
        <div className='flex-1 bg-ora p-5 md:ml-5 lg:ml-10 hover:scale-105 md:mr-5'>
          <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md mr-5'>
            <h3 className='text-xl font-semibold mb-2'>{currentContent.title1}</h3>
            <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>{currentContent.text1}</p>
            <Link href="/Pages/About">
              <p className='text-red-500'>{currentContent.readMore1}</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:p-5'>
        <div className='w-full md:w-2/3 lg:ml-10'>
          {/* Your content here */}
        </div>
        <div className='w-full md:w-1/3 lg:mr-10 mt-5 md:mt-0'>
          <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'>
            <h1 className='text-black-500 text-2xl font-semibold underline'>News and Updates</h1>
            <MarqueeComponent />
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        <div className='flex-1 bg-ora p-5 md:mr-10'>
          <div className='bg-orange-100 border-2 border-orange-500 p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>{currentContent.title1}</h3>
            <p className='text-gray-700'>{currentContent.text1}</p>
            <Link href="/Pages/About">
              <p className='text-red-500'>{currentContent.readMore1}</p>
            </Link>
          </div>
        </div>
        <div className='flex-1 bg-ora p-5 md:mr-10'>
          <div className='bg-orange-100 border-2 border-orange-500 p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>{currentContent.title1}</h3>
            <p className='text-gray-700'>{currentContent.text1}</p>
            <Link href="/Pages/About">
              <p className='text-red-500'>{currentContent.readMore1}</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-8 pt-2 absolute top-10 right-0 m-4">
        <label className="text-lg mr-2">Select Language:</label>
        <select
          className="border p-1"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="english">English</option>
          <option value="kannada">ಕನ್ನಡ</option>
        </select>
      </div>

      <h1 className='text-center bold text-5xl text-black-400 underline '>ABOUT THE OWNERS</h1>
      <div className='flex flex-col md:flex-row md:p-10'>
        <Owner />
      </div>
    </div>
  );
};

export default Page;
