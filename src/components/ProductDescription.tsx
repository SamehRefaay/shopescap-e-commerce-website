import Link from 'next/link';
import { ProductProps } from '../../type';
import Price from './Price';
import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import Rating from './Rating';

interface Props {
	product: ProductProps;
}
interface Category {
	_id: string;
	title: string;
	description: string;
}

const query = groq`*[_type=='category']{
	_id,title,description
}`;

const ProductDescription = async ({ product }: Props) => {
	const getCategories = async (ids: string[]) => {
		let categories: Category[] = [];
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
			<h2 className="text-2xl text-primeColor font-bold">{product?.title}</h2>
			<div className="w-full items-center flex justify-between">
				<Price
					className="text-2xl text-primeColor font-semibold "
					amount={product?.price}
				/>
				<Rating className="text-xl font-bold" rating={product?.ratings} />
			</div>
			<p className="text-gray-500 leading-relaxed">
				{product?.description?.substring(0, 500)}
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
			<div className="flex gap-1 text-primeColor leading-relaxed font-medium">
				<span>Categories:</span>
				<div className="flex ">
					{categories.map((category, index) => (
						<div key={category?._id} className="flex">
							<span className="font-medium text-gray-500">
								{category?.title}
							</span>
							{index !== categories.length - 1 && (
								<span className="ml-1 mr-1 font-medium text-gray-500">
									{'>'}
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
