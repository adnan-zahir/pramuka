export default function LandingSection({
	title,
	bg = 'foreground',
	children,
}: {
	title?: string;
	bg?: 'foreground' | 'background';
	children?: any;
}) {
	return (
		<div className={`flex flex-col p-5 bg-${bg}`}>
			<h3
				className="font-display text-2xl mb-4"
				style={{ display: title ? 'inline' : 'none' }}
			>
				{title}
			</h3>
			{children}
		</div>
	);
}
