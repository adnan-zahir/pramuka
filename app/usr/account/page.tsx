import { Card, CardBody } from "@nextui-org/card";

import AccountForm from "./account-form";
import Messages from "./messages";

import { subtitle } from "@/components/primitives";
import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";
import { Profile } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { title } from "@/components/primitives";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Akun"
}

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  const rawProfile = {
    ...data,
    email: user?.email,
  };

  const profile = rawProfile as unknown as Profile;

  return (
    <>
      <Section className="md:flex-row md:justify-around md:items-start">
        <Section>
          <TitleContainer className="md:!text-left">
            <h1 className={title()}>Profil Akun</h1>
            <p className={subtitle()}>
              Sesuaikan profil dan biodatamu di sini. Data yang disimpan dapat
              diakses oleh publik sebagai informasi anggota ambalan!
            </p>
          </TitleContainer>
        </Section>
        <Card isBlurred className="p-4">
          <CardBody>
            <AccountForm profile={profile} />
          </CardBody>
        </Card>
      </Section>
      <Messages />
    </>
  );
}
