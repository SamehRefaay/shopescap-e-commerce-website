'use client';
import Container from './Container';
import { ProductProps } from '@/lib/types';
import Product from './Product';
import Slider from 'react-slick';
import SliderLeftArrow from './SliderLeftArrow';
import SliderRightArrow from './SliderRightArrow';

interface Props {
	products: ProductProps[];
	title: string;
}

const NewArrivals = ({ products, title }: Props) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <SliderLeftArrow />,
		nextArrow: <SliderRightArrow />,
		responsive: [
			{
				breakpoint: 1366,
				settings: { slidesToShow: 4, slidesToScroll: 1 },
			},

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container className="-mt-48 z-20 relative">
			{/* <Heading className="mt-8" title={title} /> */}
			<Slider className="mt-10" {...settings}>
				{products.map(item => (
					<Product key={item._id} product={item} />
				))}
			</Slider>
		</Container>
	);
};

export default NewArrivals;
