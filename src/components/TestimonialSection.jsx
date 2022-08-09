import React from "react";
import { Section, SectionTitle, GreenText, UnderlineBtn, Student } from ".";
import { STUDENTS } from "../constants";

const TestimonialSection = () => {
  return (
    <Section>
      <GreenText text="testimonials" />
      <div className="flex justify-between items-center mb-6">
        <SectionTitle text="Alumini Spotlight" classes="text-5xl" />
        <UnderlineBtn text="More Events" classes="border-b-border" />
      </div>
      <div className="w-4/5 mx-auto">
        <Student data={STUDENTS[0]} />
      </div>
    </Section>
  );
};

export default TestimonialSection;
