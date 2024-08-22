"use client";

import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

import { createClient } from "@/utils/supabase/client";

export function ShowAvatar({
  url,
  size,
  className,
}: {
  url: string | null;
  size: number;
  className?: string;
}) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url);

  useEffect(() => {
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
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadImage(url);
  }, [url, supabase]);

  return (
    <>
      {avatarUrl ? (
        <Image
          alt="Avatar"
          className={className}
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
    </>
  );
}
