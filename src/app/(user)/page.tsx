import Banner from '@/components/Banner';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import NewArrivals from '@/components/NewArrivals';
import Cover from '@/components/Cover';
import cover1 from '../../assets/banner1.jpg';
import cover2 from '../../assets/banner2.jpg';
import BestProducts from '@/components/BestProducts';
export const revalidate = 10;

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalsQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
	...
  } | order(_createdAt asc)`;

const bestSellersQuery = groq`*[_type == 'product'&& position == 'Bestsellers']{
	...
  } | order(_createdAt asc)`;

const specialOffersQuery = groq`*[_type == 'product'&& position == 'Special Offers']{
	...
  } | order(_createdAt asc)`;

export default async function Home() {
	const banners = await client.fetch(bannerQuery);
	const newArrivalProducts = await client.fetch(newArrivalsQuery);
	const bestSellersProducts = await client.fetch(bestSellersQuery);
	const specialOffersProducts = await client.fetch(specialOffersQuery);

	return (
		<main className="text-sm overflow-hidden min-h-screen">
			<Banner banners={banners} />
			<NewArrivals products={newArrivalProducts} title={'New Arrivals'} />
			<Cover image={cover1} />
			<BestProducts products={bestSellersProducts} title="Our BestSellers" />
			<Cover image={cover2} />
			<BestProducts products={specialOffersProducts} title="Special offers" />
		</main>
	);
}
