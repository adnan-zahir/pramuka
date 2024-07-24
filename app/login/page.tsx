import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import Messages from "./messages";

import { TitleContainer } from "@/components/titlecountainer";
import { Section } from "@/components/section";
import { subtitle, title } from "@/components/primitives";

export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <Section className="md:flex-row md:justify-around md:items-start">
      <Section className="hidden md:block">
        <TitleContainer className="!text-left">
          <h1 className={title()}>Selamat Datang Kembali</h1>
          <p className={subtitle()}>Masuk dengan akun anggota untuk menyunting konten dan artikel, juga menyesuaikan profilmu!</p>
        </TitleContainer>
      </Section>
      <Section>
        <TitleContainer>
          <h2 className={title()}>Masuk Akun</h2>
        </TitleContainer>
        <div className="grid place-items-center min-h-[60vh] w-full">
          <form
            action="/auth/sign-in"
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
            <Button className="min-w-40" color="success" type="submit">
              Sign In
            </Button>
            <div>
              <span>Belum punya akun?{" "}</span>
              <Link href="/signup" color="primary">
                Daftar
              </Link>
            </div>
            <Messages />
          </form>
        </div>
      </Section>
    </Section>
  );
}
