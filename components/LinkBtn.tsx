import classNames from "classnames"

export default function LinkBtn({ href = "#", text = "Lihat", className }: { href?: string, text?: string, className: string }){
  return (
    <a href={href} className={classNames("px-3 py-1 bg-foreground text-sm text-black rounded-full border border-foreground transition-colors hover:bg-foreground/20 hover:text-white", className)}>
      {text}
    </a>
  );
};
