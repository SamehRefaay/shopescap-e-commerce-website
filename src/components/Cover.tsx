import Image, { StaticImageData } from 'next/image';

interface Props {
	image: StaticImageData;
}

const Cover = ({ image }: Props) => {
	return (
		<div className="mt-5 w-full h-64">
			<Image
				className={`w-full h-full object-scale-down md:object-cover`}
				src={image}
				alt="cover image"
			/>
		</div>
	);
};

export default Cover;
