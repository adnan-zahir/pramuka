import { createClient } from '@/utils/supabase/server';
import Header from '@/components/sections/Header';
import LandingSection from '@/components/LandingSection';
import CardGroup from '@/components/CardGroup';
import Card from '@/components/Card';
import LinkBtn from '@/components/LinkBtn';

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
			<div className="animate-in flex-1 flex flex-col opacity-0 max-w-4xl">
				<Header />
				<main className="flex-1 flex flex-col">
					{/* ACTIVITY */}
					<LandingSection title="Berita dan Kegiatan">
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
					<LandingSection title="Galeri Kami">
						<CardGroup cols={2}>
							<Card
								num="01"
								image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.scout.id%2Fwp-content%2Fuploads%2F2019%2F12%2Fpramuka-penegak-putri-berseragam.jpg&f=1&nofb=1&ipt=bba105a379a82c9dba1a1529ff45cf306d53b87099cff6046c654b1c5d012b30&ipo=images"
								title="Article One"
								url="test"
							/>
							<Card
								num="02"
								image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-Y3v9sXBW4s8%2FXNCiiEGkFoI%2FAAAAAAAAADw%2FvUp16OWNHa4vof-LMGYoKjHaiurLe9cMgCLcBGAs%2Fs1600%2Filustrasi-pramuka.jpg&f=1&nofb=1&ipt=6026130a8407ee152a2073a4dac8da599c2e46ecb215c40d947bcf462f5961a2&ipo=images"
								title="Article Two"
								url="test"
							/>
						</CardGroup>
					</LandingSection>
					<LandingSection
						title="Kenali Dewan Ambalan"
						bg="background"
					>
						<span className="my-2">Putra</span>
						<CardGroup cols={3}>
							<div
								className="relative aspect-[3/4] rounded-lg p-2 flex items-end justify-center text-sm"
								style={{
									background:
										'url(https://i.pinimg.com/564x/63/1d/a8/631da82db7aac2d658dcbebbca4fab53.jpg)',
									backgroundSize: 'cover',
									backgroundPosition: 'center top',
								}}
							>
								<span>Pradana</span>
							</div>
							<div
								className="relative aspect-[3/4] rounded-lg p-2 flex items-end justify-center text-sm"
								style={{
									background:
										'url(https://i.pinimg.com/564x/63/1d/a8/631da82db7aac2d658dcbebbca4fab53.jpg)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<span>Kerani</span>
							</div>
							<div
								className="relative aspect-[3/4] rounded-lg p-2 flex items-end justify-center text-sm"
								style={{
									background:
										'url(https://i.pinimg.com/564x/63/1d/a8/631da82db7aac2d658dcbebbca4fab53.jpg)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<span>Hartaka</span>
							</div>
						</CardGroup>
						<span className="my-2">Putri</span>
						<CardGroup cols={3}>
							<div
								className="relative aspect-[3/4] rounded-lg p-2 flex items-end justify-center text-sm"
								style={{
									background:
										'url(https://i.pinimg.com/564x/63/1d/a8/631da82db7aac2d658dcbebbca4fab53.jpg)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<span>Pradana</span>
							</div>
							<div
								className="relative aspect-[3/4] rounded-lg p-2 flex items-end justify-center text-sm"
								style={{
									background:
										'url(https://i.pinimg.com/564x/63/1d/a8/631da82db7aac2d658dcbebbca4fab53.jpg)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<span>Kerani</span>
							</div>
							<div
								className="relative aspect-[3/4] rounded-lg p-2 flex items-end justify-center text-sm"
								style={{
									background:
										'url(https://i.pinimg.com/564x/63/1d/a8/631da82db7aac2d658dcbebbca4fab53.jpg)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<span>Hartaka</span>
							</div>
						</CardGroup>
						<div className="mx-auto mt-2">
							<LinkBtn
								href="/tentang"
								text="Selengkapnya"
							/>
						</div>
					</LandingSection>
				</main>
			</div>
		</div>
	);
}
