import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { title, subtitle } from "@/components/primitives";
import { createClient } from "@/utils/supabase/server";
import { DBKegiatan } from "@/types";
import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kegiatan"
}

export default async function KegiatanPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("kegiatans")
    .select("*, paragraph:paragraph (text)")
    .eq("paragraph.no", 1)
    .order("date", { ascending: false });
  const kegiatans = data as unknown as DBKegiatan[];

  return (
    <>
      <Section>
        <TitleContainer>
          <h1 className={title()}>Kegiatan</h1>
          <h2 className={subtitle()}>
            Telusuri berbagai kegiatan kami di sini! Simak blog kami untuk
            mengikuti jejak eksplorasi dan serunya aktifitas Graha Pancaka.
          </h2>
        </TitleContainer>
      </Section>
      <Section>
        <div className="flex flex-wrap text-center justify-center gap-4">
          {kegiatans?.map((kegiatan, i) => (
            <Link
              key={`${i}. ${kegiatan.name}`}
              className="max-w-80 w-full"
              href={`kegiatan/${kegiatan.id}`}
            >
              <Card>
                <Image
                  removeWrapper
                  alt="Thumbnail"
                  className="w-full aspect-video object-cover"
                  radius="sm"
                  src={kegiatan.imageUrl}
                />
                <CardHeader>
                  <span className={title({ className: "!text-xl" })}>
                    {kegiatan.name}
                  </span>
                </CardHeader>
                <CardBody>
                  <p>{kegiatan.paragraph[0].text.substring(0, 100) + "..."}</p>
                </CardBody>
                <CardFooter>
                  <span
                    className={subtitle({ className: "!text-sm text-right" })}
                  >
                    {kegiatan.date.toString()}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
