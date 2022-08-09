import React from "react";
import { Section, SectionTitle, GreenText, PrimaryBtn } from ".";
import { LATEST_EVENT } from "../constants";

const dateClasses = "uppercase font-lexend text-date text-xs";

const Events = () => {
  return (
    <Section>
      <GreenText text="events" />
      <div className="flex justify-between items-center mb-6">
        <SectionTitle text="Our Latest Events" classes="text-5xl" />
        <PrimaryBtn
          text="View More"
          classes="text-primary"
          btnColor="#029A29"
        />
      </div>
      <div className="grid grid-cols-3 gap-12">
        {LATEST_EVENT.map((el) => (
          <div key={el.id} className="border border-cardBorder">
            <img
              src={el.img}
              alt="temp"
              className="border-b-4 border-b-border"
            />
            <div className="px-3 py-6 flex flex-col gap-3">
              <p className={dateClasses}>{el.date}</p>
              <SectionTitle text={el.title} classes="text-xl" />
              <p className="font-nunito text-date text-sm">{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Events;
