import Banner from '@/components/Banner';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { revalidatePath } from 'next/cache';
import { cache } from 'react';

// const bannerQuery = groq`*[_type == 'banner']{
// 	image,
// 	_id
// }| order(_createdAt asc)`;

export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

export default async function Home() {
	const banners = await client.fetch(bannerQuery);

	return (
		<main className="text-sm overflow-hidden min-h-screen">
			<Banner banners={banners} />
		</main>
	);
}
