// import { Header } from "@/components/shared/header";
import { API_URL } from "@/config/apiUrl";
import { IEvent, IWorkplace } from "@/types/entity";

import { EventCard } from "./components/event.card";
import { EventForm } from "./components/event.form";

export default async function EventPage() {
  const res = await fetch(`${API_URL}/events`);
  const { data: events } = (await res.json()) as { data: IEvent[] };

  const res_workplaces = await fetch(`${API_URL}/workplaces`);
  const workplaces = (await res_workplaces.json()) as IWorkplace[];

  return (
    <div className="bg-[#9ccb9a]">
      {/* <Header /> */}
      <div className="flex space-x-4 p-8 mx-24">
        {/* Section Make Event */}
        <div className="w-[20%] bg-[#fef4ce] p-3 space-y-5 rounded-md border-4 border-[#2e2d33] flex flex-col justify-between h-fit">
          <h1 className="text-center text-[#2e2d33]">Make Event</h1>
          <EventForm workplaces={workplaces} />
        </div>

        {/* Section Event Catalog */}
        <div className="w-[80%] bg-[#fef4ce] flex flex-col min-h-screen rounded-md space-y-4 p-4 border-4 border-[#2e2d33]">
          <section className="text-[#2e2d33] space-y-4">
            <h1 className="text-center">Upcoming Events</h1>
            <p className="text-center">
              Bored working alone? Join any upcoming event to work together!
            </p>
          </section>
          <div className="grid grid-cols-3 gap-4 p-3">
            {events.map((event) => {
              return <EventCard key={event._id} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
