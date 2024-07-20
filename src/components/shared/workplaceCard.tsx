"use client";

import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/apiUrl";
import { IWorkplace } from "@/types/entity";

import { Button } from "../stories/button";

export const WorkplaceCard = ({ workplace }: { workplace: IWorkplace }) => {
  return (
    <div className="bg-[#e75c45] h-fit p-3 rounded-md border-2 border-[#2e2d33] [box-shadow:5px_5px_#2e2d33]">
      <Image
        className="bg-cover rounded-sm"
        src={`/assets/sample-1.jpeg`}
        width={500}
        height={100}
        alt="Sample workplace 1"
      />
      <div className="flex justify-between items-center p-2">
        <section className="text-[#2e2d33]">
          <h3 className="line-clamp-1">{workplace.name}</h3>
          <h4 className="line-clamp-1">{workplace.address}</h4>
          <h4>{workplace.city}</h4>
        </section>
        <Link href={`${API_URL}/${workplace._id}}`}>
          <Button variant="quartenary" size="sm">
            See more
          </Button>
        </Link>
      </div>
    </div>
  );
};
