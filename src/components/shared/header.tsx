import Avatar from "boring-avatars";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

import { serverAuth } from "@/libs/serverAuth";

import { Button } from "../stories/button";

export const Header = () => {
  const auth = serverAuth();

  async function handleSignOut() {
    "use server";
    cookies().delete("token");

    redirect("/");
  }

  return (
    <div className="text-[#2e2d33]">
      <header className="flex justify-between items-center p-2 border-b-4 border-[#2e2d33] bg-[#fef4ce] ">
        <Link href="/">
          <h2 className="p-3 font-bold text-2xl">TempatNugas</h2>
        </Link>
        <div className="flex items-center gap-6 font-semibold border-separate">
          <Link href="/" className="hover:text-[#e75c45]">
            <div>Home</div>
          </Link>
          <Link href="/events" className="hover:text-[#e75c45]">
            <div>Events</div>
          </Link>
          <Link href="/submit-workplace" className="hover:text-[#e75c45]">
            <div>Submit Workplace</div>
          </Link>
        </div>

        <div className="relative">
          {auth ? (
            <details>
              <summary className="flex items-center justify-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M1 3h22L12 22" />
                </svg>
                <h3>{auth?.name}</h3>
                <Avatar
                  size={40}
                  name={auth?.name}
                  variant="beam"
                  colors={[
                    "#2E2D33",
                    "#E75C45",
                    "#C1BCBC",
                    "#FEF4CE",
                    "#9CCB9A",
                  ]}
                />
              </summary>
              <form action={handleSignOut}>
                <Button className="absolute right-3">Sign Out</Button>
              </form>
            </details>
          ) : (
            <div className="space-x-3">
              <Link href="/login">
                <Button variant="secondary" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="tertiary" size="sm">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
