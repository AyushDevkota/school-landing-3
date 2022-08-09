import React from "react";
import { PrimaryBtn } from ".";

const AboutSection = () => {
  return (
    <section className="bg-primary py-14 text-white">
      <div className="flex flex-col items-center gap-8">
        <h3 className="font-lexend text-3xl font-light">Learn More About Us</h3>
        <PrimaryBtn text="explore" btnColor="white" />
      </div>
    </section>
  );
};

export default AboutSection;
