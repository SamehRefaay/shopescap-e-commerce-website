'use client';
import Container from '@/components/Container';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../../type';
import CartListItem from '@/components/CartListItem';
import { useDispatch } from 'react-redux';
import Price from '@/components/Price';
import { resetCart } from '@/lib/features/cart/cartSlice';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emptyCart from '@/assets/emptyCart.png';

const cartHeaders = [
	{ key: 'h001', title: 'Product' },
	{ key: 'h002', title: 'Price' },
	{ key: 'h003', title: 'Quantity' },
	{ key: 'h004', title: 'Sub Total' },
];
const CartPage = () => {
	const dispatch = useDispatch();
	const products = useSelector((state: StoreState) => state.cart);

	const calculateSubtotal = () => {
		return products.reduce(
			(total, product) => total + product?.quantity * product?.price,
			0
		);
	};

	const calculateTotal = () => {
		const shippingCharge = 20;
		return calculateSubtotal() + shippingCharge;
	};

	const handleResetCart = () => {
		const confirmed = window.confirm('Are you sure to reset your Cart?');
		if (confirmed) {
			dispatch(resetCart());
			toast.success('Cart has been reset successfully!');
		}
	};
	return (
		<Container>
			{products.length !== 0 ? (
				<div className="mb-20">
					<div className="hidden mt-10 w-full h-16 md:grid gap-4 grid-cols-5 bg-gray-200">
						{cartHeaders.map(header => (
							<span
								key={header.key}
								className="first:col-span-2 col-span-1 grid place-content-center text-xl text-center"
							>
								{header.title}
							</span>
						))}
					</div>
					{products &&
						products.map(product => (
							<CartListItem key={product?._id} product={product} />
						))}
					<button
						className="mt-4 h-12 w-52 uppercase text-xl text-white bg-red-500 cursor-pointer hover:bg-red-600"
						onClick={handleResetCart}
					>
						Reset Cart
					</button>
					<div className="w-full mt-4 p-4 flex flex-col md:flex-row gap-4 justify-between md:items-center border">
						<div className="flex gap-4 items-center">
							<input
								className="p-4 text-gray-500 border-[1px] border-gray-300 outline-none "
								type="text"
								placeholder="Coupon Number"
							/>
							<button>Apply Coupon</button>
						</div>
						<p className="text-lg font-medium text-gray-500">Update Cart</p>
					</div>
					<div className="mt-4 w-full flex flex-col items-end">
						<h3 className="text-xl text-primeColor font-bold">Cart Totals</h3>
						<div className="w-full md:w-1/2 lg:w-1/3 mt-4 flex flex-col border-[1px] border-gray-300">
							<div className="p-4 flex justify-between border-b-[1px] border-gray-300 font-medium">
								<span className="text-primeColor">Subtotal</span>{' '}
								<Price amount={calculateSubtotal()} />
							</div>
							<div className="p-4 flex justify-between border-b-[1px] border-gray-300 font-medium">
								<span className="text-primeColor">Shipping Charge</span>{' '}
								<Price amount={20} />
							</div>
							<div className="p-4 flex justify-between font-bold">
								<span className="">Total</span>{' '}
								<Price amount={calculateTotal()} />
							</div>
						</div>
					</div>
					<div className="mt-4 w-full flex justify-end text-center ">
						<button className="w-full md:w-1/2 lg:w-1/3 p-4 opacity-90 hover:opacity-100 bg-black text-white">
							Proceed to checkout
						</button>
					</div>
				</div>
			) : (
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
						<h1 className="text-xl font-bold uppercase">
							Your Cart feels lonely.
						</h1>
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
			)}
		</Container>
	);
};

export default CartPage;
