import { FC, PropsWithChildren, CSSProperties } from "react";

export const Section: FC<
  PropsWithChildren<{ className?: string; style?: CSSProperties }>
> = ({ children, className, style }) => {
  return (
    <section
      className={[
        className,
        "flex flex-col items-center justify-center gap-4 py-8 md:py-10",
      ].join(" ")}
      style={style}
    >
      {children}
    </section>
  );
};
