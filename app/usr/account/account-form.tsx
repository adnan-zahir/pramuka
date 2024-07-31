"use server";

import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { redirect } from "next/navigation";

import { Profile } from "@/types";
import { Section } from "@/components/section";
import { Avatar } from "@/components/avatar";
import { createClient } from "@/utils/supabase/server";
import { SelectInput } from "@/components/selectinput";
import { SubmitButton } from "@/components/submitbutton";

export default async function AccountForm({
  profile,
  searchParams,
}: {
  profile: Profile;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // ** DONT DELETE
  // * FOR FUTURE USE
  // const { data } = await supabase.rpc("get_types", { enum_type: "tingkatan" });

  const supabase = createClient();
  const { data: angkatans } = await supabase.from("angkatans").select("*");
  const { data: ambalans } = await supabase.from("ambalans").select("*");

  const updateProfile = async (formData: FormData) => {
    "use server";

    const supabase = createClient();

    try {
      const parsedData: any = {};

      formData.forEach((value, key) => {
        if (key.startsWith("$") === false) parsedData[key] = value;
        if (searchParams.angkatan && searchParams.angkatan !== "0")
          parsedData.angkatan = searchParams.angkatan;
        if (searchParams.ambalan && searchParams.ambalan !== "0")
          parsedData.ambalan = searchParams.ambalan;
        if (searchParams.jenis_kelamin && searchParams.jenis_kelamin !== "0")
          parsedData.jenis_kelamin = searchParams.jenis_kelamin;
      });

      const { error } = await supabase
        .from("profiles")
        .update(parsedData)
        .eq("id", formData.get("id"));

      if (error) throw error;
    } catch (error) {
      redirect(
        `/usr/account?error=${encodeURI((error as Error).message || "Error! Please try again later.")}&c=${searchParams.c ? Number(searchParams.c) + 1 : 0}`,
      );
    } finally {
      redirect(
        `/usr/account?message=${encodeURI("Success editing profile!")}&c=${searchParams.c ? Number(searchParams.c) + 1 : 0}`,
      );
    }
  };

  return (
    <Section>
      <div className="flex flex-col gap-4 w-full max-w-lg *:w-full">
        <Avatar
          size={150}
          uid={profile.id ?? null}
          url={profile.avatar_url || ""}
        />
        <form
          action={updateProfile}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Input
            isReadOnly
            className="hidden"
            defaultValue={profile.id}
            label="ID"
            name="id"
            type="text"
          />
          <Input isReadOnly label="Email" type="email" value={profile.email} />
          <Input
            isReadOnly
            label="Julukan"
            type="text"
            value={profile.julukan || ""}
          />
          <Input
            isReadOnly
            label="Nomor Tamu"
            type="text"
            value={profile.no_tamu || ""}
          />
          <Input isReadOnly label="NTA" type="text" value={profile.nta || ""} />
          <Input
            isReadOnly
            defaultValue={profile.tingkatan || ""}
            label="Tingkatan"
            name="tingkatan"
            type="text"
          />
          {angkatans ? (
            <SelectInput
              array={angkatans}
              defaultSelectedKeys={[profile.angkatan.toString()]}
              keyName="id"
              label="Pilih Angkatan"
              paramName="angkatan"
              value="nama_angkatan"
            />
          ) : (
            ""
          )}
          {ambalans ? (
            <SelectInput
              array={ambalans}
              defaultSelectedKeys={[profile.ambalan.toString()]}
              keyName="id"
              label="Pilih Ambalan"
              paramName="ambalan"
              value="nama_ambalan"
            />
          ) : (
            ""
          )}
          <Input
            defaultValue={profile.nama_lengkap || ""}
            label="Nama Lengkap"
            name="nama_lengkap"
            type="text"
          />
          <Input
            defaultValue={profile.tempat_lahir || ""}
            label="Tempat Lahir"
            name="tempat_lahir"
            type="text"
          />
          <Input
            defaultValue={profile.tanggal_lahir || ""}
            label="Tanggal Lahir"
            name="tanggal_lahir"
            type="date"
          />
          <SelectInput
            array={[
              { id: "L", value: "L" },
              { id: "P", value: "P" },
            ]}
            defaultSelectedKeys={[profile.jenis_kelamin]}
            keyName="id"
            label="Jenis Kelamin"
            paramName="jenis_kelamin"
            value="value"
          />
          <Input
            defaultValue={profile.golongan_darah || ""}
            label="Golongan Darah"
            name="golongan_darah"
            type="text"
          />
          <Input
            defaultValue={profile.no_hp || ""}
            label="No HP"
            name="no_hp"
            type="text"
          />
          <Input
            defaultValue={profile.social_media || ""}
            label="Sosial Media"
            name="social_media"
            type="text"
          />
          <div className="flex gap-4 items-center justify-end col-span-2">
            <ButtonGroup>
              <Button as={Link} color="warning" href="/usr" variant="ghost">
                Back
              </Button>
              <SubmitButton color="success" variant="solid">
                Update
              </SubmitButton>
            </ButtonGroup>
          </div>
        </form>
      </div>
    </Section>
  );
}
