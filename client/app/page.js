"use client"
import React, { useState } from 'react';
import Link from 'next/link.js';
import ImageSlider from './Components/ImageSlider.js';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";
import Temple2 from "/app/assets/image/temple2.jpg";
import G1 from "/app/assets/image/entrance.jpg";
import MarqueeComponent from './Components/MarqueeComponent';
import Owner from './Components/OwnerSection.js'


const Page = () => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Implement logic for language change as needed
    // You can use this function to update the content based on the selected language.
  };
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
            <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>About 800 years ago, during the rule of Keladi kings ShivappaNayaka and Surappa Nayaka in Kadambasamsthan (Kadaba), thesignificance of Basaveshwara and Kulkunda's history wasacknowledged by the royal family. Despite facing adversities suchas a smallpox epidemic, the devotion to Lord Basaveshwara endured,with devotees constructing a statue for worship. </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-end pr-8 mb-4">
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
              </div>

      <div className='flex flex-col md:flex-row md:p-5'>
        <div className='w-full md:w-2/3 lg:ml-5'>
          


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
            <p className='text-gray-700'> It's believed that visiting Lord Kukke Subrahmanya and thenseeking darshan of Lord Sri Basaveshwara (Nandishwara) whileoffering prayers brings complete fulfillment for devotees' wishes.Devotees firmly believe that Lord Basaveshwara resides atBasavanmoola and grants the sincere desires of his devotees., </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>
        </div>
        {/*kannada*/ }
        <div className='flex-1 bg-ora p-5 md:mr-10'>
          <div className='bg-orange-100 border-2 border-orange-500 p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Shri Basaveshwara Temple</h3>
            <p className='text-gray-700'> ಸುಮಾರು 800 ವರ್ಷಗಳ ಹಿಂದೆ ಕೆಳದಿ ರಾಜರಾದ ಶಿವಪ್ಪ ನಾಯಕ, ಸೂರಪ್ಪ ನಾಯಕ ಎಂಬರಾಜರುಗಳು "ಕದಂಬಸಂಸ್ಥಾನ" (ಕಡಬ)ವನ್ನು ಆಳುತ್ತಿದ್ದರು ಎಂಬುದು ಇತಿಹಾಸದಲ್ಲಿತಿಳಿದು ಬರುತ್ತದೆ. ಅವರುಗಳು ಶ್ರೀ ಬಸವನ ಮೂಲ ಹಾಗೂ ಕುಲ್ಕುಂದ ಇತಿಹಾಸವನ್ನುತಿಳಿದು ಹಣೆಯಲ್ಲಿ ಶಿವಲಿಂಗವಿರುವ ಬಸವನನ್ನು ಕಂಡು ಪ್ರೇರೇಪಿತರಾಗಿ ಅವರಕಾಲಘಟ್ಟದಲ್ಲಿಯೇ ಪ್ರತಿಷ್ಠಾಪಿಸಿದ್ದರು ಎಂಬುದು ಕೂಡ ಅಷ್ಟಮಂಗಲ ಚಿಂತನೆಯಲ್ಲಿತಿಳಿದು ಬಂದಿರುತ್ತದೆ. ಆನಂತರದ ವರ್ಷಗಳಲ್ಲಿ ಸಿಡುಬು ರೋಗ ಮಹಾಮಾರಿಯಿಂದಸಂಪೂರ್ಣ ಕುಕ್ಕೆ ಪಟ್ಟಣ ನಾಶ ಹೊಂದಿತು. </p>
            <Link href="/Pages/About">
              <p className='text-red-500'>Read more.........</p>
            </Link>
          </div>

      </div>

      
      <h1 className='text-center bold text-5xl text-black-400 underline '>ABOUT THE OWNERS</h1>
      <div className='flex flex-col md:flex-row md:p-10'>
        <Owner/>
      </div>
    </div>
    </div>
      );
};

export default Page;
