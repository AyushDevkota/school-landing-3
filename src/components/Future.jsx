import React from "react";
import { SectionTitle, PrimaryBtn } from ".";

const Future = () => {
  return (
    <section
      className="bg-future bg-cover relative"
      style={{ height: "35rem" }}
    >
      <div className="bg-black h-full opacity-50"></div>
      <div className="bg-white absolute top-1/2 right-0 -translate-y-1/2 p-16 w-2/5 flex flex-col gap-4">
        <SectionTitle text="Discover your Future" classes="text-3xl" />
        <p className="font-lexend text-lg text-opac">
          At our Virtual Welcome Center, you'll find the Admissions materials
          available in our actual lobby, digitized for your convenience.
        </p>
        <PrimaryBtn
          text="View More"
          classes="text-primary"
          btnColor="#029A29"
        />
      </div>
    </section>
  );
};

export default Future;
