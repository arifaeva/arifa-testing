"use client";

import { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { submitEventAction } from "./event.action";

export default function EventForm() {
  const [state, formAction, pending] = useActionState(submitEventAction, null);

  return (
    <form
      action={formAction}
      className=" bg-[#9ccb9a] p-3 flex flex-col gap-2 rounded-md border-4 border-[#2e2d33]"
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
        <Input
          name="eventWorkplace"
          placeholder="Workplace name"
          type="text"
          required
        />
        <Input
          className="line-clamp-1"
          name="eventAddress"
          placeholder="Workplace address"
          type="text"
          required
        />
        <input name="userId" value="userId" type="hidden" />
        <input name="workplaceId" value="workplaceId" type="hidden" />
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
}
