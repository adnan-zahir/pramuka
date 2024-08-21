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

  try {
    const { data, error: role_error } = await supabase
      .from("profiles")
      // .select("app_role")
      .select("app_role, roles ( level )")
      .eq("id", user?.id)
      .single();

    // Using role name eg. admin | dewan | anggota
    const app_role = data ? data.app_role : "anon";
    // Using role level (1 = lowest previlege)
    // const role_level = data ? data.roles.level : 0;

    // Handle Error
    if (role_error) throw role_error;

    if (
      (role_error || app_role !== "admin") &&
      request.nextUrl.pathname.startsWith(siteConfig.protectedRoutes.adminOnly)
    ) {
      return NextResponse.redirect(new URL("/usr", request.url));
    }
  } catch (err) {
    console.log("ERROR:");
    console.error(err);
  }

  if (
    (error || !user) &&
    request.nextUrl.pathname.startsWith(siteConfig.protectedRoutes.userOnly)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return supabaseResponse;
}
