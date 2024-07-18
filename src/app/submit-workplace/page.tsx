"use client";

import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
import { API_URL } from "@/config/apiUrl";

export default function DashboardPage() {
  return (
    <div className="bg-blue-900 h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-center items-center">
        {/* Section Add Workplace */}
        <div className="flex justify-between items-center bg-white p-5 rounded-lg [box-shadow:5px_5px_orange] space-x-2">
          <Image
            className="h-fit"
            src={`/assets/auth-3.jpg`}
            width={420}
            height={10}
            alt="Picture for register page"
          />
          <div className="bg-blue-900 p-5 rounded-md space-y-3 text-white">
            <h1 className="text-center">Submit Workplace</h1>
            <section>
              <p>Have workplace recommendation?</p>
              <p>Share with us!</p>
            </section>
            <form className="flex flex-col space-y-2">
              <Input
                className="w-[320px] self-center"
                name="name"
                placeholder="Workplace name"
                type="text"
                required
              />
              <Input
                className="w-[320px] self-center"
                name="description"
                placeholder="Description"
                type="text"
                required
              />
              <Input
                className="w-[320px] self-center"
                name="address"
                placeholder="address"
                type="text"
                required
              />
              <Input
                className="w-[320px] self-center"
                name="city"
                placeholder="city"
                type="text"
                required
              />
              <Input
                className="w-[320px] self-center"
                name="images"
                placeholder="images"
                type="file"
                required
              />
              <Button variant="tertiary" size="sm">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
