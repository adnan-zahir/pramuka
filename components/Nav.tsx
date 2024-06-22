'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SideBar from './SideBar';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleOpen = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<nav className="w-full flex justify-center h-16 sticky top-0 z-50 bg-gradient-to-b from-background via-background via-80% to-transparent">
			{/* Main Nav */}
			<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
				<div className="flex-1">Graha Pancaka</div>
				<button
					className="h-full p-3 aspect-square rounded-3xl transition-colors hover:bg-foreground/20"
					onClick={toggleOpen}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
			{/* Side Collapse */}
			<div
				className="absolute min-h-screen w-screen flex flex-col"
				style={isNavOpen ? {} : { pointerEvents: 'none' }}
			>
				<SideBar isNavOpen={isNavOpen} />
				<div
					className="absolute min-h-screen w-screen bg-black/20 transition-opacity"
					style={isNavOpen ? {} : { opacity: '0' }}
					onClick={toggleOpen}
				></div>
			</div>
		</nav>
	);
}
