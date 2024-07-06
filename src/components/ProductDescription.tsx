'use client';
import Link from 'next/link';
import { Category, ProductProps } from '@/lib/types';
import Price from './Price';
import Rating from './Rating';
import toast from 'react-hot-toast';
import { addToCart } from '@/lib/features/cart/cartSlice';
import { useDispatch } from 'react-redux';

interface Props {
	product: ProductProps;
	categories: Category[];
}

const ProductDescription = ({ product, categories }: Props) => {
	const dispatch = useDispatch();

	return (
		<div className="p-4 flex flex-col gap-5 justify-center items-start">
			<h2 className="text-2xl text-primeColor font-bold">{product?.title}</h2>
			<div className="w-full items-center flex justify-between">
				<Price
					className="text-2xl text-primeColor font-semibold "
					amount={product?.price}
				/>
				<Rating className="text-xl font-bold" rating={product?.ratings} />
			</div>
			<p className="text-gray-500 leading-relaxed">
				{product?.description?.substring(0, 500)}
			</p>
			<Link href={'#'}>
				<p className="text-primeColor font-medium">
					Be the first to leave review
				</p>
			</Link>
			<p className="text-primeColor leading-relaxed font-medium">
				Color: <span className="font-semibold">{product?.color}</span>
			</p>
			<button
				onClick={() => {
					dispatch(addToCart(product));
					toast.success(
						`${product.title.substring(0, 15)} .. added to cart successfully!`
					);
				}}
				className="w-full bg-primeColor text-white text-2xl py-2 px-4 rounded-md"
			>
				Add to Cart
			</button>
			<div className="flex gap-1 text-primeColor leading-relaxed font-medium">
				<span>Categories:</span>
				<div className="flex ">
					{categories.map((category, index) => (
						<div key={category?._id} className="flex">
							<span className="font-medium text-gray-500">
								{category?.title}
							</span>
							{index !== categories.length - 1 && (
								<span className="ml-1 mr-1 font-medium text-gray-500">
									{'>'}
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
