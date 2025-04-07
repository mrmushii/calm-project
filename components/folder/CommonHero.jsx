import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CommonHero = ({
  title,
  description,
  image,
  classname,
  btnDesc,
  bgClr,
  textClr,
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div
        className={`w-full md:w-1/2 flex flex-col px-6 sm:px-10 md:px-28 lg:px-30 py-12 ${bgClr}`}
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 ${textClr}`}
        >
          {title}
        </h1>
        <p className="mb-16 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
        <Button
          className={`w-full sm:w-auto h-12 rounded-full font-semibold ${classname}`}
        >
          {btnDesc}
        </Button>
      </div>
      <div className="w-full lg:w-1/2 relative h-72 sm:h-96 md:h-screen">
        <Image src={image} fill className="object-cover" alt="Hero Image" />
      </div>
    </div>
  );
};

export default CommonHero;
