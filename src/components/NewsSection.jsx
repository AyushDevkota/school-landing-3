import React from "react";
import { Section, SectionTitle, GreenText, UnderlineBtn } from ".";
import { NewsImg } from "../assets";
import { NEWS_INFO } from "../constants";

const dateClasses = "uppercase font-lexend text-date text-xs";

const NewsSection = () => {
  return (
    <Section>
      <GreenText text="news" />
      <SectionTitle text="Our Latest News" classes="text-5xl mb-6" />
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex flex-col gap-6">
            <img src={NewsImg} alt="students cleaning beach" />
            <p className={dateClasses}>december 12, 2020</p>
            <SectionTitle
              text="Can I Make Money Recycling  Catalytic Converters?"
              classes="text-2xl"
            />
            <p className="font-quicksand text-date">
              In this article, we’re going to take a closer look at how you can
              make money recycling catalytic converters.In this article, we’re
              going to take a closer look at how you can make money recycling
              catalytic converters.
            </p>
            <UnderlineBtn text="Learn More" classes="border-b-primary" />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          {NEWS_INFO.map((el) => (
            <div className="flex flex-col gap-3">
              <p className={dateClasses}>{el.date}</p>
              <SectionTitle text={el.heading} classes="text-xl" />
              <UnderlineBtn text={el.btnText} classes="border-b-primary" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default NewsSection;
