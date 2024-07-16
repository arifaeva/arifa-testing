"use server";

import { redirect } from "next/navigation";

import { API_URL } from "@/config/apiUrl";

export async function registerAction(_: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      message: "Error register",
    };
  }

  redirect("/login");
}

export async function continueWithGoogleAction() {
  const res = await fetch(`${API_URL}/auth/register/google`);
  const data = await res.json();

  redirect(data.url);
  // cookies().set("token", data.token);
  // redirect("/");
}
