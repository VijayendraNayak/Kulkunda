"use client";
import React, { useState } from "react";

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
          className="bg-gray-300 px-4 py-2 rounded"
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
    const title = selectedLanguage === "english"
      ? "Seva's offered here"
      : selectedLanguage === "Kannada"
      ? "ಇಲ್ಲಿ ಸೇವೆಗಳು ನೀಡಲಾಗುತ್ತವೆ"
      : selectedLanguage === "hindi"
      ? "यहाँ सेवाएं प्रदान की जा रही हैं"
      : "Seva's offered here";

    return (
      <div > 
        <h2 className="text-xl font-semibold mb-2 ">{title}</h2>
        <ul>
          {sevaList.map((seva) => (
            <li key={seva.id} className="p-5 border rounded-md shadow-md hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{seva[languageKey]}</h3>
              <p className="text-black-600 ">Information: {seva.content}</p>
              <p className="text-green-600 font-bold">Price: Rs. {seva.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4 text-center" style={{ marginTop: '50px' }}>
        {selectedLanguage === "english"
          ? "Shree Basaveshwara Temple"
          : selectedLanguage === "Kannada"
          ? "ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ"
          : selectedLanguage === "hindi"
          ? "श्री बसवेश्वर मंदिर"
          : "Seva List"}
      </h1>

      <div className="flex items-center justify-between mb-4">
        {renderLanguageDropdown()}
      </div>

      <div className="grid gap-6">
        <div>
          {renderSevaList()}
        </div>
      </div>
    </div>
  );
};

export default SevaPage;



