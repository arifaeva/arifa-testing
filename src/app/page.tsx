"use client";

import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
import { API_URL } from "@/config/apiUrl";

export default function HomePage() {
  return (
    <div className="bg-blue-900">
      <Header />
      <div className="flex space-x-4 p-3">
        {/* Section Event */}
        <div className="w-[20%] bg-white p-4 space-y-5 rounded-md [box-shadow:5px_5px_orange] flex flex-col justify-evenly">
          <h1 className="text-center text-blue-900">Events</h1>
          <div>
            <div className="space-y-2 bg-white p-2 rounded-md text-blue-900">
              <section className="text-center">
                <h3 className="font-bold">Upcoming Events</h3>
                <h4>Join any upcoming event to work together!</h4>
              </section>
              <div className="flex flex-col overflow-auto h-96 space-y-2 rounded-md text-blue-900">
                {/* Contoh Event 1 */}
                <div className="flex flex-col bg-amber-400 rounded-md p-2 space-y-2">
                  <h3 className="text-center">Bekerja bersama Spongebob</h3>
                  <div className="bg-white p-2 rounded-lg space-y-2">
                    <h5>
                      Mari WFC bersama saya, nanti saya traktir air mineral. Btw
                      nanti saya akan datang pakai topi sombrero dan baju
                      kotak-kotak
                    </h5>
                    <div className="flex justify-start space-x-2">
                      <div className="font-semibold">
                        <h5>Date & Time</h5>
                        <h5>Workplace</h5>
                        <h5>Address</h5>
                      </div>
                      <div>
                        <h5>: 32 Juli 2024 10:00 WIB</h5>
                        <h5>: Krusty Krab</h5>
                        <h5>: Seberang Chum Bucket</h5>
                      </div>
                    </div>
                    <h5 className="text-end">Event by Spongebob Squarepants</h5>
                  </div>
                </div>

                {/* Contoh Event 2 */}
                <div className="flex flex-col bg-amber-400 rounded-md p-2 space-y-2">
                  <h3 className="text-center">WFC with Hokage</h3>
                  <div className="bg-white p-2 rounded-lg space-y-2">
                    <h5>Yuk WFC sama aku!</h5>
                    <div className="flex justify-start space-x-2">
                      <div className="font-semibold">
                        <h5>Date & Time</h5>
                        <h5>Workplace</h5>
                        <h5>Address</h5>
                      </div>
                      <div>
                        <h5>: 21 November 2024 13:00 WIB</h5>
                        <h5>: Ichiraku Ramen</h5>
                        <h5>: Di pinggir jalan</h5>
                      </div>
                    </div>
                    <h5 className="text-end">Event by Uzumaki Naruto</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form Buat Event */}
          <form className="space-y-2 bg-blue-900 p-3 rounded-md">
            <h3 className="text-white text-center">Make your own event!</h3>
            <Input
              name="title"
              placeholder="Event Title"
              type="text"
              required
            />
            <Input
              name="description"
              placeholder="Description"
              type="text"
              required
            />
            <Input
              name="date&time"
              placeholder="Date & Time"
              type="datetime-local"
              required
            />
            <Input
              name="event-workplace"
              placeholder="Workplace name"
              type="text"
              required
            />
            <Input
              name="event-address"
              placeholder="Workplace address"
              type="text"
              required
            />
            <Button variant="tertiary" size="sm" className="w-full">
              Make Event!
            </Button>
          </form>
        </div>

        {/* Section Workplace Catalog */}
        <div className="w-[80%] bg-white flex flex-col min-h-screen rounded-md space-y-4 p-4 [box-shadow:5px_5px_orange]">
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
    </div>
  );
}
