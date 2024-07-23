"use client";

import { useActionState } from "react";

import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

import { submitReviewAction } from "./review.action";

export const FormReview = ({ workplaceId }: { workplaceId: string }) => {
  const [state, formAction, pending] = useActionState(submitReviewAction, null);

  return (
    <div className="bg-[#9ccb9a] rounded-md w-[25%] p-4 space-y-2 border-4 border-[#2e2d33]">
      <h1 className="text-2xl text-center text-[#2e2d33]">
        Share your review!
      </h1>
      <form action={formAction} className="space-y-3">
        <Input
          name="content"
          placeholder="Your review on this workplace"
          type="text"
          required
        />
        <Input
          name="internet"
          placeholder="Internet Rating (from 0 to 5)"
          type="number"
          required
        />
        <Input
          name="electricity"
          placeholder="Electricity Rating (from 0 to 5)"
          type="number"
          required
        />
        <input name="userId" value="userId" type="hidden" />
        <input name="workplaceId" value={workplaceId} type="hidden" />
        <Button
          disabled={pending}
          variant="tertiary"
          size="sm"
          className="w-full"
        >
          Add Review
        </Button>
        {state?.message && <p>{state.message}</p>}
      </form>
    </div>
  );
};
