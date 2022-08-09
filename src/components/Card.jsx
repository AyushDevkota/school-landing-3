import React from "react";
import { GreenText, UnderlineBtn } from ".";

const Card = ({ data }) => {
  return (
    <div className="border border-cardBorder">
      <img src={data.img} alt="test" className="w-full" />
      <div className="px-4 flex flex-col gap-4 pb-6">
        <GreenText text={data.text} classes="pt-2 border-t-4 border-t-border" />
        <p className="font-lora text-xl font-medium text-primary">
          {data.title}
        </p>
        <p className="font-lexend text-sm font-light text-description">
          {data.description}
        </p>
        <UnderlineBtn text={data.btnText} classes="border-b-primary" />
      </div>
    </div>
  );
};

export default Card;
