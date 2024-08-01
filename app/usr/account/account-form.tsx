"use server";

import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

import { Profile } from "@/types";
import { Section } from "@/components/section";
import { Avatar } from "@/components/avatar";
import { createClient } from "@/utils/supabase/server";
import { SelectInput } from "@/components/selectinput";
import { SubmitButton } from "@/components/submitbutton";

interface AccountFormProps {
  profile: Profile;
}

export default async function AccountForm({ profile }: AccountFormProps) {
  const supabase = createClient();

  const { data: angkatans } = await supabase.from("angkatans").select("*");
  const { data: ambalans } = await supabase.from("ambalans").select("*");

  return (
    <Section>
      <div className="flex flex-col gap-4 w-full max-w-lg *:w-full">
        <Avatar
          size={150}
          uid={profile.id ?? null}
          url={profile.avatar_url || ""}
        />
        <form action={`/api/update-profile`} method="post" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Divider className="md:col-span-2" />
          <Input isReadOnly className="hidden" value={profile.id} label="ID" name="id" type="text" />
          <Input isDisabled label="Julukan" type="text" value={profile.julukan || ""} />
          <Input isDisabled label="Nomor Tamu" type="text" value={profile.no_tamu || ""} />
          <Input isDisabled label="NTA" type="text" value={profile.nta || ""} />
          <Input isDisabled defaultValue={profile.tingkatan || ""} label="Tingkatan" name="tingkatan" type="text" />
          {angkatans && (
            <SelectInput
              array={angkatans}
              defaultSelectedKeys={[profile.angkatan ? profile.angkatan.toString() : "0"]}
              keyName="id"
              label="Pilih Angkatan"
              paramName="angkatan"
              value="nama_angkatan"
            />
          )}
          {ambalans && (
            <SelectInput
              array={ambalans}
              defaultSelectedKeys={[profile.ambalan ? profile.ambalan.toString() : "0"]}
              keyName="id"
              label="Pilih Ambalan"
              paramName="ambalan"
              value="nama_ambalan"
            />
          )}
          <Divider className="md:col-span-2" />
          <Input isDisabled label="Email" type="email" value={profile.email} />
          <Input defaultValue={profile.nama_lengkap || ""} label="Nama Lengkap" name="nama_lengkap" type="text" />
          <Input defaultValue={profile.tempat_lahir || ""} label="Tempat Lahir" name="tempat_lahir" type="text" />
          <Input defaultValue={profile.tanggal_lahir || "2000-01-01"} label="Tanggal Lahir" name="tanggal_lahir" type="date" />
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
          <Input defaultValue={profile.golongan_darah || ""} label="Golongan Darah" name="golongan_darah" type="text" />
          <Input defaultValue={profile.no_hp || ""} label="No HP" name="no_hp" type="text" />
          <Input defaultValue={profile.social_media || ""} label="Sosial Media" name="social_media" type="text" />
          <div className="flex gap-4 items-center justify-end md:col-span-2">
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

