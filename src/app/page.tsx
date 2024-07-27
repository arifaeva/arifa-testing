import SearchInput from "@/components/shared/input.search";
import { LandingPage } from "@/components/shared/landingPage";
import { API_URL } from "@/config/apiUrl";
import { serverAuth } from "@/libs/serverAuth";
import { IWorkplace } from "@/types/entity";

export default async function HomePage() {
  const res = await fetch(`${API_URL}/workplaces`);
  const workplaces = (await res.json()) as IWorkplace[];
  const auth = serverAuth();

  return (
    <div className="bg-[#9ccb9a] py-5 space-y-5">
      {auth ? <div></div> : <LandingPage />}
      {/* Section Workplace Catalog */}
      <div className="mx-24 bg-[#fef4ce] border-4 border-[#2e2d33] flex flex-col items-center min-h-screen rounded-md space-y-4 p-4">
        <section className="text-[#2e2d33]">
          <h1 className="text-center">Catalog</h1>
          <p className="text-center">Find the best place to work!</p>
        </section>
        {/* Pass workplaces data to client component */}
        <SearchInput workplaces={workplaces} />
      </div>
    </div>
  );
}
