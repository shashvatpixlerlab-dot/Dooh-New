const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export async function api<T>(
  path: string,
  options?: RequestInit & { token?: string }
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string>),
  };
  if (options?.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }
  const res = await fetch(`${API_URL}/api${path}`, {
    ...options,
    headers,
    credentials: "include"
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err.message;
    const message = Array.isArray(msg)
      ? msg.join(", ")
      : (msg ?? `API error ${res.status}`);
    throw new Error(message);
  }
  return res.json();
}

export { API_URL };
