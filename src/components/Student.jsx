import React from "react";
import { SectionTitle } from ".";

const customClass = "font-lexend italic font-thin text-[#333]";

const Student = ({
  data: { name, date, degree, img, heading, description },
}) => {
  return (
    <div className="flex bg-white">
      <img src={img} alt={name} />
      <div className="py-16 px-8 flex flex-col justify-between">
        <SectionTitle text={heading} classes="text-3xl" />
        <p className="text-opac font-lexend">{description}</p>
        <div className="flex flex-col gap-4">
          <p className="font-lexend text-[#333] text-xl">{name}</p>
          <div>
            <p className={customClass}>{date}</p>
            <p className={customClass}>{degree}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
