import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <TitleContainer>{children}</TitleContainer>
    </Section>
  );
}
