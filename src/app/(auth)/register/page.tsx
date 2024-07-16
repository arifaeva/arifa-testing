"use client";

import Link from "next/link";
import React, { useActionState } from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { continueWithGoogleAction, registerAction } from "./action";

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="h-screen flex justify-center items-center bg-sky-400">
      <div className="w-[320px] bg-blue-900 p-5 rounded-lg [box-shadow:5px_5px_black] border-2 border-black space-y-2">
        <section>
          <h1 className="text-neutral-300">Register</h1>
          <p className="text-neutral-300">Create an account to get started</p>
        </section>

        <form action={formAction} className="space-y-2">
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

        <section className="text-neutral-300">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </section>
      </div>
    </main>
  );
}
