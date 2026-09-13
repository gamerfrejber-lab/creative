const API_BASE = "/api";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem("token");
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${url}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

export const api = {
  auth: {
    register: (body: { name: string; email: string; password: string }) =>
      request<{ token: string; user: { id: string; name: string; email: string } }>("/auth/register", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    login: (body: { email: string; password: string }) =>
      request<{ token: string; user: { id: string; name: string; email: string } }>("/auth/login", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    me: () => request<{ _id: string; name: string; email: string }>("/auth/me"),
  },
  contact: {
    submit: (body: { name: string; email: string; message: string }) =>
      request<{ message: string }>("/contact", { method: "POST", body: JSON.stringify(body) }),
  },
};
