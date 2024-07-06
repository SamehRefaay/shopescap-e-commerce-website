import React, { Suspense } from 'react';
import Container from './Container';
import { ProductProps } from '@/lib/types';
import Product from './Product';
import Heading from './Heading';
import ProductListSkeleton from './ProductListSkeleton';
import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';

interface Props {
	title: string;
}

const specialOffersQuery = groq`*[_type == 'product'&& position == 'Special Offers']{
	...
  } | order(_createdAt asc)`;

const SpecialProducts = async ({ title }: Props) => {
	const products: ProductProps[] = await client.fetch(specialOffersQuery);
	return (
		<Container className="mt-5">
			<Heading title={title} />
			{products ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{products.map(item => (
						<Product key={item._id} product={item} />
					))}
				</div>
			) : (
				<Suspense fallback={<ProductListSkeleton />}></Suspense>
			)}
		</Container>
	);
};

export default SpecialProducts;
