"use client";

import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/apiUrl";
import { IWorkplace } from "@/types/entity";

import { Button } from "../stories/button";

export const WorkplaceCard = ({ workplace }: { workplace: IWorkplace }) => {
  return (
    <div className="bg-white h-fit rounded-md border-2 border-blue-900 [box-shadow:5px_5px_rgb(23,37,84)]">
      <Image
        className="bg-cover rounded-sm"
        src={`/assets/auth-5.jpg`}
        width={500}
        height={100}
        alt="Sample workplace 1"
      />
      <div className="flex justify-between items-center p-2">
        <section className="text-blue-900">
          <h3>{workplace.name}</h3>
          <h4>{workplace.address}</h4>
          <h4>{workplace.city}</h4>
        </section>
        <Link href={`${API_URL}/${workplace.id}}`}>
          <Button variant="primary" size="sm">
            See more
          </Button>
        </Link>
      </div>
    </div>
  );
};
