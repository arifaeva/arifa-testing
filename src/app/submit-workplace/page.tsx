"use client";

import Image from "next/image";
import React, { useActionState } from "react";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
import { InputFile } from "@/components/stories/input-file";

import { submitWorkplaceAction } from "./action";

export default function DashboardPage() {
  const [state, formAction, pending] = useActionState(
    submitWorkplaceAction,
    null
  );

  return (
    <div className="bg-[#9ccb9a] h-screen flex flex-col justify-between">
      <Header />
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
                <InputFile
                  className="w-[320px] self-center"
                  name="images"
                  placeholder="Choose workplace images"
                  required
                />
                {/* <Input
                  className="w-[320px] self-center"
                  name="images"
                  placeholder="images"
                  type="file"
                  required
                /> */}
                <input name="authorId" value="authorId" type="hidden" />
                <Button disabled={pending} variant="tertiary" size="sm">
                  Submit
                </Button>
                {state?.message && <p>{state.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
