import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { DBOTP } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const otp = String(formData.get("otp"));
  const supabase = createClient();

  // get otp from db
  const { data: otpData, error: otpError } = await supabase.from('otps')
    .select('*')
    .eq('otp', otp)
    .eq('email', email)
    .single();

  // refuse sign up if otp error or not found or otp expired
  if (otpError) {
    return NextResponse.redirect(
      `${requestUrl.origin}/signup?error=Cannot find OTP`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      },
    )
  }

  if (otpData.expires_at < new Date()) {
    return NextResponse.redirect(
      `${requestUrl.origin}/signup?error=OTP is expired, please request another one`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      },
    )
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);

    return NextResponse.redirect(
      `${requestUrl.origin}/signup?error=Could not authenticate user`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      },
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/u/account`,
    {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    },
  );
}
