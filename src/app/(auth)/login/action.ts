"use server";

import { redirect } from "next/navigation";

import { API_URL } from "@/config/apiUrl";

export async function loginAction(_: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      message: "Error login",
    };
  }

  redirect("/");
}

export async function continueWithGoogleAction() {
  const res = await fetch(`${API_URL}/auth/login/google`);
  const data = await res.json();

  redirect(data.url);
}
