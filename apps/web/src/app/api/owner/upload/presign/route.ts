import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getApiUrl, OWNER_COOKIE } from "@/lib/session";

export async function POST(request: Request) {
  const token = (await cookies()).get(OWNER_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.filename) {
    return NextResponse.json({ message: "filename required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/owner/upload/presign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        filename: body.filename,
        contentType:
          typeof body.contentType === "string" ? body.contentType : undefined,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { message: data.message ?? "Presign failed" },
        { status: res.status }
      );
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}
