import { Header } from "@/components/shared/header";
// import { LandingPage } from "@/components/shared/landingPage";
import { WorkplaceCard } from "@/components/shared/workplaceCard";
import { Input } from "@/components/stories/input";
// import { API_URL } from "@/config/apiUrl";
import { IWorkplace } from "@/types/entity";

export default async function HomePage() {
  const workplaces: IWorkplace[] = [
    {
      _id: "12345SDF",
      name: "Krusty Krab",
      address: "Seberang Chum Bucket",
      city: "Bikini Bottom",
    },
    {
      _id: "2",
      name: "Ichiraku Ramen",
      address: "Pinggir jalan",
      city: "Konoha",
    },
    {
      _id: "3",
      name: "Pecel Lele Sentosa",
      address: "Lorem ipsum",
      city: "Temanggung",
    },
    {
      _id: "4",
      name: "RM Padang",
      address: "AAAAAAAA",
      city: "Lorem ipsum",
    },
  ];

  // const res = await fetch(`${API_URL}/workplaces`);
  // const workplaces = (await res.json()) as IWorkplace[];

  return (
    <div className="bg-[#9ccb9a] space-y-5 pb-5">
      <Header />
      {/* <LandingPage /> */}
      {/* Section Workplace Catalog */}
      <div className="w-[1500px] bg-[#fef4ce] border-4 border-[#2e2d33] flex flex-col items-center m-auto min-h-screen rounded-md space-y-4 p-4">
        <section className="text-[#2e2d33]">
          <h1 className="text-center">Catalog</h1>
          <p className="text-center">Find the best place to work!</p>
        </section>
        <form>
          <Input
            name="search workplace"
            placeholder="Search workplace..."
            type="text"
            required
            className="self-center w-[400px]"
          />
        </form>
        <div className="grid grid-cols-4 gap-4 p-3">
          {workplaces.map((workplace) => {
            return <WorkplaceCard key={workplace._id} workplace={workplace} />;
          })}
        </div>
      </div>
    </div>
  );
}
