import Link from "next/link";
import React from "react";

import { Button } from "../stories/button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 border-b-2 border-black bg-blue-950">
      <div className="flex gap-2 items-center w-[400px]">
        <Link href="/">
          <h2 className="p-3 font-bold text-2xl bg-gradient-to-r from-orange-600 via-neutral-300 to-blue-900 bg-clip-text text-transparent">
            TempatNugas
          </h2>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="secondary" size="sm">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="tertiary" size="sm">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
};
