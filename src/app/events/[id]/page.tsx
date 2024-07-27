import moment from "moment";
import Image from "next/image";

// import { Header } from "@/components/shared/header";
import { API_URL } from "@/config/apiUrl";
import { IEvent } from "@/types/entity";

export default async function EventSinglePage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${API_URL}/events/${params.id}`);
  const event = (await res.json()) as IEvent;

  return (
    <div className="bg-[#9ccb9a] min-h-screen flex flex-col justify-between space-y-3">
      {/* <Header /> */}
      <div className="bg-[#fef4ce] w-[800px] m-auto p-8 space-y-12 rounded-lg [box-shadow:5px_5px_#2e2d33] border-4 border-[#2e2d33] text-[#2e2d33]">
        <div className="flex justify-items-start items-center gap-6">
          <Image
            className="bg-cover"
            src={`/assets/icon-3.png`}
            width={250}
            height={50}
            alt="Picture for login page"
          />
          <div className="space-y-3">
            <h2 className="font-bold">{event.title}</h2>
            <div className="flex justify-between gap-3">
              <div className="w-24 font-semibold">
                <h4>Held by</h4>
                <h4>Date & Time</h4>
                <h4>Workplace</h4>
                <h4>Address</h4>
              </div>
              <div className="flex flex-col w-80">
                <h4>: {event.userId.name}</h4>
                <h4>: {moment(event.dateTime).format("LLL")}</h4>
                <h4>: {event.workplaceId.name}</h4>
                <h4>: {event.workplaceId.address}</h4>
              </div>
            </div>
          </div>
        </div>
        <h4>{event.description}</h4>
      </div>
      <div></div>
    </div>
  );
}
