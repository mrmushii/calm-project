import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-1/4 bg-gradient-to-b from-[#3C1ED3] to-[#DB46E6] rounded-4xl p-6 text-white">
      <Image src={"/comma.png"} width={80} height={80} alt="comma" />
      <p className="my-12 px-6">
        I have a very busy brain and can find it hard to unwind. Now a daily
        practice is actually so wonderful and healing for me.
      </p>
      <p className="px-4 mb-5">Agu Venora</p>
      <div className="gap-4 px-4">
        <Image
          src={"/star.png"}
          width={30}
          height={30}
          alt="star"
          className="inline pr-1"
        />
        <Image
          src={"/star.png"}
          width={30}
          height={30}
          alt="star"
          className="inline p-1"
        />
        <Image
          src={"/star.png"}
          width={30}
          height={30}
          alt="star"
          className="inline p-1"
        />
        <Image
          src={"/star.png"}
          width={30}
          height={30}
          alt="star"
          className="inline p-1"
        />
        <Image
          src={"/star.png"}
          width={30}
          height={30}
          alt="star"
          className="inline p-1"
        />
      </div>
    </div>
  );
};

export default Card;
