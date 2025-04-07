import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] xl:w-[23%] bg-gradient-to-b from-[#3C1ED3] to-[#DB46E6] rounded-[2rem] p-6 text-white m-2 flex flex-col justify-between">
      <Image src="/comma.png" width={60} height={60} alt="comma" className="mb-4" />

      <p className="my-6 px-2 text-sm sm:text-base leading-relaxed">
        I have a very busy brain and can find it hard to unwind. Now a daily
        practice is actually so wonderful and healing for me.
      </p>

      <p className="px-2 font-semibold">Agu Venora</p>

      <div className="flex gap-2 px-2 mt-4 flex-wrap">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/star.png"
            width={20}
            height={20}
            alt="star"
            className="inline-block"
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
