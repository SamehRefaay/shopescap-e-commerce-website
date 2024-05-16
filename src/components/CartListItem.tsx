'use client';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { ProductProps } from '../../type';
import { ImCross } from 'react-icons/im';
import Price from './Price';
import { useDispatch } from 'react-redux';
import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from '@/lib/features/cart/cartSlice';
import toast from 'react-hot-toast';
import Link from 'next/link';

interface Props {
	product: ProductProps;
}

const CartListItem = ({ product }: Props) => {
	const dispatch = useDispatch();
	return (
		<div className="w-full py-4 grid gap-4 grid-cols-3 md:grid-cols-5 border-[1px] border-t-0 border-gray-300 ">
			<div className="col-span-3 md:col-span-2 px-4 md:px-0 md:w-4/5 mx-auto flex gap-6 justify-start items-center text-center ">
				<ImCross
					className="cursor-pointer text-xl md:text-2xl text-red-500"
					onClick={() => {
						dispatch(removeFromCart(product));
						toast.success(
							`${product.title.substring(
								0,
								50
							)} has been removed form cart successfully!`
						);
					}}
				/>
				<Link
					className="flex flex-col md:flex-row items-center gap-4"
					href={`/product/${product?.slug?.current}`}
				>
					<Image
						className="w-20 h-20 object-contain"
						src={urlForImage(product?.image)}
						alt="product image"
						width={200}
						height={200}
					/>
					<span className="text-base text-primeColor font-medium">
						{`${product?.title?.substring(0, 30)}...`}
					</span>
				</Link>
			</div>
			<span className="grid place-content-center font-semibold text-center ">
				<Price amount={product?.price} />
			</span>
			<div className="w-full col-span-1 flex items-center justify-center gap-4  text-primeColor text-xl text-center ">
				<button
					className="w-8 h-8 bg-gray-200 text rounded-sm"
					onClick={() => {
						if (product.quantity > 1) {
							dispatch(decreaseQuantity(product));
						} else {
							toast.error('You can not decrease more than this.');
						}
					}}
				>
					-
				</button>
				<span className="text-base font-medium">{product?.quantity}</span>
				<button
					className="w-8 h-8 bg-gray-200 text rounded-sm"
					onClick={() => {
						dispatch(increaseQuantity(product));
					}}
				>
					+
				</button>
			</div>
			<span className="grid place-content-center font-semibold text-center ">
				<Price amount={product?.quantity * product?.price} />
			</span>
		</div>
	);
};

export default CartListItem;
