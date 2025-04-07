import UpperPart from "@/components/UpperPart";
import Frequently from "@/components/Frequently";
import React from "react";

const page = () => {
  return (
    <div>
      <UpperPart />
      <div className="px-32 py-16">
        <Frequently />
      </div>
    </div>
  );
};

export default page;
