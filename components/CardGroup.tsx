export default function CardGroup(
  {cols, children}:
  {cols: number, children: any}
) {
  return (
    <div
      className="grid gap-4 justify-center items-center"
      style={
        {
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
        }
      }
    >
      {children}
    </div>
  )
}