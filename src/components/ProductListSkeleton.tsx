import React from 'react';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';

const ProductListSkeleton = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{Array.from({ length: 6 }).map((_, index) => (
				<ProductLoadingSkeleton key={index} />
			))}
		</div>
	);
};

export default ProductListSkeleton;
