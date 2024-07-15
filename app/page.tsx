import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import Galeri from "@/components/sections/galeri";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon } from "@/components/icons";
import { createClient } from "@/utils/supabase/server";
import { DBKegiatan } from "@/types";
import Kegiatan from "@/components/sections/kegiatan";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase
    .from("kegiatans")
    .select()
    .order("date", { ascending: false })
    .limit(2);
  const kegiatans = data as DBKegiatan[];
  const latest = kegiatans[0];

  return (
    <>
      {/* HERO::START */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={subtitle()}>Terbaru</h2>
          <h2 className={subtitle({ className: "!text-sm" })}>
            {latest.date.toString()}
          </h2>
          <h1 className={title()}>{latest.name}</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Lihat serunya kegiatan terbaru kami, atau kalian bisa lihat kegiatan
            menarik lainnya juga!
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={`/kegiatan/${latest.id}`}
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
      {/* HERO::END */}
      {/* KEGIATAN::START */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Kegiatan kegiatans={kegiatans} />
      </section>
      {/* KEGIATAN::END */}
      {/* GALERI::START */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Galeri />
      </section>
      {/* GALERI::END */}
    </>
  );
}
