import CommonHero from "@/components/folder/CommonHero";
import React from "react";


const Sleep = ({sleeps}) => {
  const sleep = sleeps[0]
  return (
    <div className="w-full ">
      <CommonHero
        title={
          sleep.title
        }
        description={
          sleep.description
        }
        image={sleep.image}
        classname={sleep.classname}
        textClr={
          sleep.textClr
        }
        btnDesc={sleep.btnDesc}
        bgClr={sleep.bgClr}
      />
    </div>
  );
};

export default Sleep;
