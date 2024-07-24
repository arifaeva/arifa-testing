import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export function serverAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    return user as { id: string; name: string; email: string };
  } catch (error) {
    return null;
  }
}
