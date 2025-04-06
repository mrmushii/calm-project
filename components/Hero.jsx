import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <div className="w-11/12 md:w-1/2 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Find your space. Keep it safe
          </h2>
          <p className="my-4 text-sm md:text-lg opacity-90">
            The meditation app to help you find your serenity
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Button className="bg-white text-black hover:text-white px-6 py-4 rounded-full">
              Try Safe Space for Free
            </Button>
            <Button className="bg-white text-black hover:text-white px-6 py-4 rounded-full">
              Already have an account?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
