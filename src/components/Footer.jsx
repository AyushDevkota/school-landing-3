import React from "react";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#09091A] text-white pt-16 pb-8">
      <div className="grid grid-cols-4 justify-between w-11/12 mx-auto text-center">
        <div>
          <h3 className="text-2xl mb-3">Amar English School</h3>
          <p className="text-sm text-[#ffffff75]">
            Sustainability is at the core of everything we do.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-bold">contact us</h3>
          <div className="flex flex-col gap-2">
            <p className="text-text">980-4485480</p>
            <p className="text-text">078-545307</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-bold">navigate</h3>
          <div className="flex flex-col gap-2">
            <p className="text-text">Home</p>
            <p className="text-text">About Us</p>
            <p className="text-text">Courses</p>
            <p className="text-text">Faqs</p>
            <p className="text-text">Gallery</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-bold">follow us</h3>
          <div className="flex justify-center gap-4">
            <FaFacebookF size={25} />
            <FaLinkedin size={25} />
            <FaYoutube size={25} />
          </div>
        </div>
      </div>
      <p className="w-11/12 mx-auto mt-12 border-t border-t-white pt-4">
        Privacy Policy | © Copyright 2022. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
