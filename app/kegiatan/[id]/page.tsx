import { Image } from "@nextui-org/image";
// eslint-disable-next-line unused-imports/no-unused-imports
import { Snippet } from "@nextui-org/snippet";

import { title } from "@/components/primitives";
import { DBKegiatan, DBParagraph, paragraphType } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function KegiatanDetail({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("kegiatans")
    .select(`*, paragraph:paragraph (*)`)
    .eq("id", params.id);

  const kegiatans = data as unknown as DBKegiatan[];
  const kegiatan = kegiatans[0];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>{kegiatan.name}</h1>
      </div>
      <Image
        isBlurred
        alt={kegiatan.name}
        className="w-full"
        src={kegiatan.imageUrl}
      />
      {kegiatan.paragraph
        .sort((a, b) => a.no - b.no)
        .map((p: DBParagraph, i) => (
          <>
            {p.type == paragraphType.REGULAR && <p key={i}>{p.text}</p>}
            {p.type == paragraphType.QUOTE && (
              <Snippet
                key={i}
                hideCopyButton
                hideSymbol
                className="custom-quote"
              >
                {p.text}
              </Snippet>
            )}
          </>
        ))}
    </section>
  );
}
