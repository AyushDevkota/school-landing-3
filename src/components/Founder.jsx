import React from "react";
import { SectionTitle, Student } from ".";
import { STUDENTS } from "../constants";

const Founder = () => {
  return (
    <section className="bg-primary">
      <div className="w-4/5 mx-auto py-16">
        <p className="font-lexend uppercase font-light text-xs text-[#ffffff80]">
          our features
        </p>
        <SectionTitle
          text="From our Founder"
          classes="text-white text-3xl mb-4"
        />
        <Student data={STUDENTS[0]} />
      </div>
    </section>
  );
};

export default Founder;
