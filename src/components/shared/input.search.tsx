"use client";

import { useMemo, useState } from "react";

import { WorkplaceCard } from "@/components/shared/workplaceCard";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
import { IWorkplace } from "@/types/entity";

interface SearchInputValue {
  workplaces: IWorkplace[];
}

export default function SearchInput({ workplaces }: SearchInputValue) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const filteredWorkplaces = useMemo(() => {
    return workplaces.filter(
      (workplace) =>
        (workplace.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          workplace.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (cityFilter
          ? workplace.city.toLowerCase() === cityFilter.toLowerCase()
          : true)
    );
  }, [searchQuery, cityFilter, workplaces]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleCityFilter(city: string) {
    setCityFilter(city);
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form>
        <Input
          name="search workplace"
          placeholder="Search workplace by name or city..."
          type="text"
          required
          className="self-center w-[400px]"
          value={searchQuery}
          onChange={handleSearch}
        />
      </form>

      <div className="flex space-x-2">
        <Button
          variant={cityFilter === "" ? "primary" : "secondary"}
          size="md"
          onClick={() => handleCityFilter("")}
        >
          All Cities
        </Button>
        {Array.from(new Set(workplaces.map((workplace) => workplace.city))).map(
          (city) => (
            <Button
              key={city}
              variant={cityFilter === city ? "primary" : "secondary"}
              size="md"
              onClick={() => handleCityFilter(city)}
            >
              {city}
            </Button>
          )
        )}
      </div>

      <div className="grid grid-cols-4 gap-4 p-3">
        {filteredWorkplaces.map((workplace) => (
          <WorkplaceCard key={workplace._id} workplace={workplace} />
        ))}
      </div>
    </div>
  );
}
