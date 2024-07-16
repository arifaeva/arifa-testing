"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { continueWithGoogleAction, registerAction } from "./action";

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="h-screen grid grid-cols-2 justify-center items-center bg-sky-400">
      <div className="bg-slate-500 h-screen">
        <Image
          className="bg-cover"
          src={`/assets/auth-2.jpg`}
          width={1000}
          height={800}
          alt="Picture for register page"
        />
      </div>
      <div className="bg-blue-900 h-screen flex flex-col justify-between items-center">
        <h2 className="self-end p-3 font-bold text-2xl bg-gradient-to-r from-orange-600 via-neutral-300 to-blue-900 bg-clip-text text-transparent">
          TempatNugas
        </h2>
        <div className="w-[400px] bg-white p-5 rounded-lg [box-shadow:5px_5px_darkorange] border-2 border-orange-400 space-y-3">
          <section>
            <h2 className="text-blue-900">Hello,</h2>
            <h1 className="text-blue-900">Welcome aboard!</h1>
            <p className="text-blue-900">Create an account to get started</p>
          </section>

          <form action={formAction} className="space-y-3">
            <Input name="name" placeholder="Name" required />
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
              Register
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

          <section className="text-blue-900">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </section>
        </div>
        <div></div>
      </div>
    </main>
  );
}
