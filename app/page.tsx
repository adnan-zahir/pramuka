import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon } from "@/components/icons";
import { createClient } from "@/utils/supabase/server";
import { DBKegiatan } from "@/types";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.from("kegiatans").select().range(0, 1);
  const kegiatans = data as DBKegiatan[];

  return (
    <>
      {/* HERO::START */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={subtitle()}>Terbaru</h2>
          <h1 className={title()}>Pengembaraan</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Lihat serunya kami mengembara gunung dan hutan untuk eksplorasi
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
      {/* HERO::END */}
      {/* KEGIATAN::START */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>{siteConfig.navMenuItems[1].label}</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {kegiatans.map((kegiatan, i) => (
            <Card
              key={i}
              isFooterBlurred
              className="border-none aspect-square flex-[45%]"
              radius="lg"
            >
              <Image
                removeWrapper
                alt="Kegiatan kepramukaan"
                className="w-full h-full object-cover aspect-square"
                src={kegiatan.imageUrl}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{kegiatan.name}</p>
                <Link
                  className={buttonStyles({
                    color: "default",
                    radius: "lg",
                    variant: "flat",
                    size: "sm",
                    className: "text-tiny text-white bg-black/20",
                  })}
                  href={`kegiatan/${kegiatan.id}`}
                >
                  Lihat
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div>
          <Link
            className={buttonStyles({
              color: "default",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.navMenuItems[1].href}
          >
            Selengkapnya
          </Link>
        </div>
      </section>
      {/* KEGIATAN::END */}
      {/* GALERI::START */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>{siteConfig.navMenuItems[2].label}</h1>
        </div>

        <div>
          <Link
            className={buttonStyles({
              color: "default",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.navMenuItems[2].href}
          >
            Selengkapnya
          </Link>
        </div>
      </section>
      {/* GALERI::END */}
    </>
  );
}
