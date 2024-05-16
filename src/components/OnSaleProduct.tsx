import Link from 'next/link';
import React from 'react';
import { ProductProps } from '../lib/type';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import Price from './Price';
import { FaStar } from 'react-icons/fa';
import Rating from './Rating';

interface Props {
	product: ProductProps;
}

const OnSaleProduct = ({ product }: Props) => {
	return (
		<Link
			key={product._id}
			href={`/product/${product.slug.current}`}
			className="w-full border-b-[1px] border-b-gray-300 flex justify-center items-center"
		>
			<div className="relative w-full border bg-white flex flex-col">
				<Image
					className="w-24 h-24 mx-auto object-contain"
					src={urlForImage(product.image)}
					alt="product image"
					width={200}
					height={200}
				/>
				<div className="p-2 flex justify-between">
					<p className="text-sm font-semibold">
						{product.title.substring(0, 15)}
					</p>
					<Price className="text-sm font-semibold" amount={product?.price} />
				</div>
				<div className="absolute left-1 top-1">
					<Rating rating={product?.ratings} />
				</div>
			</div>
		</Link>
	);
};

export default OnSaleProduct;
