import Image from "next/image";
import React from "react";

export const Slider = () => {
  return (
    <div className="grid place-items-center w-full max-w-5xl shadow-3xl rounded-2xl">
      <div className="w-full flex justify-center items-center rounded-2xl">
        <Image
          className="bg-cover"
          src={`/assets/sample-1.png`}
          width={400}
          height={400}
          alt="Sample 1"
        />
        <Image
          className="bg-cover"
          src={`/assets/sample-2.jpg`}
          width={400}
          height={400}
          alt="Sample 2"
        />
        <Image
          className="bg-cover"
          src={`/assets/sample-3.jpg`}
          width={400}
          height={400}
          alt="Sample 1"
        />
      </div>
    </div>
  );
};
