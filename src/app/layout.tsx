import "@/styles/globals.css";

import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";

import { Header } from "@/components/shared/header";

const fontSans = FontSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TempatNugas",
  description: "TempatNugas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased`}>
        <Header />
        <>{children}</>
      </body>
    </html>
  );
}
