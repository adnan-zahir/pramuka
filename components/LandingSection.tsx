export default function LandingSection(
  {title, children}:
  {title: string, children?: any}
) {
  return (
    <div className="flex flex-col p-5 bg-foreground">
      <h3 className="font-display text-2xl mb-4">{title}</h3>
      {children}
    </div>
  )
}