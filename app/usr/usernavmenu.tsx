import { Section } from "@/components/section";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FC } from "react";

const MENU_LINKS = [{ name: "Profil", url: "/account" }, { name: "Kegiatan", url: "/kegiatan" }, { name: "Galeri", url: "/galeri" }];

export const UserNavMenu: FC = () => {
  return (
    <Section>
      <div className="flex flex-wrap gap-4">
        {MENU_LINKS.map((link, i) => (
          <Button as={Link} className="flex-1 p-8 text-md" key={i} variant="shadow" color="default" href={`/usr${link.url}`}>{link.name}</Button>
        ))}
      </div>
    </Section>
  )
}
