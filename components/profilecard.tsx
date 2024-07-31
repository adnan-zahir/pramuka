import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { ShowAvatar } from "./showavatar";
import { subtitle } from "./primitives";

import { Profile } from "@/types";

export const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <Card isBlurred>
      <CardHeader className="flex-col items-center">
        <h2 className={subtitle({ className: "text-center" })}>
          &ldquo;{profile.julukan}&rdquo;
        </h2>
        <ShowAvatar size={150} url={profile.avatar_url} />
      </CardHeader>
      <CardBody>
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
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="justify-center">
        <Button as={Link} color="warning" href="/usr/account">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};
