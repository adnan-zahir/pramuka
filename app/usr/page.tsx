import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";
import { createClient } from "@/utils/supabase/server";
import { title } from "@/components/primitives";
import { ProfileCard } from "@/components/profilecard";
import { UserNavMenu } from "./usernavmenu";

export default async function UserPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile, error } = await supabase.from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  if (error) {
    return (
      <Section>
        <TitleContainer>
          <h1 className={title()}>Tidak dapat menemukan user</h1>
        </TitleContainer>
      </Section>
    )
  }

  return (
    <Section>
      <TitleContainer>
        <h1 className={title({ size: "sm", className: "md:hidden" })}>Halo, {profile.nama_lengkap}</h1>
      </TitleContainer>
      <ProfileCard profile={profile} />
      <UserNavMenu />
    </Section>
  )
}
