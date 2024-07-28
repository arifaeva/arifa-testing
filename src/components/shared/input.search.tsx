"use client";

import { useMemo, useState } from "react";

import { WorkplaceCard } from "@/components/shared/workplaceCard";
import { Input } from "@/components/stories/input";
import { IWorkplace } from "@/types/entity";

interface SearchInputValue {
  workplaces: IWorkplace[];
}

export default function SearchInput({ workplaces }: SearchInputValue) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkplaces = useMemo(() => {
    return workplaces.filter(
      (workplace) =>
        workplace.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workplace.city.toLowerCase().includes(searchQuery.toLowerCase()) // Add this line to include city in the search
    );
  }, [searchQuery, workplaces]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form>
        <Input
          name="search workplace"
          placeholder="Search workplace by name..."
          type="text"
          required
          className="self-center w-[400px]"
          value={searchQuery}
          onChange={handleSearch}
        />
      </form>
      <div className="grid grid-cols-4 gap-4 p-3">
        {filteredWorkplaces.map((workplace) => (
          <WorkplaceCard key={workplace._id} workplace={workplace} />
        ))}
      </div>
    </div>
  );
}
