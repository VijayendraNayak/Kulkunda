"use client"
// Import necessary modules
import React, { useState } from 'react';
import Link from 'next/link';
import ImageSlider from './Components/ImageSlider';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";
import Temple1 from "/app/assets/image/temple2.jpg";
import Temple2 from "/app/assets/image/temple3.jpg";
import MarqueeComponent from './Components/MarqueeComponent';
import Owner from './Components/OwnerSection';
import Loader from "./Components/Loader"

const Page = () => {
  const [lang, setLang] = useState('english');
  const [loader, setLoader] = useState(false);
  const [newsContent, setNewsContent] = useState({
    english: {
      title: 'News and Updates',
    },
    kannada: {
      title: 'ಸುದ್ದಿ ಮತ್ತು ನವಿಯಗಳು',
    },
  });
  

  const handleLanguageChange = () => {
    setLoader(true);
    if (lang === "english") {
      setLang("kannada");
      setLoader(false);
    } else {
      setLang("english");
      setLoader(false);
    }
  };

  const content = {
        english: {
      title: 'Shri Basaveshwara Temple',
      text: 'According to Skanda Purana, it is believed that Lord SriSubrahmanya Swami performed penance on Lord Shiva at this site...',
      readMore: 'Read more.........',
      title1: 'Shri Basaveshwara Temple',
    text1: 'It is believed that visiting Lord Kukke Subrahmanya and thenseeking darshan of Lord Sri Basaveshwara (Nandishwara) while offering prayers brings complete fulfillment for devotees wishes...',
    readMore1: 'Read more.........',
    title2:'News and Updates',
    text2:''
    },
    kannada: {
      title: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ',
      text: 'ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ...',
      readMore: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ.........',

      title1: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ',
      text1: 'ಇತಿಹಾಸ ಪ್ರಸಿದ್ಧ ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ಸಮೀಪದ ಹಸಿರು ಸಿರಿಯಕುಮಾರ ಪರ್ವತದ ತಪ್ಪಲಿನ ಕುಮಾರಧಾರ ನದಿಯ ತಟದ ಪೌರಾಣಿಕ ಹಾಗೂ ಐತಿಹಾಸಿಕಹಿನ್ನಲೆ ಇರುವ ಕುಲ್ಕುಂದ ಬಸವನ ಮೂಲ ಎಂಬ ಸ್ಥಳವು ಅನೇಕ ವರ್ಷಗಳಿಂದ ಸಾವಿರಾರುಜನರ ಶ್ರದ್ಧಾ ಕೇಂದ್ರವಾಗಿ ಜಾನುವಾರು ಜಾತ್ರೆಯ ರೂಪದಲ್ಲಿ ವಿನಿಮಯಮಾರಾಟವಾಗುತ್ತಿದ್ದುದನ್ನು ಕಂಡು ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ಶಿವನಕುರಿತು ತಪಸ್ಸು ಮಾಡಿದ ಅವಾಗ, ಸಾಕ್ಷಾತ್ ಶ್ರೀ ಮಹಾದೇವನೇ ನಂದೀ ಸ್ವರೂಪದಲ್ಲಿಪ್ರತ್ಯಕ್ಷನಾಗಿ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಗೆ ನಂದಿ ವಿದ್ಯೆಯೇ ಮೊದಲಾಗಿಶಸ್ತ್ರ ವಿದ್ಯೆಯನ್ನು ಬೋಧಿಸಿದರು ಎಂದು ಪುರಾಣದಲ್ಲಿ ತಿಳಿಯಪಡುತ್ತದೆ...',
      readMore1: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ.........',
    },
  };

  const currentContent = content[lang];

  return (
    <div className='container mx-auto'>
      <ImageSlider />
      {loader && <Loader/>}
      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        <div className='w-full lg:w-1/3 md:w-1/2 mb-3 md:mb-5 lg:mb-5'>
          <Image
            src={Temple}
            className='mx-auto d-block rounded-lg border-2 border-orange-500'
            alt="register background image"
            width={300}
            height={250}
          />
        </div>
        <div className='flex-1 md:ml-5 lg:ml-10'>
          <div className='bg-ora p-5 rounded-md hover:scale-105' >
            <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md 'height={300}>
              <h3 className='text-xl font-semibold mb-2'>{currentContent.title}</h3>
              <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>{currentContent.text}</p>
              <Link href="/Pages/aboutus">
                <p className='text-red-500'>{currentContent.readMore}</p>
              </Link>
            </div>
          </div>
          {/* ... Repeat the structure for the second content block */}
        </div>
      </div>

      <div className='flex-1 md:ml-5 lg:ml-10s flex relative'>
  {/* Left half - Content */}
  <div className='flex-1 md:ml-10 lg:ml-5'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>{currentContent.title1}</h3>
              <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>{currentContent.text1}</p>
              <Link href="/Pages/aboutus">
                <p className='text-red-500'>{currentContent.readMore1}</p>
        </Link>
      </div>
    </div>
 </div>
  
  <div className='w-full lg:w-1/3 md:w-1/2 mb-5 md:mb-5 lg:mb-5'>
    {/* Third Image (Temple2) */}
    <Image
      src={Temple2}
      className='mx-auto d-block rounded-lg border-2 border-orange-500'
      alt="third background image"
      width={300}
      height={250}
    />
  </div>
</div>
<div className='d-block ' align="center" >
       
       
        <div className='w-full'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'width="1000px">
              <h1 className='text-black-500 text-2xl font-semibold underline'align="center">News and Updates</h1>
              <MarqueeComponent />
            </div>
          </div>
        </div>
      </div>
    


      

      <div className="flex justify-center md:justify-end md:pr-8 pt-2 absolute top-10 right-0 m-4">
        {/* <select
          className="border p-1"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="english">English</option>
          <option value="kannada">ಕನ್ನಡ</option>
        </select> */}

        <button
          type="button"
          className="border-2 border-orange-500 bg-orange-300 px-5 py-3 rounded-full ml-auto mr-0 mt-5 hover:bg-orange-400"
          onClick={(e) => handleLanguageChange(e.target.value)}
        >
          {lang === "english" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>

      <h1 className='text-center bold text-5xl text-black-400 underline mt-10 mb-5'>ABOUT THE OWNERS</h1>
      <div className='flex flex-col md:flex-row md:p-10'>
        <Owner />
      </div>
    </div>
  );
};

export default Page;