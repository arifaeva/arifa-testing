"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { API_URL } from "@/config/apiUrl";
import { serverAuth } from "@/libs/serverAuth";

export async function submitEventAction(_: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const dateTime = formData.get("dateTime") as string;
  const workplaceId = formData.get("workplaceId") as string;

  console.log(title, description, dateTime, workplaceId);

  const auth = serverAuth();

  if (!auth) {
    redirect("/login");
  }

  const res = await fetch(`${API_URL}/events/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      dateTime,
      userId: auth?.id,
      workplaceId,
    }),
  });

  const data = await res.json();

  revalidatePath("/events", "page");

  if (data.error) {
    return {
      message: "Error making a new event",
    };
  }
}
