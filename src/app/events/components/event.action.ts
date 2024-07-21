"use server";

import { API_URL } from "@/config/apiUrl";

export async function submitEventAction(_: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const dateTime = formData.get("dateTime") as unknown as Date;
  const eventWorkplace = formData.get("eventWorkplace") as string;
  const eventAddress = formData.get("eventAddress") as string;
  const authorId = formData.get("authorId") as string;
  const workplaceId = formData.get("workplaceId") as string;

  console.log(
    title,
    description,
    dateTime,
    eventWorkplace,
    eventAddress,
    authorId,
    workplaceId
  );

  const res = await fetch(`${API_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      dateTime,
      eventWorkplace,
      eventAddress,
      authorId,
      workplaceId,
    }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      message: "Error making a new event",
    };
  }
}
