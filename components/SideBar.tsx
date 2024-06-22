export default function SideBar({ isNavOpen }: { isNavOpen: boolean }) {
	const menuList = [
		{
			name: 'Beranda',
			url: '/',
		},
		{
			name: 'Kegiatan',
			url: '/kegiatan',
		},
		{
			name: 'Galeri',
			url: '/galeri',
		},
		{
			name: 'Tentang Kami',
			url: '/tentang',
		},
		{
			name: 'Kontak',
			url: '/kontak',
		},
	];

	return (
		<div
			className="min-h-screen min-w-[200px] max-w-[80vmin] bg-gradient-to-b from-white to-foreground z-50 transition-[translate]"
			style={isNavOpen ? {} : { translate: '-100% 0%' }}
		>
			{/* Top Blank */}
			<div className="h-16 w-full" />
			{/* List Group */}
			<div className="flex flex-col">
				{menuList.map((list, i) => (
					<a
						key={i}
						href={list.url}
						className="p-4 overflow-ellipsis border-b-2 border-solid border-b-background/10 transition-colors hover:bg-black/55"
					>
						{list.name}
					</a>
				))}
			</div>
		</div>
	);
}
