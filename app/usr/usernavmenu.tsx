import { Link } from "@nextui-org/link";
import { FC } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { Section } from "@/components/section";
import { BlogIcon, GalleryIcon, ProfileIcon } from "@/components/icons";

const MENU_LINKS = [
  { name: "Profil", url: "/account", icon: <ProfileIcon size={64} /> },
  { name: "Kegiatan", url: "/kegiatan", icon: <BlogIcon size={64} /> },
  { name: "Galeri", url: "/galeri", icon: <GalleryIcon size={64} /> },
];

export const UserNavMenu: FC = () => {
  return (
    <Section className="max-w-2xl w-full">
      <div className="w-full flex flex-wrap gap-4">
        {MENU_LINKS.map((link, i) => (
          <Card
            key={i}
            as={Link}
            className="flex-1 text-md min-w[30%]"
            href={`/usr${link.url}`}
          >
            <CardBody className="items-center">{link.icon}</CardBody>
            <CardFooter>
              <p className="font-mono font-semibold w-full text-center uppercase">
                {link.name}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};
