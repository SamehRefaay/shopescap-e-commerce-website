import Link from 'next/link';
import { ProductProps } from '../../type';
import Price from './Price';
import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';

interface Props {
	product: ProductProps;
}
interface Category {
	_id: string;
	title: string;
	description: string;
}

const ProductDescription = async ({ product }: Props) => {
	const getCategories = async (ids: string[]) => {
		let categories: Category[] = [];
		const query = groq`*[_type=='category']{
            _id,title,description
        }`;
		const allCategories: Category[] = await client.fetch(query);

		ids.map(id => {
			allCategories.map(category => {
				if (category._id === id) categories.push(category);
			});
		});
		return categories;
	};

	const categoriesIds = product.category.map(category => category._ref);

	const categories = await getCategories(categoriesIds);

	return (
		<div className="p-4 flex flex-col gap-5 justify-center items-start">
			<h2 className="text-2xl text-primeColor font-bold ">{product?.title}</h2>
			<Price
				className="text-2xl text-primeColor font-semibold "
				amount={product?.price}
			/>
			<p className="text-gray-500 leading-relaxed">
				{product?.description.substring(0, 250)}
			</p>
			<Link href={'#'}>
				<p className="text-primeColor font-medium">
					Be the first to leave review
				</p>
			</Link>
			<p className="text-primeColor leading-relaxed font-medium">
				Color: <span className="font-semibold">{product?.color}</span>
			</p>
			<button className="w-full bg-primeColor text-white text-2xl py-2 px-4 rounded-md">
				Add to Cart
			</button>
			<div className="flex  gap-1 text-primeColor leading-relaxed font-medium">
				<span>Categories:</span>
				<div className="flex gap-1">
					{categories.map(category => (
						<span key={category?._id} className="font-semibold">
							{category?.title} <small>{`>`}</small>
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
