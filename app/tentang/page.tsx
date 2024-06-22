import CardGroup from '@/components/CardGroup';
import Filler from '@/components/Filler';
import LandingSection from '@/components/LandingSection';
import LinkBtn from '@/components/LinkBtn';
import TwoCols from '@/components/sections/TwoCols';

export default function Tentang() {
	return (
		<div className="flex-1 w-full flex flex-col items-center">
			<div className="animate-in flex-1 flex flex-col opacity-0 w-full max-w-4xl">
				<Filler />
				<main className="flex-1 flex flex-col">
					<LandingSection title="Gerakan&nbsp;Pramuka Graha&nbsp;Pancaka">
						<TwoCols>
							{/* LEFT */}
							<div>
								<img
									src="https://www.scout.org/sites/default/files/styles/squared_medium/public/2022-01/el_180805_kisc_roverweek2018_018.jpg.webp?itok=veLzIcFP"
									alt="Scout"
									className="w-full aspect-square object-cover"
								/>
							</div>
							{/* RIGHT */}
							<div>
								<span className="inline-block pb-2 border-b-4 border-background">
									VISI & MISI
								</span>
								<p>
									Scouting's mission is to contribute to the education of young
									people through a value system based on the Scout Promise and
									Law. Through Scouting, we are building a better world where
									people are self-fulfilled as individuals and play a
									constructive role in society.
								</p>
								<p>
									By 2023, Scouting’s vision is to be the world’s leading
									educational youth Movement, enabling 100 million young people
									to be active citizens who create positive change in their
									communities and around the world based on shared values.
								</p>
							</div>
						</TwoCols>
					</LandingSection>
					<LandingSection bg="background">
						<div className="text-center flex max-sm:flex-col p-4 gap-4">
							<div>Lihat kegiatan terbaru kami!</div>
							<div>
								<LinkBtn
									href="/kegiatan"
									text="Selengkapnya"
								/>
							</div>
						</div>
					</LandingSection>
					<LandingSection>
						<TwoCols reverse>
							{/* LEFT */}
							<div className="flex-1">
								<span className="inline-block pb-2 border-b-4 border-background">
									SANDI AMBALAN
								</span>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Optio culpa a quae officia delectus vitae aspernatur neque,
									tempora dolorum ipsum minima vero facere, repellendus maxime
									corrupti iusto non perferendis iste.
								</p>
							</div>
							{/* RIGHT */}
							<div className="flex-1">
								<img
									src="https://www.scout.org/sites/default/files/styles/squared_medium/public/2022-04/44030095941_524c54a4a7_o.jpeg.webp?itok=AAZz60wt"
									alt="Sandi"
								/>
							</div>
						</TwoCols>
					</LandingSection>
					<LandingSection bg="background">
						<div className="text-center flex items-center p-4 gap-4">
							<div>
								<img
									src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-rnOzbc-hyHE%2FWo9tcLiRrEI%2FAAAAAAAAD60%2FJJ5hoKkHP8Y0WE0Jq7OlxQa0hEYuif4bQCLcBGAs%2Fs1600%2FLord%252BBaden-Powell.jpg&f=1&nofb=1&ipt=f7af6067f26e4be1cc61a43d3428afbf816a345154ae22a103b39094b9e8d6aa&ipo=images"
									alt="Baden Powell"
									className="max-h-56 bg-foreground p-1"
								/>
							</div>
							<div>
								<span>
									<q className="text-slate-900/95">
										Try to leave this world a little better than you found it.
									</q>
									<cite> -&nbsp;Lord Baden Powell</cite>
								</span>
							</div>
						</div>
					</LandingSection>
					<LandingSection>
						<TwoCols>
							{/* LEFT */}
							<div className="flex-1">
								<span className="inline-block pb-2 border-b-4 border-background">
									Dewan Ambalan Putra
								</span>
								<div className="my-4">
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
								</div>
							</div>
							{/* RIGHT */}
							<div className="flex-1">
								<span className="inline-block pb-2 border-b-4 border-background">
									Dewan Ambalan Putri
								</span>
								<div className="my-4">
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
								</div>
							</div>
						</TwoCols>
					</LandingSection>
				</main>
			</div>
		</div>
	);
}
