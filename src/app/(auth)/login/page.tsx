"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { loginAction } from "./action";

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
        <div className="flex items-center self-end p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="#fef4ce"
                fill-rule="nonzero"
                d="M17 4a2 2 0 0 1 2 2v2.035A3.5 3.5 0 0 1 18.5 15h-.788a8.54 8.54 0 0 1-3.208 3H17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.496A8.5 8.5 0 0 1 2 10.5V6a2 2 0 0 1 2-2zm2 6.085v.415c0 .868-.13 1.706-.372 2.495a1.5 1.5 0 0 0 .503-2.856z"
              />
            </g>
          </svg>
          <Link href="/">
            <h2 className="p-1 font-bold text-2xl text-[#fef4ce]">
              TempatNugas
            </h2>
          </Link>
        </div>

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
            {state?.status === "error" && (
              <p className="text-rose-400">{state?.message}</p>
            )}
          </form>

          {/* <form action={continueWithGoogleAction}>
            <Button disabled={pending} variant="tertiary" size="sm" className="w-full text-center overflow-hidden font-medium">
              Continue with Google
            </Button>
          </form> */}

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
