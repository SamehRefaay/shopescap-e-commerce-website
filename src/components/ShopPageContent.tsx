'use client';
import React from 'react';
import { ProductProps } from '../lib/type';
import { useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { ImList } from 'react-icons/im';
import Product from './Product';
import ProductListItem from './ProductListItem';

const ShopPageContent = ({ products }: { products: ProductProps[] }) => {
	const [showGrid, setShowGrid] = useState(true);
	const [showList, setShowList] = useState(false);
	return (
		<div>
			<div className="mt-10 flex justify-between text-primeColor">
				<h2 className="text-2xl font-bold">All Products</h2>
				<div className="flex gap-4">
					<span
						onClick={() => {
							setShowGrid(true);
							setShowList(false);
						}}
						className={`${
							showGrid
								? 'bg-primeColor text-white'
								: 'bg-white text-primeColor border-[1px] border-primeColor'
						} "w-8 h-8 p-2 cursor-pointer "`}
					>
						<BsGridFill />
					</span>
					<span
						onClick={() => {
							setShowGrid(false);
							setShowList(true);
						}}
						className={`${
							showList
								? 'bg-primeColor text-white'
								: 'bg-white text-primeColor border-[1px] border-primeColor'
						} "w-8 h-8 p-2 cursor-pointer "`}
					>
						<ImList />
					</span>
				</div>
			</div>
			{showGrid ? (
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{products.map(product => (
						<Product key={product._id} product={product} />
					))}
				</div>
			) : (
				<div className="mt-10 grid grid-cols-1 gap-5">
					{products.map(product => (
						<ProductListItem key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};
export default ShopPageContent;
