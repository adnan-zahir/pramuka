import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon } from "@/components/icons";
import { createClient } from "@/utils/supabase/server";
import { DBKegiatan } from "@/types";
import Kegiatan from "@/components/sections/kegiatan";
import Galeri from "@/components/sections/galeri";
import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";

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
      <Section className="relative md:min-h-[60vh]">
        <div className="absolute inset-0 -mx-6 overflow-hidden">
          <Image
            removeWrapper
            alt="Terbaru"
            className="w-[calc(100%_+_8px)] h-[calc(100%_+_8px)] -my-1 object-cover rounded-none filter blur-[2px]"
            referrerPolicy="no-referrer"
            src={latest.imageUrl}
          />
        </div>
        <TitleContainer className="z-10">
          <div className="font-semibold flex flex-col items-center h-full w-full bg-default-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100/20 shadow-xl p-4 text-center">
            <h2 className={subtitle()}>Terbaru</h2>
            <h2 className={subtitle({ className: "!text-sm" })}>
              {latest.date.toString()}
            </h2>
            <h1 className={title()}>{latest.name}</h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
              Lihat serunya kegiatan terbaru kami, atau kalian bisa lihat
              kegiatan menarik lainnya juga!
            </h2>

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
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  className: "border-default-800/60",
                })}
                href={siteConfig.links.instagram}
              >
                <InstagramIcon size={20} />
                Instagram
              </Link>
            </div>
          </div>
        </TitleContainer>
      </Section>
      {/* HERO::END */}
      {/* KEGIATAN::START */}
      <div className="relative">
        <div
          className="absolute inset-0 mt-4 text-slate-900 shadow-inner shadow-black bg-fixed bg-center bg-no-repeat bg-cover -mx-6 flex justify-center -z-50"
          style={{ backgroundImage: "url(/explorer_orange_sunset.jpg)" }}
        />
        <Section>
          <Kegiatan kegiatans={kegiatans} />
        </Section>
      </div>
      {/* KEGIATAN::END */}
      {/* GALERI::START */}
      <Section>
        <Galeri />
      </Section>
      {/* GALERI::END */}
    </>
  );
}
