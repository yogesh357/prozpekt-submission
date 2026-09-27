import { NextResponse } from "next/server";

// In-memory store for session / demo claim persistence
// In production, this would be backed by PostgreSQL / Redis / DynamoDB
const claimedPhones = new Map<
  string,
  { claimCode: string; name: string; claimedAt: string }
>();

// Utility to generate unique, legible voucher codes (excluding ambiguous chars: 0, O, 1, I, L)
function generateClaimCode(): string {
  const chars = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }
  return `MORROW-${code}`;
}

// Indian mobile phone regex: 10 digits starting with 6, 7, 8, 9
const PHONE_REGEX = /^[6-9]\d{9}$/;

// Obvious dummy repetitive phone numbers to reject
const INVALID_PATTERNS = [
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
  "9876543210", // Allow or flag; in real world, 9876543210 is demo, but let's allow or treat gracefully
];

export async function POST(request: Request) {
  try {
    // Artificial small delay for authentic loading feedback
    await new Promise((resolve) => setTimeout(resolve, 450));

    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload. Please check your form input.",
        },
        { status: 400 }
      );
    }

    const { name, phone } = body ?? {};

    // Validate Name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your full name (minimum 2 characters).",
        },
        { status: 422 }
      );
    }

    if (name.trim().length > 60) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long. Please provide a valid name.",
        },
        { status: 422 }
      );
    }

    // Sanitize phone number (strip whitespace, hyphens, and +91 country prefix if present)
    let sanitizedPhone = typeof phone === "string" ? phone.trim().replace(/[\s\-()]/g, "") : "";
    if (sanitizedPhone.startsWith("+91")) {
      sanitizedPhone = sanitizedPhone.slice(3);
    } else if (sanitizedPhone.startsWith("91") && sanitizedPhone.length === 12) {
      sanitizedPhone = sanitizedPhone.slice(2);
    } else if (sanitizedPhone.startsWith("0") && sanitizedPhone.length === 11) {
      sanitizedPhone = sanitizedPhone.slice(1);
    }

    // Validate Phone Number format
    if (!sanitizedPhone || !PHONE_REGEX.test(sanitizedPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid 10-digit Indian mobile number.",
        },
        { status: 422 }
      );
    }

    // Check for repetitive bogus numbers (e.g. 0000000000, 9999999999)
    if (
      sanitizedPhone === "0000000000" ||
      sanitizedPhone === "1111111111" ||
      sanitizedPhone === "9999999999" ||
      sanitizedPhone === "1234567890"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "This mobile number appears invalid. Please enter your real number to receive the offer.",
        },
        { status: 422 }
      );
    }

    // Duplicate Check & Idempotency:
    // If the customer already claimed the voucher with this phone number, return their existing claim code!
    // This is excellent UX because if they accidentally re-submit or refresh, they don't lose their voucher.
    if (claimedPhones.has(sanitizedPhone)) {
      const existing = claimedPhones.get(sanitizedPhone)!;
      return NextResponse.json(
        {
          success: true,
          claimCode: existing.claimCode,
          message: "Welcome back! Here is your previously generated offer voucher.",
          isExisting: true,
        },
        { status: 200 }
      );
    }

    // Generate fresh claim code
    let claimCode = generateClaimCode();
    // Ensure uniqueness
    let attempts = 0;
    const existingCodes = new Set(Array.from(claimedPhones.values()).map((v) => v.claimCode));
    while (existingCodes.has(claimCode) && attempts < 10) {
      claimCode = generateClaimCode();
      attempts++;
    }

    // Store claim
    claimedPhones.set(sanitizedPhone, {
      claimCode,
      name: name.trim(),
      claimedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        claimCode,
        message: "Your offer has been claimed.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/claim error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your request. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
