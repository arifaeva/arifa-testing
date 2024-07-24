"use server";

import { revalidatePath } from "next/cache";
import z from "zod";

import { API_URL } from "@/config/apiUrl";
import { serverAuth } from "@/libs/serverAuth";

const reviewSchema = z.object({
  content: z.string(),
  internet: z.number().min(0, { message: "rating must be in range between 0 to 5" }).max(5, { message: "rating must be in range between 0 to 5" }),
  electricity: z.number().min(0, { message: "rating must be in range between 0 to 5" }).max(5, { message: "rating must be in range between 0 to 5" }),
  userId: z.string(),
  workplaceId: z.string(),
});

export async function submitReviewAction(_: unknown, formData: FormData) {
  const content = formData.get("content") as string;
  const internet = formData.get("internet") as string;
  const electricity = formData.get("electricity") as string;
  const workplaceId = formData.get("workplaceId") as string;

  const auth = serverAuth();

  const validation = reviewSchema.safeParse({
    content,
    internet: Number(internet),
    electricity: Number(internet),
    userId: auth?.id,
    workplaceId,
  });

  if (!validation.success) {
    console.log(validation.error.flatten().fieldErrors);
    return {
      status: "error",
      errors: validation.error.flatten().fieldErrors,
      data: {
        content,
        internet,
        electricity,
        userId: auth?.id,
        workplaceId,
      },
    };
  }

  // // console.log(content, internet, electricity, userId, workplaceId);

  const res = await fetch(`${API_URL}/workplaces/${workplaceId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content,
      internet,
      electricity,
      userId: auth?.id,
      workplaceId,
    }),
  });

  const data = await res.json();
  console.log(data);

  revalidatePath("/[id]", "page");

  // if (data.error) {
  //   return {
  //     message: "Error submitting new review",
  //   };
  // }
}
