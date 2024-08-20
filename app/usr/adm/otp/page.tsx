import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Metadata } from "next";

import Messages from "./messages";

import { Section } from "@/components/section";
import { TitleContainer } from "@/components/titlecountainer";
import { title } from "@/components/primitives";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OTP",
};

export default function OTP() {
  return (
    <Section>
      <TitleContainer>
        <h2 className={title()}>Buat kode OTP</h2>
      </TitleContainer>
      <div className="grid place-items-center min-h-[60vh] w-full">
        <form
          action="/auth/make-otp"
          className="flex w-full max-w-lg flex-col items-center gap-2"
          method="post"
        >
          <Input
            isRequired
            required
            label="Email"
            name="email"
            placeholder="you@example.com"
          />
          <Button className="min-w-40" color="primary" type="submit">
            Generate
          </Button>
          <Messages />
        </form>
      </div>
    </Section>
  );
}
