'use client';
import Container from '@/components/Container';
import { resetCart } from '@/lib/features/cart/cartSlice';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SuccessPage = ({ searchParams }: any) => {
	const dispatch = useDispatch();

	useEffect(() => {
		!searchParams.session_id ? redirect('/') : dispatch(resetCart());
	}, []);

	return (
		<Container className="h-[calc(100vh-150px)] flex flex-col justify-center items-center p-20">
			<h2 className="text-4xl font-bold text-primeColor">
				Your Payment is Accepted by shpoescape.com
			</h2>
			<p className="mt-10 text-xl text-gray-500">
				Now you can view your orders or continue shopping with us.
			</p>
			<div className="mt-10 flex justify-center items-center gap-4">
				<Link href={'/orders'}>
					<button className="bg-black text-white w-40 h-10 grid place-content-center bg-opacity-80 rounded-md hover:bg-opacity-100">
						View Orders
					</button>
				</Link>
				<Link href={'/'}>
					<button className="bg-black text-white w-40 h-10 grid place-content-center bg-opacity-80 rounded-md hover:bg-opacity-100">
						Continue Shopping
					</button>
				</Link>
			</div>
		</Container>
	);
};

export default SuccessPage;
