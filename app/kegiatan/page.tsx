import FeedCard from '@/components/FeedCard';
import Filler from '@/components/Filler';
import LandingSection from '@/components/LandingSection';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tentang() {
	return (
		<div className="flex-1 w-full flex flex-col items-center">
			<div className="animate-in flex-1 flex flex-col opacity-0 w-full max-w-4xl">
				<Filler />
				<main className="flex-1 flex flex-col">
					<LandingSection title="Simak Kegiatan Kami">
						<div className="flex flex-wrap gap-6 justify-center">
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
						</div>
						{/* PAGINATION */}
						<ul className="my-4 mx-auto flex">
							<li>
								<a
									className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
									href="#"
									aria-label="Previous"
								>
									<span className="text-sm">
										<FontAwesomeIcon icon={faAngleLeft} />
									</span>
								</a>
							</li>
							<li>
								<a
									className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-background p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
									href="#"
								>
									1
								</a>
							</li>
							<li>
								<a
									className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
									href="#"
								>
									2
								</a>
							</li>
							<li>
								<a
									className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
									href="#"
								>
									3
								</a>
							</li>
							<li>
								<a
									className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
									href="#"
									aria-label="Next"
								>
									<span className="text-sm">
										<FontAwesomeIcon icon={faAngleRight} />
									</span>
								</a>
							</li>
						</ul>
					</LandingSection>
				</main>
			</div>
		</div>
	);
}
