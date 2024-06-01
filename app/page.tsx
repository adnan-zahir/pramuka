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
								image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.scout.id%2Fwp-content%2Fuploads%2F2019%2F11%2Fpramuka-penggalang-berseragam-tampak-gagah.jpg&f=1&nofb=1&ipt=6b12a7ad36f9441362f5a88cdb45509a396df5ff7b9a321d9b048aaa87d40bb8&ipo=images"
								title="Article One"
								url="test"
							/>
							<Card
								num="02"
								image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirasiguru.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ff2baf7bb-6df3-43f7-b853-5a8b73d47e29.jpeg&f=1&nofb=1&ipt=0df6df5b394e638ad93ebe0363c761d00e14506f2ce026700d3a9d54774736cc&ipo=images"
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
								image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.scout.id%2Fwp-content%2Fuploads%2F2019%2F12%2Fpramuka-penegak-putri-berseragam.jpg&f=1&nofb=1&ipt=bba105a379a82c9dba1a1529ff45cf306d53b87099cff6046c654b1c5d012b30&ipo=images"
								title="Article One"
								url="test"
							/>
							<Card
								num="02"
								image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-8ikuzJn5prA%2FWNaGgIzdYzI%2FAAAAAAAAREo%2FdvJUB7W3IcAmuHqg_hEbSTET6Tnfg1p3ACLcB%2Fs640%2Fpramuka.JPG&f=1&nofb=1&ipt=86b890d62a1c337baf02c5923576a5f7fea6be14407970bdbe1b4941259df144&ipo=images"
								title="RUMPUT HEHEHE"
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
