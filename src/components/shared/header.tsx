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
        <div className="flex items-center justify-items-start space-x-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="#2e2d33"
                fill-rule="nonzero"
                d="M17 4a2 2 0 0 1 2 2v2.035A3.5 3.5 0 0 1 18.5 15h-.788a8.54 8.54 0 0 1-3.208 3H17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.496A8.5 8.5 0 0 1 2 10.5V6a2 2 0 0 1 2-2zm2 6.085v.415c0 .868-.13 1.706-.372 2.495a1.5 1.5 0 0 0 .503-2.856z"
              />
            </g>
          </svg>
          <Link href="/">
            <h2 className="p-1.5 font-bold text-2xl">TempatNugas</h2>
          </Link>
        </div>
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
