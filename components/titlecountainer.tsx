import { FC, PropsWithChildren } from "react";

export const TitleContainer: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={[
        className,
        "inline-block max-w-lg text-center justify-center",
      ].join(" ")}
    >
      {children}
    </div>
  );
};
