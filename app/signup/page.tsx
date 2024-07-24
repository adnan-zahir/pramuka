import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import Messages from "./messages";

import { TitleContainer } from "@/components/titlecountainer";
import { Section } from "@/components/section";
import { title } from "@/components/primitives";

export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <Section>
      <TitleContainer>
        <h2 className={title()}>Daftar Akun</h2>
      </TitleContainer>
      <div className="grid place-items-center min-h-[60vh] w-full">
        <form
          action="/auth/sign-up"
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
          <Input
            isRequired
            required
            label="Password"
            name="password"
            placeholder="••••••••"
            type="password"
          />
          <Input
            isRequired
            required
            label="OTP"
            name="otp"
            placeholder="XXXXXX"
            type="text"
          />
          <Button className="min-w-40" color="primary" type="submit">
            Sign Up
          </Button>
          <Messages />
        </form>
      </div>
    </Section>
  );
}
