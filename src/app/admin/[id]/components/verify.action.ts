"use server";

import { API_URL } from "@/config/apiUrl";

export async function verifyAction(_: unknown, formData: FormData) {
  const workplaceId = formData.get("workplaceId") as string;

  const res = await fetch(`${API_URL}/workplaces/:id`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ workplaceId }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      message: "Error verify workplace",
    };
  }
}
