import CommonHero from "@/components/folder/CommonHero";
import React from "react";

const Stress = () => {
  return (
    <div className="w-full min-h-screen">
      <CommonHero
        title={
          "Welcome to Tranquil Zone, your resource for stress relief and calm."
        }
        description={
          "Explore simple tools, meditations, and guided practices to ease anxiety, quiet your mind, and feel better. Whenever you need support, Tranquil Zone is here to help."
        }
        image={"/stress-hero.png"}
        textClr={
          "bg-radial from-[#D6ECF7] to-[#9CE4C2] bg-clip-text text-transparent"
        }
        classname={
          "bg-radial-[at_50%_75%] from-[#D6ECF7] to-[#9CE4C2] text-black"
        }
        btnDesc={"Find relief from stress for free"}
      />
    </div>
  );
};

export default Stress;
