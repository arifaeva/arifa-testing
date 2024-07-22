import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/stories/button";
import { IWorkplace } from "@/types/entity";

export const WorkplaceCardAdmin = ({
  workplace,
}: {
  workplace: IWorkplace;
}) => {
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
        <section className="text-[#2e2d33] w-fit">
          <h3 className="line-clamp-1">{workplace.name}</h3>
          <h4 className="line-clamp-1">{workplace.address}</h4>
          <h4>{workplace.city}</h4>
          <div className="flex space-x-3">
            {workplace.isVerified === true ? (
              <h4>Verified</h4>
            ) : (
              <h4>Not verified</h4>
            )}
            {workplace.isPublished === true ? (
              <h4>Published</h4>
            ) : (
              <h4>Not published</h4>
            )}
          </div>
        </section>
        <Link href={`/admin/${workplace._id}`}>
          <Button variant="quartenary" size="sm" className="tracking-tighter">
            Detail
          </Button>
        </Link>
      </div>
    </div>
  );
};
