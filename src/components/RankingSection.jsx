import React from "react";
import { Section, SectionTitle, GreenText } from ".";
import { GRADUATION_INFO } from "../constants";

const Numbers = () => {
  return (
    <Section classes="text-center">
      <GreenText text="our numbers" classes="mx-auto" />
      <SectionTitle
        text="One of the Best College in Nepal"
        classes="text-5xl mb-6"
      />
      <p className="text-[#333] w-1/2 mx-auto font-lexend mb-12">
        At our Virtual Welcome Center, you'll find the Admissions materials
        available in our actual lobby, digitized for your convenience.
      </p>
      <div className="grid grid-cols-4 py-12 border-y border-y-primary gap-20">
        {GRADUATION_INFO.map((el) => (
          <div key={el.id} className="flex flex-col gap-4">
            <SectionTitle text={el.title} classes="text-4xl" />
            <p className="text-primary font-lexend text-sm">{el.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Numbers;
