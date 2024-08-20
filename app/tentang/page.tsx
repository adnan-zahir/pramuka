import { Metadata } from "next";

import { title } from "@/components/primitives";
import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";

export const metadata: Metadata = {
  title: "Tentang",
};

export default function AboutPage() {
  return (
    <Section>
      <TitleContainer>
        <h1 className={title()}>YOHOHOHOOHOH</h1>
      </TitleContainer>
    </Section>
  );
}
