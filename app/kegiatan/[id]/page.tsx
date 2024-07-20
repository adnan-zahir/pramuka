import { Image } from "@nextui-org/image";
// eslint-disable-next-line unused-imports/no-unused-imports
import { Snippet } from "@nextui-org/snippet";
import { Divider } from "@nextui-org/divider";

import { title } from "@/components/primitives";
import { DBKegiatan, DBParagraph, paragraphType } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";

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
    <Section>
      <TitleContainer>
        <h1 className={title()}>{kegiatan.name}</h1>
      </TitleContainer>
      <Divider />
      <Image
        isBlurred
        alt={kegiatan.name}
        className="w-full"
        src={kegiatan.imageUrl}
      />
      <Divider />
      <div className="text-justify flex flex-col gap-8 md:gap-10">
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
      </div>
    </Section>
  );
}
