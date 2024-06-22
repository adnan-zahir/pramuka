export default function FeedCard() {
	return (
		<div className="relative flex max-w-[20rem] flex-col gap-6 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
			<div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
				<img
					src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
					alt="ui/ux review check"
				/>
			</div>
			<div className="px-6">
				<h4 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
					UI/UX Review Check
				</h4>
				<p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
					Because it's about motivating the doers. Because I'm here to follow my
					dreams and inspire others.
				</p>
			</div>
			<div className="px-6">
				<p className="block font-sans text-sm text-right font-normal leading-relaxed text-inherit antialiased">
					January 10
				</p>
			</div>
		</div>
	);
}
