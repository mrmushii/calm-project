import React from "react";
import CommonHero from "@/components/folder/CommonHero";

const Mind = () => {
  return (
    <div className="w-full min-h-screen">
      <CommonHero
        title={
          "Mindfulness, meditation, and guided programs to help you create lasting healthy habits."
        }
        description={
          "You’ve come to the right place. We provide easy-to-access tools for mindfulness, including guided meditations, calming music, and daily programs designed to fit seamlessly into your life and support your well-being."
        }
        image={"/mind-hero.png"}
        classname={"bg-gradient-to-r from-[#A062F3] to-[#322AA7]"}
        textClr={
          "bg-gradient-to-r from-[#A062F3] to-[#322AA7] bg-clip-text text-transparent"
        }
        btnDesc={"Improve your sleep for free"}
        bgClr={"bg-[#D9D9D9]"}
      />
    </div>
  );
};

export default Mind;
