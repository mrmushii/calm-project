import React from "react";
import { Button } from "../ui/button";

const CommonExplore = ({ title, desc, classname }) => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-32 py-10 ${classname}`}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-6">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl w-full lg:w-3/4 leading-relaxed">
          {desc}
        </p>
        <Button className="w-full sm:w-3/4 h-12 md:h-14 rounded-full bg-white text-black hover:text-white my-10">
          Explore more free content
        </Button>
      </div>
    </div>
  );
};

export default CommonExplore;
