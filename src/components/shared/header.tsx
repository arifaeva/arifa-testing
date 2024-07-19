import Avatar from "boring-avatars";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="">
      <header className="flex justify-between items-center p-2 border-b-2 border-white bg-white ">
        <Link href="/">
          <h2 className="p-3 font-bold text-2xl bg-gradient-to-r from-orange-600 to-blue-900 bg-clip-text text-transparent">
            TempatNugas
          </h2>
        </Link>

        <div className="flex items-center gap-6 font-semibold text-blue-900 border-separate">
          <Link href="/" className="hover:text-orange-400">
            <div>Home</div>
          </Link>
          <Link href="/events" className="hover:text-orange-400">
            <div>Events</div>
          </Link>
          <Link href="/submit-workplace" className="hover:text-orange-400">
            <div>Submit Workplace</div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <h3 className="text-blue-900">Hello, Narumi Gen!</h3>
          <Avatar
            size={40}
            name="Narumi Gen"
            variant="beam"
            colors={["#0A0310", "#00037E", "#E6DFDF", "#FFE138", "#FF7D10"]}
          />
        </div>
      </header>
    </div>
  );
};
