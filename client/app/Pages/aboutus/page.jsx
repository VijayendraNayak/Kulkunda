"use client";
import React from "react";

const page = () => {
  return (
    <div className="pt-10 pb-10 lg:pt-20 ">
      <p className="text-3xl lg:text-5xl text-center font-semibold text-orange-500 p-4">
        About Us
      </p>
      <div className="flex flex-col gap-4 px-4 md:px-8">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center ">Historical Significance</span>
            <p className="text-sm md:text-base lg:text-lg text-center">According to 'Skanda Purana,' it is believed that Lord Sri Subrahmanya 
            Swami performed penance on Lord Shiva at this site. The area witnessed a bustling 15-day cattle fair during Kartika masa 
            (around November), gradually evolving into a place primarily dedicated to worship.</p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img className="w-full h-full object-cover" src="" alt="image here" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img className="w-full h-full object-cover" src="" alt="image here" />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Restoration and Worship</span>
            <p className="text-sm md:text-base lg:text-lg text-center">A dedicated theologian played a crucial role in renovating and 
            re-establishing the temple through Ashtamangala rituals.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Historical Significance</span>
            <p className="text-sm md:text-base lg:text-lg text-center">According to 'Skanda Purana,' it is believed that Lord Sri 
            Subrahmanya Swami performed penance on Lord Shiva at this site. The area witnessed a bustling 15-day cattle fair during 
            Kartika masa (around November), gradually evolving into a place primarily dedicated to worship.</p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img className="w-full h-full object-cover" src="" alt="image here" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full h-60 rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img className="w-full h-full object-cover" src="" alt="image here" />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Cultural Traditions</span>
            <p className="text-sm md:text-base lg:text-lg text-center">Even today, during Kartika masa, Basavanamoola observes cow pooja and
             gogras (feeding cows) as part of the cattle fair tradition. The construction of Lord Sri Subrahmanya Swamy's Champa Shasthi 
             Brahma Ratha commences after the Go Puja (cow worship).</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full h-60 rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Historical Figures and Influence</span>
            <p className="text-sm md:text-base lg:text-lg text-center">About 800 years ago, during the rule of Keladi kings Shivappa 
            Nayaka and Surappa Nayaka in Kadambasamsthan (Kadaba), the significance of Basaveshwara and Kulkunda's history was acknowledged 
            by the royal family. Despite facing adversities such as a smallpox epidemic, the devotion to Lord Basaveshwara endured, with 
            devotees constructing a statue for worship.</p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img className="w-full h-full object-cover" src="" alt="image here" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full h-60 rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img className="w-full h-full object-cover" src="" alt="image here" />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Spiritual Significance</span>
            <p className="text-sm md:text-base lg:text-lg text-center">It's believed that visiting Lord Kukke Subrahmanya and then seeking 
            darshan of Lord Sri Basaveshwara (Nandishwara) while offering prayers brings complete fulfillment for devotees' wishes. Devotees 
            firmly believe that Lord Basaveshwara resides at Basavanmoola and grants the sincere desires of his devotees.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
