export default function Card(
  {num, image, title, url}:
  {num: string, image: any, title: string, url: string}
) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      <div>{num}</div>
      <img src={image} />
      <div>{title}</div>
      <a href={url}>Lihat</a>
    </div>
  )
}