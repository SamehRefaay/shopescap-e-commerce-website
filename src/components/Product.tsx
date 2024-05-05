import React from 'react';
import { ProductProps } from '../../type';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import MarkLabel from './MarkLabel';
import { BiCartAdd, BiExpand } from 'react-icons/bi';

const Product = ({ product }: { product: ProductProps }) => {
	return (
		<div className="bg-white shadow-2xl m-2 p-4 cursor-pointer group">
			<div className="relative flex flex-col justify-center items-center gap-5">
				<div className="relative overflow-hidden">
					<Image
						src={urlForImage(product?.image)}
						alt="product image"
						width={700}
						height={700}
						className="w-72 h-72 object-contain"
					/>
					{product.isnew && (
						<div className="absolute top-0 left-0">
							<MarkLabel
								title="New"
								backgroundColor="bg-black"
								animation="animate-ping"
							/>
						</div>
					)}
					{product.position === 'Bestsellers' && (
						<div className="absolute top-0 right-0">
							<MarkLabel title="Best Seller" backgroundColor="bg-orange-500" />
						</div>
					)}
					<div className="absolute bottom-0 left-0 w-full flex justify-between items-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300  ">
						<button className=" py-2 px-4 rounded-md text-white bg-black bg-opacity-75 hover:bg-opacity-100">
							<div className="flex gap-1">
								<BiCartAdd size={20} />
								<p>Add to cart</p>
							</div>
						</button>
						<button className=" py-2 px-4 rounded-md text-white bg-black bg-opacity-75 hover:bg-opacity-100">
							<div className="flex gap-1">
								<BiExpand size={20} />
								<p>View Details</p>
							</div>
						</button>
					</div>
				</div>
				<div className="w-full py-4 border-t-2 border-[#CCC]">
					<div className="w-full flex items-center justify-between">
						<p className="text-base font-medium">
							{product?.title.substring(0, 25)}
						</p>
						<div className="flex gap-1">
							{product.rowprice && (
								<span className="text-base text-[#767676] font-normal line-through">
									${product.rowprice.toFixed(2)}
								</span>
							)}
						</div>
					</div>
					<div className="w-full flex items-center justify-between">
						<p>{product?.color}</p>
						{product.price && (
							<span className="text-base text-primeColor font-medium">
								${product.price.toFixed(2)}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
