"use client";

import { useActionState } from "react";

import { Button } from "@/components/stories/button";

import { deleteAction } from "./delete.action";

export const DeleteWorkplace = ({ workplaceId }: { workplaceId: string }) => {
  const [state, formAction, pending] = useActionState(deleteAction, null);
  return (
    <div>
      <form action={formAction}>
        <input name="workplaceId" value={workplaceId} type="hidden" />
        <Button disabled={pending}>Delete</Button>
        {state?.message && <p>{state.message}</p>}
      </form>
    </div>
  );
};
