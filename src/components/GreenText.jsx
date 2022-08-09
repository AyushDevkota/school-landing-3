import React from "react";

const GreenText = (props) => {
  return (
    <p
      className={`text-border font-lexend uppercase font-light text-xs w-max ${props.classes}`}
    >
      {props.text}
    </p>
  );
};

export default GreenText;
