"use client";

import { useActionState } from "react";

import { Button } from "@/components/stories/button";

import { publishAction } from "./publish.action";

export const PublishWorkplace = ({ workplaceId }: { workplaceId: string }) => {
  const [state, formAction, pending] = useActionState(publishAction, null);
  return (
    <div>
      <form action={formAction}>
        <input name="workplaceId" value={workplaceId} type="hidden" />
        <Button disabled={pending}>Publish</Button>
        {state?.message && <p>{state.message}</p>}
      </form>
    </div>
  );
};
