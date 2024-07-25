"use client";
import { useState } from "react";

interface IReview {
  _id: string;
  content: string;
  internet: number;
  electricity: number;
  userId: {
    _id: string;
    name: string;
    avatarUrl: string;
  };
}

export const RatingBox = ({ reviews }: { reviews: IReview[] }) => {
  const [allRating, setAllRating] = useState<number | "not rated yet">(
    "not rated yet"
  );
  const [internetRating, setInternetRating] = useState<
    number | "not rated yet"
  >("not rated yet");
  const [electricityRating, setElectricityRating] = useState<
    number | "not rated yet"
  >("not rated yet");

  // Calculate average of all ratings
  function averageAllRating() {
    if (reviews.length === 0) {
      return "not rated yet";
    }
    const totalSum = reviews.reduce(
      (acc, review) => acc + review.internet + review.electricity,
      0
    );
    const average = totalSum / (reviews.length * 2); // divide by 2 because we're averaging two ratings per review
    return average.toFixed(1); // rounding to 1 decimal place
  }

  // Calculate average internet rating
  function averageInternetRating() {
    if (reviews.length === 0) {
      return "not rated yet";
    }
    const totalSum = reviews.reduce((acc, review) => acc + review.internet, 0);
    const average = totalSum / reviews.length;
    return average.toFixed(1); // rounding to 1 decimal place
  }

  // Calculate average electricity rating
  function averageElectricityRating() {
    if (reviews.length === 0) {
      return "not rated yet";
    }
    const totalSum = reviews.reduce(
      (acc, review) => acc + review.electricity,
      0
    );
    const average = totalSum / reviews.length;
    return average.toFixed(1); // rounding to 1 decimal place
  }

  // Set ratings when component mounts
  useState(() => {
    setAllRating(averageAllRating());
    setInternetRating(averageInternetRating());
    setElectricityRating(averageElectricityRating());
  }, [reviews]);

  return (
    <div className="bg-[#e75c45] border-4 border-[#2e2d33] h-56 w-[25%] flex flex-col items-center justify-center space-y-4 rounded-md">
      <div className="flex flex-col items-center justify-center h-fit">
        <h3>Overall rating:</h3>
        <h1>{allRating}/5</h1>
      </div>
      <div className="flex justify-items-start space-x-3">
        <div>
          <h3 className="font-normal">Internet</h3>
          <h3 className="font-normal">Electricity</h3>
        </div>
        <div>
          <h3>: {internetRating}/5</h3>
          <h3>: {electricityRating}/5</h3>
        </div>
      </div>
    </div>
  );
};
