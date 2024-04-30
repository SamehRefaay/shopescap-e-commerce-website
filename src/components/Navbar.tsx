'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '@/assets/white-logo5.png';
import { IoCloseOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';

const Navbar = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const pathName = usePathname();

	const navBarList = [
		{ title: 'Home', href: '/' },
		{ title: 'Shop', href: '/shop' },
		{ title: 'Cart', href: '/cart' },
		{ title: 'Profile', href: '/profile' },
		{ title: 'Studio', href: '/studio' },
	];
	return (
		<div className="sticky top-0 left-0 z-50 w-full bg-white border-b-[1px] border-b-gray-400">
			<nav className="w-full max-w-screen-xl px-4 xl:p-0 h-20 mx-auto flex justify-between items-center ">
				{/* logo */}
				<Link className="" href={'/'}>
					<Image src={logo} alt="logo" className="w-24 h-20" />
				</Link>

				{/* search bar */}
				<div className="relative hidden lg:inline-flex w-full lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black px-6 rounded-md justify-between items-center gap-2">
					<input
						type="text"
						placeholder="Search your products here"
						className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					{searchQuery ? (
						<IoCloseOutline
							onClick={() => setSearchQuery('')}
							className="w-5 h-5 cursor-pointer hover:text-red-500 duration-200"
						/>
					) : (
						<FaSearch className="w-5 h-5 cursor-pointer" />
					)}
				</div>
				{/* nav links */}
				<div className="hidden md:inline-flex items-center gap-2">
					{navBarList.map(link => (
						<Link
							key={link.title}
							href={link.href}
							className={`flex w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:font-medium hover:text-gray-950 border-r-[2px] border-r-gray-400  duration-200 last:border-r-0 ${
								pathName === link.href && 'text-gray-950 underline'
							}`}
						>
							{link.title}
						</Link>
					))}
				</div>
				<HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
			</nav>
		</div>
	);
};

export default Navbar;
