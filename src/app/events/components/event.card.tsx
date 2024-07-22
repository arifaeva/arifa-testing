import Link from "next/link";

import { API_URL } from "@/config/apiUrl";
import { IEvent } from "@/types/entity";

import { Button } from "../../../components/stories/button";

export const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <div className="flex flex-col bg-[#fef4ce] border-2 border-[#2e2d33] rounded-md p-4 space-y-2 [box-shadow:5px_5px_#2e2d33]">
      <div className="flex justify-between gap-2">
        <div className="bg-[#2e2d33] rounded-md p-2 w-full">
          <h3 className="text-center text-[#fef4ce] line-clamp-1">
            {event.title}
          </h3>
        </div>
        <Link href={`${API_URL}/events/${event._id}`} className="self-center">
          <Button variant="tertiary" className="w-full p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M8 19V5l11 7z" />
            </svg>
          </Button>
        </Link>
      </div>
      <div className="p-2 rounded-lg space-y-2">
        <div className="flex justify-start">
          <div className="font-semibold">
            <h5>Date & Time</h5>
            <h5>Workplace</h5>
            <h5>Address</h5>
          </div>
          <div>
            <h5>: {event.datetime}</h5>
            <h5>: {event.workplace}</h5>
            <h5 className="line-clamp-1">: {event.address}</h5>
          </div>
        </div>
        <h5 className="line-clamp-3">{event.description}</h5>
        <h5 className="text-end">Event by {event.user}</h5>
      </div>
    </div>
  );
};
