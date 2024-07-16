"use client";

import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
import { API_URL } from "@/config/apiUrl";

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-between space-y-3 p-3">
        <form>
          <Input
            className="w-[320px] self-center"
            name="search workplace"
            placeholder="Search workplace..."
            type="text"
          />
        </form>
        {/* Section Add Workplace */}
        <div className="bg-pink-300 p-5 rounded-md space-y-3">
          <h1 className="text-center">Submit Workplace</h1>
          <section>
            <p>Have workplace recommendation?</p>
            <p>Share with us!</p>
          </section>
          <form className="flex flex-col space-y-2">
            <Input
              className="w-[320px] self-center"
              name="name"
              placeholder="Workplace name"
              type="text"
              required
            />
            <Input
              className="w-[320px] self-center"
              name="description"
              placeholder="Description"
              type="text"
              required
            />
            <Input
              className="w-[320px] self-center"
              name="address"
              placeholder="address"
              type="text"
              required
            />
            <Input
              className="w-[320px] self-center"
              name="city"
              placeholder="city"
              type="text"
              required
            />
            <Input
              className="w-[320px] self-center"
              name="images"
              placeholder="images"
              type="file"
              required
            />
            <Button variant="primary" size="sm">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-3">
        {/* Section Event */}
        <div className="w-[20%] bg-pink-300 p-4 space-y-5 rounded-md">
          <h1 className="text-center">Events</h1>
          <div>
            <div className="space-y-2">
              <section>
                <p>Bored working alone?</p>
                <p>Join any upcoming event to work together!</p>
              </section>
              <div className="flex flex-col overflow-auto h-72 space-y-2">
                {/* Contoh Event 1 */}
                <div className="flex flex-col bg-indigo-400 rounded-md p-3">
                  <h3>Bekerja bersama Spongebob</h3>
                  <h4>
                    Mari WFC bersama saya, nanti saya traktir air mineral. Btw
                    nanti saya akan datang pakai topi sombrero dan baju
                    kotak-kotak
                  </h4>
                  <div className="flex justify-start space-x-2">
                    <div className="font-semibold">
                      <h4>Date & Time</h4>
                      <h4>Workplace</h4>
                      <h4>Address</h4>
                    </div>
                    <div>
                      <h4>: 32 Juli 2024 10:00 WIB</h4>
                      <h4>: Krusty Krab</h4>
                      <h4>: Seberang Chum Bucket</h4>
                    </div>
                  </div>
                  <h5 className="self-end">Event by Spongebob Squarepants</h5>
                </div>
                {/* Contoh Event 2 */}
                <div className="flex flex-col bg-indigo-400 rounded-md p-3">
                  <h3>WFC with Hokage</h3>
                  <h4>
                    Yuk WFC sama aku! Di Ichiraku ramen suka dikasih bonus kuah
                    lho gais
                  </h4>
                  <div className="flex justify-start space-x-2">
                    <div className="font-semibold">
                      <h4>Date & Time</h4>
                      <h4>Workplace</h4>
                      <h4>Address</h4>
                    </div>
                    <div>
                      <h4>: 26 November 2024 13:00 WIB</h4>
                      <h4>: Ichiraku Ramen</h4>
                      <h4>: Jl. Bunga Melati</h4>
                    </div>
                  </div>
                  <h5 className="self-end">Event by Uzumaki Naruto</h5>
                </div>
              </div>
            </div>
          </div>
          {/* Form Buat Event */}
          <form className="space-y-2">
            <p>Make your own event!</p>
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
            <Button variant="primary" size="sm" className="w-full">
              Make Event!
            </Button>
          </form>
        </div>

        {/* Section Workplace Catalog */}
        <div className="w-[80%] bg-pink-300 flex flex-col min-h-screen rounded-md space-y-4 p-4">
          <h1 className="text-center">Catalog</h1>
          <div className="grid grid-cols-4 gap-2 p-3">
            <div className="bg-indigo-400 h-fit rounded-md">
              <Image
                className="bg-cover rounded-md"
                src={`/assets/sample-1.png`}
                width={500}
                height={100}
                alt="Sample workplace 1"
              />
              <div className="flex justify-between items-center p-2">
                <section>
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
            <div className="bg-indigo-400 h-32 rounded-md">Workplace 2</div>
            <div className="bg-indigo-400 h-32 rounded-md">Workplace 3</div>
            <div className="bg-indigo-400 h-32 rounded-md">Workplace 4</div>
            <div className="bg-indigo-400 h-32 rounded-md">Workplace 5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
