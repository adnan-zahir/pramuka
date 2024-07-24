import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { DBOTP } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const supabase = createClient();

  const MINUTE = 60 * 1000;
  const expires_in_minute = 15;
  const email = String(formData.get("email"));
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
  const expires_at = new Date(Date.now() + (expires_in_minute * MINUTE));

  const { data, error } = await supabase.from('otps')
    .insert([
      {
        otp, email, expires_at
      }
    ])
    .select()
    .single();

  const generatedOTP = data as unknown as DBOTP;

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/usr/a/otp?error=Cannot generate OTP`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      },
    );
  }

  return NextResponse.redirect(`${requestUrl.origin}/usr/a/otp?message=GENERATED OTP : ${generatedOTP.otp}`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
