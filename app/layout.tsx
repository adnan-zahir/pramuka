import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/sections/Footer';
import { ThemeProvider } from '@/components/MaterialTailwind';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

// TODO: Change description
export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'Pramuka Graha Pancaka',
	description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const customTheme = {
		button: {
			valid: {
				colors: ['light-brown'],
			},
			styles: {
				variants: {
					filled: {
						'light-brown': {
							backgroud: 'bg-foreground',
							color: 'text-background',
							shadow: 'shadow-md shadow-brown-500/10',
							hover: 'hover:shadow-lg hover:shadow-brown-500/20',
							focus: 'focus:opacity-[0.85] focus:shadow-none',
							active: 'active:opacity-[0.85] active:shadow-none',
						},
					},
					outlined: {
						'light-brown': {
							border: 'border border-background',
							color: 'text-background',
							hover: 'hover:opacity-75',
							focus: 'focus:ring focus:ring-brown-200',
							active: 'active:opacity-[0.85]',
						},
					},
				},
			},
		},
	};

	return (
		<ThemeProvider value={customTheme}>
			<html lang="en">
				<body className="bg-background text-black">
					<Nav />
					<main className="min-h-screen flex flex-col items-center">
						{children}
					</main>
					<footer className="w-full bg-slate-800 text-slate-300/90 border-t border-t-foreground/10 p-8 flex flex-col justify-center gap-4 text-center text-xs">
						<Footer />
						<p>
							Copyright&copy; by{' '}
							<a
								href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
								target="_blank"
								className="font-bold hover:underline"
								rel="noreferrer"
							>
								Graha Pancaka
							</a>
						</p>
					</footer>
				</body>
			</html>
		</ThemeProvider>
	);
}
