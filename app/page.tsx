import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h2 className={subtitle()}>Terbaru</h2>
        <h1 className={title()}>Pengembaraan</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          Lihat serunya ka;mi mengembara gunung dan hutan untuk eksplorasi
          berbagai macam flora dan fauna!
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="#"
        >
          Lihat
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.instagram}
        >
          <InstagramIcon size={20} />
          Instagram
        </Link>
      </div>
    </section>
  );
}
