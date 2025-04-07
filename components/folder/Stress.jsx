import CommonHero from "@/components/folder/CommonHero";
import React from "react";

// Define hero content as an array

const Stress = ({stress}) => {
  const hero = stress[0]; // Access the first item

  return (
    <div className="w-full min-h-screen">
      <CommonHero
        title={hero.title}
        description={hero.description}
        image={hero.image}
        classname={hero.classname}
        textClr={hero.textClr}
        btnDesc={hero.btnDesc}
        bgClr={hero.bgClr}
      />
    </div>
  );
};

export default Stress;
