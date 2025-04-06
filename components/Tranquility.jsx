import Image from "next/image";
import React from "react";

const Tranquility = () => {
  return (
    <div className="w-full flex flex-col items-center my-10">
      <h2 className="text-4xl">We are here to priortize your tranquility</h2>
      <div className="w-11/12 flex justify-around mt-16">
        <div className="w-1/4">
          <Image src={"/stress.png"} width={100} height={100} alt="Emoji" />
          <h2 className="text-3xl mt-14">Stress less</h2>
          <p className="my-6">
            Get in-the-moment relief for stress and anxiety so you can get back
            to living.
          </p>
          <a href="#" className="underline">
            Learn More
          </a>
        </div>
        <div className="w-1/4">
          <Image src={"/sleep.png"} width={100} height={100} alt="Emoji" />
          <h2 className="text-3xl mt-14">Sleep more</h2>
          <p className="my-6">
            Drift off naturally and stay asleep soundly, waking up refreshed and
            recharged.
          </p>
          <a href="#" className="underline">
            Learn More
          </a>
        </div>
        <div className="w-1/4">
          <Image src={"/mind.png"} width={100} height={100} alt="Emoji" />
          <h2 className="text-3xl mt-14">Live mindfully</h2>
          <p className="my-6">
            Move through life’s challenges with resilience you need to thrive.
          </p>
          <a href="#" className="underline">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tranquility;
