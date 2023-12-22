import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-center px-10 ">
      <div className="p-2 flex flex-col gap-4 items-center justify-center">
        <p className="text-xl font-bold text-orange-500 ">ISCODERZ</p>
        <p>&copy; All rights reserved @ Iscoderz</p>
      </div>
    </div>
  );
};

export default Footer;