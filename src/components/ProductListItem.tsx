import React from 'react';
import { ProductProps } from '../../type';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import Link from 'next/link';
import Price from './Price';
import Rating from './Rating';
import { BiCartAdd, BiExpand } from 'react-icons/bi';
import { addToCart } from '@/lib/features/cart/cartSlice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ProductListItem = ({ product }: { product: ProductProps }) => {
	const dispatch = useDispatch();

	return (
		<div className="grid grid-cols-6 shadow-md group">
			<Link
				className="w-full col-span-2 grid place-content-center bg-white"
				href={`/product/${product.slug.current}`}
			>
				<Image
					className="w-56 h-56 object-contain"
					src={urlForImage(product?.image)}
					alt="product image"
					width={500}
					height={500}
				/>
			</Link>
			<div className="col-span-3">
				<div className="p-4 flex flex-col gap-5 justify-center items-start">
					<h2 className="text-xl text-primeColor font-bold">
						{product?.title.length > 60
							? `${product.title.substring(0, 60)}...`
							: product?.title}
					</h2>
					<div className="w-full items-center flex justify-between">
						<div className="flex gap-2">
							<span className="text-xl text-gray-400 font-semibold line-through">
								{product?.rowprice}
							</span>
							<Price
								className="text-xl text-primeColor font-semibold "
								amount={product?.price}
							/>
						</div>
						<p className="text-primeColor leading-relaxed font-medium">
							Color: <span className="font-semibold">{product?.color}</span>
						</p>
						<Rating className="text-xl font-bold" rating={product?.ratings} />
					</div>
					<p className="text-gray-500 leading-relaxed">
						{product?.description?.length > 250
							? `${product?.description.substring(0, 250)}...`
							: `${product?.description}.`}
					</p>
				</div>
			</div>
			<div className="col-span-1 p-4 flex flex-col gap-8 justify-center items-center translate-x-[1000px] duration-300 transition-transform group-hover:-translate-x-0 ">
				<button
					onClick={() => {
						dispatch(addToCart(product));
						toast.success(
							`${product.title.substring(0, 15)} .. added to cart successfully!`
						);
					}}
					className="w-full py-2 px-4 rounded-md text-white bg-black bg-opacity-75 hover:bg-opacity-100 "
				>
					<div className="w-full flex gap-2 items-center justify-center">
						<BiCartAdd size={25} />
						<p className="text-base">Add to cart</p>
					</div>
				</button>

				<Link
					className="w-full py-2 px-4 rounded-md text-white bg-black bg-opacity-75 hover:bg-opacity-100 "
					href={`/product/${product.slug.current}`}
				>
					<div className="w-full flex gap-2 items-center justify-center">
						<BiExpand size={24} />
						<p className="text-base">View Details</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ProductListItem;
