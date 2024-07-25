"use client";

import Image from "next/image";
import React, { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { submitWorkplaceAction } from "./action";

export default function DashboardPage() {
  const [, formAction, pending] = useActionState(submitWorkplaceAction, null);

  return (
    <div className="bg-[#9ccb9a] flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        {/* Section Add Workplace */}
        <div className=" grid grid-cols-2 justify-between items-center bg-[#fef4ce] p-5 rounded-lg border-4 border-[#2e2d33] [box-shadow:5px_5px_#2e2d33] space-x-2">
          <Image
            className="h-fit m-auto"
            src={`/assets/icon-4.png`}
            width={300}
            height={100}
            alt="Picture for submit workplace page"
          />
          <div className="flex justify-center items-center">
            <div className="bg-[#9ccb9a] p-5 rounded-md space-y-4 text-[#2e2d33] border-4 border-[#2e2d33]">
              <h1 className="text-center">Submit Workplace</h1>
              <section className="text-center">
                <p>Have any workplace recommendation?</p>
                <p>Share with us!</p>
              </section>
              <form action={formAction} className="flex flex-col space-y-3">
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
                  name="foodPrice"
                  placeholder="Food price range"
                  type="text"
                  required
                />
                <Input
                  className="w-[320px] self-center"
                  name="address"
                  placeholder="Address"
                  type="text"
                  required
                />
                <Input
                  className="w-[320px] self-center"
                  name="city"
                  placeholder="City"
                  type="text"
                  required
                />
                <Input
                  className="w-[320px] self-center"
                  name="images"
                  placeholder="Choose workplace images"
                  type="file"
                  required
                />
                <Button
                  disabled={pending}
                  variant="tertiary"
                  size="sm"
                  className="w-[320px] self-center"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
