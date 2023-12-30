  "use client";
  import React, { useState } from "react";
  import Image from "next/image";
  import Link from "next/link";

  import RegisterImage from "/app/assets/image/temple.jpg";
  const SevaPage = () => {
    const sevaList = [
      {
        id: 1,
        nameEnglish: "Thila Dheepam",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ತಿಳ ದೀಪಂ",
        nameHindi: "तिल दीपम",
        price: 20,
      },
      {
        id: 2,
        nameEnglish: "Kalash Snana",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಕಲಶ ಸ್ನಾನ",
        nameHindi: "कलश स्नान",
        price: 20,
      },
      {
        id: 3,
        nameEnglish: "Mangalarathi",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಮಂಗಳಾರತಿ",
        nameHindi: "मंगलारति",
        price: 20,
      },
      {
        id: 4,
        nameEnglish: "Ghrutha Deepa Seva",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಘೃತ ದೀಪ ಸೇವಾ",
        nameHindi: "घृत दीप सेवा",
        price: 30,
      },
      {
        id: 5,
        nameEnglish: "Parimala Parasada",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಪರಿಮಳ ಪಾರಸಾದ",
        nameHindi: "परिमल प्रसाद",
        price: 50,
      },
      {
        id: 6,
        nameEnglish: "Pushpanjali Seva",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಪುಷ್ಪಾಂಜಲಿ ಸೇವಾ",
        nameHindi: "पुष्पांजलि सेवा",
        price: 50,
      },
      {
        id: 7,
        nameEnglish: "Archane",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಅರ್ಚನೆ",
        nameHindi: "आर्चन",
        price: 50,
      },
      {
        id: 8,
        nameEnglish: "Bhasmarcahane",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಭಸ್ಮಾರ್ಚನೆ",
        nameHindi: "भस्मार्चन",
        price: 50,
      },
      {
        id: 9,
        nameEnglish: "Durwarchane",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ದುರ್ವಾರ್ಚನೆ",
        nameHindi: "दुर्वार्चन",
        price: 50,
      },
      {
        id: 10,
        nameEnglish: "Panchakajjaya",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಪಂಚಕಜ್ಜಯ",
        nameHindi: "पंचकज्जय",
        price: 50,
      },
      {
        id: 11,
        nameEnglish: "Rudrabhishekam",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ರುದ್ರಾಭಿಷೇಕ",
        nameHindi: "रुद्राभिषेक",
        price: 100,
      },
      {
        id: 12,
        nameEnglish: "Halu Payasa",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಹಾಲು ಪಾಯಸ",
        nameHindi: "हलु पायस",
        price: 100,
      },
      {
        id: 13,
        nameEnglish: "Atharvashirsha Abhisheka",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಅಥರ್ವಶಿರ್ಷ ಅಭಿಷೇಕ",
        nameHindi: "अथर्वशीर्ष अभिषेक",
        price: 100,
      },
      {
        id: 14,
        nameEnglish: "Appa Seva",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಅಪ್ಪ ಸೇವಾ",
        nameHindi: "अप्प सेवा",
        price: 100,
      },
      {
        id: 15,
        nameEnglish: "Modaka Naivedya",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಮೋಡಕ ನೈವೇದ್ಯ",
        nameHindi: "मोडक नैवेद्य",
        price: 100,
      },
      {
        id: 16,
        nameEnglish: "Mahaprasadam",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಮಹಾಪ್ರಸಾದ",
        nameHindi: "महाप्रसादम",
        price: 150,
      },
      {
        id: 17,
        nameEnglish: "Karthika Pooja",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಕಾರ್ತಿಕ ಪೂಜ",
        nameHindi: "कार्तिक पूजा",
        price: 200,
      },
      {
        id: 18,
        nameEnglish: "Shani Pooja",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಶನಿ ಪೂಜ",
        nameHindi: "शनि पूजा",
        price: 200,
      },
      {
        id: 19,
        nameEnglish: "Mahapooja",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಮಹಾಪೂಜ",
        nameHindi: "महापूजा",
        price: 200,
      },
      {
        id: 20,
        nameEnglish: "Shivarpanam",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಶಿವಾರ್ಪಣ",
        nameHindi: "शिवार्पण",
        price: 250,
      },
      {
        id: 21,
        nameEnglish: "Sarva Seva",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಸರ್ವ ಸೇವಾ",
        nameHindi: "सर्व सेवा",
        price: 300,
      },
      {
        id: 22,
        nameEnglish: "Shiva Pooja",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಶಿವ ಪೂಜ",
        nameHindi: "शिव पूजा",
        price: 300,
      },
      {
        id: 23,
        nameEnglish: "Mahabhishekam",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಮಹಾಭಿಷೇಕ",
        nameHindi: "महाभिषेक",
        price: 500,
      },
      {
        id: 24,
        nameEnglish: "Ganapati Havan",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಗಣಪತಿ ಹವನ",
        nameHindi: "गणपति हवन",
        price: 1000,
      },
      {
        id: 25,
        nameEnglish: "Durva Havan",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ದುರ್ವಾ ಹವನ",
        nameHindi: "दुर्वा हवन",
        price: 1500,
      },
      {
        id: 26,
        nameEnglish: "Ranga Pooja",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ರಂಗ ಪೂಜ",
        nameHindi: "रंग पूजा",
        price: 3000,
      },
      {
        id: 27,
        nameEnglish: "Ekadasha Rudrabhisheka",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        nameKannada: "ಏಕಾದಶ ರುದ್ರಾಭಿಷೇಕ",
        nameHindi: "एकादश रुद्राभिषेक",
        price: 5000,
      },
    ];


    const [selectedLanguage, setSelectedLanguage] = useState("english");
    const [selectedSeva, setSelectedSeva] = useState();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleCardClick = (seva) => {
      setSelectedSeva(seva);
    };

    const handleToggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  

    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
    
    };

    const renderLanguageDropdown = () => {
      return (
        <div className="flex items-center ml-auto">
          <span className="mr-2">Language:</span>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-orange-100 px-4 py-2 rounded"
          >
            <option value="english">English</option>
            <option value="Kannada">Kannada</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      );
    };
  
    const renderSevaList = () => {
      const languageKey = `name${selectedLanguage.charAt(0).toUpperCase()}${selectedLanguage.slice(1)}`;
      const title =
        selectedLanguage === "english"
          ? "Seva's offered here"
          : selectedLanguage === "Kannada"
          ? "ಇಲ್ಲಿ ಸೇವೆಗಳು ನೀಡಲಾಗುತ್ತವೆ"
          : selectedLanguage === "hindi"
          ? "यहाँ सेवाएं प्रदान की जा रही हैं"
          : "Seva's offered here";
  
          return (
            <div className={`md:w-1/2 p-4 overflow-y-auto ${isDrawerOpen ? 'hidden' : ''}`} style={{ maxHeight: 'calc(100vh - 100px)' }}>
              <h2 className="text-2xl font-semibold mb-4 text-center underline">{title}</h2>
              <ul className="space-y-4">
                {sevaList.map((seva) => (
                  <li
                    key={seva.id}
                    className={`p-5 rounded-md shadow-md cursor-pointer hover:scale-105 bg-orange-100 border-2 ${
                      selectedSeva?.id === seva.id ? "bg-blue-100 " : "hover:bg-orange-200"
                    }`}
                    onClick={() => handleCardClick(seva)}
                  >
                    <h3 className="text-xl font-semibold mb-2">{seva[languageKey]}</h3>
                    <p className="text-green-700 font-semibold mb-2">Price: Rs. {seva.price}</p>
                  </li> 
                )
                )
              }
              </ul>
              <div className="flex justify-end p-4 md:hidden">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={handleToggleDrawer}
                >
                  {isDrawerOpen ? 'Close' : 'Open'} Seva List
                </button>
              </div>
            </div>
          );
        };
  
    const renderSelectedSevaModal = () => {
      if (!selectedSeva) return null;
    
      const languageKey = `name${selectedLanguage.charAt(0).toUpperCase()}${selectedLanguage.slice(1)}`;
    
      return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center overflow-y-auto">
          <div className="p-8 rounded-md shadow-md md:w-1/2 bg-orange-100 border-2 border-orange-500">
            {/* Mobile view */}
            <div className="md:hidden p-4 overflow-y-auto bg-orange-100">
              <h2 className="text-2xl font-semibold mb-4 text-center">{selectedSeva[languageKey]}</h2>
              <p className="text-gray-700 mb-4">{selectedSeva.content}</p>
              <p className="text-green-600 font-bold">Price: Rs. {selectedSeva.price}</p>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => setSelectedSeva(null)}
                >
                  Close
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2 ">
                  <Link href="/Pages/sevaform">
                    <span>
                      Book
                    </span>
                  </Link>
                </button>
              </div>
            </div>
    
            {/* Desktop view */}
            <div className="hidden md:block p-4 overflow-y-auto bg-orange-100">
              <h2 className="text-2xl font-semibold mb-4 text-center">{selectedSeva[languageKey]}</h2>
              <p className="text-gray-700 mb-4">{selectedSeva.content}</p>
              <p className="text-green-600 font-bold">Price: Rs. {selectedSeva.price}</p>
              <div className="flex justify-center mt-4 ">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => setSelectedSeva(null)}
                >
                  Close
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2 ">
                  <Link href="/Pages/sevaform">
                    <span>
                      Book
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
  
    return (
    <div className="container mx-auto p-5 md:p-10">
      <h1 className="text-3xl font-bold mb-4 text-center underline" style={{ marginTop: '50px' }}>
        {selectedLanguage === "english"
          ? "Shree Basaveshwara Temple"
          : selectedLanguage === "Kannada"
          ? "ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ"
          : selectedLanguage === "hindi"
          ? "श्री बसवेश्वर मंदिर"
          : "Shree Basaveshwara Temple"}
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        {renderLanguageDropdown()}
      </div>

      <div className="md:flex flex-wrap">
        {renderSevaList()}
        <div className="p-5 w-full md:w-1/2 overflow-hidden">
          <Image
            src={RegisterImage}
            alt="Temple Image"
            layout="responsive"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={`w-full md:w-1/2 ${isDrawerOpen ? '' : 'hidden'}`}>
          <div className="flex justify-end p-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleToggleDrawer}
            >
              {isDrawerOpen ? 'Close' : 'Open'} Seva List
            </button>
            
          </div>
        </div>
        {renderSelectedSevaModal()}
      </div>
    </div>
  );
};
  

  export default SevaPage;



