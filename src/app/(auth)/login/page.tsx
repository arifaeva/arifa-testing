"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { continueWithGoogleAction, loginAction } from "./action";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <main className="h-screen grid grid-cols-2 justify-center items-center">
      <div className="bg-[#fef4ce] h-screen flex justify-center items-center">
        <Image
          className=""
          src={`/assets/icon-1.png`}
          width={400}
          height={100}
          alt="Picture for login page"
        />
      </div>

      <div className="bg-[#e75c45] h-screen flex flex-col justify-between items-center">
        <h2 className="self-end p-3 font-bold text-2xl text-[#fef4ce]">
          TempatNugas
        </h2>

        <div className="w-[400px] bg-[#fef4ce] p-5 rounded-lg [box-shadow:5px_5px_#2e2d33] border-2 border-[#2e2d33] space-y-3 text-[#2e2d33]">
          <section>
            <h2>Hello,</h2>
            <h1>Welcome back!</h1>
            <p>Good to see you again</p>
          </section>

          <form action={formAction} className="space-y-3">
            <Input name="email" placeholder="Email" type="email" required />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <Button
              disabled={pending}
              variant="secondary"
              size="sm"
              className="w-full text-center overflow-hidden font-medium"
            >
              Login
            </Button>
            {state?.message && <p>{state.message}</p>}
          </form>

          <form action={continueWithGoogleAction}>
            <Button
              disabled={pending}
              variant="tertiary"
              size="sm"
              className="w-full text-center overflow-hidden font-medium"
            >
              Continue with Google
            </Button>
          </form>

          <section className="">
            Dont have an account?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </section>
        </div>
        <div></div>
      </div>
    </main>
  );
}
