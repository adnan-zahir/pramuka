export default function SideBar({ isNavOpen }: { isNavOpen: boolean }) {
	const menuList = ['Home', 'About', 'Gallery', 'Activity', 'Contact'];

	return (
		<div
			className="min-h-screen min-w-[200px] max-w-[80vmin] bg-gradient-to-b from-white to-foreground z-50 transition-[translate]"
			style={isNavOpen ? {} : { translate: '-100% 0%' }}
		>
			{/* Top Blank */}
			<div className="h-16 w-full" />
			{/* List Group */}
			<div className="flex flex-col">
				{menuList.map((list) => (
					<a
						href="#"
						className="p-4 overflow-scroll border-b-2 border-solid border-b-background/50 transition-colors hover:bg-black/15"
					>
						{list}
					</a>
				))}
			</div>
		</div>
	);
}
