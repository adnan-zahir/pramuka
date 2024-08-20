import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { siteConfig } from "@/config/site";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // refreshing the auth token
  // protecting route
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log(user?.id);
  const { data, error: role_error } = await supabase
    .from("profiles")
    .select("app_role")
    .eq("id", user?.id)
    .single();
  const { app_role } = data ? data.app_role : "anon";

  console.log(data);

  if (
    (error || !user) &&
    request.nextUrl.pathname.startsWith(siteConfig.protectedRoutes.userOnly)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    (role_error || app_role !== "admin") &&
    request.nextUrl.pathname.startsWith(siteConfig.protectedRoutes.adminOnly)
  ) {
    return NextResponse.redirect(new URL("/usr", request.url));
  }

  return supabaseResponse;
}
