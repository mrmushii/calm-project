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
  {/* Left */}
  <div className={`w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-24 xl:px-32 py-12 ${bgClr}`}>
    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 ${textClr} `}>
      {title}
    </h1>
    <p className="mb-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
      {description}
    </p>
    <Button className={`w-full sm:w-auto h-12 rounded-full font-semibold ${classname}`}>
      {btnDesc}
    </Button>
  </div>

  {/* Right */}
  <div className={`w-full lg:w-1/2 relative h-64 sm:h-96 md:h-[600px] lg:h-auto min-h-[400px] px-20 `}>
  <Image
    src={image}
    fill
    priority
    alt="Hero Image"
    className="object-fit w-full h-full"
  />
</div>

</div>

  );
};

export default CommonHero;
