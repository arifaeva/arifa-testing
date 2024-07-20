"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../stories/button";

export const LandingPage = () => {
  return (
    <div className="h-screen bg-[#2e2d33] border-4 border-[#fef4ce] [box-shadow:5px_5px_#fef4ce] m-auto w-[1600px] rounded-lg flex justify-between items-center space-y-8 text-[#fef4ce]">
      <Image
        className="self-start p-6"
        src={`/assets/icon-5.png`}
        width={300}
        height={50}
        alt="Picture for login page"
      />
      <div className="flex flex-col justify-center items-center space-y-12">
        <h1 className="text-center text-8xl">
          The best place
          <br />
          to <span className="text-[#9ccb9a]">find</span> and{" "}
          <span className="text-[#e75c45]">share</span> <br />
          places for work
        </h1>
        <h2 className="text-center">
          Whether you are a remote worker or a student, <br /> we will help you
          to find the best space to do your work!
        </h2>
        <div className="bg-[#fef4ce] rounded-xl p-5 flex gap-5">
          <Link href="/register">
            <Button variant="tertiary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </Link>
        </div>
      </div>
      <Image
        className="self-end p-6"
        src={`/assets/icon-6.png`}
        width={300}
        height={50}
        alt="Picture for login page"
      />
    </div>
  );
};
