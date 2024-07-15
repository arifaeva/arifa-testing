"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { handleRegister, handleContinueWithGoogle } from "./action";

export default function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <main className="h-screen flex justify-center items-center bg-sky-400">
      <div className="w-[320px] bg-blue-900 p-5 rounded-lg [box-shadow:5px_5px_black] border-2 border-black space-y-4">
        <section>
          <h1 className="text-neutral-300">Register</h1>
          <p className="text-neutral-300">Create an account to get started</p>
        </section>
        <Input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <Button
          variant="secondary"
          size="sm"
          className="w-full text-center overflow-hidden font-medium"
          onClick={handleRegister}
        >
          Register
        </Button>
        <Button
          variant="tertiary"
          size="sm"
          className="w-full text-center overflow-hidden font-medium"
          onClick={handleContinueWithGoogle}
        >
          Continue with Google
        </Button>
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
