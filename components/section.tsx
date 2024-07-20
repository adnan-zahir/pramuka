import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <section
      className={[
        className,
        "flex flex-col items-center justify-center gap-4 py-8 md:py-10",
      ].join(" ")}
    >
      {children}
    </section>
  );
};
