import CommonHero from "@/components/folder/CommonHero";
import React from "react";

const Sleep = () => {
  return (
    <div className="w-full h-screen">
      <CommonHero
        title={
          "Fall asleep easier with sleep meditations, relaxing music, and calming soundscapes for your best rest."
        }
        description={
          "Experience better sleep with guided meditations, exclusive sleep music, and calming sounds. With hundreds of options to choose from, you’ll drift off to dreamland effortlessly. Just press play and relax."
        }
        image={"/sleep-hero.png"}
        classname={"bg-gradient-to-b from-[#214D72] to-[#3A8FD7]"}
        textClr={
          "bg-gradient-to-r from-[#A062F3] to-[#322AA7] bg-clip-text text-transparent"
        }
        btnDesc={"Improve your sleep for free"}
        bgClr={"bg-[#D9D9D9]"}
      />
    </div>
  );
};

export default Sleep;
