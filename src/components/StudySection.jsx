import React from "react";
import { Section, SectionTitle, Card } from ".";
import { STUDY_INFO } from "../constants";

const Study = () => {
  return (
    <Section>
      <SectionTitle text="Studying with us" classes="text-5xl mb-6" />
      <div className="grid grid-cols-3 gap-10">
        {STUDY_INFO.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </Section>
  );
};

export default Study;
