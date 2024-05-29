import DeployButton from '../components/DeployButton';
import AuthButton from '../components/AuthButton';
import { createClient } from '@/utils/supabase/server';
import ConnectSupabaseSteps from '@/components/tutorial/ConnectSupabaseSteps';
import SignUpUserSteps from '@/components/tutorial/SignUpUserSteps';
import Header from '@/components/Header';
import LandingSection from '@/components/LandingSection';
import CardGroup from '@/components/CardGroup';
import Card from '@/components/Card';

export default async function Index() {
	const canInitSupabaseClient = () => {
		// This function is just for the interactive tutorial.
		// Feel free to remove it once you have Supabase connected.
		try {
			createClient();
			return true;
		} catch (e) {
			return false;
		}
	};

	const isSupabaseConnected = canInitSupabaseClient();

	return (
		<div className="flex-1 w-full flex flex-col items-center">
			<nav className="w-full flex justify-center h-16">
				<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
					<span>Graha Pancaka</span>
					<button>Menu</button>
				</div>
			</nav>

			<div className="animate-in flex-1 flex flex-col opacity-0 max-w-4xl">
				<Header />
				<main className="flex-1 flex flex-col">
					{/* ACTIVITY */}
					<LandingSection title="Kenali lebih dalam">
						<CardGroup cols={2}>
							<Card
								num="01"
								image="test"
								title="Article One"
								url="test"
							/>
							<Card
								num="02"
								image="test"
								title="Article Two"
								url="test"
							/>
						</CardGroup>
					</LandingSection>
					{/* GALLERY */}
					<LandingSection title="Galeri kami">
						<CardGroup cols={2}>
							<Card
								num="01"
								image="test"
								title="Article One"
								url="test"
							/>
							<Card
								num="02"
								image="test"
								title="Article Two"
								url="test"
							/>
						</CardGroup>
					</LandingSection>
				</main>
			</div>

			<footer className="w-full bg-slate-300/70 border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
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
		</div>
	);
}
