'use client';
import { Button } from '@material-tailwind/react';

export default function LinkBtn({
	href = '#',
	text = 'Lihat',
	className,
}: {
	href?: string;
	text?: string;
	className?: string;
}) {
	return (
		<a
			className="z-10"
			href={href}
		>
			<Button
				placeholder={undefined}
				color="light-brown"
			>
				{text}
			</Button>
		</a>
	);
}
