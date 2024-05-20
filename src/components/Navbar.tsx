'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '@/assets/white-logo.png';
import { IoCloseOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';
import { signOut, useSession } from 'next-auth/react';

const navBarList = [
	{ title: 'Shop', href: '/shop' },
	{ title: 'Cart', href: '/cart' },
	{ title: 'Profile', href: '/profile' },
	{ title: 'Studio', href: '/studio' },
];

const Navbar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const pathName = usePathname();
	const { data: session } = useSession();

	return (
		<div
			className={`sticky top-0 left-0 z-50 w-full h-20 transition-transform duration-300 bg-white border-b-[1px] border-b-gray-400`}
		>
			<nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
				{/* logo */}
				<Link href={'/'}>
					<Image
						className="h-14 object-contain"
						src={logo}
						alt="logo"
						width={180}
						height={100}
					/>
				</Link>
				{/* search bar */}
				<div className="relative hidden lg:inline-flex w-full lg:w-[500px] h-10 text-base text-primeColor border-[1px]  px-6 rounded-md justify-between items-center gap-2">
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
							className={`flex w-14 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:font-medium hover:text-gray-950 border-r-[2px] border-r-gray-400  duration-200 last:border-r-0 ${
								pathName === link.href && 'text-gray-950 underline'
							}`}
						>
							{link.title}
						</Link>
					))}
					{session?.user && (
						<button
							onClick={() => signOut()}
							className={`flex w-14 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:font-medium hover:text-gray-950 border-r-[2px] border-r-gray-400  duration-200 last:border-r-0 
							}`}
						>
							Logout
						</button>
					)}
				</div>
				<HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
			</nav>
		</div>
	);
};

export default Navbar;
