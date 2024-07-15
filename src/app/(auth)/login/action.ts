"use server";

import { redirect } from "next/navigation";

import { API_URL } from "@/config/apiUrl";

interface useAuthProps {
  email?: string;
  password?: string;
}

export async function handleLogin(props: useAuthProps) {
  const { email, password } = props;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  return data;
  // redirect("/");
}

export async function handleContinueWithGoogle() {
  const res = await fetch(`${API_URL}/register/google`);
  const data = await res.json();

  redirect(data.url);
  // localStorage.setItem("user", JSON.stringify(data.user));
  // cookies().set("token", data.token);
  // redirect("/");

  // return data;
}
