import React from "react";

const SectionTitle = ({ text, classes }) => {
  return (
    <h2 className={`font-lora font-medium text-primary ${classes}`}>{text}</h2>
  );
};

export default SectionTitle;
