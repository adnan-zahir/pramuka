"use client";

import { Button } from "@nextui-org/button";
import { ReactElement } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  color,
  variant,
}: {
  children: ReactElement | string;
  color: any;
  variant: any;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      color={color || "success"}
      isLoading={pending}
      type="submit"
      variant={variant}
    >
      {children || "Submit"}
    </Button>
  );
}
