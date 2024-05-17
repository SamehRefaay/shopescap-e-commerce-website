'use client';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import React from 'react';
import { MdSwitchAccount } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { StoreState } from '@/lib/types';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import toast from 'react-hot-toast';

const PageButton = () => {
	const products = useSelector((state: StoreState) => state.cart);
	const { data: session } = useSession();
	return (
		<div className="fixed right-6 top-[50%] -translate-y-[50%] flex flex-col gap-2 z-20">
			<button
				onClick={() =>
					!session?.user ? signIn() : toast.error('You are already logged in')
				}
				className=" bg-white w-16 h-[70px] rounded-md group flex flex-col justify-center items-center cursor-pointer overflow-x-hidden shadow-testShadow"
			>
				{session?.user ? (
					<>
						<div className="flex justify-center items-center">
							<Image
								src={session?.user?.image as string}
								alt="user image"
								width={500}
								height={500}
								className="w-12 h-12 rounded-full -translate-x-12 group-hover:translate-x-6 transition-transform duration-200"
							/>
							<Image
								src={session?.user?.image as string}
								alt="user image"
								width={500}
								height={500}
								className="w-12 h-12 rounded-full -translate-x-6 group-hover:translate-x-12 transition-transform duration-200 "
							/>
						</div>
						<p className="text-xs">{session?.user?.name?.substring(0, 6)}</p>
					</>
				) : (
					<>
						<div className="flex justify-center items-center">
							<MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
							<MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200 " />
						</div>
						<p className="text-xs">Profile</p>
					</>
				)}
			</button>
			<Link
				href={'/cart'}
				className=" relative bg-white w-16 h-[70px] rounded-md flex flex-col justify-center items-center group cursor-pointer overflow-x-hidden shadow-testShadow"
			>
				<div className="flex justify-center items-center">
					<RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
					<RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200 " />
				</div>
				<p className="text-xs">Buy Now</p>
				<p className="absolute w-4 h-4 text-xs top-1 right-2 rounded-full bg-primeColor flex justify-center items-center text-white">
					{products.length > 0 ? products.length : 0}
				</p>
			</Link>
		</div>
	);
};

export default PageButton;
