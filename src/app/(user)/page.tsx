import Banner from '@/components/Banner';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import NewArrivals from '@/components/NewArrivals';
import Cover from '@/components/Cover';
import cover1 from '../../assets/banner1.jpg';
import cover2 from '../../assets/banner2.jpg';
import BestProducts from '@/components/BestProducts';
import SpecialProducts from '@/components/SpecialProducts';
export const revalidate = 10;

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalsQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
	...
  } | order(_createdAt asc)`;

export default async function Home() {
	const banners = await client.fetch(bannerQuery);
	const newArrivalProducts = await client.fetch(newArrivalsQuery);

	return (
		<main className="text-sm overflow-hidden min-h-screen">
			<Banner banners={banners} />
			<NewArrivals products={newArrivalProducts} title={'New Arrivals'} />
			<Cover image={cover1} />
			<BestProducts title="Our BestSellers" />
			<Cover image={cover2} />
			<SpecialProducts title="Special offers" />
		</main>
	);
}
