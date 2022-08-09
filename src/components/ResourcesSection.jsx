import React from "react";
import { Section, SectionTitle, Card } from ".";
import { RESOURCES_INFO } from "../constants";

const Resources = () => {
  return (
    <Section>
      <SectionTitle text="Studying with us" classes="text-5xl mb-6" />
      <div className="grid grid-cols-2 gap-16">
        {RESOURCES_INFO.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </Section>
  );
};

export default Resources;
