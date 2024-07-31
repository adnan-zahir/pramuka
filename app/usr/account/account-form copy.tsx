"use client";

import { useCallback, useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import Avatar from "../../../components/avatar";

import { createClient } from "@/utils/supabase/client";
import { LogoutButton } from "@/components/logoutbutton";
import { Section } from "@/components/section";

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!" + error);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section>
      <div className="flex flex-col gap-4 w-full max-w-lg *:w-full">
        <Avatar
          size={150}
          uid={user?.id ?? null}
          url={avatar_url}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ fullname, username, website, avatar_url: url });
          }}
        />
        <Input isDisabled label="Email" type="email" value={user?.email} />
        <Input
          label="Nama Lengkap"
          type="text"
          value={fullname || ""}
          onChange={(e) => setFullname(e.target.value)}
        />
        <Input
          label="Julukan"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Website"
          type="text"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <div className="flex gap-4 items-center justify-end">
          <Button
            color="primary"
            variant="ghost"
            onClick={() =>
              updateProfile({ fullname, username, website, avatar_url })
            }
          >
            {loading ? "Loading ..." : "Update"}
          </Button>
          <LogoutButton />
        </div>
      </div>
    </Section>
  );
}
