import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import Messages from "./messages";

import { TitleContainer } from "@/components/titlecountainer";
import { Section } from "@/components/section";
import { title } from "@/components/primitives";

export default function Login() {
  return (
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
          <Button as={Link} href="/signup" className="min-w-40" color="primary" variant="bordered">
            Sign In
          </Button>
          <Messages />
        </form>
      </div>
    </Section>
  );
}
