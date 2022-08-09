import React from "react";

const UnderlineBtn = (props) => {
  return (
    <button
      className={`pb-2 border-b-2 text-primary w-max text-sm ${props.classes}`}
    >
      {props.text}
    </button>
  );
};

export default UnderlineBtn;
