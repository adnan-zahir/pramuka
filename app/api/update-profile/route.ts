import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const searchParams = request.nextUrl.searchParams;
  const formData = await request.formData();
  const uuid = formData.get("id");
  const supabase = createClient();

  console.log("Search params received by route");
  console.log(searchParams.toString())

  // parse data from formData and searchParams
  const parsedData: { [key: string]: string } = {};

  formData.forEach((value, key) => {
    if (!key.startsWith("$") && value) parsedData[key] = value.toString();
  });
  if (uuid) {
    parsedData.id = uuid as string;
  };

  formData.forEach((value, key) => console.log(key, value))
  //
  // req update to supabase
  const queryString = new URLSearchParams();
  try {

    const { error } = await supabase
      .from("profiles")
      .update(parsedData)
      .eq("id", formData.get("id") as string);

    if (error) throw error;
    queryString.append("message", "Success editing profile!");
  }
  catch (error) {
    console.error(error);
    queryString.append("error", (error as Error).message || "Error! Please try again later.");
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/usr/account?${queryString.toString()}`
  )
}
