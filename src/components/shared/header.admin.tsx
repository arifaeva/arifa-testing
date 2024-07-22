import Avatar from "boring-avatars";
import Link from "next/link";
import React from "react";

import { Button } from "../stories/button";

// Ini versi kalo gaada data user

// export const Header = () => {
//   return (
//     <div className="text-[#2e2d33]">
//       <header className="flex justify-between items-center p-2 border-b-4 border-[#2e2d33] bg-[#fef4ce]">
//         <Link href="/">
//           <h2 className="p-3 font-bold text-2xl">TempatNugas</h2>
//         </Link>

//         <div className="flex items-center gap-4">
//           <Link href="/login">
//             <Button variant="secondary" size="sm">
//               Sign in
//             </Button>
//           </Link>
//           <Link href="/register">
//             <Button variant="tertiary" size="sm">
//               Register
//             </Button>
//           </Link>
//         </div>
//       </header>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <div className="text-[#2e2d33]">
      <header className="flex justify-between items-center p-2 border-b-4 border-[#2e2d33] bg-[#fef4ce]">
        <Link href="/">
          <h2 className="p-3 font-bold text-2xl">TempatNugas</h2>
        </Link>

        <div className="flex items-center gap-6 font-semibold border-separate">
          <Link href="/admin" className="hover:text-[#e75c45]">
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
              <h3>Hello, Hoshina Soshiro!</h3>
              <Avatar
                size={40}
                name="Okkotsu Yuta"
                variant="beam"
                colors={["#2E2D33", "#E75C45", "#C1BCBC", "#FEF4CE", "#9CCB9A"]}
              />
            </summary>
            <Button className="absolute right-3">Sign Out</Button>
          </details>
        </div>
      </header>
    </div>
  );
};
