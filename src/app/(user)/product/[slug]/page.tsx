import { groq } from 'next-sanity';
import { client } from '../../../../../sanity/lib/client';
import { ProductProps } from '../../../../../type';
import Image from 'next/image';
import { urlForImage } from '../../../../../sanity/lib/image';
import Container from '@/components/Container';
import ProductDescription from '@/components/ProductDescription';
import { PortableText } from '@portabletext/react';
import { RichText } from '@/components/RichText';
import OnSaleProduct from '@/components/OnSaleProduct';

interface Props {
	params: {
		slug: string;
	};
}

export const generateStaticParams = async () => {
	const query = groq`*[_type=='product']{
        slug
    }`;
	const slugs = await client.fetch(query);
	return slugs.map((slug: { slug: { current: string } }) => ({
		slug: slug?.slug?.current,
	}));
};

const ProductDetails = async ({ params: { slug } }: Props) => {
	const query = groq`*[_type=='product' && slug.current ==$slug][0]
    {
        ...
    }`;
	const onSaleProductsQuery = groq`*[_type=='product' && position =='Special Offers']
    {
        ...
    }| order(_createdAt desc)`;

	const product: ProductProps = await client.fetch(query, { slug });
	const onSaleProducts: ProductProps[] = await client.fetch(
		onSaleProductsQuery
	);

	return (
		<Container>
			<div className="mt-10 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 bg-gray-100">
				{/* On Sale Products */}
				<div className="w-full flex flex-col items-center justify-between gap-2">
					<h2 className="text-2xl underline font-bold">Product on sale</h2>
					{onSaleProducts.slice(0, 4).map(item => (
						<OnSaleProduct key={item._id} product={item} />
					))}
				</div>
				{/* Main Product image*/}
				<div className="col-span-2 grid place-content-center bg-white">
					<Image
						className="w-[500px] h-[500px] object-contain"
						src={urlForImage(product.image)}
						alt="product image"
						width={700}
						height={700}
					/>
				</div>
				{/* Product description */}
				<div className="col-span-3">
					<ProductDescription product={product} />
				</div>
			</div>
			<PortableText value={product?.body} components={RichText} />
		</Container>
	);
};

export default ProductDetails;
