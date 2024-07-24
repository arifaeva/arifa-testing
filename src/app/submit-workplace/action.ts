"use server";

import { redirect } from "next/navigation";

import { API_URL } from "@/config/apiUrl";
import { serverAuth } from "@/libs/serverAuth";

export async function submitWorkplaceAction(_: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const foodprice = formData.get("foodprice") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const files = formData.get("images") as unknown as Blob;

  const auth = serverAuth();

  if (!auth) {
    redirect("/login");
  }

  const bodyData = new FormData();
  bodyData.append("name", name);
  bodyData.append("description", description);
  bodyData.append("foodprice", foodprice);
  bodyData.append("address", address);
  bodyData.append("city", city);
  bodyData.append("file", files);
  bodyData.append("authorId", auth.id);

  try {
    const res = await fetch(`${API_URL}/workplaces/add`, {
      method: "POST",
      body: bodyData,
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    return {
      message: "Error submit workplace",
    };
  }

  // if (data.error) {
  //   return {
  //     message: "Error submit workplace",
  //   };
  // }
}
