"use client";

import { useActionState } from "react";

import { Button } from "@/components/stories/button";

import { verifyAction } from "./verify.action";

export const VerifyWorkplace = ({ workplaceId }: { workplaceId: string }) => {
  const [state, formAction, pending] = useActionState(verifyAction, null);
  return (
    <div>
      <form action={formAction}>
        <input name="workplaceId" value={workplaceId} type="hidden" />
        <Button disabled={pending}>Verify</Button>
        {state?.message && <p>{state.message}</p>}
      </form>
    </div>
  );
};
