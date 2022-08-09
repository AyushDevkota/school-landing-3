import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const PrimaryBtn = ({ text, classes, btnColor }) => {
  return (
    <button
      className={`uppercase font-lexend flex items-center gap-6 w-max py-3 px-4 border-2 border-l-4 border-l-border ${classes}`}
    >
      {text} <AiOutlineArrowRight color={btnColor} size={18} />
    </button>
  );
};

export default PrimaryBtn;
