import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emptyCart from '@/assets/emptyCart.png';

const EmptyCart = () => {
	return (
		<motion.div
			initial={{ y: 30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4 }}
			className="flex flex-col md:flex-row justify-center items-center gap-4 pb-20"
		>
			<div>
				<Image
					src={emptyCart}
					alt="emptyCart"
					className="w-80 rounded-lg p-4 mx-auto"
				/>
			</div>
			<div className="max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg">
				<h1 className="text-xl font-bold uppercase">Your Cart feels lonely.</h1>
				<p className="text-sm text-center px-10 -mt-2">
					Your Shopping cart lives to serve. Give it purpose - fill it with
					books, electronics, videos, etc. and make it happy.
				</p>
				<Link
					href={'/'}
					className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-semibold text-lg text-gray-200 hover:text-white duration-300"
				>
					Continue Shopping
				</Link>
			</div>
		</motion.div>
	);
};

export default EmptyCart;
