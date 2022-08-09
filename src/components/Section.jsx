import React from "react";

const Section = (props) => {
  return (
    <section className={`w-11/12 mx-auto py-20 ${props.classes}`}>
      {props.children}
    </section>
  );
};

export default Section;
