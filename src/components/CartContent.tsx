'use client';
import { ProductProps } from '@/lib/types';
import CartListItem from '@/components/CartListItem';
import { useDispatch } from 'react-redux';
import { resetCart } from '@/lib/features/cart/cartSlice';
import toast from 'react-hot-toast';
import CartTableHeader from './CartTableHeader';
import CartTotal from './CartTotal';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';

interface Props {
	products: ProductProps[];
}

const CartContent = ({ products }: Props) => {
	const dispatch = useDispatch();
	const { data: session } = useSession();

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

	const stripePromise = loadStripe(
		process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
	);

	const handleCheckout = async () => {
		if (session?.user) {
			const stripe = await stripePromise;
			const response = await fetch('http://localhost:3000/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					items: products,
					email: session?.user?.email,
				}),
			});
			const data = await response.json();
			console.log(response);
			if (response.ok) {
				stripe?.redirectToCheckout({ sessionId: data.id });
			}
		} else {
			toast.error('Please sign in to make checkout');
		}
	};

	return (
		<div className="mb-20">
			<CartTableHeader />
			{products.map(product => (
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
			<CartTotal
				subtotal={calculateSubtotal()}
				shippingCharge={20}
				total={calculateTotal()}
			/>
			<div className="mt-4 w-full flex justify-end text-center ">
				<button
					onClick={handleCheckout}
					className="w-full md:w-1/2 lg:w-1/3 p-4 opacity-90 hover:opacity-100 bg-black text-white"
				>
					Proceed to checkout
				</button>
			</div>
		</div>
	);
};

export default CartContent;
