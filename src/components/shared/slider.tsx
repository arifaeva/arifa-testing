"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "../stories/button";

export const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    {
      id: 1,
      src: "/assets/sample-1.jpeg",
      title: "Sample 1",
    },
    {
      id: 2,
      src: "/assets/sample-2.jpg",
      title: "Sample 2",
    },
    {
      id: 3,
      src: "/assets/sample-3.jpg",
      title: "Sample 3",
    },
    {
      id: 4,
      src: "/assets/sample-4.jpg",
      title: "Sample 4",
    },
    {
      id: 5,
      src: "/assets/sample-5.jpg",
      title: "Sample 5",
    },
    {
      id: 6,
      src: "/assets/sample-6.jpg",
      title: "Sample 6",
    },
    {
      id: 7,
      src: "/assets/sample-7.jpg",
      title: "Sample 7",
    },
    {
      id: 8,
      src: "/assets/sample-8.jpg",
      title: "Sample 8",
    },
  ];

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  return (
    <main className="place-items-center w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#fef4ce] border-4 border-[#2e2d33]">
      <div className={"rounded-2xl p-6"}>
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={800}
              height={400}
              className="w-full h-full object-cover md:rounded-lg"
            />
          </div>
        ))}
        <div className="flex justify-between">
          <form action={clickPrev}>
            <Button>Previous</Button>
          </form>
          <form action={clickNext}>
            <Button>Next</Button>
          </form>
        </div>
      </div>
    </main>
  );
};
