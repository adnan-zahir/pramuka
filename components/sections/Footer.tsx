import Link from 'next/link';

export default function Footer() {
	return (
		<div className="flex text-slate-300/70">
			<div className="flex flex-col flex-1 text-left">
				<span className="text-slate-300/90">Sosial Media</span>
				<Link
					href="#"
					className="hover:underline"
				>
					Instagram
				</Link>
				<Link
					href="#"
					className="hover:underline"
				>
					Twitter
				</Link>
				<Link
					href="#"
					className="hover:underline"
				>
					Facebook
				</Link>
			</div>
			<div className="flex flex-col flex-1 text-right">
				<span className="text-slate-300/90">Kontak</span>
				<Link
					href="#"
					className="hover:underline"
				>
					Pembina Putra
				</Link>
				<Link
					href="#"
					className="hover:underline"
				>
					Pembina Putri
				</Link>
				<Link
					href="#"
					className="hover:underline"
				>
					Humas
				</Link>
			</div>
		</div>
	);
}
