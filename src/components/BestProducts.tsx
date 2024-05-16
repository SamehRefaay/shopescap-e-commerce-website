import React from 'react';
import Container from './Container';
import { ProductProps } from '@/lib/types';
import Product from './Product';
import Heading from './Heading';

interface Props {
	products: ProductProps[];
	title: string;
}

const BestProducts = ({ products, title }: Props) => {
	return (
		<Container className="mt-5">
			<Heading title={title} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{products.map(item => (
					<Product key={item._id} product={item} />
				))}
			</div>
		</Container>
	);
};

export default BestProducts;
