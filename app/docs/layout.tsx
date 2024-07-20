import { Section } from "@/components/section";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </Section>
  );
}
