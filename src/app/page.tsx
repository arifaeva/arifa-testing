"use client";

import { Header } from "@/components/shared/header";
import { WorkplaceCard } from "@/components/shared/workplaceCard";
import { Input } from "@/components/stories/input";

export default function HomePage() {
  const workplaces = [
    {
      id: "1",
      name: "Krusty Krab",
      address: "Seberang Chum Bucket",
      city: "Bikini Bottom",
    },
    {
      id: "2",
      name: "Ichiraku Ramen",
      address: "Pinggir jalan",
      city: "Konoha",
    },
    {
      id: "3",
      name: "Pecel Lele Sentosa",
      address: "Lorem ipsum",
      city: "Temanggung",
    },
    {
      id: "4",
      name: "RM Padang",
      address: "AAAAAAAA",
      city: "Lorem ipsum",
    },
  ];

  return (
    <div className="bg-blue-900 space-y-5 pb-5">
      <Header />
      {/* Section Workplace Catalog */}
      <div className="w-[1300px] bg-white flex flex-col items-center m-auto min-h-screen rounded-md space-y-4 p-4 [box-shadow:5px_5px_orange]">
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
          {workplaces.map((workplace) => {
            return <WorkplaceCard key={workplace.id} workplace={workplace} />;
          })}
        </div>
      </div>
    </div>
  );
}
