import React from "react";
import Card from "./Card";

const Review = () => {
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="w-11/12 flex justify-around mt-16">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Review;
