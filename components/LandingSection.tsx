export default function LandingSection(
  {title, children}:
  {title: string, children?: any}
) {
  return (
    <div className="flex flex-col p-5 bg-slate-400">
      <h3>{title}</h3>
      {children}
    </div>
  )
}