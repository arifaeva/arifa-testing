"use client";

import { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { submitEventAction } from "./event.action";

interface IWorkplace {
  _id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  foodPrice: string;
  file: string;
  authorId: string;
  isVerified: boolean;
  isPublished: boolean;
}

export const EventForm = ({ workplaces }: { workplaces: IWorkplace[] }) => {
  const [state, formAction, pending] = useActionState(submitEventAction, null);

  return (
    <form
      action={formAction}
      className=" bg-[#9ccb9a] p-4 flex flex-col gap-2 rounded-md border-4 border-[#2e2d33]"
    >
      <h3 className="text-[#2e2d33] text-center tracking-tight">
        Arrange and announce your own event!
      </h3>
      <div className="space-y-3">
        <Input name="title" placeholder="Event Title" type="text" required />
        {/* <Textarea name="description" placeholder="Description" required /> */}
        <Input
          name="description"
          placeholder="Event Description"
          type="text"
          required
        />
        <Input
          name="dateTime"
          placeholder="Date & Time"
          type="datetime-local"
          required
        />
        <select
          required
          name="workplaceId"
          className="w-full rounded-md border-2 border-[#2e2d33] bg-[#fef4ce] [box-shadow:5px_5px_#2e2d33] px-3 py-2 text-sm ring-offset-background outline-[#2e2d33] file:border-0 placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {/* <option value="" disabled selected hidden>
            Choose Workplace...
          </option> */}
          {workplaces.map((workplace) => {
            return (
              <option key={workplace._id} value={workplace._id}>
                {workplace.name}
              </option>
            );
          })}
        </select>
        <Button
          disabled={pending}
          variant="tertiary"
          size="sm"
          className="w-full"
        >
          Make Event!
        </Button>
      </div>
      {state?.message && <p>{state.message}</p>}
    </form>
  );
};
