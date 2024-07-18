"use client";

import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
import { API_URL } from "@/config/apiUrl";

export default function HomePage() {
  return (
    <div className="bg-blue-900 space-y-5 pb-5">
      <Header />
      {/* Section Workplace Catalog */}
      <div className="w-[1100px] bg-white flex flex-col items-center m-auto min-h-screen rounded-md space-y-4 p-4 [box-shadow:5px_5px_orange]">
        <section className="text-blue-900">
          <h1 className="text-center">Catalog</h1>
          <p className="text-center">Find where you wanna work!</p>
        </section>
        <Input
          name="search workplace"
          placeholder="Search workplace..."
          type="text"
          required
          className="self-center w-[400px]"
        />
        <div className="grid grid-cols-4 gap-4 p-3">
          {/* Sample 1 */}
          <div className="bg-white h-fit rounded-md border-2 border-blue-900 [box-shadow:5px_5px_rgb(23,37,84)]">
            <Image
              className="bg-cover rounded-sm"
              src={`/assets/auth-4.jpg`}
              width={500}
              height={100}
              alt="Sample workplace 1"
            />
            <div className="flex justify-between items-center p-2">
              <section className="text-blue-900">
                <h3>Nama workplace</h3>
                <h4>Alamat workplace</h4>
              </section>
              <Link href={`${API_URL}/1}`}>
                <Button variant="primary" size="sm">
                  See more
                </Button>
              </Link>
            </div>
          </div>

          {/* Sample 2 */}
          <div className="bg-white h-fit rounded-md border-2 border-blue-900 [box-shadow:5px_5px_rgb(23,37,84)]">
            <Image
              className="bg-cover rounded-sm"
              src={`/assets/auth-5.jpg`}
              width={500}
              height={100}
              alt="Sample workplace 2"
            />
            <div className="flex justify-between items-center p-2">
              <section className="text-blue-900">
                <h3>Nama workplace</h3>
                <h4>Alamat workplace</h4>
              </section>
              <Link href={`${API_URL}/2}`}>
                <Button variant="primary" size="sm">
                  See more
                </Button>
              </Link>
            </div>
          </div>

          {/* Sample 3 */}
          <div className="bg-white h-fit rounded-md border-2 border-blue-900 [box-shadow:5px_5px_rgb(23,37,84)]">
            <Image
              className="bg-cover rounded-sm"
              src={`/assets/auth-6.jpg`}
              width={500}
              height={100}
              alt="Sample workplace 3"
            />
            <div className="flex justify-between items-center p-2">
              <section className="text-blue-900">
                <h3>Nama workplace</h3>
                <h4>Alamat workplace</h4>
              </section>
              <Link href={`${API_URL}/3}`}>
                <Button variant="primary" size="sm">
                  See more
                </Button>
              </Link>
            </div>
          </div>

          {/* Sample 4 */}
          <div className="bg-white h-fit rounded-md border-2 border-blue-900 [box-shadow:5px_5px_rgb(23,37,84)]">
            <Image
              className="bg-cover rounded-sm"
              src={`/assets/auth-7.jpg`}
              width={500}
              height={100}
              alt="Sample workplace 4"
            />
            <div className="flex justify-between items-center p-2">
              <section className="text-blue-900">
                <h3>Nama workplace</h3>
                <h4>Alamat workplace</h4>
              </section>
              <Link href={`${API_URL}/4}`}>
                <Button variant="primary" size="sm">
                  See more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
