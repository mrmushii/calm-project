import React from "react";
import CommonHero from "@/components/folder/CommonHero";

// Define hero data as an array


const Mind = ({mind}) => {
  const hero = mind[0]; // Extract the first (and only) item

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

export default Mind;
