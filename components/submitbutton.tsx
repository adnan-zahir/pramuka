"use client";

import { Button } from "@nextui-org/button";
import { ReactElement } from "react";

export function SubmitButton({
  children,
  color,
  variant,
}: {
  children: ReactElement | string;
  color: any;
  variant: any;
}) {
  return (
    <Button
      color={color || "success"}
      type="submit"
      variant={variant}
    >
      {children || "Submit"}
    </Button>
  );
}
