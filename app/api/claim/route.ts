import { NextResponse } from "next/server";

const PHONE_REGEX = /^[6-9]\d{9}$/;

// Generate random voucher code (e.g. MORROW-7F2K)
function generateClaimCode(): string {
  const chars = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `MORROW-${code}`;
}

export async function POST(request: Request) {
  try {
    // dummy  delay for user experience

    await new Promise((resolve) => setTimeout(resolve, 300));

    const { name, phone } = await request.json();

    // Basic Name validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your full name (at least 2 characters).",
        },
        { status: 400 }
      );
    }

    // Phone validation using regex
    const cleanPhone = typeof phone === "string" ? phone.replace(/\D/g, "") : "";
    if (!PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    // Generate claim code and return success
    const claimCode = generateClaimCode();

    return NextResponse.json(
      {
        success: true,
        claimCode,
        message: "Your offer has been claimed.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your request.",
      },
      { status: 400 }
    );
  }
}
