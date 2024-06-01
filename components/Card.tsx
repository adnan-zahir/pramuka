import LinkBtn from './LinkBtn';

export default function Card({
	num,
	image,
	title,
	url,
}: {
	num: string;
	image: any;
	title: string;
	url: string;
}) {
	return (
		<div
			className="
          relative
          flex
          flex-col
          gap-4
          h-[60vmin]
          rounded-lg
          p-2
          items-center
          overflow-clip
          card-bg
          text-white
          before:pointer-events-none before:bg-gradient-to-b before:from-foreground/40 before:via-transparent before:to-black/50 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0
          "
			style={{ background: `url(${image})`, backgroundSize: 'cover' }}
		>
			<div className="flex-1 self-start text-lg z-10">{num}</div>
			<div className="text-sm z-10">{title}</div>
			<LinkBtn
				className="z-10"
				href={url}
			/>
		</div>
	);
}
