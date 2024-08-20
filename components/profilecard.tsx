import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

import { ShowAvatar } from "./showavatar";
import { subtitle } from "./primitives";

import { Profile } from "@/types";

export const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <Card isBlurred className="relative border-8" shadow="lg">
      <CardHeader className="flex-col items-center">
        <h2
          className={subtitle({
            className: "text-center font-bold uppercase text-foreground",
          })}
        >
          &ldquo;{profile.julukan}&rdquo;
        </h2>
        <ShowAvatar size={150} url={profile.avatar_url} />
      </CardHeader>
      <CardBody className="p-2 bg-background/30">
        <table>
          <tbody className="*:*:px-4">
            <tr>
              <th>Nama Lengkap</th>
              <td>:</td>
              <td>{profile.nama_lengkap}</td>
            </tr>
            <tr>
              <th>Nomor Tamu</th>
              <td>:</td>
              <td>{profile.no_tamu}</td>
            </tr>
            <tr>
              <th>NTA</th>
              <td>:</td>
              <td>{profile.nta}</td>
            </tr>
            <tr>
              <th>Tingkatan</th>
              <td>:</td>
              <td>{profile.tingkatan}</td>
            </tr>
            <tr>
              <th>TTL</th>
              <td>:</td>
              <td>
                {profile.tempat_lahir}, {profile.tanggal_lahir}
              </td>
            </tr>
            <tr>
              <th>Jenis Kelamin</th>
              <td>:</td>
              <td>{profile.jenis_kelamin}</td>
            </tr>
            <tr>
              <th>Gol Darah</th>
              <td>:</td>
              <td>{profile.golongan_darah}</td>
            </tr>
            <tr>
              <th>No HP</th>
              <td>:</td>
              <td>{profile.no_hp}</td>
            </tr>
            <tr>
              <th>Social Media</th>
              <td>:</td>
              <td>
                {profile.social_media.startsWith("@") ? (
                  <Link
                    isExternal
                    className="text-foreground font-bold"
                    href={`https://instagram.com/${profile.social_media.substring(1)}`}
                  >
                    {profile.social_media}
                  </Link>
                ) : (
                  profile.social_media
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="justify-center">
        <Button as={Link} color="warning" href="/usr/profile">
          Edit
        </Button>
      </CardFooter>
      <Image
        removeWrapper
        className="absolute inset-0 w-full h-full !opacity-60 blur-sm scale-105 -z-10 rounded-none"
        src="/card_background.jpg"
      />
    </Card>
  );
};
