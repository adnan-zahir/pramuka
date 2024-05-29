export default function CardGroup(
  {cols, children}:
  {cols: number, children: any}
) {
  return (
    <div className={`grid grid-cols-${cols} gap-4 justify-center items-center`}>
      {children}
    </div>
  )
}