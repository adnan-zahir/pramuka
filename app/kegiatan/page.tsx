import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { title, subtitle } from "@/components/primitives";
import { createClient } from "@/utils/supabase/server";
import { DBKegiatan } from "@/types";

export default async function KegiatanPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("kegiatans")
    .select("*, paragraph:paragraph (text)")
    .eq("paragraph.no", 1);
  const kegiatans = data as unknown as DBKegiatan[];

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Kegiatan</h1>
          <h2 className={subtitle()}>
            Telusuri berbagai kegiatan kami di sini! Simak blog kami untuk
            mengikuti jejak eksplorasi dan serunya aktifitas Graha Pancaka.
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col max-w-lg text-center justify-center gap-4">
          {kegiatans?.map((kegiatan, i) => (
            <Link
              key={`${i}. ${kegiatan.name}`}
              href={`kegiatan/${kegiatan.id}`}
            >
              <Card>
                <Image
                  removeWrapper
                  alt="Thumbnail"
                  className="h-full aspect-video object-cover"
                  radius="sm"
                  src={kegiatan.imageUrl}
                />
                <CardHeader>
                  <span className={title({ size: "sm" })}>{kegiatan.name}</span>
                </CardHeader>
                <CardBody>
                  <p>{kegiatan.paragraph[0].text.substring(0, 200) + "..."}</p>
                </CardBody>
                <CardFooter>
                  <span
                    className={subtitle({ className: "text-sm text-right" })}
                  >
                    {kegiatan.date.toString()}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
