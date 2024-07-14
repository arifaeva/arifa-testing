import Link from "next/link";
import React from "react";

import { Button } from "./button";

interface User {
  name: string;
}

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-black">
      <div className="flex gap-2 items-center w-[400px]">
        <Link href="/">
          <div className="font-semibold text-lg">TempatNugas</div>
        </Link>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <div>Arifa</div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      )}
    </header>
  );
};
