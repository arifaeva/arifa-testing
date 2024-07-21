"use server";

import { API_URL } from "@/config/apiUrl";

export async function submitWorkplaceAction(_: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const file = formData.get("images") as unknown as FileList;
  const authorId = formData.get("authorId") as string;

  //   console.log(
  //     name,
  //     description,
  //     address,
  //     city,
  //     images,
  //     authorId,
  //   );

  const res = await fetch(`${API_URL}/workplace`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      description,
      address,
      city,
      file,
      authorId,
    }),
  });

  const data = await res.json();
  // console.log(data);

  if (data.error) {
    return {
      message: "Error submit workplace",
    };
  }
}
