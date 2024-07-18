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
        <div className="w-[20%] bg-white p-4 space-y-5 rounded-md [box-shadow:5px_5px_orange] flex flex-col justify-start h-fit">
          <h1 className="text-center text-blue-900">Make Event</h1>

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
            <h1 className="text-center">Upcoming Events</h1>
            <p className="text-center">
              Bored working alone? Join any upcoming event to work together!
            </p>
          </section>
          <div className="grid grid-cols-3 gap-4 p-3">
            {/* Contoh Event 1 */}
            <div className="flex flex-col bg-amber-400 rounded-md p-2 space-y-2">
              <h3 className="text-center">Bekerja bersama Spongebob</h3>
              <div className="bg-white p-2 rounded-lg space-y-2">
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
                <h5 className="line-clamp-3">
                  Mari WFC bersama saya, nanti saya traktir air mineral. Btw
                  nanti saya akan datang pakai topi sombrero dan baju
                  kotak-kotak
                </h5>
                <h5 className="text-end">Event by Spongebob Squarepants</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
