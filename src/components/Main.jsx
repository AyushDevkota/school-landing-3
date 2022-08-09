import React from "react";
import { Navbar, PrimaryBtn } from ".";

const ImgSection1 = () => {
  return (
    <div class="bg-gray-500 flex flex-col h-screen">
      <Navbar />
      <div className="bg-section1 flex-1 h-full bg-cover">
        <div className="bg-black h-full opacity-50"></div>
        <div className="absolute top-1/4 left-40 w-1/3 flex flex-col gap-8">
          <h1 className="text-white font-lora text-6xl font-bold">
            Congratulations, graduates!
          </h1>
          <p className="font-quicksand text-text">
            Bucknell marked a historic Commencement weekend on May 21 and 22,
            2022, celebrating Commencement for the Class of 2020 and Class of
            2022. Relive the events in photos, videos, speeches and more
          </p>
          <PrimaryBtn
            text="start tour"
            classes="text-white"
            btnColor="#029A29"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgSection1;
