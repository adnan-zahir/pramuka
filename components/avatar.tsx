"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { createClient } from "@/utils/supabase/client";

export function Avatar({
  url,
  uid,
  size,
}: {
  url: string | null;
  uid: string | null;
  size: number;
}) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(url);
  const [files, setFiles] = useState<FileList | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("Downloading avatar");
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);

        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);

        setAvatarUrl(url);
      } catch (error) {
        console.error("Error uploading image: ", (error as Error).message);
      }
    }

    if (downloadUrl) downloadImage(downloadUrl);
  }, [url, downloadUrl, supabase]);

  async function updateProfile(url: string) {
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ avatar_url: url })
        .eq("id", uid);

      if (error) throw Error;
    } catch (error) {
      console.error((error as Error).message);
    } finally {
      setDownloadUrl(url);
    }
  }

  async function uploadAvatar() {
    try {
      setIsLoading(true);
      if (!files || files.length === 0) throw new Error("No file to upload");

      const file = files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (error) throw error;
      updateProfile(filePath);
    } catch (error) {
      alert((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center md:flex-row md:items-end gap-4">
      {avatarUrl ? (
        <Image
          key={Math.random().toString() + avatarUrl}
          alt="Avatar"
          className="object-cover"
          height={size}
          src={avatarUrl}
          style={{ height: size, width: size }}
          width={size}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size }}
        />
      )}
      <ButtonGroup>
        <Input
          accept="image/jpeg, image/png"
          className="*:*:rounded-r-none"
          labelPlacement="outside-left"
          name="avatar"
          type="file"
          onChange={(e) => setFiles(e.target.files)}
        />
        <Button isDisabled={isLoading} onClick={uploadAvatar}>
          {isLoading ? "Uploading..." : "Upload"}
        </Button>
      </ButtonGroup>
    </div>
  );
}
