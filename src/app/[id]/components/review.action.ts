import { API_URL } from "@/config/apiUrl";

export async function submitReviewAction(_: unknown, formData: FormData) {
  const content = formData.get("content") as string;
  const internet = formData.get("internet") as unknown as number;
  const electricity = formData.get("electricity") as unknown as number;
  const authorId = formData.get("authorId") as string;

  const res = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, internet, electricity, authorId }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      message: "Error submitting new review",
    };
  }
}
