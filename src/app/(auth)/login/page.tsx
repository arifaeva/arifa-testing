"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { handleLogin, handleContinueWithGoogle } from "./action";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <main className="h-screen flex justify-center items-center bg-sky-400">
      <div className="w-[320px] bg-blue-900 p-5 rounded-lg [box-shadow:5px_5px_black] border-2 border-black space-y-4">
        <section>
          <h1 className="text-neutral-300">Login</h1>
          <p className="text-neutral-300">Welcome back!</p>
        </section>
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
          onClick={handleLogin}
        >
          Login
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
          Dont have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </section>
      </div>
    </main>
  );
}
