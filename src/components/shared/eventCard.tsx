"use client";

import Link from "next/link";

import { API_URL } from "@/config/apiUrl";
import { IEvent } from "@/types/entity";

import { Button } from "../stories/button";

export const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <div className="flex flex-col bg-amber-400 rounded-md p-2 space-y-2">
      <h3 className="text-center">{event.title}</h3>
      <div className="bg-white p-2 rounded-lg space-y-2">
        <div className="flex justify-start space-x-2">
          <div className="font-semibold">
            <h5>Date & Time</h5>
            <h5>Workplace</h5>
            <h5>Address</h5>
          </div>
          <div>
            <h5>: {event.datetime}</h5>
            <h5>: {event.workplace}</h5>
            <h5>: {event.address}</h5>
          </div>
        </div>
        <h5 className="line-clamp-3">{event.description}</h5>
        <h5 className="text-end">Event by {event.user}</h5>
      </div>
      <Link href={`${API_URL}/events/${event.id}}`}>
        <Button className="w-full">More about this event →</Button>
      </Link>
    </div>
  );
};
