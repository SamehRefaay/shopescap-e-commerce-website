import Container from '@/components/Container';
import { ProductProps } from '@/lib/types';
import { client } from '../../../../sanity/lib/client';
import { groq } from 'next-sanity';
import ShopPageContent from '@/components/ShopPageContent';

const allProductsQuery = groq`*[_type == 'product']{
	...
  } | order(_createdAt desc)`;

const ShopPage = async () => {
	const products: ProductProps[] = await client.fetch(allProductsQuery);

	return (
		<Container>
			<ShopPageContent products={products} />
		</Container>
	);
};

export default ShopPage;
