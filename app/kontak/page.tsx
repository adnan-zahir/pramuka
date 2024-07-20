"use client";

import { FormTabs } from "@/components/kontak/formtabs";
import { subtitle, title } from "@/components/primitives";
import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";

export default function KontakPage() {
  return (
    <>
      <Section>
        <TitleContainer>
          <h1 className={title()}>Kontak</h1>
          <h2 className={subtitle()}>
            Hubungi kami perihal apapun melalui Email atau Whatsapp.
          </h2>
        </TitleContainer>
      </Section>
      <Section>
        <FormTabs />
      </Section>
    </>
  );
}
