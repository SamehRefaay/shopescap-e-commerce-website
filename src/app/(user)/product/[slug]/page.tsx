import { groq } from 'next-sanity';
import { client } from '../../../../../sanity/lib/client';
import { ProductProps } from '../../../../../type';
import Image from 'next/image';
import { urlForImage } from '../../../../../sanity/lib/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Price from '@/components/Price';
import ProductDescription from '@/components/ProductDescription';
import { PortableText } from '@portabletext/react';
import { RichText } from '@/components/RichText';

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
			<div className="mt-10 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 bg-gray-100">
				<div className="w-full flex flex-col items-center justify-between gap-4">
					<h2 className="text-2xl underline font-bold">Product on sale</h2>
					{onSaleProducts.slice(0, 4).map(item => (
						<Link
							key={item._id}
							href={`/product/${item.slug.current}`}
							className="w-full border-b-[1px] border-b-gray-300 flex justify-center items-center"
						>
							<div className="w-full flex justify-center gap-2 items-center">
								<Image
									className="w-[90px] h-[90px] object-contain"
									src={urlForImage(item.image)}
									alt="product image"
									width={200}
									height={200}
								/>
								<div>
									<p className="text-sm font-semibold">
										{item.title.substring(0, 9)}
									</p>
									<Price
										className="text-sm font-semibold"
										amount={item?.price}
									/>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className="col-span-2 grid place-content-center">
					<Image
						className="w-[400px] h-[400px] object-contain"
						src={urlForImage(product.image)}
						alt="product image"
						width={700}
						height={700}
					/>
				</div>
				<div className="col-span-3">
					<ProductDescription product={product} />
				</div>
			</div>
			<PortableText value={product?.body} components={RichText} />
		</Container>
	);
};

export default ProductDetails;
