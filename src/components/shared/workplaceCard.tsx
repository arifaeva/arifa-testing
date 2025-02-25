import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/apiUrl";
// import { API_URL } from "@/config/apiUrl";
import { IWorkplace } from "@/types/entity";

import { Button } from "../stories/button";

export const WorkplaceCard = ({ workplace }: { workplace: IWorkplace }) => {
  return (
    <div className="bg-[#e75c45] h-fit p-3 rounded-md border-2 border-[#2e2d33] [box-shadow:5px_5px_#2e2d33]">
      <Image
        className="bg-cover rounded-md h-[320px] w-fit"
        src={`${API_URL}/public/${workplace.file}`}
        width={500}
        height={100}
        alt={workplace.name}
      />
      <div className="flex justify-between items-center p-2">
        <section className="text-[#2e2d33] w-fit">
          <h3 className="line-clamp-1">{workplace.name}</h3>
          <h4 className="line-clamp-1">{workplace.address}</h4>
          <h4>{workplace.city}</h4>
        </section>
        <Link href={`/${workplace._id}`}>
          <Button variant="quartenary" size="sm" className="tracking-tighter">
            Detail
          </Button>
        </Link>
      </div>
    </div>
  );
};
