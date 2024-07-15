"use server";

// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { API_URL } from "@/config/apiUrl";

interface IUser {
  name?: string;
  email?: string;
  password?: string;
}

export async function handleRegister(props: IUser) {
  const { name, email, password } = props;

  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  return data;
  // redirect("/login");
}

export async function handleContinueWithGoogle() {
  const res = await fetch(`${API_URL}/auth/register/google`);
  const data = await res.json();

  redirect(data.url);
  // localStorage.setItem("user", JSON.stringify(data.user));
  // cookies().set("token", data.token);
  // redirect("/");

  // return data;
}
