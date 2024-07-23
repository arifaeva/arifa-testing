"use server";

import z from "zod";

import { API_URL } from "@/config/apiUrl";

const reviewSchema = z.object({
  content: z.string(),
  internet: z
    .number()
    .min(0, { message: "rating must be in range between 0 to 5" })
    .max(5, { message: "rating must be in range between 0 to 5" }),
  electricity: z
    .number()
    .min(0, { message: "rating must be in range between 0 to 5" })
    .max(5, { message: "rating must be in range between 0 to 5" }),
  userId: z.string(),
  workplaceId: z.string(),
});

export async function submitReviewAction(_: unknown, formData: FormData) {
  const content = formData.get("content") as string;
  const internet = formData.get("internet") as unknown as number;
  const electricity = formData.get("electricity") as unknown as number;
  const userId = formData.get("userId") as string;
  const workplaceId = formData.get("workplaceId") as string;

  const validation = reviewSchema.safeParse({
    content,
    internet,
    electricity,
    userId,
    workplaceId,
  });

  if (!validation.success) {
    return {
      status: "error",
      errors: validation.error.flatten().fieldErrors,
      data: {
        content,
        internet,
        electricity,
        userId,
        workplaceId,
      },
    };
  }

  // console.log(content, internet, electricity, userId, workplaceId);

  const res = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content,
      internet,
      electricity,
      userId,
      workplaceId,
    }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      message: "Error submitting new review",
    };
  }
}
