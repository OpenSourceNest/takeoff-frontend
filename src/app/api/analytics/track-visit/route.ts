import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Use process.env.NEXT_PUBLIC_API_URL or default to localhost:4500
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:4500";
    const targetUrl = `${backendUrl}/api/analytics/track-visit`;

    console.log(`[Analytics Proxy] Forwarding to: ${targetUrl}`);

    // Forward to backend analytics endpoint
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log(
      `[Analytics Proxy] Backend response status: ${response.status}`,
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Analytics Proxy] Backend error: ${errorText}`);
      return NextResponse.json(
        { success: false, error: "Backend tracking failed" },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Analytics Proxy Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to track visit" },
      { status: 500 },
    );
  }
}
