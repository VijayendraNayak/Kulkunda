import React from 'react';


const Page = () => {
 

  return (
    <div className="isolate mt-5 bg-gradient-to-r from-green-400 to-blue-500 text-gray-800">

      {/* Contact Information */}
      <div className="mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Contact Information</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Address</h3>
          <p>Shree Basaveshwara Temple,
            Basavana Moola, Kulkunda,
            Kadaba Taluk, Dakshina Kannada,
            Karnataka-574238</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Numbers</h3>
          <div className="flex items-center mx-auto">
            <h3 className="mx-auto">
              <svg className="w-6 h-6 mx-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
              </svg>Mobile: 9482624747
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <p className="mx-auto">WhatsApp: 9482624747</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
          <div className="flex items-center mx-auto">
            <p className="mx-auto">
              <svg className="w-6 h-6 mx-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16" >
                <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>abc@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Enquire Form and Google Map */}
      <div className="flex">

        {/* Enquire Form */}
        <form action="#" method="POST" className="ml-12 mt-16 max-w-2xl sm:mt-7 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold tracking-tight text--900 sm:text-4xl">     Enquire form</h2>
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="text" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
              <div class="relative mt-2.5">
                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Your Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="3" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
          </div>
        </form>

        {/* Google Map iframe */}
        <div className='pl-12 ml-12 mt-6'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3518917216397!2d75.6071434!3d12.690440299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e6a6152c4c59%3A0x848a6ae907e47652!2sShree%20Basaveshwara%20Temple!5e0!3m2!1sen!2sin!4v1703072760786!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
