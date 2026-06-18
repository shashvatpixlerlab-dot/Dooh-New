import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/session";
import { getAccessToken } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ message: "file required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/owner/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": file.type,
        "X-Filename": file.name,
      },
      body: file,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data.message;
      const message = Array.isArray(msg) ? msg.join(", ") : (msg ?? "Upload failed");
      return NextResponse.json({ message }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}

export async function DELETE(request: Request) {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.imageUrl) {
    return NextResponse.json({ message: "imageUrl required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/owner/upload`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: body.imageUrl }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data.message;
      const message = Array.isArray(msg) ? msg.join(", ") : (msg ?? "Delete failed");
      return NextResponse.json({ message }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}
