import { NextResponse } from "next/server";
import { checkRateLimit, validateInquiry } from "@/lib/validators";

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const max = Number(process.env.FORM_RATE_LIMIT_MAX || 5);
  const windowMs = Number(process.env.FORM_RATE_LIMIT_WINDOW_MS || 60000);

  if (!checkRateLimit(`inquiry:${ip}`, max, windowMs)) {
    return NextResponse.json({ message: "Too many attempts. Please try again in a minute." }, { status: 429 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = validateInquiry(payload);
  if (!result.valid) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors: result.errors }, { status: 422 });
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry validated and received.",
    data: {
      fullName: result.data.fullName,
      mobile: result.data.mobile,
      membership: result.data.membership,
      goal: result.data.goal
    }
  });
}
